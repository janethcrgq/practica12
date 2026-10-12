import { Saludo } from "./Saludo";
import { TarjetaPerfil } from "./Tarjeta-Perfil";

export default function App(){
  return(
    <main className= "pagina"> 
    <Saludo nombre= "Martin Bernal"></Saludo>
    <section className= "equipo"> 
      <TarjetaPerfil nombre= "Martin Bernal" carrera= "Ing en Software" semestre= {5}></TarjetaPerfil>
      <TarjetaPerfil nombre= "Edgar Acevedo" carrera= "Ing en Software" semestre= {5}></TarjetaPerfil>
      <TarjetaPerfil nombre= "Janeth Galvan" carrera= "Ing en Software" semestre= {5}></TarjetaPerfil>
    </section>
    </main>
  )
}