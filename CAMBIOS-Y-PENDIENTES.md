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
