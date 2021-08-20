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
            windowType: 'Minesweeper',
            browserIsOpen: false,
            minesweeperIsOpen: true, 
        }
        this.toggleWindow = this.toggleWindow.bind(this);
    }
    toggleWindow(arg) {
        if (!arg) {
            console.log('no args')
        }
        console.log('arg')
        console.log(arg)
        if (arg === 'Browser') {
            console.log('browser');
            this.setState({
                windowType: {arg},
                browserIsOpen: !this.state.browserIsOpen,
            });
        } else if (arg === 'Minesweeper') {
            console.log('minesweeper');
            this.setState({
                windowType: {arg},
                minesweeperIsOpen: !this.state.minesweeperIsOpen,
            });
        } 
        console.log(this.state)
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
                {this.state.browserIsOpen && (
                    <Window
                        toggleWindow={this.toggleWindow}
                        windowType={this.state.windowType}
                        browserIsOpen={this.state.browserIsOpen}
                    ></Window>
                )}
                {this.state.minesweeperIsOpen && (
                    <Window
                        toggleWindow={this.toggleWindow}
                        windowType={this.state.windowType}
                        minesweeperIsOpen={this.state.minesweeperIsOpen}
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