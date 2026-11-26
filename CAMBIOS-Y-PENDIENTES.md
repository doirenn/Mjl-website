# Cambios y pendientes

Este archivo acompaña la reconstrucción en Astro del sample HTML. Cada página tiene tres partes: que cambio respecto al sample, que falta confirmar con Marian o Michelle, y una tabla de imagenes. Marian puede responder citando el numero, por ejemplo: cambia el punto 3.

El host de las URLs canonicas y del sitemap es `https://mjl-website.vercel.app` solo para que el build genere esas etiquetas. No se configuro ningun dominio ni DNS.

## 1. Base compartida e inicio (`/`)

### a) Qué cambió respecto al sample HTML

1. El sitio paso de HTML suelto con Tailwind por CDN a un proyecto Astro en la raiz, con Tailwind instalado y el mismo sistema de color, tipografias y estructura visual del inicio.
2. La cabecera, el menu, el pie y la barra superior viven en componentes compartidos. Los enlaces internos apuntan a rutas sin `.html` (`/academy`, `/about`, `/podcast`, y el resto).
3. Cada pagina lleva titulo, descripcion, URL canonica, Open Graph y Twitter. El favicon es un monograma temporal MJL. El sitemap se genera en el build.
4. El reproductor de audio del inicio ya no simula reproduccion ni muestra un toast. Queda la ficha del episodio 311 y un espacio de embed vacio.
5. El formulario del toolkit y el modal de mentoria ya no confirman un envio falso. Los campos estan deshabilitados y marcados como placeholder.
6. El boton Instant Access del bloque de la academia apunta a `#placeholder` y se llama Placeholder: Thinkific access. No hay checkout.
7. Los enlaces de Apple Podcasts, Spotify e iHeart, y los iconos sociales, apuntan a `#placeholder` y dicen que no estan conectados.
8. Privacy Policy y Terms of Service tambien son placeholders con nombre visible.
9. Donde el sample mostraba a Michelle con fotos de stock, ahora hay fotos reales de su sitio en vivo. Las fotos de playa y de supuestos clientes siguen siendo el stock del sample.
10. El quiz conserva las dos preguntas y el resultado fijo del sample. No envia datos ni calcula un perfil distinto segun la respuesta.
11. Se elimino `index.html`. El inicio ahora es `src/pages/index.astro`. El contenido editable esta en `src/data/home.ts`, `src/data/site.ts` y `src/data/images.ts`.

### b) Pendientes para Marian o Michelle

1. Confirmar si el host canonico debe seguir siendo el preview de Vercel o cambiarlo cuando exista un dominio. No se toco DNS.
2. Reemplazar el favicon placeholder por el icono oficial.
3. Confirmar o corregir las cifras del sample: 100,000+ souls, 4.9/5 de 1,400+ reviews, Top 1% y 2M+ streams, 20+ years, Top 1%, 50K+ students y 100%.
4. Confirmar el episodio 312 de la barra y el episodio 311 de la ficha, y pasar el archivo o el embed real del audio.
5. Pasar los enlaces reales de Apple Podcasts, Spotify, iHeartRadio, Instagram, Facebook, YouTube y Spotify del pie.
6. Conectar el toolkit gratuito con Kit. Hoy el formulario no envia nada.
7. Conectar Thinkific. El acceso de la academia es un placeholder.
8. Definir a donde debe ir Apply For Private Coaching e Inquire for Events. El modal no envia la solicitud.
9. Confirmar si los testimonios de Sarah Jenkins, Marcus Vance y Elena Rostova son reales. Las caras son stock del sample, no clientes verificados.
10. Confirmar las menciones de Apple Podcasts, Spotify Top 10, iHeartRadio, Forbes Council y Mindvalley. En el sample no hay enlaces a notas.
11. Pasar Privacy Policy y Terms of Service.
12. Decidir si el quiz debe seguir mostrando siempre el mismo resultado del sample.
13. Revisar las fotos reales usadas (origen en la tabla) y decir si hay que cambiar alguna.

### Tabla de imágenes

