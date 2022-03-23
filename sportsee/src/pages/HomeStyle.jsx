import styled from "styled-components";

export const HomePageContainer = styled.div`
    display: flex;
    height: 100vh;`

export const MainContentContainer = styled.div`
    margin:  0 auto;
    padding: 0 20px;
    `
export const MainTitle = styled.h1`
    font-size: 48px;
    font-weight: 500;
    margin: 61px 0 0 0;`

export const HeaderContent = styled.p`
    font-size: 18px;
    font-weight : 400;
    margin: 20px 0 0 0;`

export const ChartsContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    @media (min-width: 1440px) {
        flex-direction: row; 
        margin-top: 77px;
    }
`
export const SquareCharts = styled.div`
    margin-top: 28px;
    display:flex;
    justify-content: space-between;
    `
export const NutritiveCardContainer = styled.div`
    display: flex;
    margin-top: 77px;
    justify-content: center;
    flex-wrap: wrap;
    @media (min-width: 1440px) {
        flex-wrap: nowrap;
        flex-direction: column; 
        margin-top: 0;
        margin-left: 31px;
    }`