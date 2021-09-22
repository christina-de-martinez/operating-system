import React from 'react';
import { DockContainer, DockParent, AppIconAndDot, Dot, AppIcon } from './styled';
import { faGithubAlt, faJira, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard, faSmile, faGlobeEurope, faAt, faComments, faBomb, faCircle } from '@fortawesome/free-solid-svg-icons';

class Dock extends React.Component {
    render() {
        return (
            <DockContainer>
                {console.log("%cWelcome to my portfolio site.","color: hotpink; background-color: #444; font-size: 24px; font-family: sans-serif")}
                {console.log("%cIf you're here, it's probably because you're interested in what my code looks like. I'm happy to share!\nThis is a web app built with React. You can see the code here: https://github.com/christinahouck/operating-system \nAll rights reserved. If you're planning on using any part of this I'd love to know. Just send me a message.","color: #f1f1f1; background-color: #444;font-size: 14px; font-family: sans-serif")}
                <DockParent>
                    {/* <AppIconAndDot>
                        <AppIcon className="appicon-blue" onClick={() => { this.props.toggleWindow('Browser') }}>
                            <FontAwesomeIcon icon={faHatWizard} alt="Browser" />
                        </AppIcon>
                        {this.props.browserIsOpen && <Dot><FontAwesomeIcon icon={faCircle} alt="Browser is open" /></Dot>}
                    </AppIconAndDot> */}
                    <AppIconAndDot>
                        <AppIcon className="appicon-purple" onClick={() => {window.location.href='https://github.com/christinahouck'}}>
                            <FontAwesomeIcon icon={faGithubAlt} alt="GitHub" />
                        </AppIcon>
                        {this.props.githubIsOpen && <Dot><FontAwesomeIcon icon={faCircle} alt="GitHub is open" /></Dot>}
                    </AppIconAndDot>
                    <AppIconAndDot>
                        <AppIcon className="appicon-orange" onClick={() => {window.location.href='mailto:christina.m.codes@gmail.com'}}>
                            <FontAwesomeIcon icon={faAt} alt="Email" />
                        </AppIcon>
                        {this.props.emailIsOpen && <Dot><FontAwesomeIcon icon={faCircle} alt="Email is open" /></Dot>}
                    </AppIconAndDot>
                    <AppIconAndDot>
                        <AppIcon className="appicon-blue" onClick={() => {window.location.href='https://www.instagram.com/christina.codes/'}}>
                            <FontAwesomeIcon icon={faComments} alt="Instant Messenger" />
                        </AppIcon>
                        {this.props.messengerIsOpen && <Dot><FontAwesomeIcon icon={faCircle} alt="Messenger is open" /></Dot>}
                    </AppIconAndDot>
                    <AppIconAndDot>
                        <AppIcon className="appicon-yellow" onClick={() => { this.props.toggleWindow('Maps') }}>
                            <FontAwesomeIcon icon={faGlobeEurope} alt="Maps" />
                        </AppIcon>
                        {this.props.mapsIsOpen && <Dot><FontAwesomeIcon icon={faCircle} alt="Maps is open" /></Dot>}
                    </AppIconAndDot>
                    <AppIconAndDot>
                        <AppIcon className="appicon-green" onClick={() => { this.props.toggleWindow('Spotify') }}>
                            <FontAwesomeIcon icon={faSpotify} alt="Spotify" />
                        </AppIcon>
                        {this.props.spotifyIsOpen && <Dot><FontAwesomeIcon icon={faCircle} alt="Spotify is open" /></Dot>}
                    </AppIconAndDot>
                    {/* <AppIcon>
                        <FontAwesomeIcon icon={faSmile} alt="Contacts" />
                    </AppIcon>
                    <AppIcon>
                        <FontAwesomeIcon icon={faJira} alt="Jira" />
                    </AppIcon> */}
                    {/* <AppIconAndDot>
                        <AppIcon className="appicon-pink" onClick={() => { this.props.toggleWindow('Minesweeper') }}>
                            <FontAwesomeIcon icon={faBomb} alt="Minesweeper" />
                        </AppIcon>
                        {this.props.minesweeperIsOpen && <Dot><FontAwesomeIcon icon={faCircle} alt="Minesweeper is open" /></Dot>}
                    </AppIconAndDot> */}
                </DockParent>
            </DockContainer>
        )
    }
}

export default Dock;