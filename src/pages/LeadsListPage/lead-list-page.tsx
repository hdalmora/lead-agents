import React from 'react';
import { observer } from "mobx-react-lite";
import CustomInputSearch from '../../components/CustomInputSearch/custom-input-search';
import LeadList from '../../components/LeadList/lead-list';
import FilterButton from '../../components/FilterButton/filter-button';
import { Container } from './styles';

const LeadListPage = () => {

    return (
        <Container>
            <CustomInputSearch />
            <LeadList />

            <FilterButton />
        </Container>
    );
}
  
export default observer(LeadListPage);