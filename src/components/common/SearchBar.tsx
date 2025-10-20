import React, { useState } from "react";
import type { InputHTMLAttributes } from "react";

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch: (term: string) => void;
  showResultsLabel?: boolean;
  resultsLabel?: (term: string) => string | React.ReactNode;
}

export const SearchBar = ({
  onSearch,
  showResultsLabel = false,
  resultsLabel = (term) => `Resultados para: ${term}`,
  value,
  ...props
}: SearchBarProps) => {
  const [internalSearchTerm, setInternalSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  
  // Usar valor controlado si se proporciona, sino usar estado interno
  const searchTerm = value !== undefined ? value : internalSearchTerm;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (value === undefined) {
      setInternalSearchTerm(newValue);
    }
    onSearch(newValue);
  };

  const handleClear = () => {
    if (value === undefined) {
      setInternalSearchTerm('');
    }
    onSearch('');
  };

  const styles = {
    container: {
      marginBottom: '10px',
      ...props.style
    },
    header: {
      padding: '8px 16px',
      borderRadius: '8px',
      backgroundColor: '#f5f5f5',
      transition: 'all 0.3s ease',
      boxShadow: isFocused ? '0 0 0 2px rgba(0, 123, 255, 0.2)' : 'none',
    },
    wrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    label: {
      margin: '0 5px 0 0',
      display: 'flex',
    },
    input: {
      border: 'none',
      background: 'transparent',
      width: '100%',
      padding: '5px 0',
      color: '#333',
      outline: 'none',
      fontSize: 'inherit',
      fontFamily: 'inherit',
    },
    icon: {
      color: isFocused ? '#007bff' : '#666',
      transition: 'color 0.3s ease',
    },
    button: {
      background: 'rgba(245, 3, 3, 0.71)',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '20%',
      color: '#000000',
      display: 'flex',
      alignItems: 'center',
      padding: '4px',
      transition: 'background 0.2s ease',
    },
    results: {
      marginBottom: '10px',
    },
    resultsLabel: {
      fontSize: '14px',
      color: '#666',
    },
  };

  return (
    <div style={styles.container} className={props.className}>
      <header style={styles.header}>
        <div style={styles.wrapper}>
          <label
            htmlFor="search-input"
            id="search-label"
            style={styles.label}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              aria-hidden="true"
              style={styles.icon}
            >
              <path
                d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                stroke="currentColor"
                fill="none"
              />
            </svg>
          </label>
          <input
            id="search-input"
            type="search"
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={styles.input}
            {...props}
            placeholder={props.placeholder || "Buscar..."}
            aria-label={props['aria-label'] || "Buscar"}
            title={props.title || "Buscador"}
          />

          {searchTerm && (
            <button
              type="button"
              title="Limpiar la búsqueda"
              aria-label="Limpiar la búsqueda"
              onClick={handleClear}
              style={styles.button}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(245, 3, 3, 0.9)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(245, 3, 3, 0.71)'}
            >
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path
                  d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z"
                  stroke="currentColor"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </header>

      {searchTerm && showResultsLabel && (
        <div style={styles.results}>
          <span style={styles.resultsLabel}>
            {typeof resultsLabel === 'function' ? resultsLabel(String(searchTerm)) : resultsLabel}
          </span>
        </div>
      )}
    </div>
  );
};