| Slot | Seccion | Archivo | URL de origen |
| --- | --- | --- | --- |
| Avatares de prueba social | Hero | `/images/client-avatar-1.jpg` | https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces |
| Avatares de prueba social | Hero | `/images/client-avatar-2.jpg` | https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces |
| Avatares de prueba social | Hero | `/images/client-avatar-3.jpg` | https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=faces |
| Fondo de playa | Hero | `/images/sunset-beach.jpg` | https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop&q=80 |
| Retrato circular de Michelle | Hero | `/images/michelle-headshot-square.png` | https://www.michellejlamont.com/wp-content/uploads/2022/07/mjl-web-photos-square2-1.png |
| Retrato de Michelle | About, en el inicio | `/images/michelle-portrait-2023.jpg` | https://www.michellejlamont.com/wp-content/uploads/2023/09/MJL-Shoot-1-Final-02883-copia-low.jpg |
| Cara de Sarah Jenkins | Testimonios | `/images/testimonial-sarah.jpg` | https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces |
| Cara de Marcus Vance | Testimonios | `/images/testimonial-marcus.jpg` | https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=faces |
| Cara de Elena Rostova | Testimonios | `/images/testimonial-elena.jpg` | https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces |
| Imagen Open Graph | SEO del inicio | `/images/michelle-portrait-2023.jpg` | https://www.michellejlamont.com/wp-content/uploads/2023/09/MJL-Shoot-1-Final-02883-copia-low.jpg |
| Favicon | Sitio | `/favicon.svg` | Placeholder creado para esta reconstruccion. No viene del sample ni del sitio en vivo. |

## 2. Academy (`/academy`)

### a) Qué cambió respecto al sample HTML

1. La pagina `academy.html` ahora es `/academy`, con el mismo orden de secciones, precios y textos del sample.
2. La barra, los botones del encabezado y el pie usan el texto propio de esta pagina. El pie compartido sigue marcando las redes como placeholders.
3. El reproductor que simulaba el audio del lunes quedo en un espacio de embed vacio. No hay barra de progreso falsa.
4. El modal de alta, la contraseña de Thinkific y el toast de bienvenida se quitaron. Los botones de prueba y de planes apuntan a `#placeholder` y dicen que Thinkific no esta conectado.
5. El interruptor mensual o anual ya no muestra un toast. Solo resalta la tarjeta correspondiente. Los tres precios siguen visibles.
6. Las fotos de stock de la portada y de los cursos se descargaron al proyecto. Ninguna se presenta como Michelle, salvo la miniatura de Rich & Regulated, que sigue siendo stock y esta marcada para revisar.
7. Se elimino `academy.html`. El contenido editable esta en `src/data/academy.ts`.

### b) Pendientes para Marian o Michelle

1. Conectar Thinkific para la prueba de 14 dias, el plan de $22.22 al mes, el pase de $249 al ano y el circulo VIP de $499.
2. Confirmar si esos precios, la prueba gratis y el texto de facturacion del pie siguen vigentes.
3. Pasar el audio real del Monday Morning Abundance Call.
4. Confirmar 500+ miembros, los valores de curso $199, $222 y $97, y el ahorro del pase anual.
5. Confirmar los testimonios de Kara Miller, Dr. Rachel E. y Samantha T. No hay fotos reales de ellas en el sample.
6. Decidir si la miniatura de Rich & Regulated debe ser una foto real de Michelle. Hoy es stock.
7. Confirmar el enlace de Instagram `instagram.com/michellejlamont` que el sample usaba solo en esta pagina. El pie compartido lo dejo como placeholder.
8. Pasar el enlace real de la comunidad privada, si es distinto de Thinkific.

### Tabla de imágenes

| Slot | Seccion | Archivo | URL de origen |
| --- | --- | --- | --- |
| Portada del hero | Hero | `/images/forest-light.jpg` | https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1400&auto=format&fit=crop&q=80 |
| Curso 21-Day Nervous System Reset | Biblioteca | `/images/course-nervous-system.jpg` | https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=900&auto=format&fit=crop&q=80 |
| Curso Rich & Regulated | Biblioteca | `/images/course-rich-regulated.jpg` | https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80 |
| Curso Wreck This Shadow Journal | Biblioteca | `/images/course-shadow-journal.jpg` | https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=900&auto=format&fit=crop&q=80 |
| Imagen Open Graph | SEO | `/images/forest-light.jpg` | https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1400&auto=format&fit=crop&q=80 |

