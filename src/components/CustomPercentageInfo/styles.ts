import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: var(--title);

    > div {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        background: var(--white);
        box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        font-size: 4.5rem;
        text-align: center;
    }

    > div span {
        flex: 1;
    }

    > div span:first-child {
        border-right: 1px solid #f0f1f3;
    }

    > span {
        font-size: 3rem;
        align-self: flex-end;
        margin-left: 0.5rem;
    }
`;
