import react from "react"
export default function Rodape(props){
    return(
        <>
        <footer>
            <div>
                <img src={props.linkImg}></img>
            </div>
            <h2>{props.movieTitle}<br></br>{`${props.movieTime.weekday} - ${props.movieTime.date}`}</h2>
        </footer>
        </>
    )
}