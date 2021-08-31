import React from 'react';
import { BookmarksContainer, Bookmark, BookmarkImage, Container, Title, H2, P, Name, Description } from './styled';

function Browser() {
    return (
        <>
            {/* <BrowserIframe src="http://example.com"></BrowserIframe> */}
            <Container>
                <Title>Hi, I'm Christina.</Title>
                <H2>Software Development Team Lead at Faithlife</H2>
                <P>This site is under development.<br/>But in the meantime, here are a few projects that I'm proud of.</P>
                <BookmarksContainer>
                    <Bookmark href="https://logos.com">
                        <BookmarkImage src="https://i.imgur.com/sEep1Pa.png" alt="A screenshot of the unauthenticated Logos.com homepage" />
                        <Name>Logos.com homepage</Name>
                        <Description>In late 2020 I rebuilt the homepage of Logos.com, Faithlife's most-visited website. It's highly customized to the user that visits it; users will see different content depending on the digital resources that they own.</Description>
                    </Bookmark>
                    <Bookmark href="https://www.instagram.com/p/CL5pnJTAn5G/">
                        <BookmarkImage src="https://i.imgur.com/yTUI7IV.png" alt="A screenshot of the March Matchups voting app" />
                        <Name>March Matchups voting app</Name>
                        <Description>This is a voting app for one of Faithlife's biggest annual marketing campaigns. It's a March Madness-style bracket competition where users vote on the books that they want to receive discounts. A coworker and I rebuilt this web app from scratch in React in 2020.</Description>
                    </Bookmark>
                    <Bookmark href="https://www.logos.com/bookstore">
                        <BookmarkImage src="https://i.imgur.com/48J3awk.png" alt="A screenshot of the Logos.com curriculum bookstore" />
                        <Name>Logos.com Curriculum Bookstore</Name>
                        <Description>This is a simple web app written in vanilla JavaScript. It allows a user to select their seminary and the course that they're taking, and it displays suggested resources for them.</Description>
                    </Bookmark>
                </BookmarksContainer>
            </Container>
        </>
    )
}

export default Browser;