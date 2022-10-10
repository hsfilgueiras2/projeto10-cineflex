import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Rodape from './Rodape';
export default function Assentos(){
    const { idSessao } = useParams();
    const [infoSessao, setInfoSessao] = useState({movie:{posterURL:null,title:null,},day:{}});
    useEffect(() => {
		const requisicaoSessao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

		requisicaoSessao.then(respostaInfo => {
            setInfoSessao(...[respostaInfo.data]);
            console.log("INFO SESSAO")
			console.log(respostaInfo.data)
		});

		requisicaoSessao.catch(erroInfo => {
			console.log(erroInfo);
		});
	}, []);

    return(
        <>
        <ul>

        </ul>
        <form>
            
        </form>
        <Rodape linkImg={infoSessao.movie.posterURL} movieTitle={infoSessao.movie.title} movieTime={infoSessao.day}/>
        </>
    )
}