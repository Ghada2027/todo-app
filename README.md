# Min Todo-app

## 1. Varför är .map() ett löpande band?

Jag pekar på koden:

{todos.map(function (todo) {
  return <li key={todo}>{todo}</li>;
})}

I UI skapas en <li> för varje todo i arrayen. När jag lägger till en ny todo visas den automatiskt som en ny rad.

.map() går igenom varje element och returnerar en ny array. Här blir varje todo till en JSX-rad. Utan .map() måste jag skriva varje <li> manuellt.

## 2. Varför är .filter() en sil och inte en kniv?

Jag pekar på koden:

const kvar = todos.filter(function (todo) {
  return todo !== textToRemove;
});
setTodos(kvar);

När jag klickar på Ta bort försvinner den valda todo från UI och Antal uppgifter uppdateras.

.filter() skapar en ny array med de element som klarar villkoret. splice() ändrar den gamla arrayen direkt. Därför använder vi .filter() i stället för splice() på state.

## 3. Vad gör key och vad är den inte?

Jag pekar på koden:

return <li key={todo}>{todo}</li>;

key är ett spårnings ID som React använder för att kunna matcha rätt rad när listan ändras. key är inte synlig text som användaren läser.

Med key försvinner Reacts varning om att listans barn saknar en unik key.


### Sök filtrerar UI — den muterar inte state-listan.

