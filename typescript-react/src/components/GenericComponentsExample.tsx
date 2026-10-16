
type User = { id: number; name: string};
type Product = {sku: string; title: string};

type GenericListProps<T> = {
  // El mismo T relaciona los elementos con sus claves, su representación y el valor recibido al seleccionar.
  items: T[];
  getKey: (item:T) => React.Key;
  renderItem: (item:T) => React.ReactNode;
  onSelect?: (item:T) => void
}

function GenericList<T>({ items, getKey, renderItem, onSelect}: GenericListProps<T>) {
  // TypeScript infiere T desde items y exige que las demás funciones trabajen con ese mismo tipo.
  return (
    <ul>
      {items.map((item) => (
        <li key={getKey(item)}>
          <button onClick={() => onSelect?.(item)} type="button">
            {renderItem(item)}
          </button>
        </li>
      ))}
    </ul>
  )
}

export function GenericComponentsExample() {
  const users: User[] = [
    { id: 1, name: "Usuario 1"},
    { id: 2, name: "Usuario 2"},
  ];

  const products:Product[] = [
    { sku: "TS-01", title: "Curso de Typescript"},
    { sku: "RE-10", title: "Guía React 19" },
  ]

  return (
    <div>
      <section>
        <h3>Generic List</h3>
        <GenericList 
          items={users}
          getKey={(user) => user.id}
          renderItem={(user) => (
            <span>User #{user.id}:{user.name}</span>
          )}
          onSelect={(user) => window.alert(`Usuario: ${user.name}`)}
        />

        <GenericList
          items={products}
          getKey={product => product.sku}
          renderItem={product => (
            <span>
              {product.sku}: {product.title}
            </span>
          )}
        />
      </section>
    </div>
  )
  
}
