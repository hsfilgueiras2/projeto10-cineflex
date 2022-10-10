import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Rodape from './Rodape';
import styled from 'styled-components';
import { Link } from "react-router-dom";
export default function Assentos(props){
    const [buyerName, setBuyerName] = useState();
    const [buyerCPF, setBuyerCPF] = useState();
    const [chosenSeats, setChosenSeats] = useState([]);
    const { idSessao } = useParams();
    const [infoSessao, setInfoSessao] = useState({movie:{posterURL:null,title:null,},day:{},seats:[]});
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
    function selectSeat(id){
        const chosenTemp = [...chosenSeats];
        if (chosenTemp.includes(id)){
            chosenTemp.splice(chosenTemp.indexOf(id),1)
            setChosenSeats(...[chosenTemp])
            console.log(chosenTemp)
            console.log("removido")

        }
        else{
            chosenTemp.push(id);
            setChosenSeats(...[chosenTemp])
            console.log(chosenTemp)
            console.log("adicionado")
        }


    }
    function realizarCompra(){
        props.setBuyerInfo({
            ids: chosenSeats,
            name: buyerName,
            cpf: buyerCPF,
        })
        props.setSessionInfo(infoSessao);
        const enviarPedido = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
        {
            ids: chosenSeats,
            name: buyerName,
            cpf: buyerCPF,
        })
    }
    return(
        <>
        <ListaAssentos>
            <h1>{"Selecione o(s) assento(s)"}</h1>
            <div>
            {
                infoSessao.seats.map((item,index)=>
                <Assento onClick={()=>selectSeat(item.id)} vacancyStatus={item.isAvailable}>
                    {String(item.name)}
                </Assento>
                )
            }
            </div>
        </ListaAssentos>
        <section>
            <Icones>
                <div></div>
                <div></div>
                <div></div>
            </Icones>
            <div>
                <span>Selecionado</span>
                <span>Disponivel</span>
                <span>Indisponivel</span>
            </div>
        </section>
        <form onSubmit={realizarCompra} >
            <label>Nome do comprador:</label>
            <input type="text" placeholder='Digite seu nome...' value={buyerName} onChange={e => setBuyerName(e.target.value)}></input>
            <label>CPF do comprador:</label>
            <input type="text" placeholder='Digite seu CPF...' value={buyerCPF} onChange={e => setBuyerCPF(e.target.value)}></input>
            <Link to={"/sucesso"}>
            <button type="submit">{`Reservar assentos(s)`}</button>
            </Link>
        </form>
        <Rodape linkImg={infoSessao.movie.posterURL} movieTitle={infoSessao.movie.title} movieTime={infoSessao.day}/>
        </>
    )
}
const Icones = styled.div`
width:100%;
height:30px;
display:flex;
justify-content:center;
:first-child{
    width: 190px;
    display:flex;
    justify-content:space-between;
}
:first-child :nth-child(1){
    background: #1AAE9E;
    border: 1px solid #0E7D71;
    border-radius: 17px;
    width: 25px;
    height: 25px;
}
:first-child :nth-child(2){
    
    background: #C3CFD9;
    border: 1px solid #7B8B99;
    border-radius: 17px;
    width: 25px;
    height: 25px;
}
:first-child :nth-child(3){
    
    background: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 17px;
    width: 25px;
    height: 25px;
}
`;
const ListaAssentos = styled.ul`
margin-top:67px;
display:flex;
flex-wrap:wrap;
padding-right:17px;
padding-left:24px;
box-sizing:border-box;
justify-content:center;
h1{
    width:100%;
    height:90px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #293845;
}
div{
    width:350px;
    display:flex;
    flex-wrap:wrap;
}

`;
const Assento = styled.li`
        margin-right:7px;
    box-sizing: border-box;
    width: 26px;
    height: 26px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;
    margin-bottom:18px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #000000;

`;