import react from "react"
export default function Rodape(props){
    return(
        <>
        <footer>
            <div>
                <img src={props.infoRodape.posterURL}></img>
            </div>
            <h2>{props.infoRodape.title}</h2>
        </footer>
        </>
    )
}