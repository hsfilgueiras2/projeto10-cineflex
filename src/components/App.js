import React from "react";
import Filmes from "./Filmes";
import Horarios from "./Horarios";
import Sucesso from "./Sucesso";
import styled from 'styled-components';
import GlobalStyle from "../assets/CSS/GobalStyle";


export default function App(){
    return(    
    <>
    <GlobalStyle />
    <HeaderBar>CINEFLEX</HeaderBar>
    <Filmes/>
    </>)

}

const HeaderBar =styled.header`
background-color:#C3CFD9;
width:100%;
position:fixed;
top:0px;
left:0px;
display:flex;
align-items:center;
height:67px;
justify-content:center;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 40px;

color: #E8833A;
`;