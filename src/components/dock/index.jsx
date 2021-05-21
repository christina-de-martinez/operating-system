import React from 'react';
import { DockContainer, DockParent, AppIcon } from './styled';
import { faGithubAlt, faJira } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard, faSmile, faAt, faComments, faBomb } from '@fortawesome/free-solid-svg-icons';

class Dock extends React.Component {
    render() {
        return (
            <DockContainer>
                <DockParent>
                    <AppIcon onClick={() => { this.props.toggleWindow('Browser') }}>
                        <FontAwesomeIcon icon={faHatWizard} alt="Browser" />
                    </AppIcon>
                    <AppIcon>
                        <FontAwesomeIcon icon={faGithubAlt} alt="GitHub" />
                    </AppIcon>
                    <AppIcon onClick={() => {window.location.href='mailto:christina.m.codes@gmail.com'}}>
                        <FontAwesomeIcon icon={faAt} alt="Email" />
                    </AppIcon>
                    <AppIcon>
                        <FontAwesomeIcon icon={faComments} alt="Instant Messenger" />
                    </AppIcon>
                    <AppIcon>
                        <FontAwesomeIcon icon={faSmile} alt="Contacts" />
                    </AppIcon>
                    <AppIcon>
                        <FontAwesomeIcon icon={faJira} alt="Jira" />
                    </AppIcon>
                    <AppIcon onClick={() => { this.props.toggleWindow('Minesweeper') }}>
                        <FontAwesomeIcon icon={faBomb} alt="Minesweeper" />
                    </AppIcon>
                </DockParent>
            </DockContainer>
        )
    }
}

export default Dock;