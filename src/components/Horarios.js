import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Horarios(){
    const { idFilme } = useParams();
    const [infoFilme, setInfoFilme] = useState([]);
    useEffect(() => {
		const requisicaoInfo = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

		requisicaoInfo.then(respostaInfo => {
			console.log(respostaInfo);
            setInfoFilme(...[respostaInfo.data]);
		});

		requisicaoInfo.catch(erroInfo => {
			console.log(erroInfo);
		});

	}, []);
	console.log(idFilme);

    return(
        <> 
        </>
    )
}