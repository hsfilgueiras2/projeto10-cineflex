import React from "react";
import Filmes from "./Filmes";
import Horarios from "./Horarios";
import Sucesso from "./Sucesso";
import styled from 'styled-components';
import GlobalStyle from "../assets/CSS/GobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import Assentos from "./Assentos";


export default function App(){
    const [filmes, setFilmes] = useState([]);
    useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		requisicao.then(resposta => {
			console.log(resposta);
            setFilmes(...[resposta.data]);
		});

		requisicao.catch(erro => {
			console.log(erro);
		});

	}, []);
    console.log(filmes)
    return(    
    <>
    <BrowserRouter>
    <GlobalStyle />
        <HeaderBar>CINEFLEX</HeaderBar>
        <Routes>
            <Route path="/" element={<Filmes arrFilmes={filmes} />}/>
            <Route path="/sessoes/:idFilme" element={<Horarios />} />
            <Route path="/assentos/:idSessao" element={<Assentos />}/>
        </Routes>
    </BrowserRouter>
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