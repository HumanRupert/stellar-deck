import { motion } from 'framer-motion';
import { GradientText } from '../effects';
import { CodeBlock } from '../ui';

const policyCode = `const agentPolicy = {
  budget: {
    daily: 100_000_000n,        // 100 USDC max/day
    perTransaction: 1_000_000n  // 1 USDC max/tx
  },
  allowedRecipients: ['G...*'], // Verified providers only
  velocity: { maxPerMinute: 10, maxPerHour: 100 },
  allowedAssets: ['USDC:GA5Z...', 'native'],
  logging: {
    destination: 'compliance.company.com',
    includeTaskContext: true
  }
}`;

export const Slide10PolicyEnforcement = () => {
  return (
    <section className="overflow-hidden">
      <motion.h2
        className="text-2xl font-bold mb-1"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <GradientText colors={['#f59e0b', '#ef4444', '#7c3aed']}>
          AI is Stochastic. Finance is Deterministic.
        </GradientText>
      </motion.h2>

      <motion.p
        className="text-slate-600 mb-2 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <strong>The SDK reconciles this with configurable guardrails:</strong>
      </motion.p>

      <CodeBlock code={policyCode} language="javascript" />

      <motion.p
        className="text-center mt-2 font-bold text-slate-700 bg-slate-100 rounded-lg px-3 py-1.5 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Every transaction validated before execution. Every transaction logged for compliance.
      </motion.p>
    </section>
  );
};
