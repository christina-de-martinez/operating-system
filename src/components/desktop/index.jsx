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
            openWindows: [
                {
                    type: 'Browser',
                    isOpen: true,
                    width: 800,
                    height: 800
                },
                {
                    type: 'Minesweeper',
                    isOpen: false,
                    width: 800,
                    height: 800
                }
            ],
            openWindows2: ['Browser','Minesweeper']
        }
        this.toggleWindow = this.toggleWindow.bind(this);
    }
    toggleWindow(arg) {
        console.log('run')
        const current = this.state.openWindows2
        if (!current.includes(arg)) {
            this.setState((prevState) => ({
                openWindows2: [...prevState.openWindows2, arg]
            }))
        } else {
            this.setState({
                openWindows2: [arg]
            })
        }
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
                {this.state.openWindows2.map((wind, i) => {
                    return (
                        <Window
                            key={`window${i}`}
                            toggleWindow={this.toggleWindow}
                            windowType={wind[i]}
                            openWindows={this.state.openWindows2}
                        ></Window>
                    )
                    // if (wind.isOpen) {
                    //     <Window
                    //         toggleWindow={this.toggleWindow}
                    //         windowType={wind.type}
                    //         openWindows={this.state.openWindows}
                    //     ></Window>
                    // } else {
                    //     return;
                    // }
                })}
                {/* {this.state.windowIsOpen && (
                    <Window
                        toggleWindow={this.toggleWindow}
                        windowType={this.state.windowType}
                        openWindows={this.state.openWindows}
                    ></Window>
                )} */}
                <Dock
                   windowIsOpen={this.state.windowIsOpen}
                   toggleWindow={this.toggleWindow} 
                   mailToLink={this.mailToLink}
                   openWindows={this.state.openWindows}
                ></Dock>
            </Background>
        )
    }
}

export default Desktop;