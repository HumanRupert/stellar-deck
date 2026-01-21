import { motion } from 'framer-motion';
import { GradientText } from '../effects';
import { NxMDiagram } from '../diagrams';

export const Slide04NxMFragmentation = () => {
  return (
    <section className="overflow-hidden">
      <motion.h2
        className="text-2xl font-bold mb-1"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <GradientText colors={['#ef4444', '#dc2626', '#b91c1c']}>
          Every Framework × Every Chain = Chaos
        </GradientText>
      </motion.h2>

      <NxMDiagram />

      <motion.div
        className="bg-red-50 rounded-lg p-2 mt-1 border border-red-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-center text-red-700 text-xs">
          <strong>Result:</strong> Fragmented tooling. Duplicated effort. Inconsistent security.
        </p>
      </motion.div>

      <motion.p
        className="text-center mt-2 font-bold text-slate-800 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Without abstraction, every framework must integrate every chain.
      </motion.p>
    </section>
  );
};
