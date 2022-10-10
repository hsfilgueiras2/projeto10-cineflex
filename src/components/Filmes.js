import axios from "axios";
import react from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


export default function Filmes(props){
    
    return(
    <>
    <TextoSelecioneFilme>Selecione o filme</TextoSelecioneFilme>
    <ListaFilmes>
        {props.arrFilmes.map((item,index)=>

            <Link key={index} to={`/sessoes/${item.id}`}>
                <li  >
                    
                    <img src={item.posterURL}></img>
                    
                </li>
            </Link>
        
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
`;
const ListaFilmes = styled.ul`
    display:flex;
    flex-wrap:wrap;
    padding:15px;
    box-sizing:border-box;
    display:flex;
    justify-content:space-between;

    li{
        margin-left:15px;
        margin-right:15px;
        margin-bottom:11px;
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