# 🎓 Curso de Desarrollo - Proyecto Principal# ComposiTasks 🧩



## 📖 DescripciónUn gestor de tareas avanzado construido con React y TypeScript, diseñado específicamente para practicar y demostrar patrones de composición y render en React.

Proyecto principal único que contiene múltiples features educativas para aprender patrones avanzados de desarrollo web moderno.

## 🎯 Objetivo del Proyecto

## 🏗️ Estructura del Proyecto

ComposiTasks está diseñado para ser un playground educativo donde puedes aprender y practicar:

```

PROYECTOS/CURSOS/- **Compound Components** - Componentes complejos divididos en subcomponentes declarativos

├── src/- **Render Props** - Patrones flexibles de renderizado personalizable

│   ├── components/- **Higher-Order Components (HOCs)** - Funcionalidades transversales como loading y error handling

│   │   └── Layout/                    # 🎯 Sistema de navegación global- **Slot Composition** - Arquitecturas de componentes flexibles usando children

│   │       ├── Header.tsx             # Header con menú principal- **Controlled/Uncontrolled Components** - Manejo avanzado del estado de componentes

│   │       ├── Header.css             # Estilos del header

│   │       ├── Layout.tsx             # Layout principal## 🚀 Características

│   │       ├── Layout.css             # Estilos del layout

│   │       └── index.ts               # Barrel exports### ✨ Funcionalidades Principales

│   │

│   ├── features/                      # 🚀 Todas las features aquí- **Gestión Completa de Tareas**: Crear, editar, eliminar y organizar tareas

│   │   └── react-patterns/            # ⚛️ Feature de Patrones React- **Subtareas Anidadas**: Soporte para tareas complejas con subtareas

│   │       ├── components/            # Componentes específicos de esta feature- **Sistema de Prioridades**: Alta, media y baja prioridad con indicadores visuales

│   │       │   ├── Task/              # Compound Components- **Etiquetas Personalizadas**: Organización flexible con tags

│   │       │   ├── TaskList.tsx       # Render Props- **Filtrado Avanzado**: Por prioridad, estado, etiquetas y búsqueda de texto

│   │       │   ├── Modal.tsx          # Slot Composition- **Múltiples Vistas**: Por defecto, compacta y tarjetas expandidas

│   │       │   ├── withLoading.tsx    # Higher-Order Component- **Interfaz Responsiva**: Funciona perfectamente en desktop y móvil

│   │       │   ├── withErrorBoundary.tsx # Higher-Order Component

│   │       │   ├── CreateTaskForm.tsx### 🏗️ Patrones Implementados

│   │       │   ├── TaskEditForm.tsx

│   │       │   └── AddSubtaskForm.tsx#### 1. **Compound Components**

│   │       ├── hooks/                 # Custom hooks específicos```tsx

│   │       │   ├── useTasks.ts        # Gestión de estado de tareas<Task task={task} onToggle={toggleTask} onEdit={updateTask} onDelete={deleteTask}>

│   │       │   └── useModal.ts        # Gestión de modales  <Task.Header showPriority showTags />

│   │       ├── types/                 # TypeScript definitions  <Task.Body showDescription showSubtasks />

│   │       │   └── task.ts            # Tipos de tareas  <Task.Footer showDates />

│   │       ├── ReactPatternsPage.tsx  # Página principal de la feature  <Task.Actions showToggle showEdit showDelete />

│   │       ├── ReactPatternsPage.css  # Estilos específicos</Task>

│   │       └── index.ts               # Barrel export```

│   │

│   ├── pages/                         # 📄 Páginas globales#### 2. **Render Props**

│   │   ├── HomePage.tsx               # 🏠 Página principal```tsx

│   │   ├── HomePage.css               # Estilos de la página principal<TaskList

│   │   ├── ComingSoonPage.tsx         # 🚧 Para features futuras  tasks={tasks}

│   │   └── ComingSoonPage.css         # Estilos de coming soon  renderTask={(task) => (

│   │    <CustomTaskRenderer task={task} />

│   ├── assets/                        # 🖼️ Assets globales  )}

│   ├── App.tsx                        # 🎯 Router y lógica principal  renderEmpty={() => (

│   ├── App.css                        # Estilos globales de la app    <CustomEmptyState />

│   ├── index.css                      # Estilos base  )}

