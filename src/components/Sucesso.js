import styled from 'styled-components';
export default function Sucesso(props){
    return(
    <TelaSucesso>
        <h1>Pedido feito<br></br>com sucesso!</h1>
        <h2>Filme e sessão</h2>
        <h3>{props.sessionInfo.movie.title}</h3>
        <h3>{`${props.sessionInfo.day.date} ${props.sessionInfo.name}`}</h3>
        <h2>Ingressos</h2>
        {props.buyerInfo.ids.map((item)=>
        <h3>Assento {item}</h3>
        )}
        <h2>comprador</h2>
        {
            <>
            <h3>Nome: {props.buyerInfo.name}</h3>
            <h3>CPF: {props.buyerInfo.cpf}</h3>
            </>
        }
    </TelaSucesso>
    )
}
const TelaSucesso = styled.div`
`;