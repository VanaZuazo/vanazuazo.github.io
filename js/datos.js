const ENLACES = {
  neocities: "https://vanacode.neocities.org/",
  behance: "https://www.behance.net/",
  github: "https://github.com/",
  instagram: "https://www.instagram.com/",
  tiktok: "https://www.tiktok.com/"
};

const proyectos = [
  {
    id: "portafolio", nombre: "Este portafolio", icono: "♥", tipo: "Diseño web · UX/UI",
    etiquetas: ["HTML", "CSS", "JS", "UX/UI"],
    resumen: "Mi portafolio con forma de perfil de hi5, chat de MSN incluido.",
    enlaces: [["Ver el código en GitHub", "https://github.com/"]],
    bloques: [
      ["El problema", ["Casi todos los portafolios se ven iguales: fondo blanco, tarjetas redondeadas y un \"Hola, soy...\" gigante. Quería uno que mostrara mi criterio de diseño y mi personalidad, sin que un cliente se pierda buscando mis proyectos."]],
      ["En qué me inspiré", ["En las redes de los 2000: hi5, MySpace y el MSN. Eran desordenadas, pero cada perfil se sentía de alguien."]],
      ["Decisiones que tomé", [
        "Usé la estructura de un perfil de hi5 porque ya ordena la información como un portafolio: foto, datos, contadores y amigos, que aquí son mis proyectos.",
        "Me quedé con negro y rosado. La primera prueba con toda mi paleta se veía exagerada.",
        "Pixelify Sans para los títulos y Atkinson Hyperlegible para los textos, que se lee bien en colores sobre fondo negro.",
        "El contacto es un chat de MSN con zumbido y guiños. Si el sistema pide reducir movimiento, las animaciones se apagan.",
        "Los testimonios de clientes aparecen como comentarios de hi5."
      ]],
      ["Cómo lo hice", ["Hice una primera versión con cajas grandes y todos los colores, y no funcionó. La rehice estudiando capturas reales de hi5, y después fui ajustando detalles: el reproductor, el ícono flotante del chat y el responsive para PC, laptop, tableta y celular."]],
      ["Qué aprendí", []]
    ]
  },
  {
    id: "asistente", nombre: "Asistente de estaciones", icono: "☀", tipo: "Producto · UX/UI · Electron",
    etiquetas: ["Electron", "UX/UI", "Producto"],
    resumen: "Asistente de productividad que usa las estaciones como metáfora de las fases del ciclo.",
    enlaces: [],
    bloques: [
      ["El problema", ["Las apps de productividad asumen que rindes igual todos los días. Yo noté que mi energía cambia según la fase de mi ciclo, y quise un sistema que lo tome en cuenta. Es mi experiencia, no una regla médica."]],
      ["En qué me inspiré", []], ["Decisiones que tomé", []], ["Cómo lo hice", []], ["Qué aprendí", []]
    ]
  },
  {
    id: "goodreads", nombre: "Rediseño Goodreads", icono: "▤", tipo: "UX/UI · Investigación",
    etiquetas: ["UX/UI", "Investigación", "Prototipo"],
    resumen: "Cuando las redes eran sociales: Goodreads como comunidad de lectores y no solo catálogo.",
    enlaces: [],
    bloques: [
      ["El problema", ["¿Cómo hacer que Goodreads vuelva a sentirse como una comunidad de lectores y no solo como un catálogo de libros?"]],
      ["Ideas de la propuesta", ["Perfiles personalizables, lecturas conjuntas, grupos abiertos y privados, notas vinculadas al progreso de lectura, protección contra spoilers y resúmenes anuales."]],
      ["En qué me inspiré", []], ["Decisiones que tomé", []], ["Qué aprendí", []]
    ]
  },
  {
    id: "codetober", nombre: "CodeTober", icono: "</>", tipo: "Experimentos de código",
    etiquetas: ["HTML", "CSS", "JS"],
    resumen: "Pequeños proyectos para recuperar soltura programando por mi cuenta.",
    enlaces: [],
    bloques: [["El problema", ["Sentía que depender demasiado de la IA me hacía practicar menos. Este reto es para volver a resolver problemas escribiendo código yo misma."]], ["Qué aprendí", []]]
  },
  {
    id: "videojuego", nombre: "Videojuego secreto", icono: "??", tipo: "Desarrollo de videojuegos",
    etiquetas: ["Indie", "Prototipos"],
    resumen: "Un juego indie en desarrollo. El proceso sí, la historia todavía no.",
    enlaces: [],
    bloques: [["Lo que sí puedo contar", ["Decisiones técnicas, prototipos abstractos y errores del camino. La trama, los personajes y el mundo se quedan en secreto por ahora."]]]
  },
  {
    id: "ux-ia", nombre: "UX + IA", icono: "◐", tipo: "Crítica de diseño",
    etiquetas: ["Crítica de diseño", "IA"],
    resumen: "Por qué tantas interfaces se parecen y cuándo la IA reemplaza al pensamiento de diseño.",
    enlaces: [],
    bloques: [["La pregunta", ["No digo que la IA sea mala. Me interesa ver cuándo la generación automática sustituye las decisiones de diseño."]]]
  },
  {
    id: "animaciones", nombre: "Animaciones web", icono: "✦", tipo: "Frontend",
    etiquetas: ["CSS", "JS"],
    resumen: "Animaciones e interacciones pequeñas que pruebo y publico.",
    enlaces: [], bloques: []
  },
  {
    id: "automatizaciones", nombre: "Automatizaciones", icono: "⚙", tipo: "Herramientas",
    etiquetas: ["Scripts", "Herramientas"],
    resumen: "Herramientas pequeñas para quitarme tareas repetitivas de encima.",
    enlaces: [], bloques: []
  }
];

