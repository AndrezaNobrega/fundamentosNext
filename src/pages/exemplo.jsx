import Cabecalho from "@/components/Cabeçalho";
import Layout from "@/components/Layout";

export default function Exemplo(){
    return(
        <Layout titulo = "Usando componentes">
            <Cabecalho titulo="ldskf"/>
            <Cabecalho/>
        </Layout>
        
    )
}