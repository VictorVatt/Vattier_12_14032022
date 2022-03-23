import styled from "styled-components";

export const VerticalBarContainer = styled.div`
    background-color: black;
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
`
export const IconPartContainer = styled.div`
    margin-top: 256px;
    padding: 0 26px;
    `

export const IconContainer = styled.div`
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 6px;
    margin-bottom: 20px;
`
export const Icon = styled.img`
    width: 36px;
    height: 32px;`

export const Copyright = styled.p`
    color: white;
    width: 138px;
    position: relative;
    top: 148px;
    transform: rotate(-90deg);
    font-size: 12px;`