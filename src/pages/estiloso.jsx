import style from '../styles/estiloso.module.css'
import Layout from '@/components/Layout'

export default function Estiloso(){
    return (
        
            <Layout titulo="Exemplo de CSS modularizado">
                <div className={style.roxo}>
                    <h1>Estilo usando css modulos</h1>
                    <span>"Neque porro quisquam est qui dolorem ipsum 
                    quia dolor sit amet, consectetur, adipisci velit..."</span>
                </div>
            </Layout>

    )
}