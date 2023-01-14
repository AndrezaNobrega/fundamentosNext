import Layout from "@/components/Layout";
import { useState } from "react";

export default function Estado(){
    const [state, setNumero] = useState(0)

    function incrementar(){
        setNumero(state + 1)
    }
    return(
        <Layout titulo = "Componente com estados">
            <div><span>{state}</span></div>            
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}