import * as React from "react";
import styles from "./app.module.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

/**
  - O componente Main precisa do dado user que é definido em NavBar
  - Mova o state do componente NavBar para o App
  - Passe o state como props para NavBar e Main
  - O nome da props deve ser "user"

    Obs: Verifique a aba "Tests" e cheque se todos os testes 
    estão passando para validar sua atividade como concluída.
*/

export default function App() {
  const [user] = React.useState("Rayann");

  return (
    <div data-testid="App">
      <NavBar user={user} />
      <Main user={user} />
    </div>
  );
}
