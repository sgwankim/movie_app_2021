function Food({fav}) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello!!</h1>
      <Food fav="potato"/>
      <Food fav="pizza"/>
      <Food fav="chicken"/>
      <Food fav="snack"/>
    </div>
  );
}

export default App;
