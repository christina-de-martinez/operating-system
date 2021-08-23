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
    padding-bottom: 2px;
`;

export const AppIconAndDot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: #736F72;
    text-align: center;
    font-size: 8px;
    height: 74px;
    &first-child {
        background-color: hotpink;
    }
`;

export const Dot = styled.div`
    margin-top: 2px;
    width: 100%;
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
`;