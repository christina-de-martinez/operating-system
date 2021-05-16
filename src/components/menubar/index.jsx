import React from 'react';
import { Bar, MenuLeft, MenuRight, MenuIcon, DateTimeText } from './styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon, faWifi, faGlobeEurope } from '@fortawesome/free-solid-svg-icons'

var getCurrentDate = () => {
    let now = new Date();
    var todaysDate = now.toDateString();
    return todaysDate;
}
var getCurrentTime = () => {
    let now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var time = hours + ':' + minutes;
    return time;
}

function Menubar() {
    function handleIconClick() {
        alert('do something');
    }

    return (
        <Bar>
            <MenuLeft>
                <MenuIcon onClick={() => handleIconClick()}>
                    <FontAwesomeIcon icon={faLemon} />
                </MenuIcon>
            </MenuLeft>
            <MenuRight>
                <MenuIcon onClick={() => handleIconClick()}>
                    <FontAwesomeIcon icon={faGlobeEurope} />
                </MenuIcon>
                <MenuIcon>
                    <FontAwesomeIcon icon={faWifi} />
                </MenuIcon>
                <DateTimeText>{getCurrentDate()}</DateTimeText>
                <DateTimeText>{getCurrentTime()}</DateTimeText>
            </MenuRight>
        </Bar>
    )
}

export default Menubar;