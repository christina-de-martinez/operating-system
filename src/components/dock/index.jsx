import React from 'react';
import { DockContainer, DockParent, AppIcon } from './styled';
import { faGithubAlt, faJira } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard, faSmile, faGlobeEurope, faAt, faComments, faBomb } from '@fortawesome/free-solid-svg-icons';

class Dock extends React.Component {
    render() {
        return (
            <DockContainer>
                <DockParent>
                    <AppIcon onClick={() => { this.props.toggleWindow('Browser') }}>
                        <FontAwesomeIcon icon={faHatWizard} alt="Browser" />
                    </AppIcon>
                    <AppIcon onClick={() => {window.location.href='https://github.com/christinahouck'}}>
                        <FontAwesomeIcon icon={faGithubAlt} alt="GitHub" />
                    </AppIcon>
                    <AppIcon onClick={() => {window.location.href='mailto:christina.m.codes@gmail.com'}}>
                        <FontAwesomeIcon icon={faAt} alt="Email" />
                    </AppIcon>
                    <AppIcon onClick={() => {window.location.href='https://www.instagram.com/christina.codes/'}}>
                        <FontAwesomeIcon icon={faComments} alt="Instant Messenger" />
                    </AppIcon>
                    <AppIcon onClick={() => { this.props.toggleWindow('Maps') }}>
                        <FontAwesomeIcon icon={faGlobeEurope} alt="Maps" />
                    </AppIcon>
                    {/* <AppIcon>
                        <FontAwesomeIcon icon={faSmile} alt="Contacts" />
                    </AppIcon>
                    <AppIcon>
                        <FontAwesomeIcon icon={faJira} alt="Jira" />
                    </AppIcon> */}
                    <AppIcon onClick={() => { this.props.toggleWindow('Minesweeper') }}>
                        <FontAwesomeIcon icon={faBomb} alt="Minesweeper" />
                    </AppIcon>
                </DockParent>
            </DockContainer>
        )
    }
}

export default Dock;