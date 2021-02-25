import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { BiSearchAlt2 } from 'react-icons/bi';
import { IconContext } from "react-icons";
import { Container, SearchIconContainer } from './styles';
import { LeadStoreCtx } from '../../stores/LeadStore';

export const CustomInputSearch = () => {

    const leadStore = useContext(LeadStoreCtx);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        leadStore.setSearchText(e.target.value);
        leadStore.setFilteredListSearch();
    }

    return (
        <Container>
            <SearchIconContainer>
                <IconContext.Provider value={{ size: '1.5rem' }}>
                    <BiSearchAlt2 />
                </IconContext.Provider>
            </SearchIconContainer>

            <input value={leadStore.searchText} placeholder='Nome ou endereço' onChange={handleChangeInput}/>
        </Container>
    );
}
  
export default observer(CustomInputSearch);