## 3. About (`/about`)

### a) Qué cambió respecto al sample HTML

1. `about.html` ahora es `/about`, con la historia, los pilares, la oferta y los testimonios del sample.
2. El audio de 60 segundos que simulaba una transmision quedo en un espacio de embed vacio.
3. El modal de contacto ya no confirma un envio. Muestra la categoria y un boton deshabilitado.
4. Los retratos que el sample presentaba como Michelle se reemplazaron por fotos reales del sitio en vivo. La playa y el bosque de los capitulos 1 y 2 siguen siendo stock.
5. Learn About Academy apunta a `/academy`. El episodio 310 apunta a `/podcast`.
6. Se elimino `about.html`. El contenido editable esta en `src/data/about.ts`.

### b) Pendientes para Marian o Michelle

1. Confirmar las cifras: 150K+ seguidores, 320+ episodios, 20+ anos, Top 1%, 750,000+ descargas y 1,200+ resenas.
2. Pasar el audio real de la transmision de 60 segundos.
3. Confirmar los testimonios de Karen Miller, Daniel Ramirez y Amanda Lewis.
4. Decidir a donde debe ir la solicitud de mentoria, speaking y retiros. Hoy no se envia.
5. Revisar si el relato del orfanato, The Great Erasure y los destinos Sedona, Bali y Tulum deben quedarse tal como estan en el sample.
6. Elegir si el retrato principal y el del capitulo 3 son las fotos correctas.

### Tabla de imágenes

| Slot | Seccion | Archivo | URL de origen |
| --- | --- | --- | --- |
| Retrato principal | Hero | `/images/michelle-portrait-2023.jpg` | https://www.michellejlamont.com/wp-content/uploads/2023/09/MJL-Shoot-1-Final-02883-copia-low.jpg |
| Capitulo 01 | Historia | `/images/sunset-beach.jpg` | https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop&q=80 |
| Capitulo 02 | Historia | `/images/forest-light.jpg` | https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1400&auto=format&fit=crop&q=80 |
| Capitulo 03 | Historia | `/images/michelle-portrait-2022.jpg` | https://www.michellejlamont.com/wp-content/uploads/2022/08/Michelle-J-Lamont-00503.jpg |
| Imagen Open Graph | SEO | `/images/michelle-portrait-2023.jpg` | https://www.michellejlamont.com/wp-content/uploads/2023/09/MJL-Shoot-1-Final-02883-copia-low.jpg |

## 4. Podcast (`/podcast`)

### a) Qué cambió respecto al sample HTML

1. `podcast.html` ahora es `/podcast`, con el hero, el episodio destacado, los seis episodios del sample, la cita, la bio, las resenas y el bloque de academia.
2. Se quitaron los iframes de YouTube, incluido el video de relleno. Quedan espacios de embed vacios para el episodio 312 y para el video destacado.
3. El reproductor que simulaba avance, el copiado falso del RSS y el toast de exito desaparecieron.
4. Apple, Spotify, YouTube e iHeart apuntan a `#placeholder`.
5. La busqueda y los filtros si recorren los seis episodios reales del sample. No hay un boton de cargar mas que finja episodios nuevos.
6. El formulario de invitados esta deshabilitado.
7. El retrato de Michelle en la portada y en la bio es foto real del sitio en vivo. El resto de imagenes de episodios son el stock del sample.
8. Se elimino `podcast.html`. El contenido editable esta en `src/data/podcast.ts`.

### b) Pendientes para Marian o Michelle

1. Pasar los enlaces reales de Apple Podcasts, Spotify, YouTube, iHeart y el RSS.
2. Pasar el video y el audio del episodio destacado. El sample mezclaba el titulo de la barra (Ep. 312, Erased For 40 Years) con la ficha 312 (Reclaiming Your Energetic Space) y con el episodio 310 (Erased For 40 Years). Hay que confirmar cual es cual.
3. Confirmar 750K+ descargas, Top 1%, 4.9 en Apple, 300+ episodios, 115+ paises y el horario Tuesday 6 AM EST.
4. Confirmar las resenas de Jessica L., David K. y Maria R.
5. Conectar el formulario de invitados, sponsors y prensa.
6. Decidir si el archivo debe listar solo estos seis episodios hasta tener el catalogo real.

