import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #000;
    overflow-x: hidden;
    height: 80vh;
    overflow-y: hidden;
`;

export const Sidebar = styled.div`
    width: 100%;
    max-width: 150px;
    padding: 10px;
    height: 100%;
`;

export const SidebarMainItem = styled.button`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: transparent;
    border: 2px solid transparent;
    border-radius: 5px;
    &:hover, &:active {
        background-color: pink;
    }
`;

export const SidebarText = styled.button`
    margin: 0 12px 0;
    font-size: 16px;
    width: 80%;
    text-align: left;
    color: rgb(179, 179, 179);
    border: transparent;
    background-color: transparent;
    &:hover {
        color: #fff;
    }
`;

export const HR = styled.hr`
    width: 100%;
    margin: 10px 0;
    background-color: hotpink;
`;

export const SidebarPlaylist = styled.a`
    color: rgb(179, 179, 179);
    font-weight: bold;
    text-decoration: none;
    background-color: transparent;
    border: 0px transparent;
    font-size: 16px;
    text-align: left;
    &:hover, &:active {
        color: #fff;
    }
`;

export const Main = styled.section`
position: relative;
    background-color: #000;
    background-image: url('https://i.imgur.com/vysZpjO.jpg');
    backdrop-filter: opacity(0.2);
    background-size: cover;
    background-position: 90% 70%;
    background-repeat: no-repeat;
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    &:after {
        content: '';
        background: linear-gradient(to bottom, rgba(34, 34, 34, 0), rgba(34, 34, 34, 0.8));
        width: 100%;
        height: 400px;
        position: absolute;
        left: 0;
        top: -200;
        z-index: -10;
    }
`;

export const ContactButtonSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: 12px;
    width: 90%;
    max-width: 1300px;
`;

export const ContactButton = styled.a`
    background-color: #fff;
    text-decoration: none;
    color: #000;
    letter-spacing: 1px;
    font-weight: bold;
    border-radius: 40px;
    border: 1px transparent;
    padding: 16px 32px;
    &:hover {
        transform: scale(1.1);
    }
`;

export const ArtistSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 30px 20px;
`;

export const ArtistName = styled.h1`
    font-size: 64px;
    color: #fff;
    margin: 0;
    font-family: Roboto, Oxygen, Ubuntu, 'Helvetica Neue', helvetica, sans-serif;
    font-weight: bold;
`;

export const ArtistBadgeSect = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ArtistBadgeText = styled.p`
    font-size: 14px;
    color: #fff;
    margin: 0 0 0 4px;
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
`;

export const MainPlaylistSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 30px 20px;
    background-image: linear-gradient(#4F4C46 0, rgba(0,0,0,0.6) 80%);
    height: 400px;
    overflow-y: scroll;
`;

export const PlaylistHeader = styled.h1`
    font-size: 36px;
    font-weight: bold;
    color: #fff;
    margin: 0;
    padding: 0 0 24px 0;
`;

export const FlexColAlignTopLeft = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const PopularHolder = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: nowrap;
    max-width: 1500px;
`;

export const PopularItem = styled.a`
    width: 90%;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: transparent;
    font-size: 16px;
    margin: 0; 
    border-radius: 6px;
    text-align: left;
    background-color: rgba(0,0,0,0);
    padding: 10px 20px;
    color: #fff;
    &:hover {
        background-color: rgba(255,255,255,0.1);
    }
`;

export const Number = styled.p`
    color: #fff;
    font-size: 16px;
    margin: 0;
`;

export const PopularAlbumCover = styled.img`
    width: 40px;
    height: 40px;
    margin: 0 16px;
    border-radius: 6px;
`;

export const PopularTitle = styled.p`
    color: #fff;
    font-size: 16px;
    margin: 0;
`;

export const Tech = styled.p`
    color: rgb(179, 179, 179);
    font-size: 16px;
    max-width: 400px;
    text-align: right;
`;

export const PopularMain = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;
