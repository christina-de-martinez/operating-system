import React from 'react';
import { Background, IconGrid, Icon } from './styled';
import Window from '../window/index';
import Dock from '../dock/index';
import Menubar from '../menubar/index';

import { faTwitter, faMediumM } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faCameraRetro, faMeteor, faFolder } from '@fortawesome/free-solid-svg-icons';

class Desktop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowIsOpen: true,
            windowType: 'Browser'
        }
        this.toggleWindow = this.toggleWindow.bind(this);
    }
    toggleWindow(arg) {
        this.setState({
            windowIsOpen: !this.state.windowIsOpen,
            windowType: {arg}
        });
    }
    render() {
        return (
            <Background>
                <Menubar></Menubar>
                <IconGrid>
                    <Icon>
                        <FontAwesomeIcon icon={faUserAstronaut} />
                        Notes app with info
                    </Icon>
                    <Icon>
                        <FontAwesomeIcon icon={faCameraRetro} />
                        Instagram
                    </Icon>
                    <Icon>
                        <FontAwesomeIcon icon={faTwitter} />
                        Twitter
                    </Icon>
                    <Icon>
                        <FontAwesomeIcon icon={faMediumM} />
                        Medium
                    </Icon>
                    <Icon>
                        <FontAwesomeIcon icon={faMeteor} />
                        Minesweeper or Snake or Asteroids
                    </Icon>
                    <Icon>
                        <FontAwesomeIcon icon={faFolder} />
                        The Krabby Patty Formula
                    </Icon>
                    <Icon>
                        <FontAwesomeIcon icon={faFolder} />
                        Super Secret Files
                    </Icon>
                </IconGrid>
                {this.state.windowIsOpen && (
                    <Window
                        toggleWindow={this.toggleWindow}
                        windowType={this.state.windowType}
                    ></Window>
                )}
                <Dock
                   windowIsOpen={this.state.windowIsOpen}
                   toggleWindow={this.toggleWindow} 
                   mailToLink={this.mailToLink}
                ></Dock>
            </Background>
        )
    }
}

export default Desktop;