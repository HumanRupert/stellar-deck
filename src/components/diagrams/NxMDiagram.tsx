import { motion } from 'framer-motion';

const frameworks = [
  'LangChain',
  'Google ADK',
  'Claude MCP',
  'OpenAI SDK',
  'n8n',
  'CrewAI',
];

const chains = [
  'Ethereum',
  'Stellar',
  'Solana',
  'Spark',
  'TON',
  'Tron',
];

export const NxMDiagram = () => {
  return (
    <div className="relative flex justify-between items-center py-2" style={{ height: '220px' }}>
      {/* Frameworks Column */}
      <div className="flex flex-col gap-1 z-10">
        <h4 className="text-xs font-semibold text-slate-600 mb-0.5 uppercase tracking-wide">Agent Frameworks</h4>
        {frameworks.map((fw, i) => (
          <motion.div
            key={fw}
            className="px-2 py-1 bg-white rounded shadow-sm border border-slate-200 text-xs font-medium text-slate-700"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
          >
            {fw}
          </motion.div>
        ))}
      </div>

      {/* Center - N×M Label with connections visualization */}
      <div className="relative flex-1 mx-4 h-full">
        <svg className="absolute inset-0 w-full h-full">
          {/* Draw crossing lines */}
          {frameworks.map((_, fi) => (
            chains.map((_, ci) => (
              <motion.line
                key={`${fi}-${ci}`}
                x1="10%"
                y1={`${15 + fi * 13}%`}
                x2="90%"
                y2={`${15 + ci * 13}%`}
                stroke="rgba(0, 82, 255, 0.08)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5 + (fi + ci) * 0.02, duration: 0.5 }}
              />
            ))
          ))}
        </svg>

        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
        >
          <div className="bg-red-50 border-2 border-red-200 rounded-lg px-3 py-2 text-center">
            <div className="text-xl font-bold text-red-500">N × M</div>
            <div className="text-xs text-red-400 font-medium">INTEGRATIONS</div>
          </div>
        </motion.div>
      </div>

      {/* Chains Column */}
      <div className="flex flex-col gap-1 z-10">
        <h4 className="text-xs font-semibold text-slate-600 mb-0.5 uppercase tracking-wide">Settlement Chains</h4>
        {chains.map((chain, i) => (
          <motion.div
            key={chain}
            className="px-2 py-1 bg-white rounded shadow-sm border border-slate-200 text-xs font-medium text-slate-700"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
          >
            {chain}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
