import { useState } from "react"

type User = { name: string; role: string};
type Status = "idle" | "loading" | "success" | "error";
type Item = { id: number; name: string };


export function UseStateExample() {
  // El valor inicial permite inferir number y boolean; sus setters quedan restringidos a esos tipos.
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // La unión explícita modela un usuario ausente o presente; sin argumento, el estado comienza en undefined.
  // null también sería una representación posible si se eligiera como valor inicial.
  const [selectedUser, setSelectedUser] = useState<User | null>();
  // La unión de literales funciona como una máquina de estados pequeña y evita estados escritos libremente.
  const [status, setStatus] = useState<Status>("idle");
  // La anotación genérica conserva el tipo de los objetos incluso cuando el array empieza vacío.
  const [items, setItems] = useState<Array<Item>>([]);
  // const [items, setItems] = useState<Item[]>([]);

  const addItem = () => setItems((previus) => [
    // La actualización funcional parte de la colección vigente y devuelve una nueva referencia.
    ...previus,
    {id: previus.length + 1,name: `Tarea ${previus.length + 1}`},
  ]);

  return (
    <div>
      <section>
        <h3>Inferencia automática</h3>
        <p>
          count: <strong>{count}</strong> . isOpen:{" "}
          <strong>{String(isOpen)}</strong>
        </p>
        <div>
          <button onClick={()=>setCount((current)=>current - 1)}>-</button>
          <button onClick={()=>setCount(0)}>Reset</button>
          <button onClick={()=>setCount((current)=>current + 1)}>+</button>
          <button onClick={()=> setIsOpen((current)=> !current)}>Alternar</button>
        </div>
      </section>

      <section>
        <h3>Unión</h3>
        <div>
          <button
            onClick={()=>setSelectedUser({name:"user1", role: "Docente"})}
            type="button"
          >Seleccionar usuario</button>
          <button onClick={() => setStatus("success")} type="button">Marcar éxito</button>
        </div>

        <p>
          {selectedUser?.name ?? "Ningún usuario"} . {" "}
          <span>{status}</span>
        </p>
      </section>
      <section>
        <h3>Array y objetos</h3>
        <button onClick={addItem}>Agregar tarea</button>
        <ul>
          {items.map((item)=>(
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </section>
    </div>
  )

}
