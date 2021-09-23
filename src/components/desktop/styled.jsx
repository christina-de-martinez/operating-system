import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-flow: column;
`;

export const Background = styled.div`
    background-color: #FCC5D1;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
    position: absolute;
    z-index: 0;
    @media (max-width: 600px) {
        width: 104vw;
        height: 104vh;
    }
    @media (min-width: 601px) {
        width: 100%;
        height: 100%;
    }
`;

export const IconGrid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 30px;
    width: 100px;
    max-height: 80%;
`;

export const Icon = styled.button`
    width: 120px;
    height: 100px;
    margin: 10px;
    display: flex;
    background-color: transparent;
    border: transparent;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #333;
`;

export const Folder = styled.div`
    height: 80px;
    width: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #62D3F9;
`;