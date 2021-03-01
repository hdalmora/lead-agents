import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { IoMapSharp } from 'react-icons/io5';
import { MdViewList } from 'react-icons/md';
import { IconContext } from "react-icons";
import { Container, ActionsContainer, ItemContainer } from './styles';
import { LeadStoreCtx } from '../../stores/lead-store';

const SideBar = () => {
    const location = useLocation();

    const leadStore = useContext(LeadStoreCtx);

    const handleMapIconClick = () => {
        leadStore.setMapCenter({ lat: -23.210801, lng: -46.857105 })
        leadStore.setLeadMarkerSelected('');
    }
    
    return (
        <Container>
            <ActionsContainer>
                <Link to='/leads'>
                    <ItemContainer>
                        <IconContext.Provider value={{ color: ['', '/', '/leads'].includes(location.pathname) ? 'green' : 'gray', size: '2.5rem' }}>
                            <MdViewList />
                        </IconContext.Provider>
                    </ItemContainer>
                </Link>

                <div onClick={handleMapIconClick}>
                    <Link to='/map'>
                        <ItemContainer>
                            <IconContext.Provider value={{ color: ['/map'].includes(location.pathname) ? 'green' : 'gray', size: '2.5rem' }}>
                                <IoMapSharp />
                            </IconContext.Provider>
                        </ItemContainer>
                    </Link>
                </div>
            </ActionsContainer>
        </Container>
    );
}
  
export default SideBar;