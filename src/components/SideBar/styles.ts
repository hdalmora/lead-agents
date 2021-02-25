import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    height: 100vh;
    width: 56px;

    box-shadow: 8px 6px 8px var(--shadow);
    box-sizing: border-box;
    background: var(--white);

    text-align: left;
    position: fixed;
    left: 0;

    z-index: 1502;
    
    @media(max-width: 1070px) {
        position: fixed;

        flex-direction: row;
        justify-content: center;

        height: 68px;
        width: 100vw;

        box-shadow: 8px -6px 8px var(--shadow);

        bottom: 0px;
        left: 0px;
        margin-bottom: 0px;
    }
`;

export const ActionsContainer = styled.div`
    margin-top: 64px;

    @media(max-width: 1070px) {
        margin-top: 0px;

        display: flex;
        flex-direction: row;
    }
`;

export const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 56px;
    height: 56px;
    margin-bottom: 54px;
    cursor: pointer;

    @media(max-width: 1070px) {
        margin-right: 54px;
    }
`;