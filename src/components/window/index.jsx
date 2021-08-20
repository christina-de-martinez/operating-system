import React from 'react';

import { Rnd } from "react-rnd";
import { WindowContainer, WindowTopBar, WindowControlButton, BrowserIframe } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import Browser from '../applications/browser/index';
import Minesweeper from '../applications/minesweeper/index';

class Window extends React.Component {
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
            {/* need to have these detect which window kind and close it accordingly */}
            <WindowContainer>
                <WindowTopBar>
                    <WindowControlButton>
                        <FontAwesomeIcon 
                            icon={faMinus} 
                            alt="Minimize" 
                            onClick={() => { this.props.toggleWindow('Browser') }}
                        />
                    </WindowControlButton>
                    <WindowControlButton>
                        <FontAwesomeIcon 
                            icon={faTimes} 
                            alt="Close window" 
                            onClick={() => { this.props.toggleWindow('Minesweeper') }}
                        />
                    </WindowControlButton>
                </WindowTopBar>
                {console.log(this.props)}
                { this.props.browserIsOpen && <Browser />}
                { this.props.minesweeperIsOpen && <Minesweeper />}
            </WindowContainer>
            </Rnd>
        )
    }
}

export default Window;