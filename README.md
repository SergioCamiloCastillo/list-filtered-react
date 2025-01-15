## Descripción
Esta proyecto es una aplicación web realizada en React y TypeScript, presentando una lista de usuario, con opción de busqueda, ya sea por nombre o por email, en donde cada usuario tiene una información mas detallada y se puede ver haciendo clic en cada uno.

## Decisión de Diseño
La estructura que usa la aplicación esta basada en componentes reutilizables, y algo de arquitectura limpia con la carpeta core, que separa la responsabilidad y la independencia de la implementacion. 
Dentro de la aplicación algunos componentes principales son SearchBar (Componente que ayuda a buscar usuarios dentro de la lista), UserList(Componente que muestra la lista de usuarios, mostrando en forma de tarjetas la foto, el nombre y el email), UserDetail(Al hacer click en el usuario, se desplegara una card mas detallada con mas información del usuario), todos estos componentes son flexibles y escalables permitiendo personalizacion.

Para la optimización, se uso useMemo, para evitar renderizados innecesarios cuando la lista de usuarios no cambia o en el filtro de búsqueda. Ademas, la aplicacion se adapta a distintos tamaños de pantalla, lo que permite una buena experiencia de usuario en dispositivos móviles o de escritorio.

## Garantizar buena UI/UX
El diseño de la aplicación es limpio y minimalista, podemos encontrar como primera información, informacion relevante como nombre, email y la foto, haciendo la interfaz mas personal y atractiva.
Tiene elementos con efecto hover, lo que permite identificar visualmente que elementos va a seleccionar o que accion esta realizando, todo esto con una animacion no saturante. En la lista de usuarios, se encuentra un icono de flecha, indicando que se puede hacer click, con el fin de mostrar mas información.
En la parte de accesibilidad, de uso la propiedad "aria-label", en diferentes elementos de HTML, que nos asegura que sean accesibles para persona con alguna discapacidad visual.

## Proyecto escalable
En el momento que hayan listas mas grandes, se podria crear una paginación, que divida la lista de usuarios en varias páginas, reduciendo la carga inicial y mejora en el rendimiento de la aplicación, junto con esto, implemementar lazy loading en las imagenes de los usuarios, mejorando la velocidad en la carga. En el filtro se podria usar un debouncer, que nos ayude a evitar hacer demasiadas peticiones cuando se ingrese algun valor en el input de busqueda. Si se usa alguna API, junto con la paginación, se podria traer los datos de manera dinámica, para que no traiga todos los usuarios, si no se necesitan renderizar.

## Instalación
Cuando abra el proyecto en la raiz, ejecute los siguientes comandos:

* npm install
* npm run dev
