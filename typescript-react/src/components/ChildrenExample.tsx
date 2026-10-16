import { useState } from "react";


type ContainerProps = { children: React.ReactNode };

// ReactNode cubre cualquier contenido que React puede renderizar, incluidos texto, números, fragmentos y elementos.
function LayoutSection({ children }: ContainerProps) {
  return <div>{children}</div>
}

function Panel({children}: ContainerProps) {
  return <section>{children}</section>
}

function Card({children}: ContainerProps) {
  return <article>{children}</article>
}

type DataPanelProps = {
  // Aquí children no es contenido ya creado: es una función que recibe el estado que controla este componente.
  children: (loading:boolean) => React.ReactNode
}
function DataPanel({children}: DataPanelProps) {
  const [loading, setLoading] = useState(false);
  // La actualización funcional lee el estado más reciente, algo importante cuando varias actualizaciones se agrupan.
  return (
    <section>
      <h3>Render prop</h3>
      <button onClick={()=>setLoading(value => !value)} type="button">
        {loading ? "Terminar carga":"Simular carga"}
      </button>
      <div>{children(loading)}</div>
    </section>
  )
}

export function ChildrenExample() {
  return (
    <LayoutSection>
      <Panel>
        <h3>Children es una prop</h3>
        <Card>
          <h4>Contenido JSX</h4>
          <p>Texto y elementos pueden viajar como children</p>
        </Card>
        <Card>
          {42} . <>Un fragment también funciona</>
        </Card>
      </Panel>
      <DataPanel>{(loading) => (loading ? "Cargando..." : "Datos listos")}</DataPanel>
    </LayoutSection>
  )
}
