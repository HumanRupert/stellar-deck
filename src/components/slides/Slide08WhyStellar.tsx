import { motion } from 'framer-motion';
import { GradientText } from '../effects';
import { StyledTable, CheckMark, CrossMark, WarningMark } from '../ui';

const comparisonRows = [
  [
    'Micropayment viable',
    <><CrossMark /> $0.50+</>,
    <><WarningMark /> $0.001</>,
    <><CheckMark /> $0.00001</>
  ],
  [
    'Predictable fees',
    <><CrossMark /> Gas auctions</>,
    <><WarningMark /> Priority fees</>,
    <><CheckMark /> Flat 100 stroops</>
  ],
  [
    'True finality',
    <><CrossMark /> 15 min (reorg risk)</>,
    <><CrossMark /> Reorg possible</>,
    <><CheckMark /> 5 sec, final</>
  ],
  [
    'Native multi-asset',
    <><CrossMark /> ERC-20 contracts</>,
    <><CrossMark /> SPL tokens</>,
    <><CheckMark /> Protocol-level</>
  ],
  [
    'Fiat off-ramps',
    <><WarningMark /> Limited</>,
    <><WarningMark /> Limited</>,
    <><CheckMark /> 475K+ access points</>
  ],
];

const mathRows = [
  ['$0.01 API call', 'Fee > value', 'Fee = 0.0001% of value'],
  ['1M daily agent txs', '$500K/day in gas', '$10/day'],
];

export const Slide08WhyStellar = () => {
  return (
    <section className="overflow-hidden">
      <motion.h2
        className="text-2xl font-bold mb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <GradientText colors={['#0052ff', '#06b6d4', '#10b981']}>
          Purpose-Built for Payments
        </GradientText>
      </motion.h2>

      <StyledTable
        headers={['Requirement', 'Ethereum', 'Solana', 'Stellar']}
        rows={comparisonRows}
        className="mb-2"
      />

      <motion.div
        className="mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h4 className="font-bold text-slate-700 mb-1 text-xs">The math:</h4>
        <StyledTable
          headers={['Scenario', 'Ethereum', 'Stellar']}
          rows={mathRows}
        />
      </motion.div>

      <motion.p
        className="text-center mt-2 font-bold text-blue-700 bg-blue-50 rounded-lg px-3 py-1.5 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Stellar doesn't need EIP-3009. Native transfers are already programmable.
      </motion.p>
    </section>
  );
};
