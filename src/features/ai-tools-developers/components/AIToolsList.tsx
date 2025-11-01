import React, { useMemo, useState, useEffect, useRef } from "react";
import { aiToolsCourseSessions } from "../data/aiToolsDevelopersData";
import { resaltarTexto } from "../../../utils/texto";
import "../AIToolsPage.css";

interface Props {
  search: string;
  filter: string;
}

interface Session {
  number: number;
  title: string;
  category: string;
  summary: string;
  topics: string[];
  tools: string[];
  demo: string;
  curiosities: string[];
}

export const AIToolsList: React.FC<Props> = ({ search, filter }) => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [closing, setClosing] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const expandedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  useEffect(() => {
    if (expandedIdx !== null && expandedRef.current) {
      const rect = expandedRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const filterBar = document.querySelector('.patterns-controls');
      const filterHeight = filterBar ? filterBar.getBoundingClientRect().height : 0;
      // Ajusta el scroll para dejar el card justo debajo de la barra de filtros
      window.scrollTo({
        top: rect.top + scrollTop - filterHeight - 100, // 16px de margen opcional
        behavior: "smooth"
      });
    }
  }, [expandedIdx]);

  const filtered: Session[] = useMemo(() => {
    const term = search.trim().toLowerCase();
    const filterTerm = filter.trim().toLowerCase();
    return aiToolsCourseSessions.filter((s: Session) =>
      (
        s.title.toLowerCase().includes(term) ||
        s.summary.toLowerCase().includes(term) ||
        s.category.toLowerCase().includes(term) ||
        s.topics.some((t: string) => t.toLowerCase().includes(term)) ||
        s.tools.some((t: string) => t.toLowerCase().includes(term)) ||
        s.curiosities.some((c: string) => c.toLowerCase().includes(term))
      ) &&
      (
        !filterTerm ||
        s.category.toLowerCase() === filterTerm ||
        s.topics.some((t: string) => t.toLowerCase() === filterTerm) ||
        s.tools.some((t: string) => t.toLowerCase() === filterTerm)
      )
    );
  }, [search, filter]);

  const expandedSession = expandedIdx !== null ? filtered[expandedIdx] : null;
  const cardsToShow = expandedIdx !== null
    ? filtered.filter((_, idx: number) => idx !== expandedIdx)
    : filtered;

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setExpandedIdx(null);
      setClosing(false);
    }, 350);
  };

  return (
    <section className="patterns-list">
      {expandedSession && (
        <div
          ref={expandedRef}
          className={`window-card${closing ? " closing" : ""}`}
        >
          <div className="window-header">
            <div className="window-circles">
              <span className="window-circle window-circle-red" />
              <span className="window-circle window-circle-yellow" />
              <span className="window-circle window-circle-green" />
            </div>
            <div className="window-title">
              {resaltarTexto(`${expandedSession.number}. ${expandedSession.title}`, search)}
            </div>
            <button
              aria-label="Contraer"
              className="window-close"
              onClick={handleClose}
            >
              <span style={{ fontWeight: 700 }}>✕</span>
            </button>
          </div>
          <span className="window-category-badge">
            {resaltarTexto(expandedSession.category, search)}
          </span>
          <div className="window-content window-content-expanded">
            <div className="window-col window-col-left">
              <strong>Resumen:</strong>
              <div className="card-summary">{resaltarTexto(expandedSession.summary, search)}</div>
              <div className="card-meta">
                {expandedSession.topics.map((t: string, i: number) => (
                  <span
                    key={`${t}-${i}`}
                    className={`pattern-badge badge-${i % 7}`}
                  >
                    {resaltarTexto(t, search)}
                  </span>
                ))}
              </div>
            </div>
            <div className="window-col window-col-center">
              <div>
                <strong>Herramientas:</strong>{" "}
                {expandedSession.tools.map((tool: string, i: number) => (
                  <span
                    key={`${tool}-${i}`}
                    className={`pattern-badge badge-${(i + 3) % 7}`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div>
                <strong>Demo:</strong>{" "}
                <a
                  href={expandedSession.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="window-demo"
                >
                  {expandedSession.demo}
                </a>
              </div>
            </div>
            <div className="window-col window-col-right">
              <div className="card-curiosities">
                <strong>Curiosidades:</strong>
                <ul>
                  {expandedSession.curiosities.map((c: string, i: number) => (
                    <li key={`curiosity-${i}`}>
                      {resaltarTexto(c, search)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="window-mini-list">
        {cardsToShow.map((s: Session) => (
          <div
            key={s.number}
            className={`window-card window-card-mini${loaded ? " loaded" : ""}`}
            onClick={() => setExpandedIdx(filtered.findIndex((f: Session) => f.number === s.number))}
            tabIndex={0}
          >
            <div className="window-header">
              <div className="window-circles">
                <span className="window-circle window-circle-red" />
                <span className="window-circle window-circle-yellow" />
                <span className="window-circle window-circle-green" />
              </div>
              <div className="window-title">
                {resaltarTexto(`${s.number}. ${s.title}`, search)}
              </div>
            </div>
            <span className="window-category-badge">
              {resaltarTexto(s.category, search)}
            </span>
            <div className="window-content window-content-mini">
              <span className="card-summary">
                {resaltarTexto(s.summary, search)}
              </span>
              <div className="card-meta">
                {s.topics.map((t: string, i: number) => (
                  <span
                    key={`${t}-${i}`}
                    className={`pattern-badge badge-${i % 7}`}
                  >
                    {resaltarTexto(t, search)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="no-results">No se encontraron clases.</div>
        )}
      </div>
    </section>
  );
};