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
    }
    render() {
        return (
            <Rnd
                default={{
                    x: 160,
                    y: 90,
                    width: 800,
                    height: 600
                }}
            >
                <WindowContainer>
                    <WindowTopBar>
                        <WindowControlButton>
                            <FontAwesomeIcon 
                                icon={faMinus} 
                                alt="Minimize" 
                                onClick={this.props.toggleWindow}
                            />
                        </WindowControlButton>
                        <WindowControlButton>
                            <FontAwesomeIcon 
                                icon={faTimes} 
                                alt="Close window" 
                                onClick={this.props.toggleWindow}
                            />
                        </WindowControlButton>
                    </WindowTopBar>
                    {/* { this.props.openWindows.map((wind, i) => {
                        console.log(wind,i)
                        wind.type === 'Browser' && <Minesweeper />
                    }) } */}
                    {/* <Browser /> */}
                    { this.props.windowType === 'Browser' && <Browser />}
                    { this.props.windowType === 'Minesweeper' && <Minesweeper />}
                </WindowContainer>
            </Rnd>
        )
    }
}

export default Window;