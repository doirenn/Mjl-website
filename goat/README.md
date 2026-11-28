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

Esta version es solo para revision. Las fotos de Pinterest no tienen licencia confirmada.

REFERENCIA SIN LICENCIA — reemplazar por foto con licencia antes del lanzamiento.

| Espacio | Seccion | Archivo | Origen |
| --- | --- | --- | --- |
| Fondo del hero | Hero | `public/images/hero.jpg` | https://i.pinimg.com/originals/11/6d/26/116d261c19c4c87392e7d7f3c1a0f8f4.jpg |
| Own The Room | Hero | `public/images/own-the-room.jpg` | https://i.pinimg.com/originals/64/29/db/6429dbb16d98cbb60b1826b15b2d6a01.jpg |
| Winter Arc | Hero | `public/images/winter-arc.jpg` | https://i.pinimg.com/originals/ad/f1/9c/adf19c5c468cf7e5a2d6a2aca5ad09f9.jpg |
| The Crown | Hero | `public/images/the-crown.jpg` | https://i.pinimg.com/736x/3a/5f/26/3a5f26ca58cf8da5f88e30ef4361d2a5.jpg |
| Step into the spotlight | Pilares | `public/images/pillar-spotlight.jpg` | https://i.pinimg.com/originals/ab/e7/2a/abe72a014e8f61f796750b8adea019d2.jpg |
| Find opportunities everywhere | Pilares | `public/images/pillar-opportunities.jpg` | https://i.pinimg.com/originals/52/a8/c4/52a8c42f7e8aa17046602ec13d0af9e1.jpg |
| Become the greatest version of yourself | Pilares | `public/images/pillar-greatest.jpg` | https://i.pinimg.com/originals/36/bf/e2/36bfe2417092051e9c57e2c2b8dc66c3.jpg |
| Retrato de Michelle J. Lamont | Meet Michelle J. Lamont | `public/images/michelle.jpg` | Foto real del repo, rama `astro-rebuild`, archivo `public/images/michelle-portrait-2023.jpg` |

Las siete fotos de Pinterest llevan esta nota: REFERENCIA SIN LICENCIA — reemplazar por foto con licencia antes del lanzamiento.

El retrato de Michelle es una foto real de ella, no una referencia de Pinterest.

La pagina lleva `noindex, nofollow` y `public/robots.txt` bloquea todo el sitio, porque este mockup no debe indexarse.

Para cambiar una foto, reemplaza el archivo en `goat/public/images/` con el mismo nombre.

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
