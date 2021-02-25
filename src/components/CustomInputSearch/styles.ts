import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    
    width: 100%;
    max-width: 800px;
    height: 50px;
    padding: 10px;
    border-radius: 8px;

    background: var(--white);
    margin: 0 auto;

    margin-bottom: 26px;

    input {
        width: 100%;
        border: none;

        &:focus {
            outline: none;
        }
    }

    &:hover {
        box-shadow: 0px 2px 14px var(--text);
        transition: box-shadow 0.3s linear;
    }
`;

export const SearchIconContainer = styled.div`
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 3px;

    width: 40px;
    height: 40px;
`;
