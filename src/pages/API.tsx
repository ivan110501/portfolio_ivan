import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Select from "react-select";

type PokemonsResponseType = {
  count: number;
  next: string;
  results: PokemonType[];
};

type PokemonType = {
  name: string;
  url: string;
};

type ActivePokemonType = {
  sprites: {
    front_default: string;
  };
};

// ItemPerPage
type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: "10", label: "10 Pokemons" },
  { value: "20", label: "20 Pokemons" },
  { value: "100", label: "100 Pokemons" },
];

const defaultLimit = "10";

const API = () => {
  const [data, setData] = useState<PokemonType[]>([]);
  const [limit, setLimit] = useState<string | undefined>("10");
  const [activePokemon, setActivePokemon] = useState<
    ActivePokemonType | undefined
  >(undefined);

  const getData = async (limit: string | undefined) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=${
          limit ? limit : defaultLimit
        }`
      );
      const res: PokemonsResponseType = await response.json();
      setData(res.results);
    } catch (err) {
      console.log(err);
    }
  };

  const getPokemonData = async (pokemon: string) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      const res: ActivePokemonType = await response.json();
      setActivePokemon(res);
    } catch (err) {
      console.log(err);
    }
  };

  function scrolldiv() {
    const elem = document.getElementById("pokemon");
    if (elem) {
      elem.scrollIntoView();
    }
  }

  useEffect(() => {
    getData(limit);
  }, [limit]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}></div>
      <div>
        <h1>Pokemon</h1>
        <div>
          On this page I used Pokemon API to demonstrate my work with APIs
        </div>
        <br />
        <div>Select how many pokemons you want to choose from</div>
        <br />
        <Select
          onChange={(e) => {
            setLimit(e?.value);
          }}
          options={options}
        />
        <br />
        <div>
          Click on pokemon button to show how it looks like. Sorry for bad
          picture quality, that's APIs fault :(
        </div>
        <br />
        <div>
          {data.map((pokemon) => (
            <button
              className="pokebutton"
              onClick={(e) => {
                const test = e.currentTarget as HTMLButtonElement;
                getPokemonData(test.innerHTML);
                scrolldiv();
              }}
              key={pokemon.name}
            >
              {pokemon.name}
            </button>
          ))}
        </div>
        <div>
          <img
            style={{ width: "20rem" }}
            src={activePokemon?.sprites.front_default}
            alt=""
            id="pokemon"
          />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default API;
