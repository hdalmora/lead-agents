import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    bottom: 30px;
    left: 50%;
    margin-left: -250px;
    
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    
    width: 500px;
    height: 150px;

    border-radius: 8px;

    background: var(--white);

    @media(max-width: 1070px) {
        bottom: 80px;
    }

    @media(max-width: 630px) {
        width: 350px;
        margin-left: -175px;
    }

    @media(max-width: 580px) {
        width: 300px;
        margin-left: -150px;
    }

    @media(max-width: 520px) {
        width: 300px;
        margin-left: -180px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
`;

export const LeftContainer = styled.div`
    background: var(--green-main-stone);
    width: 8px;
    height: 150px;
    border-radius: 8px 0 0 8px;
    margin-right: 10px;
`;

export const TitleContainer = styled.p`
    color: var(--title);
    font-weight: 600;
`;

export const SubTextContainer = styled.p`
    color: var(--text);
    font-size: 0.8rem;
`;

export const DeleteIconContainer = styled.div`
    cursor: pointer;
    align-self: center;
    padding-right: 15px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%
`;

export const ClientCheckContainer = styled.div`
    text-align-last: center;
`;