│   └── main.tsx                       # Punto de entrada  renderHeader={(count) => (

│    <h2>Mis Tareas ({count})</h2>

├── public/                            # Archivos estáticos  )}

├── .github/                           # Configuración de GitHub/>

├── package.json                       # Dependencias del proyecto```

├── vite.config.ts                     # Configuración de Vite

├── tsconfig.json                      # Configuración de TypeScript#### 3. **Higher-Order Components**

└── README.md                          # Este archivo```tsx

```const TaskListWithLoading = withLoading(TaskList);

const SafeHomePage = withErrorBoundary(HomePage);

## 🎯 Features Implementadas```



### ✅ Sistema de Navegación#### 4. **Slot Composition**

- **Header global** con navegación entre features```tsx

- **Layout responsivo** para todas las páginas<Modal isOpen={isOpen} onClose={closeModal}>

- **Estado centralizado** para feature activa  <Modal.Header>

    <h2>Crear Nueva Tarea</h2>

### ✅ Patrones de React (Completo)  </Modal.Header>

Implementación completa de 5 patrones avanzados:  <Modal.Body>

    <form>...</form>

1. **🧩 Compound Components**: `Task` con subcomponentes (`Task.Header`, `Task.Body`, etc.)  </Modal.Body>

2. **🔄 Render Props**: `TaskList` con funciones de renderizado personalizables  <Modal.Footer>

3. **🎭 Higher-Order Components**: `withLoading` y `withErrorBoundary`    <button>Cancelar</button>

4. **🎨 Slot Composition**: `Modal` con slots (`Modal.Header`, `Modal.Body`, etc.)    <button>Guardar</button>

5. **🪝 Custom Hooks**: `useTasks` y `useModal` para lógica reutilizable  </Modal.Footer>

</Modal>

**Funcionalidades incluidas:**```

- Gestor de tareas completo con CRUD

- Subtareas con prioridades## 📁 Estructura del Proyecto

- Filtrado y búsqueda

- Notificaciones elegantes con `react-hot-toast````

- Confirmaciones centradascompositasks/

- Edición inline├── src/

- Diseño responsive│   ├── components/

│   │   ├── Task/

### ⏳ Features Futuras│   │   │   └── Task.tsx           # Compound Component principal

- API & Estado Global│   │   ├── TaskList.tsx           # Componente con Render Props

- Design Systems│   │   ├── Modal.tsx              # Slot Composition

- Testing Avanzado│   │   ├── withLoading.tsx        # HOC para loading states

│   │   └── withErrorBoundary.tsx  # HOC para error handling

## 🚀 Cómo Ejecutar│   │

│   ├── hooks/

### Instalación│   │   ├── useTasks.ts           # Lógica de gestión de tareas

```bash│   │   └── useModal.ts           # Lógica de modal

cd "c:\PROYECTOS\CURSOS"│   │

npm install│   ├── pages/

```│   │   └── Home.tsx              # Página principal

│   │

### Desarrollo│   ├── types/

```bash│   │   └── task.ts               # Definiciones TypeScript

npm run dev│   │

```│   ├── App.tsx

**Ve a:** http://localhost:5174/│   ├── App.css

│   └── main.tsx

### Construcción│

```bash├── package.json

npm run build├── tsconfig.json

```├── vite.config.ts

└── README.md

### Previsualización```

```bash

npm run preview## 🛠️ Instalación y Configuración

```

### Prerrequisitos

## 🎯 Navegación- Node.js 18+ 

- npm o yarn

### Header Principal

- **🏠 Inicio**: Página principal con overview del proyecto### Pasos de instalación

- **⚛️ Patrones React**: Feature completa de patrones avanzados

- **🚀 Próximamente**: Placeholder para futuras features1. **Instala las dependencias**

   ```bash

### Flujo de Usuario   npm install

1. **Inicio**: Explora el overview y características   ```

2. **Patrones React**: Aprende y experimenta con patrones avanzados

3. **Navegación**: Cambia entre features usando el header2. **Inicia el servidor de desarrollo**

   ```bash

## 🛠️ Tecnologías   npm run dev

   ```

- **React 18** - Hooks, Suspense, Concurrent Features

- **TypeScript** - Tipado estático y mejor DX3. **Abre tu navegador**

