import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import LeadItem from '../../components/LeadItem/leaditem';
import { LeadStoreCtx } from '../../stores/LeadStore';

export const LeadList = () => {

    const leadStore = useContext(LeadStoreCtx);

    return (
        <>
            {
                leadStore.filteredList.map(
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