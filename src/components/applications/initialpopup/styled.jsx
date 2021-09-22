import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
    z-index: 0;
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px;
    
`;

export const Title = styled.h1`
    font-size: 52px;
    font-family: 'VT323', monospace;
    margin: 0;
    text-align: center;
    color: #9662E4;
    max-width: 95%;
`;
export const H2 = styled.h2`
    font-size: 20px;
    font-style: italic;
    margin: 0;
    margin-bottom: 12px;
    text-align: center;
    color: #AD85EA;
    margin-top: 0;
`;
export const Btn = styled.button`
    background-color: #AD85EA;
    border-radius: 6px;
    border: none;
    color: #fff;
    text-decoration: none;
    padding: 8px 16px;
    font-size: 18px;
    &:hover,
    &:active,
    &:focus {
        background-color: #9662E4; 
    }
    &:focus {
        border: 1px solid #f1f1f1;
    }
`;
export const NerdyStuff = styled.h2`
    font-size: 32px;
    font-family: 'VT323', monospace;
    margin: 0;
    margin-top: 40px;
    margin-bottom: 0;
    text-align: center;
    color: #9662E4;
`;
export const P = styled.p`
    color: #AD85EA;
    font-size: 18px;
    font-style: italic;
    margin-top: 0;
`;
export const A = styled.a`
    color: #AD85EA;
    font-size: 18px;
    font-style: italic;
    margin-top: 0;
`;