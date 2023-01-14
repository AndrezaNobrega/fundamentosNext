import Layout from "@/components/Layout"

export default function Jsx(){
    /* aqui fica o código js */
    const obj = {nome: 'kwldf', idade: 12}
    return(
        <Layout titulo="Entendendo JSX">
            <div>
                <h1>JSX é um conceito central</h1>
                <p> {obj.nome}</p>
            </div>
        </Layout>
    )
}