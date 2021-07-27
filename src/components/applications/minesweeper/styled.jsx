import styled from 'styled-components';

export const GameContainer = styled.div`
    width: 100%;
    height: 95%;
    background-color: #f1f1f1;
    color: #F76484;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const GameTitle = styled.h1`
    font-size: 36px;
    font-family: 'VT323', monospace;
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
    border: 1px solid #F76484;
    box-sizing: border-box;
    width: 10%;
    height: 10%;
`;

export const GameOverModalContainer = styled.div`
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const GameOverModal = styled.div`
    width: 60%;
    height: 60%;
    padding: 30px;
    border: 3px solid #F76484;
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const GameOverEmojis = styled.h3`
    font-size: 50px;
    margin: 0;
`;

export const GameOverH1 = styled.h2`
    font-size: 45px;
    margin: 0;
    font-family: 'VT323', monospace;
    font-size: 62px;
`;

export const RestartButton = styled.button`
    padding: 6px 12px;
    background-color: #F76484;
    border-color: #f1f1f1;
    color: #fff;
    margin-top: 12px;
    font-family: 'VT323', monospace;
    font-size: 24px;
`;
