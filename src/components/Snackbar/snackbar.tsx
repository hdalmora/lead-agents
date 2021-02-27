import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import MuiSnackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { SnackbarStoreCtx } from '../../stores/snackbar-store';
import { Container } from './styles';

const Snackbar = () => {

    const snackbarStore = useContext(SnackbarStoreCtx);
    
    return (
        <Container>
            <MuiSnackbar
                open={snackbarStore.data.active}
                autoHideDuration={snackbarStore.data.timeout}
                onClose={() => snackbarStore.hide()}
                onClick={() => snackbarStore.hide()}
            >
                <Alert severity={snackbarStore.data.severity} onClose={() => snackbarStore.hide()}>
                    {snackbarStore.data.message}
                </Alert>
            </MuiSnackbar>
        </Container>

    );
}
  
export default observer(Snackbar);