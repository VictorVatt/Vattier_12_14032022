import styled from "styled-components";

export const VerticalBarContainer = styled.div`
    background-color: black;
    width: 117px;
    height: 100vh;
    display:flex;
    flex-direction: column;
    align-items: center;
`
export const IconPartContainer = styled.div`
    margin-top: 256px;
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
    position: fixed;
    top: 874px;
    transform: rotate(-90deg);
    font-size: 12px;`