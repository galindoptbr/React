import { useState } from "react";

export const Form = () => {

  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`O usuario ${name} foi cadastrado com a senha: ${password}`);
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="Name:">Name: </label>
          <input
            type="text"
            id="name"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Password:">Password: </label>
          <input
            type="password"
            id="password"
            placeholder="Digite a sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
};
