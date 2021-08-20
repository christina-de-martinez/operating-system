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
`;

export const BookmarksContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 80%;
    max-width: 600px;
`;

export const Bookmark = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
