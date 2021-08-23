import React from 'react';
import { DockContainer, DockParent, AppIconAndDot, Dot, AppIcon } from './styled';
import { faGithubAlt, faJira } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard, faSmile, faGlobeEurope, faAt, faComments, faBomb, faCircle } from '@fortawesome/free-solid-svg-icons';

class Dock extends React.Component {
    render() {
        return (
            <DockContainer>
                <DockParent>
                    <AppIconAndDot>
                        <AppIcon className="appicon-blue" onClick={() => { this.props.toggleWindow('Browser') }}>
                            <FontAwesomeIcon icon={faHatWizard} alt="Browser" />
                        </AppIcon>
                        {this.props.browserIsOpen && <Dot><FontAwesomeIcon icon={faCircle} alt="Browser is open" /></Dot>}
                    </AppIconAndDot>
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
                        <AppIcon className="appicon-green" onClick={() => {window.location.href='https://www.instagram.com/christina.codes/'}}>
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
                    {/* <AppIcon>
                        <FontAwesomeIcon icon={faSmile} alt="Contacts" />
                    </AppIcon>
                    <AppIcon>
                        <FontAwesomeIcon icon={faJira} alt="Jira" />
                    </AppIcon> */}
                    <AppIconAndDot>
                        <AppIcon className="appicon-pink" onClick={() => { this.props.toggleWindow('Minesweeper') }}>
                            <FontAwesomeIcon icon={faBomb} alt="Minesweeper" />
                        </AppIcon>
                        {this.props.minesweeperIsOpen && <Dot><FontAwesomeIcon icon={faCircle} alt="Minesweeper is open" /></Dot>}
                    </AppIconAndDot>
                </DockParent>
            </DockContainer>
        )
    }
}

export default Dock;