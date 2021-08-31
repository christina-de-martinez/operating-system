import styled from 'styled-components';

export const BrowserIframe = styled.iframe`
    width: 100%;
    height: 94%;
    box-sizing: border-box;
    border: 0;
`;

export const Container = styled.div`
    width: 100%;
    height: 95%;
    background-color: #f1f1f1;
    color: #F76484;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 52px;
    font-family: 'VT323', monospace;
    margin: 0;
`;

export const H2 = styled.p`
    font-size: 24px;
    margin: 8px 0 16px 0;
`;

export const P = styled.p`
    font-size: 20px;
    text-align: center;
    font-family: 'VT323', monospace;
`;

export const Name = styled.h2`
    text-align: center;
    max-width: 220px;
    color: #F76484;
    margin: 12px 0 0;
`;

export const Description = styled.p`
    max-width: 100%;
    color: #F76484;
    margin: 8px 0 0;
`;

export const BookmarksContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 80%;
    max-width: 650px;
`;

export const Bookmark = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    max-width: 200px;
`;

export const BookmarkImage = styled.img`
    max-height: 150px;
    width: auto;
`;
