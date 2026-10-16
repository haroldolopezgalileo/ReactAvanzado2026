import { useState } from "react";

export function TypedEventsExample() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [isImportant, setIsImportant] = useState(false);

  // FormEvent identifica el formulario y preventDefault evita su envío/navegación tradicional.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(query);
  }

  // currentTarget es el input al que está asociado el handler; value es el dato del DOM que pasa a ser estado.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.currentTarget.value);
  // KeyboardEvent permite estrechar por la tecla pulsada antes de actualizar el resultado.
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Enter") setSubmitted(event.currentTarget.value);
  }
  // El alias de handler expresa la misma relación evento-elemento en una forma reutilizable.
  const handleCheck: React.ChangeEventHandler<HTMLInputElement> = (event) => setIsImportant(event.currentTarget.checked);

  return (
    <div>
      <section>
        <h3>Eventos del DOM</h3>
        <form onSubmit={handleSubmit}>
          <input value={query} onChange={handleChange} onKeyDown={handleKeyDown}/>
          <input checked={isImportant} onChange={handleCheck} type="checkbox" />
        </form>
        <p>REsultado: {submitted || "-"} {isImportant && "Es importante"}</p>
      </section>
    </div>
  );

}
