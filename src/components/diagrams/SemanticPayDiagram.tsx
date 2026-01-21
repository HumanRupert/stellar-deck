import { motion } from 'framer-motion';

const frameworks = ['LangChain', 'Google ADK', 'Claude MCP', 'OpenAI SDK', 'n8n', 'CrewAI'];
const chains = ['Ethereum', 'Stellar', 'Solana', 'Spark', 'TON', 'Tron'];
const features = ['Protocol Integration', 'Policy Enforcement', 'Authorization (AP2)', 'Observability'];

export const SemanticPayDiagram = () => {
  return (
    <div className="relative flex justify-between items-center py-2" style={{ minHeight: '300px' }}>
      {/* Frameworks */}
      <div className="flex flex-col gap-1.5 z-10">
        <h4 className="text-xs font-semibold text-slate-600 mb-1">AGENT FRAMEWORKS</h4>
        {frameworks.map((fw, i) => (
          <motion.div
            key={fw}
            className="px-2.5 py-1 bg-white rounded-lg shadow-sm border border-slate-200 text-xs font-medium text-slate-700"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04 }}
          >
            {fw}
          </motion.div>
        ))}
      </div>

      {/* Connecting lines to Semantic Pay */}
      <svg className="absolute left-[100px] w-[60px] h-full" style={{ minHeight: '300px' }}>
        {frameworks.map((_, i) => (
          <motion.path
            key={i}
            d={`M 0 ${50 + i * 36} Q 30 ${50 + i * 36} 60 150`}
            fill="none"
            stroke="#0052ff"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
          />
        ))}
      </svg>

      {/* Semantic Pay - Center */}
      <motion.div
        className="relative z-20 mx-2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div
          className="rounded-2xl p-3 border-2"
          style={{
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
            borderColor: '#0052ff',
            boxShadow: '0 8px 30px rgba(0, 82, 255, 0.15)'
          }}
        >
          <h3 className="text-sm font-bold text-center mb-2" style={{ color: '#0052ff' }}>
            SEMANTIC PAY
          </h3>
          <div className="space-y-1.5">
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                className="px-2 py-1 bg-white rounded-lg text-xs text-slate-600 text-center shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                {feature}
              </motion.div>
            ))}
          </div>

          {/* Tether WDK Badge */}
          <motion.div
            className="mt-2 px-2 py-1 bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg text-white text-xs text-center font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Tether WDK
          </motion.div>
        </div>
      </motion.div>

      {/* Connecting lines from Semantic Pay */}
      <svg className="absolute right-[100px] w-[60px] h-full" style={{ minHeight: '300px' }}>
        {chains.map((_, i) => (
          <motion.path
            key={i}
            d={`M 0 150 Q 30 ${50 + i * 36} 60 ${50 + i * 36}`}
            fill="none"
            stroke="#10b981"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
          />
        ))}
      </svg>

      {/* Chains */}
      <div className="flex flex-col gap-1.5 z-10">
        <h4 className="text-xs font-semibold text-slate-600 mb-1">SETTLEMENT CHAINS</h4>
        {chains.map((chain, i) => (
          <motion.div
            key={chain}
            className="px-2.5 py-1 bg-white rounded-lg shadow-sm border border-slate-200 text-xs font-medium text-slate-700"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04 }}
          >
            {chain}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
