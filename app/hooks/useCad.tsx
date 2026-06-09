'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '../lib/api';

export function useCad() {
  const router = useRouter();

  // Estados simples e separados, iguais aos do cadastro de produtos
  const [nome, setNome] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Função disparada ao clicar no botão Entrar
  function cadastrar(evento: React.FormEvent) {
    evento.preventDefault(); // Evita que a página recarregue

    // Montamos o objeto que vai para a API
    const dadosLogin = {
      nome: nome,
      username: username,
      password: password
    };

    api.post('/users/', dadosLogin)
      .then((resposta) => {
       alert("sucesso")
        });

        // Vai para a página principal (Dashboard)
        router.push('/');
  
    
      

  }

  // Exportamos tudo que a tela vai precisar
  return {
    nome, setNome,
    username, setUsername,
    password, setPassword,
    cadastrar
  };
}
