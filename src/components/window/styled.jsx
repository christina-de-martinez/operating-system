import styled from 'styled-components';

export const WindowContainer = styled.div`
    border: 3px solid #F76484;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #f1f1f1;
`;

export const WindowTopBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    background-color: #FCB0BE;
`;

export const WindowControlButton = styled.button`
    margin: 4px 2px;
    height: 22px;
    width: 22px;
    padding: 4px;
    background-color: #F76484;
    border: 0;
    color: #f1f1f1;
    &:nth-child(2) {
        margin-right: 6px;
    }
`;