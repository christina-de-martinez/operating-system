import React from 'react';

import { Rnd } from "react-rnd";
import { WindowContainer, WindowTopBar, WindowControlButton } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import Browser from '../applications/browser/index';
import Minesweeper from '../applications/minesweeper/index';
import Map from '../applications/map/index';
import Passwords from '../applications/passwords/index';
import Instagram from '../applications/instagram/index';

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
                { this.props.windowType.arg === 'Browser' && <Browser />}
                { this.props.windowType.arg === 'Minesweeper' && <Minesweeper toggleWindow={this.props.toggleWindow} />}
                { this.props.windowType.arg === 'Map' && <Map />}
                { this.props.windowType.arg === 'Passwords' && <Passwords />}
                { this.props.windowType.arg === 'Instagram' && <Instagram />}
            </WindowContainer>
            </Rnd>
        )
    }
}

export default Window;