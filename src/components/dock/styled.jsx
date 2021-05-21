import styled from 'styled-components';

export const DockContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    position: fixed;
    bottom: 0;
    z-index: 1;
    margin-bottom: 6px;
`;

export const DockParent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
    width: 90%;
    border: 2px solid #000;
    padding: 8px;
`;

export const AppIcon = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #736F72;
    width: 60px;
    height: 60px;
    font-size: 30px;
    margin: 0 3px;
    color: #fff;
    &:first-child {
        background-color: #9CE4FC;
    }
    &:nth-child(2),
    &:nth-child(7) {
        background-color: #C5A8F0;
    }
    &:nth-child(3) {
        background-color: #FFC299;
    }
    &:nth-child(4) {
        background-color: #CAE3A0;
    }
    &:nth-child(5) {
        background-color: #FFF192;
    }
    &:nth-child(6) {
        background-color: #FCB0BE;
    }
`;