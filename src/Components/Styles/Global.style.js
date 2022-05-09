

import styled from "styled-components";
import cloud from "../../img/cloud.jpg";

export const MainContainer = styled.section `
       background:${props => props.bg ? "#f2f2f5" : "white"};
        width: 90%;
        min-height: 25rem;
        margin:0 auto 8rem auto;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        padding: 2.5rem;
        font-size:1.2rem;
        text-align:center;
        .pageNotFound{
            width:75%;
            height:auto;
        }
        &.cloudBg{
            background-image: url(${cloud});
           
            background-size:cover;
            height: 100%;
            /* Center and scale the image nicely */
            background-position: center;
            background-repeat: no-repeat;
            
        }
        .searchBox{
            border-radius: 29px;
             padding: 0.5rem 1.5rem;
        }
        .card-columns{
            display:flex;
            flex-flow: row wrap;
            justify-content: space-evenly;
            .card{
                width:200px;
                margin:0 0 40px 0;
                img{
                    width:175px;
                    height:220px;
                }
                .card-title{
                    font-size: 1.2rem;
                    font-weight:bold;
                    text-transform:capitalize;
                }
                .card-title, .card-text{
                    font-size: 1rem;
                    color:#000;
                    text-align:center;
                    font-family: 'Nunito', sans-serif;
                }
            }
        }
`;
export const PageHeading = styled.h1 `
    font-size: 2.5rem;
    color:#037973;
    text-align:center;
    font-family: 'Nunito', sans-serif;
    margin: 3rem;
`;
export const NotFound = styled.div `
    font-size: 1.7rem;
    color:#fff;
    text-align:center;
    font-family: 'Nunito', sans-serif;
    margin: 3rem;
    padding:1rem;
    border:1px solid #ff0066;
    border-radius:30px;
    background:#ff0066;
`;
export const CityName = styled.div `
    font-size: 1.5rem;
    color:#fff;
    text-align:center;
    font-family: 'Nunito', sans-serif;
    margin: 2rem auto;
    padding:1rem;
    border:1px solid #000;
    border-radius:30px;
    background:#037973;
    width:50%;
    span{
        padding-right: 15px;
    }
    .minMax{
        font-size:1rem;
        border-top:1px solid #e2e2e2;
        border-bottom:1px solid #e2e2e2;
        padding:.5rem;
    }
`;

export const SearchBox = styled.input`
    width: 300px;
    height:50px;
    border-radius:35px;
    background:#e2e2e2;
    padding:.5rem;
    margin:1rem auto;
    display: block;
    border:2px solid #c2c2c2;
    padding-left:20px;
    font-size:1.2rem;
`;

export const CovidContainer = styled.div `
display:flex;
flex-wrap:wrap;
    .item{
        flex-grow:1;
        background:#d0e6e5;
        padding:.23rem;
        border-top:1px solid #888;
        width:25%;
        font-size:1rem;
    }
    .bdr-r{
        border-right:1px solid #888;
    }
    &.header{
                .item{
                background:#5ca9a5;
                color:#fff;
            }
    }
`;