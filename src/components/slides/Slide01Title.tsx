import { motion } from 'framer-motion';
import { GradientText, ShinyText } from '../effects';
import { StackDiagram } from '../diagrams';
import { Aurora, FloatingParticles } from '../effects';

export const Slide01Title = () => {
  return (
    <section className="relative overflow-hidden">
      <Aurora colors={['#0052ff20', '#7c3aed20', '#06b6d420']} blur={100} />
      <FloatingParticles count={15} />

      <div className="relative z-10 flex flex-col h-full">
        <motion.h1
          className="text-3xl font-bold mb-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GradientText colors={['#0052ff', '#7c3aed', '#06b6d4']}>
            Financial Rails for AI Agents
          </GradientText>
        </motion.h1>

        <motion.p
          className="text-base text-slate-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <ShinyText>
            <strong>Stellar</strong> × <strong>Semantic Pay</strong> × <strong>Tether WDK</strong>
          </ShinyText>
        </motion.p>

        <div className="flex-1 flex items-center">
          <StackDiagram />
        </div>

        <motion.p
          className="text-xs text-slate-400 mt-auto italic"
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
