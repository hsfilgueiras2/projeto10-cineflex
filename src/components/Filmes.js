import axios from "axios";
import react from "react";
import { useState, useEffect } from 'react';
import styled from "styled-components";


export default function Filmes(){
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
    <TextoSelecioneFilme>Selecione o filme</TextoSelecioneFilme>
    <ListaFilmes>
        {filmes.map((item,index)=>
            <li key={index}>
                <img src={item.posterURL}></img>
            </li>
        )}
    </ListaFilmes>
    </>
)
}
const TextoSelecioneFilme = styled.h2`
width:100%;
height: 110px;
left: 0px;
margin-top: 67px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: 0.04em;
`;
const ListaFilmes = styled.ul`
    display:flex;
    flex-wrap:wrap;
    padding:30px;
    box-sizing:border-box;

    li{
        width: 145px;
        height: 209px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    li img{

        width: 129px;
        height: 193px;
    }
`;