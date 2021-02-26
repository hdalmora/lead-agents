import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    width: 100%;
    max-width: 800px;
    height: 150px;
    padding: 10px;

    background: var(--white);
    margin: 0 auto;

    margin-bottom: 12px;

    cursor: pointer;

    &:hover {
        box-shadow: 0px 2px 14px var(--text);
        transition: box-shadow 0.3s linear;
    }
`;

export const TitleContainer = styled.p`
    color: var(--title);
    font-weight: 600;
`;

export const SubTextContainer = styled.p`
    color: var(--text);
    font-size: 0.8rem;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const LocationPinContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 40px;

    width: 36px;
    height: 36px;
    border: 1px solid var(--shadow);
    border-radius: 64px;

    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 8px var(--shadow);
        transition: box-shadow 0.3s linear;
    }

    @media(max-width: 850px) {
        margin-right: 15px;
    }
`;