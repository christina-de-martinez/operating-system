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
                    type: 'Minesweeper',
                    width: 800,
                    height: 800
                }
            ]
        }
        this.toggleWindow = this.toggleWindow.bind(this);
    }
    toggleWindow(arg) {
        this.setState(prevState => ({
            windowIsOpen: !this.state.windowIsOpen,
            windowType: {arg},
            openWindows: prevState.openWindows.forEach((item => {
                if (item.type === arg) {
                    console.log('matched')
                    console.log(item)
                    item.isOpen = !this.state.isOpen
                } else {
                    console.log('unmatched')
                    console.log(item)
                    prevState.openWindows.push({
                        isOpen: !this.state.isOpen,
                        type: arg,
                        width: 800,
                        height: 800,
                        x: 100+(10*1),
                        y: 100+(10*1)
                    })
                }
            }
        )),
            // openWindows: [...prevState.openWindows,
            //     {
            //         isOpen: !this.state.isOpen,
            //         type: arg,
            //         width: 800,
            //         height: 800,
            //         x: 100,
            //         y: 100
            //     }
            // ]
        }))
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
                {this.state.openWindows.map((wind, i) => {
                    return (
                        <Window
                            key={`window${i}`}
                            toggleWindow={this.toggleWindow}
                            windowType={wind.type}
                            openWindows={this.state.openWindows}
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