import { motion } from 'framer-motion';
import { GradientText } from '../effects';

const useCases = [
  { label: 'Data', desc: 'Pay for BTCUSD price feeds, SEC filings, market sentiment' },
  { label: 'Compute', desc: 'Pay for on-demand GPU cycles, backtesting infrastructure' },
  { label: 'Services', desc: 'Pay other agents for analysis, translation, specialized tasks' },
  { label: 'Goods', desc: 'Pay for physical resources to complete objectives' },
];

export const Slide02TheShift = () => {
  return (
    <section className="overflow-hidden">
      <motion.h2
        className="text-2xl font-bold mb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <GradientText>Agents Are Becoming Economic Actors</GradientText>
      </motion.h2>

      <motion.p
        className="text-slate-600 mb-3 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        AI agents are graduating from answering questions to executing workflows that require payment:
      </motion.p>

      <div className="grid grid-cols-2 gap-2 mb-3">
        {useCases.map((item, i) => (
          <motion.div
            key={item.label}
            className="bg-white rounded-lg p-2 shadow-sm border border-slate-100 text-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            whileHover={{ scale: 1.02, boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
          >
            <span className="font-bold text-blue-600">{item.label}:</span>
            <span className="text-slate-600 ml-1">{item.desc}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-slate-50 rounded-lg p-3 border-l-4 border-blue-500"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
        <p className="text-slate-700 mb-1 text-sm">
          Think of an agent as an employee. Employees need to pay for things.
        </p>
        <p className="font-bold text-slate-800 text-sm">
          The bottleneck isn't intelligence. It's the ability to transact.
        </p>
      </motion.div>
    </section>
  );
};
