import styled, { css } from 'styled-components';

interface ContainerProps {
    isActive: boolean;
}

interface FilterProps {
    isActive: boolean;
    isFilterSelected: boolean;
}

export const Container = styled.div<ContainerProps>`
    position: fixed;
    bottom: 15px;
    right: 35px;
    padding: 0px 0px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    width: 60px;
    height: 60px;

    border-radius: 8px;
    background: var(--gray-line-lighter);
    box-shadow: 0px 0px 8px var(--text);

    > div {
            display: flex;
            flex-direction: row;
        }

    transition: width 0.3s linear;

    ${props => props.isActive && css`
        width: 250px;

        > div {
            > div {
                margin-right: 20px;
            }
        }
    `}

    @media(max-width: 1070px) {
        bottom: 90px;
    }
`;

export const FilterContainer = styled.div<FilterProps>`
    width: 0px;
    opacity: 0;

    text-align: center;
    cursor: pointer;

    > p {
        font-size: 0.7rem;

        ${props => props.isFilterSelected && css`
            font-size: 1rem;
            font-weight: 600;
            text-decoration: overline;
        `}
    }

    transition: all 0.4s linear;

    ${props => props.isActive && css`
        width: 50px;
        opacity: 1;
    `}
`;

export const ClickFilter = styled.div`
    height: 60px;
    width: 60px;
    align-items: center;
    justify-content: center;
    z-index: 500;

    cursor: pointer;
`;