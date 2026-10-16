
type UserCardProps = {
  // Las props forman un contrato: cada instancia debe aportar tipos compatibles con esta estructura.
  id: number;
  name: string;
  age: number;
  active: boolean;
}

function UserCard({id, name, age, active}: UserCardProps) {
  return (
    <article>
      <h4>
        {name}{" "}
        <span>{active ? "activo": "inactivo"}</span>
      </h4>
      <p>
        ID #{id} - {age} años
      </p>
    </article>
  )
}

export function TypedPropsExample() {
  return (
    <div>
      <section>
        <h3>Props como contrato</h3>
        <div>
          <UserCard id={1} name="Usuario 1" age={25} active/>
          <UserCard id={2} name="Usuario 2" age={31} active={false} />
        </div>
      </section>
    </div>
  );
}
