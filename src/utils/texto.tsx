import React from "react";

export function normalizar(str: string) {
  if (typeof str !== "string") return "";
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .toLowerCase();
}

type Preset =
  | "zoomPulso"
  | "tachodestellante"
  | "rotacionGradual"
  | "levitacionSuave"
  | "vibratoRápido"
  | "default";

const keyframesCSS = `
  @keyframes pulsar {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.08); opacity: 0.9; }
  }
  
  @keyframes zoomPulso {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.15); }
  }
  
  @keyframes ondaSubrayada {
    0%, 100% { text-decoration: underline; text-decoration-style: solid; }
    50% { text-decoration: underline wavy; }
  }
  
  @keyframes cursivaPulsadora {
    0%, 100% { font-style: italic; font-weight: bold; }
    50% { font-style: italic; font-weight: 900; letter-spacing: 0.5px; }
  }
  
  @keyframes tachoDinámica {
    0%, 100% { text-decoration: line-through; text-decoration-color: #ff0000; }
    50% { text-decoration: line-through; text-decoration-color: #00ff00; }
  }
  

  
  @keyframes escalaRitmo {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.2); }
  }
  

  
  @keyframes cursivaBrillosa {
    0%, 100% { font-style: italic; text-shadow: 0 0 3px rgba(255, 0, 255, 0.5); }
    50% { font-style: italic; text-shadow: 0 0 15px rgba(255, 0, 255, 0.9), 0 0 25px rgba(0, 255, 255, 0.7); }
  }
  
  @keyframes tachodestellante {
    50% { opacity: 0.9; filter: brightness(1.5); }
  }
  
  @keyframes rotacionGradual {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
  }
  
  @keyframes levitacionSuave {
    0%, 100% { transform: translateY(3px); }
    50% { transform: translateY(-3px); }
  }
  

  
 @keyframes vibratoRápido {
    0%, 100% { transform: translateX(0px) scale(); }
    25% { transform: translateX(-1px) scale(1); }
    50% { transform: translateX(1px) scale(1.2); }
    75% { transform: translateX(-1px) scale(1); }
}
`;

// Inyectar estilos en el documento
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = keyframesCSS;
  document.head.appendChild(styleSheet);
}

const presets: Record<Preset, React.CSSProperties> = {
  default: {
    background: "#ffcc00ff",
    color: "#222",
    fontWeight: "bold",
    padding: "2px 4px",
    borderRadius: "8px"
  },

  zoomPulso: {
    background: "linear-gradient(to bottom, #ffcc00ff, #fff200ff)",    
    color: "#000",
    fontWeight: "bold",
    padding: "2px 4px",
    borderRadius: "5px",
    animation: "zoomPulso 2s ease-in-out infinite",
    display: "inline-block",
  },

  tachodestellante: {
    background: "linear-gradient(to bottom, #ffcc00ff, #fff200ff)",    
    color: "#000",
    fontWeight: "bold",
    padding: "3px 6px",
    borderRadius: "5px",
    animation: "tachodestellante 1.4s ease-in-out infinite",
    cursor: "default"
  },
  rotacionGradual: {
    background: "linear-gradient(to bottom, #ffcc00ff, #fff200ff)",    
    fontWeight: "bold",
    padding: "3px 6px",
    borderRadius: "5px",
    animation: "rotacionGradual 1.3s ease-in-out infinite",
    display: "inline-block",
    cursor: "default"
  },
  levitacionSuave: {
    background: "linear-gradient(to bottom, #ffcc00ff, #fff200ff)",    
    fontWeight: "bold",
    fontStyle: "italic",
    padding: "3px 6px",
    borderRadius: "8px",
    animation: "levitacionSuave 1.2s ease-in-out infinite",
    display: "inline-block",
    cursor: "default"
  },

  vibratoRápido: {
    background: "linear-gradient(to bottom, #ffcc00ff, #fff200ff)",    
    fontWeight: "bold",
    fontStyle: "italic",
    padding: "2px 4px",
    borderRadius: "8px",
    animation: "vibratoRápido 0.9s ease-in-out infinite",
    display: "inline-block",
    cursor: "default"
  }
};

export function resaltarTexto(
  texto: string,
  termino: string,
  opciones?: {
    preset?: Preset;
    style?: React.CSSProperties;
  }
): React.ReactNode {
  if (!texto || !termino || typeof texto !== "string" || typeof termino !== "string") return texto;

  const textoNormalizado = normalizar(texto);
  const terminoNormalizado = normalizar(termino);

  if (!terminoNormalizado) return texto;

  const estiloBase = presets[opciones?.preset ?? "default"];
  const estiloFinal = { ...estiloBase, ...opciones?.style };

  let partes: React.ReactNode[] = [];
  let idx = 0;
  let lastIndex = 0;

  while (idx < texto.length) {
    const index = textoNormalizado.indexOf(terminoNormalizado, lastIndex);
    if (index === -1) {
      partes.push(texto.slice(lastIndex));
      break;
    }

    let realStart = lastIndex;
    let chars = 0;
    for (let i = lastIndex; i < texto.length; i++) {
      const charNorm = normalizar(texto[i]);
      if (charNorm) chars++;
      if (chars > index - lastIndex) {
        realStart = i;
        break;
      }
    }

    let realEnd = realStart;
    chars = 0;
    for (let i = realStart; i < texto.length; i++) {
      const charNorm = normalizar(texto[i]);
      if (charNorm) chars++;
      if (chars === terminoNormalizado.length) {
        realEnd = i + 1;
        break;
      }
    }

    partes.push(texto.slice(lastIndex, realStart));
    partes.push(
      <mark key={realStart} style={estiloFinal}>
        {texto.slice(realStart, realEnd)}
      </mark>
    );
    lastIndex = realEnd;
    idx = realEnd;
  }

  return partes;
}