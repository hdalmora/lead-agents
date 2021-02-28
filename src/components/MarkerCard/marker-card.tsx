import React, { useContext } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IconContext } from "react-icons";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from '@material-ui/core/Checkbox';

import { 
    Container, 
    LeftContainer, 
    Column, 
    TitleContainer, 
    SubTextContainer, 
    DeleteIconContainer, 
    Row, 
    ClientCheckContainer 
} from './styles';
import CustomRoundButton from '../CustomRoundButton/custom-round-button';
import { LeadStoreCtx } from '../../stores/lead-store';
import { SnackbarStoreCtx } from '../../stores/snackbar-store';

type MarkerCardProps = {
    id?: string,
    name: string,
    address: string,
    lat: number,
    lng: number,
    isClient: boolean,
    color: string
}

const MarkerCard = ({id, name, address, lat, lng, color, isClient}: MarkerCardProps) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const leadStore = useContext(LeadStoreCtx);
    const snackbarStore = useContext(SnackbarStoreCtx);

    const handleUpdateClientType = async () => {
        const updated = await leadStore.updateLead({
            id,
            name,
            address,
            lat,
            lng,
            isClient: !isClient
        });

        if(updated) {
            snackbarStore.show(
                `Este Pin agora é um ${!isClient ? 'Cliente' : 'Lead'}!`,
                'success',
                6000,
            );
        } else {
            snackbarStore.show(
                'Ocorreu um erro ao alterar este Pin. Por favor, tente novamente.',
                'error',
                6000,
            );
        }
    };

    const handleDeletePin = async () => {
        const deleted = await leadStore.deleteLead(id!);

        if(deleted) {
            handleClose();

            snackbarStore.show(
                'O Pin foi deletado com sucesso!',
                'success',
                6000,
            );
        } else {
            snackbarStore.show(
                'Ocorreu um erro ao deletar este Pin. Por favor, tente novamente.',
                'error',
                6000,
            );
        }
    }

    return (
        <Container>
            <LeftContainer style={{ backgroundColor: color }} />

            <Column>
                <Row>
                    <div>
                        <TitleContainer>
                            {name ?? ''}
                        </TitleContainer>

                        <SubTextContainer>
                            {address ?? ''}
                        </SubTextContainer>
                    </div>

                    <ClientCheckContainer>
                        <SubTextContainer>
                            É cliente?
                        </SubTextContainer>

                        <Checkbox
                            checked={isClient}
                            onChange={handleUpdateClientType}
                            color="primary"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </ClientCheckContainer>
                </Row>

                <Row>
                    <CustomRoundButton>
                        Nova Tarefa
                    </CustomRoundButton>

                    <DeleteIconContainer onClick={handleClickOpen}>
                        <IconContext.Provider value={{ size: '1.5rem' }}>
                            <RiDeleteBin6Line />
                        </IconContext.Provider>
                    </DeleteIconContainer>
                </Row>
            </Column>

                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Deletar Pin</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Você tem certeza que deseja deletar o Pin "{name}" ?.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Não
                    </Button>
                    <Button onClick={handleDeletePin} color="primary">
                        Deletar
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}
  
export default MarkerCard;