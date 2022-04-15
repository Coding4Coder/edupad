


import style from "styled-components";

export const StyledHeader = style.header`
        background: #ffffff;
        color: azure;
        font-size: 1.2rem;
        padding: 1rem;
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        height:100px;
`;
export const TopNavBar = style.nav `
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
export const MainContainer = style.section`
        background: rgb(241, 241, 241);
        width: 90%;
        min-height: 5rem;
        margin: 1rem auto 8rem auto;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        padding: 2.5rem;
        font-size:1.2rem;
        text-align:center
`