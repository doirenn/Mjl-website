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

Al inicio del archivo esta el objeto `offer`. Los precios confirmados son:

- preventa `$777`, con el precio regular `$888` tachado
- GOAT Spotlight `$2,222`
- GOAT Legend `$5,555`

La preventa sigue hasta las primeras 15 plazas o hasta el 7 de enero, lo que ocurra primero. Despues el precio es `$888`.

Las cuotas y el deposito de `$1,000` no se muestran. Los pagos se van a revisar a mano mas adelante.

Las fechas del sample estan confirmadas: kickoff el 10 de enero de 2027, clases en vivo martes y jueves a las 7 PM ET, y The GOAT Gate el sabado 6 de febrero. La hora de ese sabado sigue en `saturdayTime` como `Saturday time to be announced`.

### Enlaces de pago

En el mismo archivo, `checkout` tiene un enlace por nivel:

- `tier1`: `#checkout-tier1`
- `tier2`: `#checkout-tier2`
- `tier3`: `#checkout-tier3`

Los botones son enlaces. No hay selector de cuotas, ni modal de reserva, ni mensaje de exito. Cuando Thinkific entregue el enlace real, se reemplaza el valor de ese nivel.

### Imagenes

Las fotos que se ven ahora son las mismas del sample `goat-sample/goat-sample.html`, guardadas en local. Para pedir un cambio, nombra el espacio o el archivo.

| Espacio | Seccion | Archivo |
| --- | --- | --- |
| Fondo del hero | Hero | `public/images/hero.jpg` |
| Own The Room | Hero | `public/images/own-the-room.jpg` |
| Winter Arc | Hero | `public/images/winter-arc.jpg` |
| The Crown | Hero | `public/images/the-crown.jpg` |
| Step into the spotlight | Pilares | `public/images/pillar-spotlight.jpg` |
| Find opportunities everywhere | Pilares | `public/images/pillar-opportunities.jpg` |
| Become the greatest version of yourself | Pilares | `public/images/pillar-greatest.jpg` |
| Retrato de Michelle J. Lamont | Meet Michelle J. Lamont | `public/images/michelle.jpg` |

La ruta de cada espacio esta en `src`, dentro de `images` en `src/data/goat.ts`. `sourceUrl` guarda la URL original del sample. Si `src` queda vacio o el archivo no existe, se ve el bloque marcado.

Para cambiar una foto, reemplaza el archivo en `goat/public/images/` con el mismo nombre, o escribe otra ruta local en `src`.

El retrato de Michelle es la foto del sample, para que se pueda ver el encuadre. Cuando haya una foto real de Michelle J. Lamont, se reemplaza `public/images/michelle.jpg`.

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
