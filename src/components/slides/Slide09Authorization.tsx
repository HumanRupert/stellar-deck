import { motion } from 'framer-motion';
import { GradientText } from '../effects';
import { AP2MandateDiagram } from '../diagrams';

export const Slide09Authorization = () => {
  return (
    <section>
      <motion.h2
        className="text-3xl font-bold mb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <GradientText colors={['#7c3aed', '#0052ff', '#06b6d4']}>
          Who Approved This Payment?
        </GradientText>
      </motion.h2>

      <motion.p
        className="text-slate-600 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <strong>Google AP2 Verifiable Digital Credentials solve accountability.</strong>
      </motion.p>

      <AP2MandateDiagram />

      <motion.div
        className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-3 mt-3 border border-purple-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-center text-slate-700 text-sm">
          <strong>Result:</strong> Every agent transaction traces back to a verified human.
          Regulators get transparency. Merchants get confidence.
        </p>
      </motion.div>
    </section>
  );
};
