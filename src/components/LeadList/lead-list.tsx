import React, { useContext } from 'react';
import { observer } from "mobx-react-lite"
import LeadItem from '../../components/LeadItem/leaditem';
import LeadStore from '../../stores/LeadStore';

const LeadList = () => {

    const leadStore = useContext(LeadStore);

    return (
        <div>
            {
                leadStore.leads.map(
                    (lead, index) => (
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
        </div>
    );
}
  
export default observer(LeadList);