import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;

    > img {
        width: 5.5rem;
        height: 5.5rem;
        border-radius: 50%;
        border: 1px solid #dcdde0;
    }

    div {
        margin-left: 1.5rem;
    }

    div stringo {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--title);
    }

    .emoji {
        margin-right: 3px;
    }

    div p {
        font-size: 1rem;
        margin-top: 0.5rem;
    }
`;

export const InfosContainer = styled.div`
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin: 3.5rem 0;
        padding-bottom: 1rem;
        border-bottom: 1px solid #d7d8da;

        font-weight: 500;

        span:first-child {
            font-size: 0.80rem
        }

        span:last-child {
            font-size: 0.85rem;
            font-weight: 600;
        }
    }
`;