- **Vite 7.1.10** - Build tool rápido y moderno   ```

- **react-hot-toast** - Notificaciones elegantes   http://localhost:5173

- **CSS3** - Variables CSS, Grid, Flexbox, animaciones   ```



## 🔧 Para Desarrolladores## 🎮 Cómo Usar la Aplicación



### Agregar Nueva Feature### Gestión Básica de Tareas

1. **Crear estructura:**

   ```bash1. **Crear Tarea**: Haz clic en "Nueva Tarea" para abrir el modal de creación

   mkdir src/features/nueva-feature2. **Completar Tarea**: Usa el checkbox o el botón "Completar"

   mkdir src/features/nueva-feature/components3. **Editar Tarea**: Haz clic en "Editar" (funcionalidad base implementada)

   mkdir src/features/nueva-feature/hooks4. **Eliminar Tarea**: Haz clic en "Eliminar" con confirmación

   ```

### Filtrado y Organización

2. **Crear página principal:**

   ```tsx- **Búsqueda**: Escribe en el campo de búsqueda para filtrar por título/descripción

   // src/features/nueva-feature/NuevaFeaturePage.tsx- **Filtro por Prioridad**: Selecciona Alta, Media, Baja o todas

   export const NuevaFeaturePage = () => {- **Filtro por Estado**: Pendientes, Completadas o todas

     return <div>Mi nueva feature</div>;- **Ordenamiento**: Por fecha, prioridad, título o fecha de vencimiento

   };

   ```### Vistas Diferentes



3. **Registrar en App.tsx:**- **Vista Por Defecto**: Tarjetas completas con toda la información

   ```tsx- **Vista Compacta**: Lista simple y minimalista

   case 'nueva-feature':- **Vista Tarjetas**: Tarjetas expandidas con máximo detalle

     return <NuevaFeaturePage />;

   ```## 🧪 Patrones de Código - Ejemplos de Aprendizaje



4. **Agregar al Header:**### Ejemplo 1: Creando un Compound Component

   ```tsx

   { id: 'nueva-feature', label: '🆕 Nueva Feature' }```tsx

   ```// Definir el contexto

const TaskContext = createContext<TaskContextValue | null>(null);

### Estructura de Features

Cada feature es completamente independiente:// Componente principal

- Sus propios componentes en `components/`export const Task: React.FC<TaskProps> & {

- Sus propios hooks en `hooks/`  Header: React.FC<TaskHeaderProps>;

- Sus propios tipos en `types/`  Body: React.FC<TaskBodyProps>;

- Su propia página principal  Actions: React.FC<TaskActionsProps>;

- Su barrel export en `index.ts`} = ({ task, children, ...props }) => {

  return (

## 📚 Recursos de Aprendizaje    <TaskContext.Provider value={{ task, ...props }}>

      <div className="task-card">

### Patrones Implementados        {children}

- [React Patterns](https://reactpatterns.com/)      </div>

- [Advanced React Patterns](https://kentcdodds.com/blog/advanced-react-patterns)    </TaskContext.Provider>

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)  );

};

### Documentación

- Cada patrón está documentado con ejemplos// Subcomponentes

- Código comentado para facilitar el aprendizajeTask.Header = ({ showPriority = true }) => {

- Ejercicios sugeridos para práctica  const { task } = useTaskContext();

  return (

## 🎯 Objetivos Educativos    <div className="task-header">

      <h3>{task.title}</h3>

1. **Aprender patrones avanzados** de React y TypeScript      {showPriority && <span className="priority">{task.priority}</span>}

2. **Practicar arquitectura** de aplicaciones escalables    </div>

3. **Experimentar con diferentes** enfoques de composición  );

4. **Desarrollar habilidades** en diseño de APIs de componentes};

5. **Construir features** modulares y reutilizables```



---### Ejemplo 2: Implementando Render Props



**🎉 ¡Un proyecto principal limpio y organizado para aprender desarrollo web moderno!** 🚀⚛️```tsx
interface TaskListProps {
  tasks: Task[];
  renderTask?: (task: Task, index: number) => ReactNode;
  renderEmpty?: () => ReactNode;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  renderTask,
  renderEmpty,
}) => {
  if (tasks.length === 0) {
    return renderEmpty ? renderEmpty() : <DefaultEmpty />;
  }

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div key={task.id}>
          {renderTask ? renderTask(task, index) : <DefaultTask task={task} />}
        </div>
      ))}
    </div>
  );
};
```

