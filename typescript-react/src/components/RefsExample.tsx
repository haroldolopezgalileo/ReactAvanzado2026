import { useImperativeHandle, useRef } from "react";


type InputHandle = {focus: () => void; select: () => void}

// La ref pública expone solo acciones; el input DOM queda encapsulado dentro del componente.
type InputProps = {label: string; ref?: React.Ref<InputHandle>}

function FocusableInput({ label, ref }: InputProps) {
  // Esta ref interna apunta al elemento HTML; no es la misma interfaz que reciben los consumidores.
  const internalInputRef = useRef<HTMLInputElement>(null);
  // useImperativeHandle traduce la ref pública en una API pequeña que delega en el elemento interno.
  useImperativeHandle(ref, () => ({
    focus: () => internalInputRef.current?.focus(),
    select: () => internalInputRef.current?.select()
  }));
  return (
    <label>
      {label}
      <input ref={internalInputRef} />
    </label>
  );
}

export function RefsExample() {
  const focusableInputRef = useRef<InputHandle>(null);

  return (
    <div>
      <section>
        <h3>Ref como prop en React 19</h3>
        <FocusableInput label="Campo enfocable" ref={focusableInputRef} />
        <div>
          <button onClick={() => focusableInputRef.current?.focus()}>Enfocar input</button>
          <button onClick={() => focusableInputRef.current?.select()}>Seleccionar texto</button>
        </div>
      </section>
    </div>
  )
}
