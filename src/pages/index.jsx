import Navegador from '@/components/Navegador'

export default function Inicio(){
  return (
    <div style={{
      display: 'flex',
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Navegador destino="/estiloso" nome="estiloso" color="#05668d"/>
      <Navegador destino="/exemplo" nome="exemplo" color="#028090"/>
      <Navegador destino="/jsx" nome="jsx" color="#00a896"/>
      <Navegador destino="/navegacao" nome="Navegaçao #01" color="#02c39a"/>
      <Navegador destino="/cliente/sp-2/321" nome="Navegaçao #02" color="#f0f3bd"/>
      <Navegador destino="/estado" nome="Componente com estados" color="#e0e1dd"/>
      <Navegador destino="/integracao1" nome="Integração API #01" color="#778da9"/>
    </div>
  )
}