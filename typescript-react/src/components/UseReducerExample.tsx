import { useReducer } from "react";


type State = { count: number };
// Esta unión discriminada relaciona cada literal type con los datos permitidos por esa acción.
type Action = 
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "set"; value: number }
  | { type: "reset" };
function assertNever(value: never): never {
  // Si se agrega una acción y se olvida su case, el compilador detecta que ya no se cumple never.
  throw new Error(`Acción no contemplada: ${String(value)}`);
}

function reducer(state: State, action: Action): State {
  // El switch estrecha action según su discriminante y mantiene una salida con la forma State.
  switch(action.type) {
    case "increment":
      return {count: state.count + 1};
    case "decrement":
      return {count: state.count - 1};
    case "set":
      return { count: action.value }
    case "reset":
      return {count: 0};
    default:
      return assertNever(action)
  }
}

export function UseReducerExample() {

  const [state, dispach] = useReducer(reducer, { count:0 })

  return (
    <div>
      <section>
        <h3>Contador con acciones explícitas</h3>
        Valor actual: {state.count}
      </section>
      <div>
        <button onClick={() => dispach({type: "decrement"})} type="button">-</button>
        <button onClick={() => dispach({ type: "reset"})} type="button">Reset</button>
        <button onClick={() => dispach({ type: "increment"})} type="button">+</button>
        <button onClick={() => dispach({ type:"set", value: 10 })}>Fijar en 10</button>
      </div>
    </div>
  );
}
