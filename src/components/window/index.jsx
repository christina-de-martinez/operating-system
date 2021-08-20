import React from 'react';

import { Rnd } from "react-rnd";
import { WindowContainer, WindowTopBar, WindowControlButton, BrowserIframe } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import Browser from '../applications/browser/index';
import Minesweeper from '../applications/minesweeper/index';

class Window extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xOffset: 160,
            yOffset: 90
        }
    }
    componentWillMount() {
        this.setState({
            xOffset: 120 + (this.props.numOfWindowsOpen * Math.random() * (60 - 30) + 30),
            yOffset: 50 + (this.props.numOfWindowsOpen * Math.random() * (60 - 30) + 30)
        })
    }
    render() {
        return (
            <Rnd
                default={{
                    x: this.state.xOffset,
                    y: this.state.yOffset,
                    width: 800,
                    height: 600
                }}
            >
            {/* need to have these detect which window kind and close it accordingly */}
            <WindowContainer>
                <WindowTopBar onClick={this.offset}>
                    <WindowControlButton>
                        <FontAwesomeIcon 
                            icon={faMinus} 
                            alt="Minimize" 
                            onClick={() => { this.props.toggleWindow(this.props.windowType) }}
                        />
                    </WindowControlButton>
                    <WindowControlButton>
                        <FontAwesomeIcon 
                            icon={faTimes} 
                            alt="Close window" 
                            onClick={() => { this.props.toggleWindow(this.props.windowType) }}
                        />
                    </WindowControlButton>
                </WindowTopBar>
                { this.props.browserIsOpen && <Browser />}
                { this.props.minesweeperIsOpen && <Minesweeper />}
            </WindowContainer>
            </Rnd>
        )
    }
}

export default Window;