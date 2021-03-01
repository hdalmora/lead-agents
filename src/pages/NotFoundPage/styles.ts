import styled from 'styled-components';

export const Container = styled.div`
    background: var(--white);
    border-radius: 8px;

    padding: 25px;
    margin: 8px;
    margin-top: 80px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: 700px) {
        margin-top: 5px;
    }

    span {
        margin-top: 3rem;
        font-size: 3rem;
    }
`;

export const MainTitle = styled.div`
    font-weight: 600;
    font-size: 3rem;
`;

export const Title = styled.div`
    font-size: 2.5rem;
    margin-top: 3rem;
    text-align: center;
`;