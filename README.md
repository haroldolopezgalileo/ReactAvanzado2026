# React Avanzado con TypeScript

**Universidad Galileo - Escuela Técnica**  
**Técnico Universitario en Desarrollo Full Stack - TDFS15, Cohorte 2026**

## Descripción del curso

El curso está enfocado en el desarrollo de aplicaciones React **robustas, tipadas, reutilizables y escalables** utilizando TypeScript.

A lo largo del curso se trabajan temas como componentes genéricos, hooks personalizados, manejo avanzado de props y estado, formularios con validaciones, consumo de APIs, side effects y patrones modernos de desarrollo. También se integran herramientas como **Redux Toolkit** y **Next.js**, aplicando buenas prácticas y tipificación estricta para mejorar la calidad y mantenibilidad del código.

## Objetivo general

Proporcionar a los estudiantes las herramientas y conocimientos avanzados para desarrollar aplicaciones web modernas y escalables utilizando React y TypeScript. Se aprenderá a construir componentes genéricos, gestionar el estado de forma eficiente, crear hooks personalizados y formularios tipados, y consumir APIs de manera segura. Al finalizar, los estudiantes estarán preparados para desarrollar interfaces robustas, reutilizables y mantenibles, aplicando buenas prácticas y patrones de diseño con una tipificación estricta.

## Metodología

Se impartirán clases magistrales, videotutoriales, exámenes, tareas y hojas de trabajo.

## Duración

El curso está distribuido en **20 sesiones**, impartidas los sábados a las **09:00 AM**, desde el **25 de julio de 2026** hasta el **5 de diciembre de 2026**.

---

# Contenido del curso

## 1. Iniciando TypeScript

<details>
<summary>Ver temas</summary>

- Introducción a TypeScript.
- Inferencia y sistema de tipos.
- Tipos primitivos: `string`, `number`, `boolean`, `null`, `undefined`.
- `any`, `unknown`, `never` y `void`.
- Variables y constantes.
- Funciones y callbacks.
- Arrays y tuplas.
- Objetos.
- `type` e `interface`.
- Propiedades opcionales y `readonly`.
- Union Types y Literal Types.
- Intersection Types.
- Type Narrowing.
- Discriminated Unions.
- Generics y Generic Constraints.
- Utility Types: `Partial`, `Pick`, `Omit`, `Record`, etc.
- `keyof`, `typeof` e Indexed Access Types.
- `as const`.
- `satisfies`.
- Type Assertions.
- Enums y alternativas.
- Módulos, imports y exports.
- Tipado de Promises y funciones asíncronas.
- Tipado de datos provenientes de APIs.

</details>

## 2. TypeScript avanzado en componentes React

<details>
<summary>Ver temas</summary>

- Tipado de Props.
- Props opcionales, con valores por defecto y requeridos.
- Tipado de eventos.
- Tipado de `children`.
- `ReactNode`, `ReactElement` y `ComponentProps`.
- Diseño de APIs de componentes con Discriminated Unions.
- Tipado de `useState`.
- `useReducer` con acciones discriminadas.
- Tipado moderno de refs.
- Componentes genéricos.
- Componentes reutilizables y composición.

</details>

## 3. Estado y arquitectura de estado

<details>
<summary>Ver temas</summary>

- Estado local vs global vs server state vs URL state.
- Estado derivado.
- Lifting State Up.
- Context API avanzado y tipado.
- Context + Reducer.
- Redux Toolkit.
- `createSlice` y `PayloadAction`.
- Typed Dispatch y Typed Selectors.
- Selectores y estado derivado.
- Criterios para seleccionar una estrategia de estado.

</details>

## 4. Custom Hooks y lógica reutilizable

<details>
<summary>Ver temas</summary>

- Diseño de Custom Hooks.
- Tipado de parámetros y retornos.
- Hooks genéricos.
- Separación entre UI y lógica.
- Composición de hooks.
- Reglas de Hooks.
- Testing de Custom Hooks.

</details>

## 5. Context API Avanzado con Tipado

<details>
<summary>Ver temas</summary>

- Modelo mental de `useEffect`.
- Cuándo utilizar y cuándo evitar efectos.
- Cleanup.
- Race conditions.
- `AbortController`.
- `useTransition` y `startTransition`.
- Actions.
- `useActionState`.
- `useOptimistic`.
- `useEffectEvent`.
- Suspense.

</details>

## 6. Server State y consumo avanzado de APIs

<details>
<summary>Ver temas</summary>

- TypeScript y contratos de APIs.
- Validación runtime con Zod.
- Introducción a TanStack Query.
- Queries.
- Mutations.
- Query Keys.
- Caché y stale data.
- Invalidación de queries.
- Refetching.
- Optimistic Updates.
- Paginación.
- Manejo de Loading y Error States.

</details>

## 7. Formularios avanzados

<details>
<summary>Ver temas</summary>

- React Hook Form con TypeScript.
- Zod.
- Inferencia de tipos desde schemas.
- Formularios reutilizables.
- Formularios anidados.
- Field Arrays.
- Validaciones asíncronas.
- Errores provenientes del servidor.
- Formularios y Actions.

</details>

## 8. Routing avanzado

<details>
<summary>Ver temas</summary>

- Arquitectura de rutas.
- Nested Routes y Layouts.
- Search Params como estado.
- Data Loaders.
- Route Actions.
- Pending UI.
- Error Boundaries por ruta.
- Lazy Routes.
- Autenticación y autorización avanzada.

</details>

## 9. Performance y optimización

<details>
<summary>Ver temas</summary>

- Proceso de renderizado de React.
- Identificación de renders innecesarios.
- React DevTools Profiler.
- `React.memo`.
- `useMemo` y `useCallback`.
- Cuándo **NO** memoizar.
- Code Splitting.
- Lazy Loading.
- Virtualización de listas.
- React Compiler.

</details>

## 10. Arquitectura de aplicaciones React

<details>
<summary>Ver temas</summary>

- Organización de proyectos escalables.
- Feature-based architecture.
- Separación UI / dominio / acceso a datos.
- API Layer.
- Component Composition.
- Diseño de componentes reutilizables.
- Manejo centralizado de errores.
- Error Boundaries.
- Buenas prácticas y anti-patterns.

</details>

---

# Ponderación

| Actividad | Ponderación |
|---|---:|
| Tareas | 40% |
| Laboratorios | 20% |
| Proyecto | 40% |
| **Total** | **100%** |

# Bibliografía

1. **Learning TypeScript**, 1.ª edición - Josh Goldberg.
2. **React and TypeScript**, 1.ª edición - Carl Rippon.
3. **TypeScript Quickly**, 1.ª edición - Yakov Fain y Anton Moiseev.
4. **Pro React**, 2.ª edición - Cassio de Sousa Antonio.
