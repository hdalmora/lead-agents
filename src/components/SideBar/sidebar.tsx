import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { IoMapSharp } from 'react-icons/io5';
import { MdViewList } from 'react-icons/md';
import { IconContext } from "react-icons";
import { Container, ActionsContainer, ItemContainer } from './styles';

const SideBar = () => {
    const location = useLocation();
    
    return (
        <Container>
            <ActionsContainer>
                <Link to='leads'>
                    <ItemContainer>
                        <IconContext.Provider value={{ color: ['', '/', '/leads'].includes(location.pathname) ? 'green' : 'gray', size: '2.5rem' }}>
                            <MdViewList />
                        </IconContext.Provider>
                    </ItemContainer>
                </Link>

                <Link to='map'>
                    <ItemContainer>
                        <IconContext.Provider value={{ color: ['/map'].includes(location.pathname) ? 'green' : 'gray', size: '2.5rem' }}>
                            <IoMapSharp />
                        </IconContext.Provider>
                    </ItemContainer>
                </Link>
            </ActionsContainer>
        </Container>
    );
}
  
export default SideBar;