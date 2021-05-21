import React from 'react';
import { GameContainer, GameTitle, MinesweeperContainer } from './styled';

var shuffledArray = [];
var gameIsOver = false;

function buildSquares() {
    var amountOfBombs = 20;

    const bombsArray = Array(amountOfBombs).fill('bomb');
    const emptyArray = Array(100 - amountOfBombs).fill('empty');
    const allSquaresArray = emptyArray.concat(bombsArray);
    shuffledArray = allSquaresArray.sort(() => Math.random() - 0.5);
}

function handleSquareClick(buttonType, index) {
    !gameIsOver && (buttonType === 'bomb' ? handleBombClick(index) : handleEmptyClick(index));
}

function handleBombClick(index) {
    console.log('boom');
    gameIsOver = true;
    // add an end game state. maybe turn gameIsOver into a piece of state to do this
    // add a way to restart the game
}

function handleEmptyClick(index) {
    var numberOfNeighboringBombs = 0;

    const isOnLeftEdge = (index % 10 === 0);
    const isOnRightEdge = (index % 10 === 9);
    const isOnTopEdge = (index < 10);
    const isOnBottomEdge = (index > 89);

    // element to the east
    !isOnRightEdge 
        && document.getElementById(index + 1).classList.contains('bomb') 
        && numberOfNeighboringBombs++;
    // element to the southeast
    !isOnRightEdge 
        && !isOnBottomEdge 
        && document.getElementById(index + 11).classList.contains('bomb') 
        && numberOfNeighboringBombs++;
    // element to the south
    !isOnBottomEdge 
        && document.getElementById(index + 10).classList.contains('bomb') 
        && numberOfNeighboringBombs++;
    // element to the southwest
    !isOnLeftEdge 
        && !isOnBottomEdge 
        && index <= 89 
        && document.getElementById(index + 9).classList.contains('bomb') 
        && numberOfNeighboringBombs++;
    // element to the west
    !isOnLeftEdge 
        && document.getElementById(index - 1).classList.contains('bomb') 
        && numberOfNeighboringBombs++;
    // element to the northwest
    !isOnTopEdge 
        && !isOnLeftEdge 
        && document.getElementById(index - 11).classList.contains('bomb') 
        && numberOfNeighboringBombs++;
    // element to the north
    !isOnTopEdge 
        && document.getElementById(index - 10).classList.contains('bomb') 
        && numberOfNeighboringBombs++;

    document.getElementById(index).innerHTML = numberOfNeighboringBombs;
}

function Minesweeper() {
    return (
        <GameContainer>
            <GameTitle>Minesweeper</GameTitle>
            <MinesweeperContainer>
                {buildSquares()}
                {shuffledArray.map((item, index) => {
                    let square = React.createElement('button', {'key': index, 'id': index, 'className': `minesquare ${item}`, 'onClick': (() => handleSquareClick(item, index))}, item);
                    return square;
                })}
            </MinesweeperContainer>
        </GameContainer>
    )
}

export default Minesweeper;