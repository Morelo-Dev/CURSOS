import React, { useState } from "react";
import "../react-patterns/ReactPatternsPage.css";
import { AIToolsFilters } from "./components/AIToolsFilters";
import { AIToolsList } from "./components/AIToolsList";

export const AIToolsPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <div className="react-patterns-page">
      <header className="patterns-header">
        <h1 className="patterns-title">Herramientas de IA </h1>
      </header>

      <section className="patterns-intro">
        <h2>¿Qué son las Herramientas de IA para Developers?</h2>
        <p>
         son asistentes y plataformas que automatizan tareas de programación, documentación y optimización de código. Permiten aumentar la productividad, reducir errores y mejorar la calidad de los proyectos mediante inteligencia artificial aplicada directamente en el flujo de trabajo del desarrollador.
        </p>
      </section>

      <AIToolsFilters
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <AIToolsList
        search={search}
        filter={filter}
      />
    </div>
  );
};

export default AIToolsPage;