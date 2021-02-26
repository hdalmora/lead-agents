import styled from 'styled-components';

export const MapContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 8px;
    padding-left: 63px;
    padding-bottom: 12px;

    z-index: -1;
    
    @media(max-width: 1070px) {
        padding-bottom: 75px;
        padding-left: 8px;
    }
`;

