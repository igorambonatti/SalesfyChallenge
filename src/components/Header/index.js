import React from 'react';

import { Container, Nav, User, Links } from './styles';

import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Nav>
        <a href="/cartaonu">
          <img src={logo} alt="Nubank" />
        </a>
        <Links>
          <a href="/">Início</a>
          <a href="/nuconta">Conta Digital</a>
          <a href="/cartaonu">Cartão de crédito</a>
          <a href="/rewards">Rewards</a>
          <a href="/emprestimo">Empréstimo</a>
          <a href="/sobre-nos">Sobre nós</a>
          <a href="/carreiras">Carreiras</a>
          <a href="/converter">Number converter</a>
        </Links>
      </Nav>

      <User>
        <a href="/">Login</a>
        <button type="submit">Quero ser Nubank</button>
      </User>
    </Container>
  );
}
