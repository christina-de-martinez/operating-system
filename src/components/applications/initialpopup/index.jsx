import React from 'react';
import { Container, Title, NerdyStuff, Btn, H2, P, A } from './styled.jsx';

class InitialPopup extends React.Component {
    doTwoThings(props) {
        this.props.toggleWindow('InitialPopup');
        this.props.toggleWindow('Spotify');
    }
    render() {
        return (
            <Container>
                <Title>Hi, I'm Christina ☺</Title>
                <H2>Welcome to my portfolio site</H2>
                <Btn onClick={(props) => this.doTwoThings(props)} onGotPointerCapture={(props) => this.doTwoThings(props)}>See why you should hire me</Btn>
                <NerdyStuff>The nerdy stuff 🤓🧠</NerdyStuff>
                <P>This site was built with React.<br/>You can see the source code on GitHub <A href="https://github.com/christinahouck/operating-system" target="_blank" rel="noopener noreferrer">here</A>.</P>
            </Container>
        )
    }
}

export default InitialPopup;