### Tabla de imágenes

| Slot | Seccion | Archivo | URL de origen |
| --- | --- | --- | --- |
| Fondo de la portada del show | Hero | `/images/forest-light.jpg` | https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1400&auto=format&fit=crop&q=80 |
| Retrato circular de Michelle | Hero | `/images/michelle-headshot-square.png` | https://www.michellejlamont.com/wp-content/uploads/2022/07/mjl-web-photos-square2-1.png |
| Video destacado | Episodio landmark | `/images/episode-movement.jpg` | https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80 |
| Episodios 312 y fondo de cita | Lista y cita | `/images/forest-light.jpg` y `/images/sunset-beach.jpg` | Stock del sample, ya citado arriba y en el inicio |
| Episodio 311 | Lista | `/images/course-nervous-system.jpg` | https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=900&auto=format&fit=crop&q=80 |
| Episodio 309 | Lista | `/images/episode-love.jpg` | https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=900&auto=format&fit=crop&q=80 |
| Episodio 308 | Lista | `/images/course-shadow-journal.jpg` | https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=900&auto=format&fit=crop&q=80 |
| Episodio 307 | Lista | `/images/episode-stillness.jpg` | https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=900&auto=format&fit=crop&q=80 |
| Bio de la anfitriona | About your host | `/images/michelle-portrait-2023.jpg` | https://www.michellejlamont.com/wp-content/uploads/2023/09/MJL-Shoot-1-Final-02883-copia-low.jpg |

## 5. Sacred Containers (`/sacred-containers`)

### a) Qué cambió respecto al sample HTML

1. `sacred-containers.html` ahora es `/sacred-containers`, con los tres niveles, Voxer, los testimonios y la solicitud del sample.
2. El audio de muestra de 01:15 que se simulaba quedo en un espacio de embed vacio.
3. La solicitud ya no confirma un envio. Los botones de cada nivel bajan al formulario placeholder.
4. Donde el sample mostraba a Michelle con stock, hay fotos reales del sitio en vivo. Las tarjetas de Foundations y Acceleration siguen con paisaje de stock. Mastery usa una cara de stock que el sample no identificaba como Michelle.
5. Se elimino `sacred-containers.html`. El contenido editable esta en `src/data/sacred-containers.ts`.

### b) Pendientes para Marian o Michelle

1. Confirmar que solo hay 3 clientes a la vez y que los tres niveles (4 semanas, 3 meses, 6 meses) siguen vigentes. El sample no publica precios.
2. Pasar el audio real del voice memo de Voxer.
3. Conectar la solicitud confidencial. Hoy no se envia.
4. Confirmar los testimonios de R. Henderson, Elena S. y Dr. Miriam L.
5. Decidir si Mastery debe llevar una foto real de Michelle en lugar de la cara de stock.
6. Confirmar el cupo del trimestre: "Only 3 client apertures open for the upcoming quarter".

### Tabla de imágenes

| Slot | Seccion | Archivo | URL de origen |
| --- | --- | --- | --- |
| Retrato junto al agua | Hero | `/images/michelle-portrait-2022.jpg` | https://www.michellejlamont.com/wp-content/uploads/2022/08/Michelle-J-Lamont-00503.jpg |
| Retrato | Introduccion | `/images/michelle-portrait-2023.jpg` | https://www.michellejlamont.com/wp-content/uploads/2023/09/MJL-Shoot-1-Final-02883-copia-low.jpg |
| Foundations | Niveles | `/images/forest-light.jpg` | https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1400&auto=format&fit=crop&q=80 |
| Acceleration | Niveles | `/images/sunset-beach.jpg` | https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop&q=80 |
| Mastery | Niveles | `/images/client-avatar-1.jpg` | https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces |
| Voxer | Acceso diario | `/images/michelle-headshot-square.png` | https://www.michellejlamont.com/wp-content/uploads/2022/07/mjl-web-photos-square2-1.png |

