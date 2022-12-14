import Rodape from './Rodape';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import react from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Horarios(){
    const { idFilme } = useParams();
    const [infoFilme, setInfoFilme] = useState({days:[]});
    useEffect(() => {
		const requisicaoInfo = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

		requisicaoInfo.then(respostaInfo => {
            setInfoFilme(...[respostaInfo.data]);
			console.log(respostaInfo.data.days)
		});

		requisicaoInfo.catch(erroInfo => {
			console.log(erroInfo);
		});
		
	}, []);

    return(
        <>
		<Horario>
		<h2>Selecione o horário</h2>
			{
				infoFilme.days.map((item,index)=>
				<li key={index}>
					<h3>{`${item.weekday} - ${item.date}`}</h3>
					{item.showtimes.map((time,indexE)=>
					<Link key={indexE} to={`/assentos/${time.id}`}>
					<button>{time.name}</button>
					</Link>
					)}
				</li>
				)
			}	
		</Horario>
		<Rodape linkImg={infoFilme.posterURL} movieTitle={infoFilme.title} movieTime={""}/> 
        </>
    )
}

const Horario = styled.ul`
margin-top:67px;
margin-bottom:117px;
padding-left:24px;
box-sizing:border-box;
h2{
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 28px;
	height: 110px;
	width:100%;
	display:flex;
	justify-content:center;
	align-items:center;
	color: #293845;
}
li h3{
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 23px;
	display: flex;
	align-items: center;
	color: #293845;
	margin-bottom:22px;
}
li button{
	margin-right:8px;
	border-width:0px;
	width: 83px;
	height: 43px;
	background: #E8833A;
	border-radius: 3px;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 21px;
	color: #FFFFFF;
	margin-bottom:23px;
}
`;