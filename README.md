# Tips Basicos de Angular

## Crear Nuevo Proyecto
```sh
ng new nombre-projecto
```

## Crear Nuevo Componente
```sh
ng g c nombrecomponente
o
ng generate component nombrecomponente
```

## Creando una Interface

```ts
export interface Persona{
  id: number;
  name: string;
  edad: int;

}
## Evento Click
```ts
(click)="onClickNameHero(elheroe);
```ts
## For
```ts
*ngFor="let elheroe of hero"
```ts