## 6. The Immersion (`/the-immersion`)

### a) Qué cambió respecto al sample HTML

1. `the-immersion.html` ahora es `/the-immersion`, con el dia, lo incluido, los tres planes y las condiciones del sample.
2. El audio de 432Hz que se simulaba (03:33) quedo en un espacio de embed vacio.
3. Los botones de pago y la solicitud no cobran ni confirman un envio. Dicen placeholder.
4. La foto que el sample presentaba como Michelle en el agua se reemplazo por una foto real. El atardecer y el bosque siguen siendo stock.
5. Se elimino `the-immersion.html`. El contenido editable esta en `src/data/the-immersion.ts`.

### b) Pendientes para Marian o Michelle

1. Confirmar precios: $6,500, 2 x $3,400 y 3 x $2,350, el bono de Voxer de $2,500 y el valor de MMA de $1,997.
2. Confirmar que solo hay 2 fechas al mes, que los pagos no son reembolsables y que el viaje corre por cuenta del cliente.
3. Conectar el checkout y la solicitud.
4. Pasar el audio real de 432Hz.
5. Confirmar el testimonio de G. Reynolds y la cifra de $1.2M.
6. Decidir si el dia virtual por Zoom debe seguir en el formulario.
7. La foto de stock del farol en la playa (unsplash 1509198397868) no se uso como retrato de Michelle. Decir si hay que colocarla.

### Tabla de imágenes

| Slot | Seccion | Archivo | URL de origen |
| --- | --- | --- | --- |
| Fondo del hero | Hero | `/images/sunset-beach.jpg` | https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop&q=80 |
| Cuencos | Audio 432Hz | `/images/forest-light.jpg` | https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1400&auto=format&fit=crop&q=80 |
| Retrato de Michelle | Testimonio | `/images/michelle-portrait-2022.jpg` | https://www.michellejlamont.com/wp-content/uploads/2022/08/Michelle-J-Lamont-00503.jpg |

## 7. The Portal (`/the-portal`)

### a) Qué cambió respecto al sample HTML

1. `the-portal.html` ahora es `/the-portal`, con las siete etapas, lo incluido, los tres planes y las condiciones del sample.
2. El audio de sonido y agua (04:12 en el sample) quedo en un espacio de embed vacio.
3. Los botones de pago y la solicitud no cobran ni confirman un envio.
4. Se elimino `the-portal.html`. El contenido editable esta en `src/data/the-portal.ts`.

### b) Pendientes para Marian o Michelle

1. Confirmar precios: $7,500, 2 x $3,900 y 3 x $2,700, el bono de Voxer de $2,500 y el valor de MMA de $1,997.
2. Confirmar que solo hay 1 fecha al mes y que los pagos no son reembolsables.
3. Conectar el checkout y la solicitud.
4. Pasar el audio real de 432Hz y agua.
5. Confirmar si el dia virtual por estudio debe seguir en el formulario.
6. La foto de stock que el sample rotulo como sala con velas es un retrato de otra persona. Decir si se reemplaza por una foto real del santuario.

### Tabla de imágenes

| Slot | Seccion | Archivo | URL de origen |
| --- | --- | --- | --- |
| Fondo del hero | Hero | `/images/sunset-beach.jpg` | https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop&q=80 |
| Sonido y agua | Audio | `/images/forest-light.jpg` | https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1400&auto=format&fit=crop&q=80 |
| Santuario | Lo incluido | `/images/course-rich-regulated.jpg` | https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80 |

## 8. Success Stories (`/success-stories`)

### a) Qué cambió respecto al sample HTML

1. `success-stories.html` ahora es `/success-stories`, con las seis historias, las cifras, las preguntas y el texto explicativo del sample.
2. El formulario para compartir una historia no publica nada.
3. El calendario de octubre 2026 con horarios del 22 de octubre queda marcado como muestra del HTML. No reserva una llamada.
4. Los filtros si agrupan las historias del sample. Jessica T. aparece en abundancia y en amor.
5. Se elimino `success-stories.html`. El contenido editable esta en `src/data/success-stories.ts`.

### b) Pendientes para Marian o Michelle

