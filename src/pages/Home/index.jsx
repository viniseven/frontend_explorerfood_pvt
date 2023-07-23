import { useState, useEffect, useRef } from 'react';

import { Container } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Carrousel } from '../../components/Carrousel';

import cookie from '../../assets/cookie.svg';

import { motion } from 'framer-motion';
import {
  Minus,
  Plus,
  HeartStraight,
  CaretLeft,
  CaretRight,
} from '@phosphor-icons/react';

import SaladaRavanello from '../../assets/SaladaRavanello.svg';
import SpaguettiGambe from '../../assets/SpaguettiGambe.svg';
import TorradasParma from '../../assets/TorradasParma.svg';

export function Home() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  function handleNextClick() {}

  const [favorites, setFavorites] = useState(false);

  function handleAddToFavorites() {
    setFavorites(!favorites);
  }

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <div className="text-header">
          <img
            src={cookie}
            alt="Imagem de cookies flutuando no ar com folhas e frutas"
          />

          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>

        <Section title="Refeições">
          <Carrousel />
        </Section>

        <Section title="Sobremesas">
          <Carrousel />
        </Section>
      </main>
      <Footer />
    </Container>
  );
}
