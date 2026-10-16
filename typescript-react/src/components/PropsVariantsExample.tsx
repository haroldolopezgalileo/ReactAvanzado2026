
type ButtonProps = {
  // Las uniones de literales restringen las variantes válidas; las props opcionales reciben valores por defecto al desestructurar.
  label: string;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

function Button({label, disabled = false, variant = "primary"}: ButtonProps ) {
  return (
    <button
      className={variant === "primary" ? "primary-button" : ""}
      disabled={disabled}
      type="button"
    >
      {label}
    </button>
  )
}

type ProfileCardProps = { name:string; role?: string};
function ProfileCard({name, role="Estudiante"}:ProfileCardProps) {
  // El valor por defecto solo se usa cuando role es undefined; sigue siendo una prop opcional para quien consume el componente.
  return (
    <div>
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
  )
}

type AlertProps = {message: string, tone?: "info" | "warning"}
function Alert({message, tone="info"}:AlertProps){
  return (
    <div>
      <strong>{tone}:</strong> {message}
    </div>
  );
}

export function PropsVariantsExample() {
  return (
    <div>
      <section>
        <h3>Button</h3>
        <div>
          <Button label="Guardar"/>
          <Button label="Cancelar" variant="secondary"/>
          <Button label="Enviando" disabled />
          <Button label="Otro" variant="primary" />
        </div>
      </section>
      <section>
        <ProfileCard name="Perfil" />
        <Alert message="El perfil está completo." />
      </section>
    </div>
  );
}
