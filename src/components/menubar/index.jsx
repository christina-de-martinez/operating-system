import React from 'react';
import { Bar, MenuLeft, MenuRight, MenuIcon, DateTimeText } from './styled';
import MenuDropdown from '../menudropdown/index'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon, faWifi } from '@fortawesome/free-solid-svg-icons'

var getCurrentDate = () => {
    let now = new Date();
    var todaysDate = now.toDateString();
    return todaysDate;
}
var getCurrentTime = () => {
    let now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var minutesString = minutes.toString().padStart(2,'0');
    var time = hours + ':' + minutesString;
    return time;
}
var toggleDropdown = () => {
    // prevent default
    // this.setState({
    //     dropdownIsOpen: !this.state.dropdownIsOpen,
    // });
}

class Menubar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownIsOpen: false
        }
        // this.toggleDropdown = this.toggleDropdown.bind(this);
        
    }
    
    render() {
        return (
            <>
            <Bar>
                <MenuLeft>
                    <MenuIcon onClick={toggleDropdown()}>
                        <FontAwesomeIcon icon={faLemon} />
                    </MenuIcon>
                </MenuLeft>
                <MenuRight>
                    {/* <MenuIcon onClick={() => toggleDropdown()}>
                        <FontAwesomeIcon icon={faGlobeEurope} />
                    </MenuIcon> */}
                    <MenuIcon>
                        <FontAwesomeIcon icon={faWifi} />
                    </MenuIcon>
                    <DateTimeText>{getCurrentDate()}</DateTimeText>
                    <DateTimeText>{getCurrentTime()}</DateTimeText>
                </MenuRight>
            </Bar>
            {this.state.dropdownIsOpen && <MenuDropdown></MenuDropdown> }
            </>
        )
    }
}

export default Menubar;