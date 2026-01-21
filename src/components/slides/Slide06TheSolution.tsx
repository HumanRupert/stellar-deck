import { motion } from 'framer-motion';
import { GradientText } from '../effects';
import { SemanticPayDiagram } from '../diagrams';

export const Slide06TheSolution = () => {
  return (
    <section className="overflow-hidden">
      <motion.h2
        className="text-2xl font-bold mb-1"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <GradientText colors={['#10b981', '#06b6d4', '#0052ff']}>
          Semantic Pay: The Unified Layer
        </GradientText>
      </motion.h2>

      <SemanticPayDiagram />

      <motion.div
        className="bg-gradient-to-r from-green-50 to-cyan-50 rounded-lg p-2 mt-1 border border-green-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-center font-bold text-green-700 text-sm">
          N + M integrations, not N × M
        </p>
      </motion.div>
    </section>
  );
};
