import styled from 'styled-components';

interface ContainerProps {
    isClient: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: var(--white);
    border-radius: 8px;

    padding: 25px;
    margin: 8px;
    margin-top: 80px;

    section {
        flex: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6.25rem;
        align-content: center;

        div:last-child {
            align-self: center;
        }
    }

    @media(max-width: 700px) {
        margin-top: 5px;
        margin-bottom: 35px;

        section {
            grid-template-columns: 1fr;
            gap: 0rem;
        }
    }
`;

export const TitleContainer = styled.div`
    margin-bottom: 15px;
`;

export const UpperLabel = styled.div<ContainerProps>`
    background:${props => props.isClient ? 'var(--green-main-stone)' : 'var(--blue-accent)'} ;
    border-radius: 32px;
    padding: 2px 8px 2px 8px;
    color: white;
    width: 56px;
    font-size: .85rem;
    margin-bottom: 20px;
`;