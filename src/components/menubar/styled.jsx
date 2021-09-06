import styled from 'styled-components';

export const Bar = styled.div`
    width: 100%;
    background-color: #f1f1f1;
    z-index: 1;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-height: 40px;
`;

export const MenuIcon = styled.button`
    margin: 2px 6px;
    color: #444444;
    border: 0px transparent;
    padding: 0;
    font-size: 20px;
    background-color: transparent;
`;

export const MenuLeft = styled.div`
    max-width: 300px;
    margin-left: 10px;
`;

export const MenuRight = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-right: 4px;
`;

export const DateTimeText = styled.p`
    color: #444444;
    margin: 0 6px;
`;