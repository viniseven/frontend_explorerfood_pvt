import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { Carrousel } from '../../components/Carrousel';

import cookie from '../../assets/cookie.svg';
import { api } from '../../services/api';

export function Home({ inputSearch }) {
  const { user } = useAuth();
  const [valueInput, setValueInput] = useState('');
  const [dishes, setDishes] = useState([]);

  const handleInput = (newValue) => {
    setValueInput(newValue);
  };

  useEffect(() => {
    async function fetchDishes() {
      if (window.location.pathname === '/') {
        const response = await api.get('/dishes');
      }

      const response = await api.get(
        `/dishes?name=${valueInput}&ingredients=${valueInput}`
      );

      setDishes(response.data);
    }

    fetchDishes();
  }, [valueInput]);

  return (
    <Container>
      <Header onInputChange={handleInput} />
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
          <Carrousel dishes={dishes} />
        </Section>
      </main>
      <Footer />
    </Container>
  );
}
