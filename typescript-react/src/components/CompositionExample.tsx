type ChildrenProps = {
  // El componente padre conserva la responsabilidad de decidir el contenido y cada parte solo lo aloja.
  children: React.ReactNode;
}

// ComponentPropsWithRef recupera la API del botón incluyendo su ref; Omit elimina className para redefinirla localmente.
type ButtonProps = Omit<React.ComponentPropsWithRef<"button">,
  "className"> & {
    variant?: "primary" | "quiet";
    className?: string
  }


function Card({ children }: ChildrenProps) {
  return <article>{children}</article>
}

function CardHeader({ children }: ChildrenProps){
  return (
    <header>
      <h4>{children}</h4>
    </header>
  )
}

function CardContent({children}: ChildrenProps ){
  return <div>{children}</div>
}

function CardFooter({ children }: ChildrenProps ){
  return <footer>{children}</footer>;
}

function ActionButton({ variant = "primary", className, ...props }: ButtonProps){
  // `...props` delega al botón atributos y eventos nativos; el valor por defecto mantiene la variante opcional.
  return (
    <button 
      {...props}
      className={`${variant === "primary" ? "primary-button":""} ${className ?? ""}`}
    />
  )
}

export function CompositionExample() {
  return (
    <div>
      <section>
        <h3>Composición por partes</h3>
        <Card>
          <CardHeader>Resumen del curso</CardHeader>
          <CardContent>
            <p>Los subcomponentes expresan la estructura sin conocer todas las necesidades futuras</p>
          </CardContent>
          
          <CardFooter>
            <ActionButton type="button">
              Continuar
            </ActionButton>
          </CardFooter>
          
        </Card>
      </section>
    </div>
  )
}
