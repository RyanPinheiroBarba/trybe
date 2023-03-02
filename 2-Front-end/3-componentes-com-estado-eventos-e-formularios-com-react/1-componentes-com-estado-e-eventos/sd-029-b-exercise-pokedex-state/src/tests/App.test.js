import React from 'react';
import {
  render,
  screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import App from '../App';
import pokemonList from '../data';

const NEXT_BUTTON_NAME = 'Próximo pokémon';

const [firstPokemon, ...pokemonListWithoutFirst] = pokemonList;

const verifyIfPokemonExistsOnScreen = ({
  name,
  type,
  averageWeight: { value, measurementUnit },
}) => {
  const pokemonName = screen.getByText(name);
  expect(pokemonName).toBeInTheDocument();

  const pokemonType = screen.getByText(type, { ignore: 'button' });
  expect(pokemonType).toBeInTheDocument();

  const weightRegex = RegExp(`.*${value}.*${measurementUnit}`, 'i');
  const pokemonAverageWeight = screen.getByText(weightRegex);
  expect(pokemonType).toBeInTheDocument(pokemonAverageWeight);
};

const verifyIfPokemonDoesNotExistOnScreen = ({
  name,
  type,
  averageWeight: { value, measurementUnit },
}) => {
  const pokemonName = screen.queryByText(name);
  expect(pokemonName).not.toBeInTheDocument();

  const pokemonType = screen.queryByText(type, { ignore: 'button' });
  expect(pokemonType).not.toBeInTheDocument();

  const weightRegex = RegExp(`.*${value}.*${measurementUnit}`, 'i');
  const pokemonAverageWeight = screen.queryByText(weightRegex);
  expect(pokemonAverageWeight).not.toBeInTheDocument();
};

const setup = () => render(<App />);

describe('1 - Faça com que apenas um pokémon seja exibido', () => {
  beforeEach(setup);

  it('Será verificado se, ao carregar a página, as informações do primeiro pokémon da lista estão sendo exibidas', () => {
    verifyIfPokemonExistsOnScreen(firstPokemon);
  });

  it('Será verificado se, ao carregar a página, as informações de nenhum outro pokémon são exibidas', () => {
    pokemonListWithoutFirst.forEach((pokemon) => {
      verifyIfPokemonDoesNotExistOnScreen(pokemon);
    });
  });
});

describe('2 - Crie um botão chamado `Próximo pokémon` para percorrer todos os pokémon da lista', () => {
  beforeEach(setup);

  it('Será verificado se existe um botão chamado `Próximo pokémon`', async () => {
    const nextButton = screen.getByRole('button', { name: NEXT_BUTTON_NAME });
    expect(nextButton).toBeInTheDocument();
  });

  it('Será verificado se, ao clicar no botão `Próximo pokémon` as informações do próximo pokémon da lista são exibidas', async () => {
    const secondPokemon = pokemonList[1];

    verifyIfPokemonExistsOnScreen(firstPokemon);

    const nextButton = screen.getByRole('button', { name: NEXT_BUTTON_NAME });
    await userEvent.click(nextButton);

    verifyIfPokemonDoesNotExistOnScreen(firstPokemon);
    verifyIfPokemonExistsOnScreen(secondPokemon);
  });
});

describe('3 - Faça com que, quando o último pokémon da lista estiver sendo exibido, ao clicar no botão `Próximo pokémon` o primeiro pokémon da lista seja exibido novamente', () => {
  beforeEach(setup);

  it('Será verificado se, quando o último pokémon da lista estiver sendo exibido, ao clicar no botão `Próximo pokémon` o primeiro pokémon da lista é exibido novamente', async () => {
    for (const poke of pokemonList) {
      verifyIfPokemonExistsOnScreen(poke);

      const nextButton = screen.getByRole('button', { name: NEXT_BUTTON_NAME });
      await userEvent.click(nextButton);
    }
    verifyIfPokemonExistsOnScreen(firstPokemon);
  });
});

describe('4 - Crie dois botões de filtro, de forma que, quando algum deles for clicado, apenas os pokémon do respectivo tipo filtrado sejam exibidos', () => {
  beforeEach(setup);

  it('Será verificado se existe um botão de filtro chamado `Fire`', () => {
    const FireButton = screen.getByRole('button', { name: 'Fire' });
    expect(FireButton).toBeInTheDocument();
  });

  it('Será verificado se, ao clicar no botão de filtro `Fire`, o primeiro pokémon do tipo `Fire` será exibido imediatamente', async () => {
    const firstFireTypePokemon = pokemonList.find(({ type }) => type === 'Fire');

    verifyIfPokemonExistsOnScreen(firstPokemon);

    const FireButton = screen.getByRole('button', { name: 'Fire' });
    await userEvent.click(FireButton);

    verifyIfPokemonDoesNotExistOnScreen(firstPokemon);
    verifyIfPokemonExistsOnScreen(firstFireTypePokemon);
  });

  it('Será verificado se, com o filtro `Fire` ativo, somente os pokémon do tipo `Fire` serão exibidos ao clicar no botão `Próximo pokémon`', async () => {
    const fireTypePokemonList = pokemonList.filter(({ type }) => type === 'Fire');

    verifyIfPokemonExistsOnScreen(firstPokemon);

    const FireButton = screen.getByRole('button', { name: 'Fire' });
    await userEvent.click(FireButton);

    verifyIfPokemonDoesNotExistOnScreen(firstPokemon);

    const nextButton = screen.getByRole('button', { name: NEXT_BUTTON_NAME });

    for (const firePokemon of fireTypePokemonList) {
      verifyIfPokemonExistsOnScreen(firePokemon);
      await userEvent.click(nextButton);
    }
  });

  it('Será verificado se existe um botão de filtro chamado `Psychic`', () => {
    const PsychicButton = screen.getByRole('button', { name: 'Psychic' });
    expect(PsychicButton).toBeInTheDocument();
  });

  it('Será verificado se, ao clicar no botão de filtro `Psychic`, o primeiro pokémon do tipo `Psychic` será exibido imediatamente', async () => {
    const firstPsychicTypePokemon = pokemonList.find(({ type }) => type === 'Psychic');

    verifyIfPokemonExistsOnScreen(firstPokemon);

    const PsychicButton = screen.getByRole('button', { name: 'Psychic' });
    await userEvent.click(PsychicButton);

    verifyIfPokemonDoesNotExistOnScreen(firstPokemon);
    verifyIfPokemonExistsOnScreen(firstPsychicTypePokemon);
  });

  it('Será verificado se, com o filtro `Psychic` ativo, somente os pokémon do tipo `Psychic` serão exibidos ao clicar no botão `Próximo pokémon`', async () => {
    const psychicTypePokemonList = pokemonList.filter(({ type }) => type === 'Psychic');

    verifyIfPokemonExistsOnScreen(firstPokemon);

    const PsychicButton = screen.getByRole('button', { name: 'Psychic' });
    await userEvent.click(PsychicButton);

    verifyIfPokemonDoesNotExistOnScreen(firstPokemon);

    const nextButton = screen.getByRole('button', { name: NEXT_BUTTON_NAME });

    for (const psychicPokemon of psychicTypePokemonList) {
      verifyIfPokemonExistsOnScreen(psychicPokemon);
      await userEvent.click(nextButton);
    }
  });
});
