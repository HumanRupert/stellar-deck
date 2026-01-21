import { motion } from 'framer-motion';
import { GradientText, ShinyText } from '../effects';
import { StackDiagram } from '../diagrams';
import { Aurora, FloatingParticles } from '../effects';

export const Slide01Title = () => {
  return (
    <section className="relative overflow-hidden">
      <Aurora colors={['#0052ff20', '#7c3aed20', '#06b6d420']} blur={100} />
      <FloatingParticles count={15} />

      <div className="relative z-10">
        <motion.h1
          className="text-5xl font-bold mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GradientText colors={['#0052ff', '#7c3aed', '#06b6d4']}>
            Financial Rails for AI Agents
          </GradientText>
        </motion.h1>

        <motion.p
          className="text-xl text-slate-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <ShinyText>
            <strong>Stellar</strong> × <strong>Semantic Pay</strong> × <strong>Tether WDK</strong>
          </ShinyText>
        </motion.p>

        <StackDiagram />

        <motion.p
          className="text-sm text-slate-400 mt-8 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          January 2026
        </motion.p>
      </div>
    </section>
  );
};
