import styled from "styled-components";

export const BarChartContainer = styled.div`
    position: relative; 
    margin:auto;
    width: 835px;
    height: 320px;
    display:flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    background-color: #FBFBFB;`

export const LegendContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 10px 0 10px 0;

`
export const LegendItemsContainer = styled.div`
    display: flex;
    margin-right: 26px;
    `
export const LegendItemContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 32px;
    color: #74798C;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;

`
export const BlackDot = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 10px;
    margin-right: 12px;
    background-color: black;

`
export const RedDot = styled.div`
    width: 8px;
    height: 8px;
    margin-right: 12px;
    background-color: red;
    border-radius: 10px;
`
export const LegendTitle = styled.p`
    margin-left: 32px;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;

    `