1. Confirmar 500+ vidas, 97% de breakthrough y $2M+ manifestados.
2. Confirmar las seis historias y si los nombres pueden publicarse.
3. Conectar el envio de testimonios.
4. Conectar el calendario real de la llamada de 15 minutos. Los horarios del sample no estan vivos.
5. El sample no traia fotos de estas personas. Decir si hay que agregar alguna.

### Tabla de imágenes

| Slot | Seccion | Archivo | URL de origen |
| --- | --- | --- | --- |
| Sin fotos | Toda la pagina | Ninguno | El sample de esta pagina no usaba imagenes de personas en el texto extraido. |

## 10. Speaking (`/speaking`)

### a) Qué cambió respecto al sample HTML

1. `speaking.html` ahora es `/speaking`, con los formatos, los tres temas, el rider y la solicitud del sample.
2. Las fotos de stock de Oprah y Kim se reemplazaron por las fotos reales del sitio en vivo.
3. El reel de YouTube de relleno se quito. Queda un espacio de embed vacio. El sample decia 03:45 en HD.
4. El PDF del one-sheet y las fechas de gira apuntan a `#placeholder`.
5. La solicitud de llamada no se envia.
6. El contenido editable esta en `src/data/speaking.ts`. `speaking.html` se elimina en este commit.

### b) Pendientes para Marian o Michelle

1. Confirmar que las fotos con Oprah y Kim pueden usarse, y el texto que las acompana.
2. Pasar el reel real y el PDF del one-sheet.
3. Confirmar audiencias de 50 a 5,000+, 100% de 5 estrellas y la reserva 2026-2027.
4. Conectar la solicitud de speaking y las fechas de gira.
5. Confirmar Apple Podcasts #1, Spotify Global, iHeartRadio, Forbes y Conscious Life Expo.

### Tabla de imágenes

| Slot | Seccion | Archivo | URL de origen |
| --- | --- | --- | --- |
| Retrato | Hero | `/images/michelle-portrait-2023.jpg` | https://www.michellejlamont.com/wp-content/uploads/2023/09/MJL-Shoot-1-Final-02883-copia-low.jpg |
| Michelle y Oprah | Autoridad | `/images/michelle-with-oprah.jpg` | https://www.michellejlamont.com/wp-content/uploads/2022/04/Michelle-j-lamont-Oprah.jpg |
| Michelle y Kim Kardashian | Autoridad | `/images/michelle-with-kim-kardashian.jpg` | https://www.michellejlamont.com/wp-content/uploads/2022/04/Michelle-j-lamont-kim-kardashian.jpg |

## 12. Contact (`/contact`)

### a) Qué cambió respecto al sample HTML

1. `contact.html` ahora es `/contact`, con el correo, el horario, los departamentos y las preguntas del sample.
2. El formulario no envia el mensaje y no muestra un exito falso.
3. El video de YouTube de relleno se quito. Queda un espacio de embed vacio. El sample marcaba 02:18 / 05:40.
4. El calendario de auditoria de octubre 2026 queda como texto de muestra, no como reserva.
5. El retrato de Michelle es una foto real del sitio en vivo.
6. Se elimino `contact.html`. El contenido editable esta en `src/data/contact.ts`.

### b) Pendientes para Marian o Michelle

1. Confirmar el correo info@michellejlamont.com, el horario de lunes a viernes de 9:00 a 17:00 CST y la respuesta en menos de 24 horas habiles.
2. Confirmar el usuario de Instagram @michellejlamont y pasar el enlace.
3. Conectar el formulario con el correo o con Kit.
4. Pasar el video real de la historia de Michelle.
5. Conectar el calendario de la auditoria gratuita.
6. Confirmar la mencion de entrevistas con Oprah y Kim y la cifra de 700,000 descargas en el Top 100.

### Tabla de imágenes

| Slot | Seccion | Archivo | URL de origen |
| --- | --- | --- | --- |
| Fondo | Hero | `/images/sunset-beach.jpg` | https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop&q=80 |
| Retrato de Michelle | Meet Michelle | `/images/michelle-portrait-2023.jpg` | https://www.michellejlamont.com/wp-content/uploads/2023/09/MJL-Shoot-1-Final-02883-copia-low.jpg |
