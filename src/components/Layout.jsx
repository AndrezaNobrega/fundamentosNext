import Link from "next/link"
import styles from "../styles/Layout.module.css"

export default function Layout(props){
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1>{props.titulo ?? "Exemplo"}</h1>
                <Link href="/"><h3>Voltar</h3></Link>
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>
        </div>
    )
}