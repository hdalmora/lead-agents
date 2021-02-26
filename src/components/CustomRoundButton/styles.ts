import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 32px;
    background-color: var(--white);

    width: 110px;
    padding: 7px 0px;
    text-align: center;
    padding-top: 9px;

    font-weight: 600;
    font-size: 0.8rem;
    color: var(--text);

    border: 1px solid var(--shadow);

    cursor: pointer;

    &:hover {
        background-color: var(--green-main-stone);
        color: var(--white);

        border: 1px solid transparent;
        transition: all 0.3s linear;
    }

    &:focus {
        outline: none;
    }
`;

