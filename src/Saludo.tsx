interface SaludoProps{
  nombre: string
} 

export function Saludo({nombre}: SaludoProps){
  return(
    <header className= "saludo">
      <h1> Hola, {nombre} </h1>
      <p> Bienvenido a mi primera app con React</p>
    </header>
  )
}