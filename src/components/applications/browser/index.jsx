import React from 'react';
import { BookmarksContainer, Bookmark, Container, Title } from './styled';

function Browser() {
    return (
        <>
            {/* <BrowserIframe src="http://example.com"></BrowserIframe> */}
            <Container>
                <Title>Welcome</Title>
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