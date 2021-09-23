import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #000;
    height: 80vh;
    overflow-y: hidden;
    overflow-x: hidden;
    @media (min-width: 551px) {
        flex-direction: row;
    }
    @media (max-width: 550px) {
        flex-direction: column;
    }
`;

export const Sidebar = styled.div`
    width: 100%;
    padding: 10px;
    height: 100%;
    @media (min-width: 1001px) {
        max-width: 150px;
    }
    @media (max-width: 1000px) {
        max-width: 120px;
    }
    @media (min-width: 551px) {
        display: block;
    }
    @media (max-width: 550px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        max-width: 100%;
        height: 30px;
    }
`;

export const SidebarMainItem = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 2px solid transparent;
    border-radius: 5px;
    &:hover, &:active {
        color: #fff;
    }
    @media (min-width: 551px) {
        width: 100%;
    }
    @media (max-width: 550px) {
        padding: 0;
    }
`;

export const SVG = styled.svg`
    @media (max-width: 550px) {
        margin-top: -2px;
    }
`;

export const SidebarText = styled.p`
    margin: 0 12px 0;
    font-size: 16px;
    width: 80%;
    text-align: left;
    color: rgb(179, 179, 179);
    border: transparent;
    background-color: transparent;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    &:hover {
        color: #fff;
    }
    @media (max-width: 550px) {
        padding: 0;
        margin: 0;
        margin-left: 6px;
    }
`;

export const HR = styled.hr`
    width: 100%;
    margin: 10px 0;
    height: 1px;
    background-color: #fff;
    @media (max-width: 550px) {
        display: none;
    }
`;

export const SidebarPlaylist = styled.a`
    color: rgb(179, 179, 179);
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    text-decoration: none;
    background-color: transparent;
    border: 0px transparent;
    font-size: 16px;
    text-align: left;
    display: block;
    &:hover, &:active {
        color: #fff;
    }
    @media (min-width: 551px) {
        margin-bottom: 12px;
    }
    @media (max-width: 550px) {
        margin: 0 8px;
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
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    &:after {
        content: '';
        background: linear-gradient(to bottom, rgba(34, 34, 34, 0), rgba(34, 34, 34, 0.8));
        width: 100%;
        position: absolute;
        left: 0;
        top: -200;
        z-index: -10;
    }
    @media (min-width: 768px) {
        height: 400px;
        &:after {
            height: 400px;
        }
    }
    @media (max-width: 767px) {
        height: 300px;
        &:after {
            height: 300px;
        }
    }
    @media (max-width: 500px) {
        height: 200px;
        &:after {
            height: 200px;
        }
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
    letter-spacing: 2px;
    font-family: Roboto, Oxygen, Ubuntu, 'Helvetica Neue', helvetica, sans-serif;
    font-weight: bold;
    border-radius: 40px;
    border: 1px transparent;
    box-shadow: 0 1px 5px 0 rgba(110, 131, 183, 0.2), 0 3px 1px -2px rgba(110, 131, 183, 0.12), 0 2px 2px 0 rgba(110, 131, 183, 0.14);
    &:hover {
        transform: scale(1.05);
    }
    @media (min-width: 501px) {
        font-size: 18px;
        padding: 16px 32px;
    }
    @media (max-width: 500px) {
        font-size: 14px;
        padding: 8px 16px;
    }
`;

export const ArtistSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    @media (max-width: 500px) {
        padding: 12px 20px;
    }
    @media (min-width: 501px) {
        padding: 30px 20px;
    }
`;

export const ArtistName = styled.h1`
    color: #fff;
    margin: 0;
    letter-spacing: 0.9;
    font-family: Roboto, Oxygen, Ubuntu, 'Helvetica Neue', helvetica, sans-serif;
    font-weight: bold;
    line-height: 1.2;
    @media (min-width: 501px) {
        font-size: 64px;
    }
    @media (max-width: 500px) {
        font-size: 34px;
    }
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
    background-image: linear-gradient(#4F4C46 0, rgba(0,0,0,0.6) 80%);
    overflow-y: scroll;
    @media (min-width: 768px) {
        height: 400px;
        padding: 30px 20px;
    }
    @media (max-width: 767px) {
        height: 600px;
        padding: 20px;
    }
    @media (max-width: 600px) {
        padding: 10px;
    }
`;

export const PlaylistHeader = styled.h1`
    font-size: 36px;
    font-weight: bold;
    color: #fff;
    margin: 0;
    padding: 0 0 24px 0;
    @media (min-width: 501px) {
        font-size: 36px;
    }
    @media (max-width: 500px) {
        font-size: 24px;
        padding-bottom: 8px;
    }
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
    cursor: pointer;
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
    text-align: right;
    margin-left: 12px;
    @media (min-width: 768px) {
        max-width: 400px;
    }
    @media (max-width: 767px) {
        max-width: 180px;
    }
    @media (max-width: 660px) {
        display: none;
    }
`;

export const PopularMain = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;
