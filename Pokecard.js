function Pokecard({ id, name, type, base_experience }) {
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="Pokecard" style={{ border: "1px solid #ddd", borderRadius: 6, padding: 10, margin: 10, width: 150, textAlign: "center" }}>
      <h3>{name}</h3>
      <img src={imgSrc} alt={name} />
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
}
