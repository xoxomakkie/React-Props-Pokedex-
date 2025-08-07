function Pokedex({ pokemon }) {
  return (
    <div className="Pokedex" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {pokemon.map(p => (
        <Pokecard
          key={p.id}
          id={p.id}
          name={p.name}
          type={p.type}
          base_experience={p.base_experience}
        />
      ))}
    </div>
  );
}

// Default Pokémon list if none is provided
Pokedex.defaultProps = {
  pokemon: [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]
};
