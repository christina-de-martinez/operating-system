import React from 'react';

import { Rnd } from "react-rnd";
import { WindowContainer, WindowTopBar, WindowControlButton, BrowserInput } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import Browser from '../applications/browser/index';
import Minesweeper from '../applications/minesweeper/index';
import Map from '../applications/map/index';
import Spotify from '../applications/spotify/index';
import Passwords from '../applications/passwords/index';

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
            xOffset: 120 + (this.props.numOfWindowsOpen * Math.random() * (100 - 30) + 30),
            yOffset: 50 + (this.props.numOfWindowsOpen * Math.random() * (100 - 30) + 30)
        })
    }
    render() {
        return (
            <Rnd
                default={{
                    x: this.state.xOffset,
                    y: this.state.yOffset,
                    width: 1000,
                    height: 800
                }}
            >
            {/* need to have these detect which window kind and close it accordingly */}
            <WindowContainer>
                <WindowTopBar onClick={this.offset}>
                    {this.props.browserIsOpen && <BrowserInput type='text/css' value='https://christinacodes.dev' readOnly={true}></BrowserInput>}
                    <WindowControlButton>
                        <FontAwesomeIcon 
                            icon={faMinus} 
                            alt="Minimize" 
                            onClick={() => { this.props.toggleWindow(this.props.windowKind) }}
                        />
                    </WindowControlButton>
                    <WindowControlButton>
                        <FontAwesomeIcon 
                            icon={faTimes} 
                            alt="Close window" 
                            onClick={() => { this.props.toggleWindow(this.props.windowKind) }}
                        />
                    </WindowControlButton>
                </WindowTopBar>
                { this.props.browserIsOpen && <Browser />}
                { this.props.minesweeperIsOpen && <Minesweeper />}
                { this.props.mapsIsOpen && <Map />}
                { this.props.spotifyIsOpen && <Spotify />}
                { this.props.passwordsIsOpen && <Passwords />}
            </WindowContainer>
            </Rnd>
        )
    }
}

export default Window;