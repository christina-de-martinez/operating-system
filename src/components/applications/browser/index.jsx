import React from 'react';
import { BookmarksContainer, Bookmark, Container, Title } from './styled';

function Browser() {
    return (
        <>
            {/* <BrowserIframe src="http://example.com"></BrowserIframe> */}
            <Container>
                <p>Will need to add an input here like the box where the url goes, but how to make it work?</p>
                <Title>Hello</Title>
                <BookmarksContainer>
                    <Bookmark>
                        <img src="https://via.placeholder.com/150" alt="#" />
                        <h2>Name of site</h2>
                    </Bookmark>
                    <Bookmark>
                        <img src="https://via.placeholder.com/150" alt="#" />
                        <h2>Name of site</h2>
                    </Bookmark>
                    <Bookmark>
                        <img src="https://via.placeholder.com/150" alt="#" />
                        <h2>Name of site</h2>
                    </Bookmark>
                </BookmarksContainer>
            </Container>
        </>
    )
}

export default Browser;