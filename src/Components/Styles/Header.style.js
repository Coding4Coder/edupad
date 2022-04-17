


import styled from "styled-components";

export const StyledHeader = styled.header`
        background: #f1f1f0;
        color: azure;
        font-size: 1.2rem;
        padding: 0rem;
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        height:100px;
`;
export const TopNavBar = styled.nav `
        display:flex;  
        justify-content:center;
        align-items: center ;
        height:100px;
        .nav-link{
                background:#e2e2e2;
                border-right:1px solid #ccc;
                height:100px;
                justify-content:center;
                align-items:center;
                display:flex;
                color:#000;
                svg{
                        font-size:2.0rem;
                        display: block;
                        padding-right:0.5rem;
                }
                &:hover {
                        background:#dae2e9;
                         border-right:1px solid #f2f2f2;
                }
        }
        .active{
                background: #dae2e9;
                border-right:1px solid #f2f2f2;
            }

`;
