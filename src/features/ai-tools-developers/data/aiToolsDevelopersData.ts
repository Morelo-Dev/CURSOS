export const aiToolsCourseSessions = [
  {
    number: 1,
    title: "Inteligencia Artificial en el Desarrollo de Software Moderno",
    category: "Fundamentos",
    summary: "Explora cómo la IA redefine el desarrollo moderno, desde automatización hasta generación inteligente de código.",
    topics: ["IA aplicada al software", "Automatización", "Productividad"],
    tools: ["ChatGPT", "Claude"],
    demo: "https://chat.openai.com",
    curiosities: [
      "El 92% de los desarrolladores que usan IA afirman que mejora su productividad.",
      "Modelos como GPT-4 y Claude 3 pueden analizar código completo de proyectos grandes.",
      "El uso de IA en depuración reduce el tiempo de corrección en un 40%.",
      "Las herramientas de IA están comenzando a integrarse directamente en pipelines CI/CD.",
      "Algunos equipos ya entrenan modelos internos para autocompletar código específico de su negocio."
    ]
  },
  {
    number: 2,
    title: "Historia y Herramientas de la Inteligencia Artificial en Desarrollo de Software",
    category: "Fundamentos",
    summary: "De los primeros sistemas expertos a los asistentes modernos como Copilot y ChatGPT.",
    topics: ["Historia de la IA", "Asistentes de código", "Evolución tecnológica"],
    tools: ["Copilot", "ChatGPT", "TabNine"],
    demo: "https://github.com/features/copilot",
    curiosities: [
      "El primer asistente de programación con IA se desarrolló en 1972: 'Mycin'.",
      "Copilot fue lanzado en 2021, entrenado sobre 180 millones de repositorios públicos.",
      "TabNine fue el primero en usar modelos transformer exclusivamente para autocompletar código.",
      "Claude integra contexto hasta de 200K tokens, ideal para proyectos grandes.",
      "La IA ha pasado de sugerir líneas a generar módulos completos con tests incluidos."
    ]
  },
  {
    number: 3,
    title: "Cómo escribir prompts efectivos para generar código con ChatGPT",
    category: "Prompt Engineering",
    summary: "Aprende a redactar prompts claros y contextuales para generar código útil y documentado.",
    topics: ["Prompt engineering", "Optimización de prompts", "Generación de código"],
    tools: ["ChatGPT"],
    demo: "https://chat.openai.com",
    curiosities: [
      "Un prompt con ejemplos concretos aumenta la precisión del código hasta un 70%.",
      "Los prompts estructurados con roles ('Actúa como un experto en...') producen mejores resultados.",
      "La longitud óptima de un prompt técnico es entre 150 y 300 palabras.",
      "ChatGPT puede mantener contexto de conversación para iterar código incrementalmente.",
      "Los prompts negativos ('no uses bucles for') ayudan a refinar la salida del modelo."
    ]
  },
  {
    number: 4,
    title: "Generación de Contraseñas Seguras en Python",
    category: "Aplicaciones Prácticas",
    summary: "Usa IA para crear scripts que generen contraseñas aleatorias seguras y auditables.",
    topics: ["Python", "Seguridad", "Automatización"],
    tools: ["ChatGPT"],
    demo: "https://replit.com/",
    curiosities: [
      "El 80% de las vulnerabilidades se deben a contraseñas débiles o reutilizadas.",
      "Python ofrece librerías como 'secrets' para generar claves seguras criptográficamente.",
      "La IA puede combinar reglas personalizadas de seguridad para cada entorno.",
      "ChatGPT puede generar validadores de complejidad adaptados a políticas empresariales.",
      "Los modelos pueden incluso explicar los algoritmos hash usados (SHA256, bcrypt, etc.)."
    ]
  },
  {
    number: 5,
    title: "Uso de Claude para Generar Contraseñas Seguras en Python",
    category: "Comparativa de Asistentes",
    summary: "Descubre cómo Claude genera código más explicativo y estructurado que ChatGPT en algunos contextos.",
    topics: ["Claude", "Comparativa IA", "Python"],
    tools: ["Claude"],
    demo: "https://claude.ai/",
    curiosities: [
      "Claude se centra en la claridad del código y comentarios detallados.",
      "Tiene la capacidad de leer contextos largos (hasta 200K tokens).",
      "Claude es más conservador al generar código que manipula datos sensibles.",
      "Genera scripts con documentación inline más extensa que otros modelos.",
      "En pruebas, Claude obtiene mejores resultados en legibilidad de código Python."
    ]
  },
  {
    number: 6,
    title: "Novedades y Funcionalidades de Github Copilot 2024",
    category: "Herramientas de Desarrollo",
    summary: "Descubre las nuevas capacidades de Copilot: generación de tests, depuración y chat contextual.",
    topics: ["Copilot", "Automatización", "Testing"],
    tools: ["GitHub Copilot"],
    demo: "https://github.com/features/copilot",
    curiosities: [
      "Copilot X integra chat directamente en el editor de VSCode.",
      "Puede sugerir tests unitarios completos en Jest, Pytest y NUnit.",
      "Analiza el contexto del proyecto completo, no solo el archivo activo.",
      "Incluye soporte nativo para documentación generada automáticamente.",
      "GitHub afirma que Copilot escribe hasta el 46% del nuevo código en su plataforma."
    ]
  },
  {
    number: 7,
    title: "Instalación y uso de Github Copilot en VScode",
    category: "Configuración de Entornos",
    summary: "Aprende a instalar y configurar Copilot para aprovecharlo al máximo en VSCode.",
    topics: ["VSCode", "Copilot", "Integración"],
    tools: ["GitHub Copilot", "VSCode"],
    demo: "https://code.visualstudio.com/",
    curiosities: [
      "VSCode tiene más de 30 millones de usuarios activos mensuales.",
      "Copilot funciona como una extensión ligera con soporte para múltiples lenguajes.",
      "Se pueden definir políticas de seguridad para limitar sugerencias de código externo.",
      "Copilot analiza tu historial de edición para mejorar las predicciones.",
      "Incluye soporte experimental para comandos de voz en el flujo de desarrollo."
    ]
  },
  {
    number: 8,
    title: "Instalación y Uso de Tabnine en Visual Studio Code",
    category: "Herramientas de Desarrollo",
    summary: "Configura Tabnine para obtener autocompletado predictivo optimizado por IA.",
    topics: ["TabNine", "Autocompletado", "Configuración"],
    tools: ["TabNine", "VSCode"],
    demo: "https://www.tabnine.com/",
    curiosities: [
      "Tabnine entrena sus modelos en código 100% con licencias permisivas.",
      "Su predicción más precisa ocurre entre 4 y 8 caracteres escritos.",
      "Tiene soporte para más de 20 lenguajes y frameworks.",
      "Puedes entrenar un modelo local privado para tu empresa.",
      "Es ideal para proyectos donde la privacidad del código es crítica."
    ]
  },
  {
    number: 9,
    title: "Creación de Juegos de Adivinanza con JavaScript y TabNine",
    category: "Proyectos Prácticos",
    summary: "Construye un juego simple con ayuda del autocompletado inteligente de TabNine.",
    topics: ["JavaScript", "Juegos", "IA generativa"],
    tools: ["TabNine", "Replit"],
    demo: "https://replit.com/",
    curiosities: [
      "TabNine puede sugerir estructuras completas de juegos simples.",
      "Las IAs entienden patrones de lógica como bucles de intentos y validaciones.",
      "Puedes usar IA para generar assets de juego (textos, sonidos, prompts visuales).",
      "Replit permite probar código JS en tiempo real con resultados inmediatos.",
      "Combinar IA + Replit acelera el prototipado en hasta un 60%."
    ]
  },
  {
    number: 10,
    title: "Uso de Replit Agent en Desarrollo de Juegos con JavaScript",
    category: "Colaboración con IA",
    summary: "Utiliza Replit Agent para depurar y optimizar tus proyectos de forma colaborativa.",
    topics: ["Replit", "Colaboración", "Depuración"],
    tools: ["Replit Agent"],
    demo: "https://replit.com/agent",
    curiosities: [
      "Replit Agent actúa como un pair programmer virtual.",
      "Puede ejecutar tu código y explicar errores paso a paso.",
      "Su modelo interno está basado en GPT-4 adaptado a debugging.",
      "Replit permite edición en tiempo real con múltiples desarrolladores.",
      "Su entorno sandbox garantiza seguridad al probar código IA."
    ]
  },
  {
    number: 11,
    title: "Generación de Documentación Técnica con IA",
    category: "Documentación Asistida",
    summary: "Aprende a generar documentación técnica con ChatGPT y Claude a partir del código fuente.",
    topics: ["Documentación", "ChatGPT", "Claude"],
    tools: ["ChatGPT", "Claude"],
    demo: "https://chat.openai.com",
    curiosities: [
      "Puedes generar documentación en Markdown directamente desde los comentarios del código.",
      "Claude puede procesar archivos enteros de repositorios para generar docs estructurados.",
      "ChatGPT puede formatear documentación para Notion, Confluence o Markdown.",
      "IA puede detectar funciones sin documentación y autocompletarla.",
      "La documentación generada se puede sincronizar con CI/CD para mantenerse actualizada."
    ]
  }
];
