import styled from "styled-components";

export const Wrapper = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr  ;
        align-items: center;
        grid-gap: 5px;
        padding: 0 20px;
        margin-bottom: auto;
        @media (max-width: 1000px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
            grid-template-columns: 1fr ;
            padding: 0px 20px;
        }
    `

    export const GiftCards = styled.div`
        background: #fff;
        border-radius: 10px;
        height: 50px;
        width: 50px;
        padding: 30px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        transform: all 0.2 ease-in-out;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        }
    `