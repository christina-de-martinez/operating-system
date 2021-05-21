import styled from 'styled-components';

export const GameContainer = styled.div`
    width: 100%;
    height: 96%;
    background-color: #f1f1f1;
    color: hotpink;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const GameTitle = styled.h1`
    font-size: 30px;
`;

export const MinesweeperContainer = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
`;

export const MinesweeperSquare = styled.button`
    background-color: white;
    border: 1px solid hotpink;
    box-sizing: border-box;
    width: 10%;
    height: 10%;
`;
