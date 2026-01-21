import { motion } from 'framer-motion';
import { GradientText, ShinyText } from '../effects';
import { Aurora, FloatingParticles } from '../effects';

const whatWeNeed = [
  'Technical partnership for wdk-wallet-stellar development',
  'Anchor introductions (Circle, MoneyGram) for off-ramp integration',
  'Grants/funding consideration',
  'Co-announcement: "Stellar: The Payment Rail for AI Agents"',
];

const whatStellarGets = [
  'First-mover position in agentic payments',
  'Tether WDK integration',
  'Agent transaction volume from framework ecosystem',
  'Enterprise credibility via compliance layer',
];

export const Slide12TheAsk = () => {
  return (
    <section className="relative overflow-hidden">
      <Aurora colors={['#0052ff15', '#10b98115', '#7c3aed15']} blur={120} />
      <FloatingParticles count={10} />

      <div className="relative z-10 flex flex-col h-full">
        <motion.h2
          className="text-2xl font-bold mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <GradientText colors={['#10b981', '#0052ff', '#7c3aed']}>
            Let's Build the Settlement Layer for AI
          </GradientText>
        </motion.h2>

        <div className="grid grid-cols-2 gap-3 mb-2 flex-1">
          <motion.div
            className="bg-white/80 backdrop-blur rounded-lg p-3 shadow-md border border-blue-200"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-blue-700 mb-1 text-sm">What we need:</h4>
            <ol className="space-y-1">
              {whatWeNeed.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-1.5 text-slate-600 text-xs"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <span className="font-bold text-blue-500 min-w-[14px]">{i + 1}.</span>
                  {item}
                </motion.li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur rounded-lg p-3 shadow-md border border-green-200"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-green-700 mb-1 text-sm">What Stellar gets:</h4>
            <ul className="space-y-1">
              {whatStellarGets.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-1.5 text-slate-600 text-xs"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <span className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-lg p-3 text-center mt-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <p className="mb-1 text-slate-300 text-xs">
            The agentic economy needs rails that are instant, cheap, and verifiable.
          </p>
          <p className="text-sm font-bold">
            <ShinyText>Stellar was built for exactly this.</ShinyText>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
