import React from 'react';
import { observer } from "mobx-react-lite";
import CustomInputSearch from '../../components/CustomInputSearch/custom-input-search';
import LeadList from '../../components/LeadList/lead-list';
import FilterButton from '../../components/FilterButton/filter-button';

const LeadListPage = () => {

    return (
        <div>
            <CustomInputSearch />
            <LeadList />

            <FilterButton />
        </div>
    );
}
  
export default observer(LeadListPage);