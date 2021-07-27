import React from 'react';
import { GameContainer, GameTitle, MinesweeperContainer, GameOverModalContainer, GameOverModal, GameOverEmojis, GameOverH1 } from './styled';

var shuffledArray = [];

class Minesweeper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameOver: false
        }
        this.buildSquares = this.buildSquares.bind(this);
        this.handleSquareClick = this.handleSquareClick.bind(this);
        this.handleBombClick = this.handleBombClick.bind(this);
        this.handleEmptyClick = this.handleEmptyClick.bind(this);
        this.checkSurroundingSquares = this.checkSurroundingSquares.bind(this);
    }

    buildSquares() {
        var amountOfBombs = 20;
        const bombsArray = Array(amountOfBombs).fill('bomb');
        const emptyArray = Array(100 - amountOfBombs).fill('empty');
        const allSquaresArray = emptyArray.concat(bombsArray);
        shuffledArray = allSquaresArray.sort(() => Math.random() - 0.5);
    }
    
    handleSquareClick(buttonType, index) {
        if (this.state.gameOver) { return }
        buttonType === 'bomb' ? this.handleBombClick(index) : this.handleEmptyClick(index);
    }

    placeFlag() {
        if (this.state.gameOver === false) { return }
        // if the square hasn't been checked and the amount of flags is less than the amount of bombs, 
        
    }
    
    handleBombClick(index) {
        console.log('boom');
        this.setState({ gameOver: true });
        const clickedBomb = document.getElementById(index);
        clickedBomb.innerHTML = '💣';
        // make a better way to restart the game. Right now it's real buggy 
    }
    
    handleEmptyClick(index) {
        const currentElement = document.getElementById(index);
        if (this.state.gameOver) { 
            return;
        }
        if (currentElement.classList.contains('checked')) {
            return;
        }
        if (currentElement.classList.contains('bomb')) { 
            return; 
        }
    
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
    
        if (numberOfNeighboringBombs !== 0) {
            currentElement.innerHTML = numberOfNeighboringBombs;
        }
        currentElement.classList.add('checked');
        this.checkSurroundingSquares(index);
    }
    
    checkSurroundingSquares(index) {
        const squareIsOnLeftEdge = (index % 10 === 0);
        const squareIsOnRightEdge = (index % 10 === 9);
        const squareIsOnTopEdge = (index < 10);
        const squareIsOnBottomEdge = (index > 89);
    
        var newIndex;
        setTimeout(() => {
            // element to the east
            if (!squareIsOnRightEdge) {
                newIndex = index + 1;
                if (document.getElementById(newIndex).classList.contains('bomb')) {
                    return;
                };
                this.handleEmptyClick(newIndex);
            }
            // element to the southeast
            if (!squareIsOnBottomEdge&& !squareIsOnRightEdge) {
                newIndex = index + 11;
                if (document.getElementById(newIndex).classList.contains('bomb')) {
                    return;
                };
                this.handleEmptyClick(newIndex);
            }
            // element to the south
            if (!squareIsOnBottomEdge) {
                newIndex = index + 10;
                if (document.getElementById(newIndex).classList.contains('bomb')) {
                    return;
                };
                this.handleEmptyClick(newIndex);
            }
            // element to the southwest
            if (!squareIsOnBottomEdge && !squareIsOnLeftEdge) {
                newIndex = index + 9;
                if (document.getElementById(newIndex).classList.contains('bomb')) {
                    return;
                };
                this.handleEmptyClick(newIndex);
            }
            // element to the west
            if (!squareIsOnLeftEdge) {
                newIndex = index - 1;
                if (document.getElementById(newIndex).classList.contains('bomb')) {
                    return;
                };
                this.handleEmptyClick(newIndex);
            }
            // element to the northwest
            if (!squareIsOnTopEdge && !squareIsOnLeftEdge) {
                newIndex = index - 11;
                if (document.getElementById(newIndex).classList.contains('bomb')) {
                    return;
                };
                this.handleEmptyClick(newIndex);
            }
            // element to the north 
            if (!squareIsOnTopEdge) {
                newIndex = index - 10;
                if (document.getElementById(newIndex).classList.contains('bomb')) {
                    return;
                };
                this.handleEmptyClick(newIndex);
            }
        }, 10);
    }

    render () {
        return (
        <GameContainer>
            <GameTitle>Minesweeper</GameTitle>
            <MinesweeperContainer>
                {this.buildSquares()}
                {shuffledArray.map((item, index) => {
                    let square = React.createElement('button', {'key': `mine-${index}`, 'id': index, 'className': `minesquare ${item}`, 'onClick': (() => this.handleSquareClick(item, index))}, '');
                    return square;
                })}
                {this.state.gameOver && (
                    <GameOverModalContainer>
                        <GameOverModal>
                            <GameOverEmojis>💣💥🤯</GameOverEmojis>
                            <GameOverH1>GAME OVER</GameOverH1>
                        </GameOverModal>
                    </GameOverModalContainer>)}
            </MinesweeperContainer>
        </GameContainer>
        )
    }
}

export default Minesweeper;