const servicios = [
  ["Diseño web", "Ideal si necesitas una web nueva para tu negocio o tu portafolio.", ["Diseño a medida, nada de plantillas", "Se ve bien en PC, tableta y celular", "Publicación en tu dominio"]],
  ["Rediseño UX/UI", "Ideal si ya tienes una web o app y la gente se pierde usándola.", ["Reviso qué está fallando y por qué", "Propuesta de mejoras con prioridades", "Nuevo diseño de las pantallas clave"]],
  ["Prototipos", "Ideal si quieres probar una idea antes de pagar por programarla.", ["Flujos de usuario", "Prototipo navegable en Figma", "Pruebas con usuarios"]],
  ["Frontend y animaciones", "Ideal si tienes el diseño y necesitas que alguien lo construya.", ["HTML, CSS y JavaScript", "Animaciones e interacciones", "Código ordenado y documentado"]],
  ["Automatizaciones", "Ideal si repites la misma tarea todas las semanas.", ["Identifico qué se puede automatizar", "Scripts e integraciones entre herramientas", "Te dejo instrucciones para usarlo"]],
  ["WordPress y no-code", "Ideal si quieres editar tu web sin tocar código.", ["Sitios en WordPress", "Configuración de herramientas no-code", "Capacitación para que lo manejes tú"]]
];

const comentarios = [
  ["M", "Marisol", "25 oct 2026", "Me rediseñó la web de mi tienda y por fin la gente encuentra el botón de pagar. Diez estrellitas."],
  ["J", "Jorge", "19 oct 2026", "Entendió lo que necesitaba antes de que yo lo supiera explicar. Y me mandó un zumbido para avisarme que estaba listo."],
  ["A", "Andrea", "2 oct 2026", "Prototipo rapidísimo y con criterio. Volvería a trabajar con ella sin pensarlo."]
];

/* Canciones del reproductor */
const TEMAS = ["Narcisista por excelencia", "Disculpa los malos pensamientos", "Cita en el quirófano", "Romance en re sostenido"];
const ARTISTA = "PXNDX";

/* Respuestas del chat */
const RESPUESTAS = [
  "jajaja ok, ¿qué necesitas? ☆",
  "uy eso suena a proyecto, cuéntame más",
  "estoy en modo Ausente (programando) pero te leo xD",
  "¿me acabas de zumbar? ¬¬",
  "anotado ★ te respondo al correo en cuanto termine este bug"
];
