# GOAT 2027

Landing del curso **GOAT 2027: Your Greatest Year Ever**, hecha con Astro. El texto publicado esta en ingles, como en el sample de Marian. Esta carpeta es un proyecto aparte: no forma parte del sitio HTML de la raiz.

## Como correr el proyecto

Hace falta Node.js 22 o superior. Desde la carpeta `goat/`:

```bash
npm install
npm run dev
```

La pagina local queda en http://localhost:4321

Para generar el sitio estatico:

```bash
npm run build
```

El resultado queda en `goat/dist/`.

## Donde editar precios, fechas, enlaces e imagenes

Todo esta en un solo archivo: `src/data/goat.ts`.

### Precios y fechas

Al inicio del archivo esta el objeto `offer`. Ahi se cambian:

- precios de preventa, precio posterior y planes de pago
- cupos (25 en el curso, 15 del bono, cerca de 4 en Legend)
- kickoff, primera clase y cierre de la preventa
- la hora del sabado 6 de febrero, en `saturdayTime`

Hoy esa hora dice `Saturday time to be announced`. Cuando este confirmada, se reemplaza esa frase.

Los precios y las fechas siguen sin confirmar. El texto que se ve ahora es el del sample. Las frases de la pagina leen los valores de `offer`, asi que no hace falta repetir el mismo precio en cada seccion.

### Enlaces de pago

En el mismo archivo, `checkout` tiene un enlace por nivel:

- `tier1`: `#checkout-tier1`
- `tier2`: `#checkout-tier2`
- `tier3`: `#checkout-tier3`

Cada plan de pago tiene ademas su `checkoutUrl`. Hoy los planes de un mismo nivel apuntan al mismo enlace. Cuando Thinkific entregue un enlace distinto por plan, se cambia solo ese `checkoutUrl`. El selector del nivel actualiza el boton.

Los botones son enlaces. No hay modal de reserva. La pagina no simula un pago y no muestra un mensaje de exito.

### Imagenes

Las fotos de stock del sample se quitaron. En su lugar hay bloques marcados, por ejemplo `IMAGE: Michelle J. Lamont photo`.

Para usar una foto real:

1. Guarda el archivo en `goat/public/images/`.
2. En `src/data/goat.ts`, escribe la ruta local en `src`. Ejemplo: `src: "/images/michelle.jpg"`.
3. Si `src` queda vacio, el archivo no existe, o la ruta es una URL externa, se sigue viendo el bloque marcado. Una URL de stock no se muestra.

`suggestedSrc` indica el nombre pensado para cada espacio:

| Espacio | Archivo sugerido |
| --- | --- |
| Fondo del hero | `/images/hero.jpg` |
| Own The Room | `/images/own-the-room.jpg` |
| Winter Arc | `/images/winter-arc.jpg` |
| The Crown | `/images/the-crown.jpg` |
| Pilar 1 | `/images/pillar-spotlight.jpg` |
| Pilar 2 | `/images/pillar-opportunities.jpg` |
| Pilar 3 | `/images/pillar-greatest.jpg` |
| Michelle J. Lamont | `/images/michelle.jpg` |

Reglas para las fotos:

- Personas reales y diversas: hombres, mujeres, grupos, varias razas.
- Sin celebridades.
- Ambiente navy y gold.
- La foto de Michelle tiene que ser una foto real de Michelle J. Lamont. Nunca una persona de stock presentada como ella.

El fondo del hero es opcional. Si `images.heroBackground.src` queda vacio, esa zona usa el fondo navy y gold. Las tres tarjetas del hero, los tres pilares y el retrato de Michelle muestran el bloque marcado.

### Formulario de Kit

`src/components/KitFormPlaceholder.astro` es opcional y no esta conectado. Los campos estan desactivados. No envia datos y no confirma un lugar.

Cuando exista el formulario real de Kit, se reemplaza el contenido de ese componente. No agregues un mensaje de exito inventado.

El texto visible del bloque tambien se puede ajustar en `kitForm`, dentro de `src/data/goat.ts`.

## Como desplegar en Vercel, en un proyecto aparte

Esta landing va en su propio proyecto de Vercel, para `goat.michellejlamont.com`. No cambies el proyecto, los dominios ni el DNS del sitio que ya esta en linea.

Cuando toque publicarla:

1. Crea un proyecto nuevo en Vercel con este mismo repositorio.
2. En Root Directory, elige `goat`.
3. Framework: Astro.
4. Comando de build: `npm run build`.
5. Directorio de salida: `dist`.
6. La salida es estatica. No hace falta un adaptador.

No fusiones la rama `goat-2027` en `main` sin la aprobacion de Marian. `main` es el sitio HTML que ya esta publicado.

## Estructura

- `src/pages/index.astro`: orden de las secciones
- `src/components/`: una seccion por archivo, mas el marco de imagenes y los botones
- `src/layouts/BaseLayout.astro`: titulo, descripcion, Open Graph, Twitter, canonical y favicon
- `src/data/goat.ts`: precios, fechas, enlaces, imagenes y textos
- `public/favicon.svg`: favicon de marcador
- `public/og.png`: imagen social de marcador, navy y gold, sin personas
