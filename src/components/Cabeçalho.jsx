export default function Cabecalho(props){
     /* props são somente p leitura, n podem 
     ser modificadas */
    return (
        <header>
            <h1>Fundamentos Next e React {props.titulo}</h1>
        </header>
    )
}