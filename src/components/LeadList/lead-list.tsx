import React, { useContext, useEffect } from 'react';
import { observer } from "mobx-react-lite";
import LeadItem from '../../components/LeadItem/leaditem';
import { LeadStoreCtx } from '../../stores/LeadStore';
import { SnackbarStoreCtx } from '../../stores/snackbarStore';

export const LeadList = () => {

    const leadStore = useContext(LeadStoreCtx);
    const snackbarStore = useContext(SnackbarStoreCtx);

    useEffect(() => {
        leadStore.getLeads().then((success: boolean) => {
            if(!success) {
                snackbarStore.show(
                    'Ocorreu um erro durante a requisição. Por favor, tente novamente.',
                    'error',
                    6000,
                );
            }
        });
    }, [leadStore, snackbarStore]);

    return (
        <>
            {
                leadStore.filteredList.length > 0 ? leadStore.filteredList.map(
                    lead => (
                        <LeadItem 
                            key={lead.id} 
                            id={lead.id!} 
                            name={lead.name} 
                            address={lead.address} 
                            isClient={lead.isClient}
                        />
                    )
                ) : leadStore.leads.map(
                    lead => (
                        <LeadItem 
                            key={lead.id} 
                            id={lead.id!} 
                            name={lead.name} 
                            address={lead.address} 
                            isClient={lead.isClient}
                        />
                    )
                )
            }
        </>
    );
}
  
export default observer(LeadList);