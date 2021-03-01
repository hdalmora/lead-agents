import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    flex-direction: column;
    align-items: flex-start;
    font-weight: 600;
    color: var(--title);

    .send-proposition-btn {
        width: 100%;
        height: 4.5rem;
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        border-radius: 5px;
        background: var(--blue-accent);
        color: var(--white);

        font-size: 1.25rem;
        font-weight: 600;

        transition: background-color 0.2s;

        &:hover {
            background: var(--blue-dark);
        }

        &:focus {
            outline: none;
        }
    }

    > div {
        flex: 1;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-evenly;

        background: var(--white);
        box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        text-align: center;

        
        > div span {
            flex: 1;
        }

        span:first-child {
            font-size: 3rem;
        }

        span:last-child {
            font-size: 2rem;
        }

        @media(max-width: 500px) {
            span:first-child {
                font-size: 3rem;
            }

            span:last-child {
                font-size: 2rem;
            }
        }
    }
`;
