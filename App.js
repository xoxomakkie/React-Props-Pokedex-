function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>My Pokedex</h1>
      <Pokedex />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
