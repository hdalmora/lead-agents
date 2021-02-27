import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { LeadStoreCtx } from '../../stores/lead-store';
import { SnackbarStoreCtx } from '../../stores/snackbar-store';
import { NewLeadFormStoreCtx } from '../../stores/new-lead-form-store';
import { Container } from './styles';
import { Lead } from '../../stores/lead-store';
import { CreateLeadResponse } from '../../stores/new-lead-form-store';

const NewLeadForm = () => {

    const newLeadFormStore = useContext(NewLeadFormStoreCtx);
    const snackbarStore = useContext(SnackbarStoreCtx);
    const leadStore = useContext(LeadStoreCtx);

    const handleClose = () => {
        newLeadFormStore.closeForm();
    }

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        newLeadFormStore.changeName(event.target.value);
    }

    const handleChangeaddress = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        newLeadFormStore.changeAddress(event.target.value);
    }

    const handleChangeIsClient = (event: React.ChangeEvent<HTMLInputElement>) => {
        newLeadFormStore.changeIsClient(event.target.checked);
    }

    const addLeadLocally = (newLead: Lead) => {
        leadStore.createLead(newLead);
    }

    const handleCreateNewLead = async () => {
       const response: CreateLeadResponse = await newLeadFormStore.createNewLead();

       if(response.newLead) {

        addLeadLocally(response.newLead);
        newLeadFormStore.closeForm();
        snackbarStore.show(
            response.message,
            'success',
            6000,
        );
       } else {
        snackbarStore.show(
            response.message,
            'error',
            6000,
        );
       }
    }
    
    return (
        <Container>
            <Dialog open={newLeadFormStore.isFormOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Criar novo Lead ou Cliente</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Insira as informações do novo Lead ou Cliente. Os dados de localização já foram carregados.
                </DialogContentText>
                <TextField
                    margin="dense"
                    id="name"
                    label="Nome do Lead/Cliente"
                    type="text"
                    fullWidth
                    onChange={handleChangeName}
                />

                <TextField
                    margin="dense"
                    id="address"
                    label="Endereço"
                    type="text"
                    fullWidth
                    onChange={handleChangeaddress}
                />

                <FormControlLabel
                    value="start"
                    control={<Switch onChange={handleChangeIsClient} color="primary" />}
                    label="É Cliente?"
                    labelPlacement="start"
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancelar
                </Button>
                <Button onClick={handleCreateNewLead} color="primary">
                    Criar
                </Button>
                </DialogActions>
            </Dialog>
        </Container>

    );
}
  
export default observer(NewLeadForm);