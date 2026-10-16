type ContainerProps = {children: React.ReactNode};
// ReactNode admite contenido renderizable amplio; ReactElement exige un elemento JSX concreto.
type HeaderContainerProps = { header: React.ReactElement };
// ComponentProps recupera las props públicas de un elemento intrínseco, incluidos atributos y eventos del botón.
type CustomButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
}

type IconButtonProps = Omit<React.ComponentPropsWithoutRef<"button">, "children"> & { icon: React.ReactElement};
// ComponentPropsWithoutRef omite la prop ref; Omit elimina children para que el icono sea la única fuente de contenido.

function ContainerExample({children}: ContainerProps) {
  return <>{children}</>
}

function HeaderContainer({header}: HeaderContainerProps) {
  return (
    <div>
      <h4>{header}</h4>
    </div>
  )
}

function CustomButton({variant = "primary", ...buttonProps}:CustomButtonProps){
  // La composición añade una variante propia y delega el resto de la API nativa al botón real.
  return (
    <button className={variant === "primary" ? "primary-button" : ""} {...buttonProps}/>
  )
}

function IconButton({ icon, ...buttonProps}: IconButtonProps){
  return (
    <button {...buttonProps} aria-label={buttonProps["aria-label"] ?? "Icono"}>
      {icon}
    </button>
  )
}

export function ReactTypesExample() {
  return (
    <div>
      <section>
        <h3>ReactNode</h3>
        <ContainerExample>Contenido flexible</ContainerExample>
      </section>
      <section>
        <h3>ReactElement</h3>
        <HeaderContainer header={<span>Este header debe ser JSX</span>} />
      </section>
      <section>
        <h3>ComponentProps</h3>
        <CustomButton aria-label="Ejemplo" onClick={()=> undefined} variant="primary">
          Guardar
        </CustomButton>
        <IconButton icon={<span aria-hidden="true">*</span>} type="button"/>
      </section>
    </div>
  );
}
