import React, { useContext, useEffect } from 'react';
import { observer } from "mobx-react-lite";
import LeadItem from '../../components/LeadItem/leaditem';
import { LeadStoreCtx } from '../../stores/lead-store';
import { SnackbarStoreCtx } from '../../stores/snackbar-store';

export const LeadList = () => {

    const leadStore = useContext(LeadStoreCtx);

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