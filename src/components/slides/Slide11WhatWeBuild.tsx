import { motion } from 'framer-motion';
import { GradientText } from '../effects';
import { StyledTable } from '../ui';

const deliverables = [
  ['wdk-wallet-stellar', 'Full Tether WDK module for Stellar (SLIP-0010 derivation, USDC/EURC/PYUSD support, trustline management)'],
  ['Semantic SDK for Stellar', 'x402-compatible negotiation, AP2 authorization, policy engine, audit logging'],
  ['Framework Adapters', 'Google ADK, OpenAI SDK, LangChain, Claude MCP integrations'],
  ['Agent Marketplace', 'KYC\'d agent registry, verified service providers, reputation system'],
];

const partnershipPoints = [
  'Stellar added to Tether WDK as part of collaboration',
  'Co-development on SDK and marketplace',
  'Co-marketing for agentic payments use case',
];

export const Slide11WhatWeBuild = () => {
  return (
    <section className="overflow-hidden">
      <motion.h2
        className="text-2xl font-bold mb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <GradientText>The Stellar Proposal</GradientText>
      </motion.h2>

      <motion.h3
        className="font-bold text-slate-700 mb-1 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Deliverables:
      </motion.h3>

      <StyledTable
        headers={['Component', 'Description']}
        rows={deliverables}
        className="mb-2"
      />

      <motion.div
        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-2 border border-blue-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h4 className="font-bold text-blue-700 mb-1 text-xs">Partnership Structure:</h4>
        <ul className="space-y-0.5">
          {partnershipPoints.map((point, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-1.5 text-slate-600 text-xs"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <span className="w-1 h-1 bg-blue-500 rounded-full" />
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};
