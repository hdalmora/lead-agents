import React, { useContext, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { observer } from "mobx-react-lite";
import { IoFilterOutline } from 'react-icons/io5';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Container, FilterContainer, ClickFilter } from './styles';
import { LeadStoreCtx } from '../../stores/LeadStore';

export const FilterButton = () => {

    const [isActive, setIsActive] = useState(false);

    const leadStore = useContext(LeadStoreCtx);

    const toggleFilterMenu = () => {
        setIsActive(!isActive);
    }

    const selectFilter = (filter: string) => {
        leadStore.selectFilter(filter);
    }

    return (
        <OutsideClickHandler
            onOutsideClick={() => {
                setIsActive(false);
            }}
        >
            <Container isActive={isActive} >
                
                <div>
                    <FilterContainer 
                        isActive={isActive} 
                        isFilterSelected={leadStore.filterSelected === 'leads'}
                        onClick={() => {
                            selectFilter('leads');
                        }}
                    >
                        <IconContext.Provider value={{ color: 'var(--blue-accent)', size: '1.7rem' }}>
                            <FaMapMarkerAlt />
                        </IconContext.Provider>

                        <p>
                            Leads
                        </p>
                    </FilterContainer>

                    <FilterContainer 
                        isActive={isActive} 
                        isFilterSelected={leadStore.filterSelected === 'clients'}
                        onClick={() => {
                            selectFilter('clients');
                        }}
                    >
                        <IconContext.Provider value={{ color: 'var(--green-main-stone)', size: '1.7rem' }}>
                            <FaMapMarkerAlt />
                        </IconContext.Provider>

                        <p>
                            Clientes
                        </p>
                    </FilterContainer>
                </div>

                <ClickFilter onClick={toggleFilterMenu}>
                    <IconContext.Provider value={{ size: '2rem' }}>
                        <IoFilterOutline />
                    </IconContext.Provider>
                </ClickFilter>
            </Container>
        </OutsideClickHandler>
    );
}
  
export default observer(FilterButton);