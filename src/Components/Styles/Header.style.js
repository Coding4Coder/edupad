


import styled from "styled-components";

export const StyledHeader = styled.header`
        background: #ffffff;
        color: azure;
        font-size: 1.2rem;
        padding: 1rem;
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        height:100px;
`;
export const TopNavBar = styled.nav `
        display:flex;  
        justify-content:center;
        .active{
                color:  rgb(186, 0, 127) !important;
                box-shadow: none !important;
                border-bottom: 1px solid  rgb(186, 0, 127) !important;
            }
            a{
                    padding:.5rem;
            }

`;
