import styled from "styled-components";

export const CardContainer = styled.div`
    width: 258px;
    height: 124px;
    display: flex;
    margin: 0 0 39px 0;
    align-items: center;
    border-radius: 5px;
    background-color: #FBFBFB;
`
export const IconContainer = styled.div`
    background-color: ${(props) => props.color};
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-left: 32px;
    
`
export const Icon = styled.img`
    width: 18px;
    height: 22px;`
export const ContentContainer = styled.div`
    margin-left: 24px;
`
export const Quantity = styled.h3`
    margin: 0;
    `
export const NutritiveType = styled.p`
    font-size: 14px;
    margin: 5px 0;
    color: #74798C;
    font-weight: 500;
`