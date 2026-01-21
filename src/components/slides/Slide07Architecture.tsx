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
    <section>
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <GradientText>A Complete Stack for Agent Payments</GradientText>
      </motion.h2>

      <StyledTable
        headers={['Layer', 'Component', 'Function']}
        rows={layers}
        className="mb-4"
      />

      <div className="grid grid-cols-2 gap-4 mt-4">
        <motion.div
          className="bg-blue-50 rounded-xl p-4 border border-blue-200"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="font-bold text-blue-700 mb-2">x402 Extended</h4>
          <p className="text-blue-600 text-xs">
            We expand x402 beyond EIP-3009 tokens. Stellar's native asset model doesn't require{' '}
            <code className="bg-blue-100 px-1 rounded">transferWithAuthorization</code> — all assets work identically at the protocol level.
          </p>
        </motion.div>

        <motion.div
          className="bg-purple-50 rounded-xl p-4 border border-purple-200"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h4 className="font-bold text-purple-700 mb-2">AP2 Integration</h4>
          <p className="text-purple-600 text-xs">
            Every agent transaction includes a Verifiable Digital Credential proving human authorization.
            No more "who approved this?" ambiguity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
