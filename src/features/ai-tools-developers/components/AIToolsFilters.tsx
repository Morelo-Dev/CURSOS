import React from "react";
import { SearchBar } from "../../../components/common/SearchBar";
import { aiToolsCourseSessions } from "../data/aiToolsDevelopersData";

interface Props {
  search: string;
  setSearch: (v: string) => void;
  filter: string;
  setFilter: (v: string) => void;
}

export const AIToolsFilters: React.FC<Props> = ({
  search,
  setSearch,
  filter,
  setFilter,
}) => {
  // Extrae todas las categorías, temas y herramientas únicas
  const categories = Array.from(
    new Set(aiToolsCourseSessions.map(s => s.category))
  );
  const topics = Array.from(
    new Set(aiToolsCourseSessions.flatMap(s => s.topics))
  );
  const tools = Array.from(
    new Set(aiToolsCourseSessions.flatMap(s => s.tools))
  );
  const allFilters = [
    ...categories,
    ...topics,
    ...tools,
  ];

  return (
    <section className="patterns-controls">
      <SearchBar
        value={search}
        onSearch={setSearch}
        placeholder="Buscar por título, tema, herramienta, curiosidad..."
        showResultsLabel={!!search}
        resultsLabel={term => `Resultados para: "${term}"`}
      />
      <select
        className="category-select"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      >
        <option value="">Todos</option>
        {allFilters.map(f => (
          <option key={f} value={f}>{f}</option>
        ))}
      </select>
    </section>
  );
};