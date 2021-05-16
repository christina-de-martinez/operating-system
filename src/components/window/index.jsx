import React from 'react';
import { WindowContainer, WindowTopBar, WindowControlButton } from './styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faTimes } from '@fortawesome/free-solid-svg-icons'

class Window extends React.Component {

    render() {
        return (
            <WindowContainer>
                <WindowTopBar>
                    <WindowControlButton>
                        <FontAwesomeIcon 
                            icon={faMinus} 
                            alt="Minimize" 
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
            </WindowContainer>
        )
    }
}

export default Window;