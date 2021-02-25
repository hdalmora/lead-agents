import React from 'react';
import { observer } from "mobx-react-lite";
import CustomInputSearch from '../../components/CustomInputSearch/custom-input-search';
import LeadList from '../../components/LeadList/lead-list';

const LeadListPage = () => {

    return (
        <div>
            <CustomInputSearch />
            <LeadList />
        </div>
    );
}
  
export default observer(LeadListPage);