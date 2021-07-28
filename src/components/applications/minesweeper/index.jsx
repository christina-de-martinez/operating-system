import React from 'react';
import { GameContainer, GameTitle, MinesweeperContainer, GameOverModalContainer, GameOverModal, GameOverEmojis, GameOverH1, RestartButton } from './styled';

var shuffledArray = [];

class Minesweeper extends React.Component {
    constructor(props) {
        super(props);
        this.correctlyGuessedFlags = 0;
        this.squaresInVirtualDom = [];
        this.state = {
            gameOver: false,
            numOfBombs: 2,
        }
        this.buildSquares = this.buildSquares.bind(this);
        this.handleSquareClick = this.handleSquareClick.bind(this);
        this.handleBombClick = this.handleBombClick.bind(this);
        this.handleEmptyClick = this.handleEmptyClick.bind(this);
        this.checkSurroundingSquares = this.checkSurroundingSquares.bind(this);
        this.handleFlagClick = this.handleFlagClick.bind(this);
    }

    // TODO: add a better way to restart the game
    restart() {
        setTimeout(() => {
            this.props.toggleWindow();
        }, 100);
    }

    buildSquares() {
        var amountOfBombs = this.state.numOfBombs;
        const bombsArray = Array(amountOfBombs).fill('bomb');
        const emptyArray = Array(100 - amountOfBombs).fill('empty');
        const allSquaresArray = emptyArray.concat(bombsArray);
        shuffledArray = allSquaresArray.sort(() => Math.random() - 0.5);
    }
    
    handleSquareClick(buttonType, index) {
        if (this.state.gameOver) { return }
        // TODO: add ability to remove flags
        if (buttonType === 'bomb') { 
            this.handleBombClick(index)
        } else { 
            this.handleEmptyClick(index) 
        }
    }

    userWins() {
        setTimeout(() => {
            alert('You win!');
        }, 300);
    }

    handleContextMenu(event, item, index) {
        event.preventDefault();
        this.handleFlagClick(event.target);
    }

    setSquaresInVirtualDom = element => {
        this.squaresInVirtualDom = element;
    };

    handleFlagClick(target) {
        let currentEl = target;
        if (this.state.gameOver) { 
            return;
        }
        if (currentEl.classList.contains('checked')) {
            return;
        }
        if (currentEl.classList.contains('empty')) {
            currentEl.style.backgroundColor = '#FFC299';
            currentEl.classList.add('incorrectFlag');
        } 
        currentEl.innerHTML = '⛳️';
        currentEl.classList.add('flag');

        if (currentEl.classList.contains('bomb')) {
            currentEl.style.backgroundColor = '#CAE3A0';
            currentEl.classList.add('diffusedBomb');
            this.correctlyGuessedFlags = this.correctlyGuessedFlags + 1;
            console.log('you have guessed '+this.correctlyGuessedFlags)
            if (this.correctlyGuessedFlags === this.state.numOfBombs) {
                this.userWins();
            }
        }
    }
    
    handleBombClick(index) {
        this.setState({ gameOver: true });
        const clickedBomb = document.getElementById(index);
        clickedBomb.innerHTML = '💣';
    }
    
    handleEmptyClick(index) {
        const currentElement = document.getElementById(index);
        if (this.state.gameOver) { 
            return;
        }
        if (currentElement) {
            if (currentElement.classList.contains('checked')) {
                return;
            }
            if (currentElement.classList.contains('bomb')) { 
                return; 
            }
            if (currentElement.classList.contains('flag')) {
                return;
            }
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
            <MinesweeperContainer
                ref={this.setSquaresInVirtualDom}
            >
                {this.buildSquares()}
                {shuffledArray.map((item, index) => {
                    return (
                        <button 
                            key={`mine-${index}`} 
                            id={index} 
                            className={`minesquare ${item}`}
                            onClick={() => this.handleSquareClick(item, index)}
                            onContextMenu={(event, item, index) => this.handleContextMenu(event, item, index)}
                        ></button>
                    )
                    // return square;
                })}
                {this.state.gameOver && (
                    <GameOverModalContainer>
                        <GameOverModal>
                            <GameOverEmojis>💣💥🤯</GameOverEmojis>
                            <GameOverH1>GAME OVER</GameOverH1>
                            <RestartButton onClick={() => {this.restart()}}>Goodbye <span className="smiley">&#x263A;</span></RestartButton>
                        </GameOverModal>
                    </GameOverModalContainer>)}
            </MinesweeperContainer>
        </GameContainer>
        )
    }
}

export default Minesweeper;