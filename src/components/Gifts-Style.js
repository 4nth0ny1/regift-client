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