import { motion } from 'framer-motion';
import { GradientText } from '../effects';
import { StyledTable } from '../ui';

const layers = [
  ['Negotiation', 'x402 Protocol', 'HTTP 402 headers for payment requirements'],
  ['Authorization', 'Google AP2 VDCs', 'Cryptographic proof of human intent'],
  ['Wallet', 'Tether WDK', 'HD wallet infrastructure, per-agent isolation'],
  ['Settlement', 'Stellar Network', '$0.00001 fees, 5-second finality, native multi-asset'],
];

export const Slide07Architecture = () => {
  return (
    <section className="overflow-hidden">
      <motion.h2
        className="text-2xl font-bold mb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <GradientText>A Complete Stack for Agent Payments</GradientText>
      </motion.h2>

      <StyledTable
        headers={['Layer', 'Component', 'Function']}
        rows={layers}
        className="mb-2"
      />

      <div className="grid grid-cols-2 gap-2 mt-2">
        <motion.div
          className="bg-blue-50 rounded-lg p-2 border border-blue-200"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="font-bold text-blue-700 mb-1 text-xs">x402 Extended</h4>
          <p className="text-blue-600 text-xs leading-tight">
            We expand x402 beyond EIP-3009 tokens. Stellar's native asset model doesn't require{' '}
            <code className="bg-blue-100 px-0.5 rounded text-xs">transferWithAuthorization</code> — all assets work identically at the protocol level.
          </p>
        </motion.div>

        <motion.div
          className="bg-purple-50 rounded-lg p-2 border border-purple-200"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h4 className="font-bold text-purple-700 mb-1 text-xs">AP2 Integration</h4>
          <p className="text-purple-600 text-xs leading-tight">
            Every agent transaction includes a Verifiable Digital Credential proving human authorization.
            No more "who approved this?" ambiguity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
