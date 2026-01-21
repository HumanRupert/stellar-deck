import { motion } from 'framer-motion';
import { GradientText } from '../effects';
import { StyledTable } from '../ui';

const gaps = [
  ['Guardrails & Policy', 'AI is stochastic. Finance is deterministic. No reconciliation layer.'],
  ['Authorization', "Who authorized this payment? Who's liable? No proof of human intent."],
  ['Visibility', 'Regulators see a black box. Need transparent, auditable transactions.'],
  ['Payment Rails', 'Must be programmable, low-fee, predictable, instant. Current rails fail.'],
];

export const Slide03TheProblem = () => {
  return (
    <section>
      <motion.h2
        className="text-3xl font-bold mb-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <GradientText colors={['#ef4444', '#f59e0b', '#eab308']}>
          Current Infrastructure Wasn't Built for Agents
        </GradientText>
      </motion.h2>

      <motion.p
        className="text-slate-600 font-medium mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Missing pieces for autonomous AI transactions:
      </motion.p>

      <StyledTable
        headers={['Gap', 'Why It Matters']}
        rows={gaps}
        className="mb-4"
      />

      <div className="grid grid-cols-2 gap-3 mt-4">
        <motion.div
          className="bg-red-50 rounded-xl p-3 border border-red-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-bold text-red-700 text-sm mb-1">Fiat rails</p>
          <p className="text-red-600 text-xs">Too slow (days), too expensive (2-3% + fixed fees)</p>
        </motion.div>

        <motion.div
          className="bg-orange-50 rounded-xl p-3 border border-orange-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="font-bold text-orange-700 text-sm mb-1">Traditional chains</p>
          <p className="text-orange-600 text-xs">Fee volatility, long finality, gas complexity</p>
        </motion.div>
      </div>

      <motion.p
        className="text-center mt-4 font-bold text-slate-700 bg-slate-100 rounded-lg px-4 py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Almost all agent transactions will be micropayments settling in seconds, not days.
      </motion.p>
    </section>
  );
};