### Ejemplo 3: Creando un HOC

```tsx
export function withLoading<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithLoadingComponent = (props: P & { isLoading: boolean }) => {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <LoadingSpinner />;
    }

    return <WrappedComponent {...(restProps as P)} />;
  };

  return WithLoadingComponent;
}

// Uso
const TaskListWithLoading = withLoading(TaskList);
```

## 🎯 Ejercicios de Práctica

### Ejercicio 1: Nuevo Compound Component
Crea un componente `<TaskForm>` con subcomponentes:
- `<TaskForm.Title>`
- `<TaskForm.Description>`
- `<TaskForm.Priority>`
- `<TaskForm.Tags>`
- `<TaskForm.Actions>`

### Ejercicio 2: Render Props Avanzado
Extiende `<TaskList>` para soportar:
- `renderGroupHeader` para agrupar por prioridad
- `renderTaskActions` para acciones personalizadas
- `renderLoadingTask` para skeleton loading

### Ejercicio 3: HOC Personalizado
Crea un HOC `withPermissions` que:
- Oculte funcionalidades según permisos de usuario
- Muestre mensajes cuando no hay permisos
- Permita configurar diferentes niveles de acceso

### Ejercicio 4: Slot Composition Avanzado
Mejora el componente `<Modal>` con:
- Slots para sidebar
- Múltiples footers
- Contenido scrolleable vs fijo

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Construcción
npm run build        # Genera build de producción
npm run preview      # Previsualiza build de producción

# Calidad de código
npm run lint         # Ejecuta ESLint
npm run type-check   # Verifica tipos TypeScript
```

---

## 🎓 Conceptos Clave Aprendidos

Al completar este proyecto habrás practicado:

- ✅ **Compound Components**: Arquitectura declarativa y flexible
- ✅ **Render Props**: Máxima flexibilidad de renderizado
- ✅ **HOCs**: Funcionalidades transversales reutilizables
- ✅ **Slot Composition**: Layouts flexibles sin acoplamiento
- ✅ **TypeScript Avanzado**: Tipos genéricos y patrones complejos
- ✅ **Hooks Personalizados**: Lógica reutilizable de estado
- ✅ **Arquitectura Escalable**: Organización de código profesional

¡Felicidades! 🎉 Ahora tienes una base sólida en los patrones más importantes de React.

---

## 👨‍💻 Créditos y Licencia

### 🎓 Proyecto Educativo

Este proyecto fue desarrollado como material educativo interactivo para aprender **Patrones Avanzados de React** con TypeScript. Está diseñado para ser una experiencia de aprendizaje práctica y visual.

### 👤 Desarrollado por

**Morelo-Dev** - [GitHub Profile](https://github.com/Morelo-Dev)

### 🤝 Uso y Contribuciones

Si encuentras útil este proyecto educativo, considera:

- ⭐ **Dar una estrella** al repositorio
- 🔄 **Hacer fork** para tu propio aprendizaje
- 💬 **Compartir** con otros desarrolladores
- 🐛 **Reportar issues** o sugerir mejoras

### 📄 Atribución

Si usas este proyecto como referencia, base para tu aprendizaje, o lo adaptas para tu trabajo, por favor considera mencionar los créditos:

```
Basado en ComposiTasks por @Morelo-Dev
Repositorio: https://github.com/Morelo-Dev/CURSOS
```

### 🛡️ Licencia

Este proyecto está disponible bajo la **MIT License**.

**Esto significa que puedes:**
- ✅ Usar para fines educativos y comerciales
- ✅ Modificar y distribuir
- ✅ Usar en proyectos privados
- ✅ Hacer fork y contribuir

**Con la condición de:**
- 📝 Mantener la atribución del autor original
- 📋 Incluir la licencia MIT en distribuciones

### 🌟 Agradecimientos

Gracias a todos los desarrolladores que contribuyen al ecosistema de React y a la comunidad de código abierto que hace posible proyectos educativos como este.

---

⭐ **¿Te gustó este proyecto?** ¡No olvides darle una estrella!

💡 **¿Lo encontraste útil para tu aprendizaje?** Compártelo con otros desarrolladores.

🚀 **¿Quieres contribuir?** Las pull requests son bienvenidas.
