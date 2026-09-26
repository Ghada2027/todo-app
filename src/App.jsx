import { useState } from "react";

// VANDALISERAD — flera fel samtidigt
function App() {
  const [todos, setTodos] = useState(["A", "B", "C"]);
  const [draft, setDraft] = useState("");

  /*function handleAdd() {
    todos.push(draft);
    setDraft("");
  }*/
 /*Jag ersatte push med en ny array
  när jag lägger till en todo.
  trim och förhindrade att en tom text*/

    function handleAdd() {
    const text = draft.trim();
    if (text === "") return;
    setTodos([...todos, text]);
    setDraft("");
    }

  /*function handleRemove(i) {
    todos.splice(i, 1);
    setTodos(todos);
  }*/
 /*Jag ersatte splice med filter när 
 jag tar bort en todo.*/
 function handleRemove(i) {
  const kvar = todos.filter(function (todo) {
    return todo !== todos[i];
  });
  setTodos(kvar);
}
  return (
    <main>
      <input value={draft} onChange={function (e) {
        setDraft(e.target.value);
      }} />
      <button onClick={handleAdd}>Lägg till</button>
      <ul>
        {todos.map(function (todo) {
          /*Jag lade till return i map 
          och key så att varje todo kan visas.*/
          //<li>{todo}</li>
           return <li key={todo}>{todo}
             <button
           onClick={function () {
             handleRemove(1);
          }}
          >
         Ta bort
          </button></li>;
        })}
      </ul>
    </main>
  );/*Jag tog bort den manuella 
        raden med todos[0].*/
}
export default App;