import React from 'react';
import { Container, 
    Sidebar, 
    SidebarMainItem, 
    SidebarText, 
    HR, 
    SidebarPlaylist, 
    Main, 
    ArtistSection,
    ArtistName,
    ArtistBadgeSect,
    ArtistBadgeText,
    ContactButtonSection,
    ContactButton,
    MainContainer,
    MainPlaylistSection,
    FlexColAlignTopLeft,
    PlaylistHeader,
    PopularHolder,
    PopularItem,
    PopularAlbumCover,
    Number,
    PopularTitle, 
    PopularMain, 
    Tech,
    SVG
} from './styled';  

function Spotify() {
    return (
        <>
        <Container>
            <Sidebar role='complementary'>
                <SidebarMainItem onClick={() => console.log('x')}>
                    <SVG viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z" fill="#fff"></path>
                    </SVG>
                    <SidebarText>Home</SidebarText>
                </SidebarMainItem>
                <HR />
                <SidebarPlaylist href="https://open.spotify.com/playlist/6w0jM3WYLWgXSIAww0Clv6?si=cc48172b533d48e0" target="_blank">Why you should hire me</SidebarPlaylist>
                <SidebarPlaylist href="https://www.linkedin.com/in/christinademartinez/" target="_blank">My Résumé</SidebarPlaylist>
            </Sidebar>
            <MainContainer>
                <Main>
                    <ContactButtonSection>
                        <ContactButton href="mailto:christina.m.codes@gmail.com">
                            CONTACT
                        </ContactButton>
                    </ContactButtonSection>
                    <ArtistSection>
                        <ArtistBadgeSect>
                            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21.6596l-3.38079 1.8543-1.84158-3.3877-3.84662-.2679.28231-3.8456-3.09118-2.3049 2.31658-3.0825-1.3543-3.61028 3.61534-1.34071.81255-3.76935 3.76627.82672L12 0l2.7214 2.73168 3.7663-.82672.8125 3.76935 3.6154 1.34071-1.3543 3.61028 2.3166 3.0825-3.0912 2.3049.2823 3.8456-3.8466.2679-1.8416 3.3877L12 21.6596z" fill="#2E77D0" />
                                <path d="M16.8637 7.41226l-6.6435 7.77824-2.80421-3.2842-.4935.5775 3.29771 3.8617 7.2135-8.44649-.57-.48675z" fill="#fff" />
                            </svg>
                            <ArtistBadgeText>Verified Excellent Hire</ArtistBadgeText>
                        </ArtistBadgeSect>
                        <ArtistName>Christina Martinez</ArtistName>
                    </ArtistSection>
                </Main>
                <MainPlaylistSection>
                    <FlexColAlignTopLeft>
                        <PlaylistHeader>
                            Projects I'm Proud Of
                        </PlaylistHeader>
                        <PopularHolder>
                            <PopularItem href="https://logos.com" target="_blank">
                                <PopularMain>
                                    <Number>1</Number> 
                                    <PopularAlbumCover src="https://files.logoscdn.com/v1/files/49100469/assets/11604610/content.svg?signature=FofJp4WgItAg6JD4v99UZRzwntw" alt="project name" />
                                    <PopularTitle>Logos.com homepage</PopularTitle>
                                </PopularMain>
                                <Tech>
                                    Highly personalized using Liquid and JavaScript
                                </Tech>
                            </PopularItem>
                            <PopularItem href="https://www.instagram.com/p/CL5pnJTAn5G/" target="_blank">
                                <PopularMain>
                                    <Number>2</Number> 
                                    <PopularAlbumCover src="https://files.logoscdn.com/v1/files/49100469/assets/11604610/content.svg?signature=FofJp4WgItAg6JD4v99UZRzwntw" alt="project name" />
                                    <PopularTitle>Logos March Matchups</PopularTitle>
                                </PopularMain>
                                <Tech>
                                    Voting web app built with React
                                </Tech>
                            </PopularItem>
                            <PopularItem href="https://guatevelas.com" target="_blank">
                                <PopularMain>
                                    <Number>3</Number> 
                                    <PopularAlbumCover src="https://i.imgur.com/GWjMvBB.png" alt="project name" />
                                    <PopularTitle>Guatevelas website</PopularTitle>
                                </PopularMain>
                                <Tech>
                                    Designed & developed using React (work in progress)
                                </Tech>
                            </PopularItem>
                            <PopularItem href="https://faithlife.com" onTouchStart={() => window.location = 'https://faithlife.com'} target="_blank">
                                <PopularMain>
                                    <Number>4</Number> 
                                    <PopularAlbumCover src="https://files.logoscdn.com/v1/files/52275001/assets/12132915/content.png?signature=eDikV0XxnAJ3ECW6cfWbb8XSDSk" alt="project name" />
                                    <PopularTitle>Faithlife.com unauthenticated homepage</PopularTitle>
                                </PopularMain>
                                <Tech>
                                    Quick-turn project to rebuild Razor page for better top-of-funnel user capture
                                </Tech>
                            </PopularItem>
                        </PopularHolder>
                    </FlexColAlignTopLeft>
                </MainPlaylistSection>
            </MainContainer>
        </Container>
        </>
    )
}

export default Spotify;