import Link from "next/link";
import styles from "../styles/navegador.module.css"

export default function Navegador(props) {
    return(
        <Link href={props.destino}>
            <div className={styles.navegador} style = {{
                backgroundColor: props.color ?? 'dodgerblue'
            }}>
                {props.nome}
            </div>
        </Link>
    )
}