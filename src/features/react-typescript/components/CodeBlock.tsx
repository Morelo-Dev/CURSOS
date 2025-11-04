// src/features/AprendizajeReactTS/components/CodeBlock.tsx
import '../styles/codeblock.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus  } from 'react-syntax-highlighter/dist/esm/styles/prism'

type Props = { code: string; visible: boolean }

export default function CodeBlock({ code, visible }: Props) {
  if (!visible) return null
  return (
    <div className="codeblock-wrap">
      <SyntaxHighlighter language="tsx" style={vscDarkPlus }>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
