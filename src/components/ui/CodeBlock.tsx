import { Highlight, themes } from 'prism-react-renderer';
import { motion } from 'framer-motion';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export const CodeBlock = ({ code, language = 'javascript', className = '' }: CodeBlockProps) => {
  return (
    <motion.div
      className={`rounded-xl overflow-hidden shadow-lg ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="text-xs text-slate-400 ml-2 font-mono">{language}</span>
      </div>

      <Highlight theme={themes.nightOwl} code={code.trim()} language={language as any}>
        {({ className: preClassName, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${preClassName} p-4 overflow-x-auto text-sm`}
            style={{
              ...style,
              margin: 0,
              background: '#1e293b',
              fontSize: '0.7rem',
              lineHeight: '1.5',
            }}
          >
            {tokens.map((line, i) => (
              <motion.div
                key={i}
                {...getLineProps({ line })}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.02, duration: 0.2 }}
              >
                <span className="inline-block w-8 text-slate-500 select-none text-right mr-4">
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </motion.div>
            ))}
          </pre>
        )}
      </Highlight>
    </motion.div>
  );
};
