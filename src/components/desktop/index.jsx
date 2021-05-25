import React from 'react';
import { Background, IconGrid, Icon, Folder } from './styled';
import Window from '../window/index';
import Dock from '../dock/index';
import Menubar from '../menubar/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

class Desktop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowIsOpen: false,
            windowType: 'Minesweeper', 
        }
        this.toggleWindow = this.toggleWindow.bind(this);
    }
    toggleWindow(arg) {
        this.setState({
            windowIsOpen: !this.state.windowIsOpen,
            windowType: {arg},
        });
    }
    render() {
        return (
            <Background>
                <Menubar></Menubar>
                <IconGrid>
                    <Icon>
                        <Folder>
                            <FontAwesomeIcon icon={faFolder} />
                        </Folder>
                        The Krabby Patty Formula
                    </Icon>
                    <Icon>
                        <Folder>
                            <FontAwesomeIcon icon={faFolder} />
                        </Folder>
                        Super Secret Files
                    </Icon>
                    <Icon>
                        <Folder>
                            <FontAwesomeIcon icon={faFolder} />
                        </Folder>
                        Passwords<br/>(for my eyes only)
                    </Icon>
                    <Icon>
                        <Folder>
                            <FontAwesomeIcon icon={faFolder} />
                        </Folder>
                        Professional Stuff
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