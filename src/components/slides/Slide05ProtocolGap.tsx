import { motion } from 'framer-motion';
import { GradientText } from '../effects';

const protocols = [
  {
    name: 'x402 (Coinbase)',
    color: '#0052ff',
    points: [
      'HTTP 402 revival for pay-per-request APIs',
      'Relies on EIP-3009 (transferWithAuthorization)',
      { text: 'After 6 years, only USDC implements EIP-3009', bold: true },
      'USDT, PYUSD, DAI — none support it',
      'x402 is effectively USDC-only',
    ],
  },
  {
    name: 'L402 (Lightning Labs)',
    color: '#f59e0b',
    points: [
      'Macaroons + Lightning for API monetization',
      'Relies on Lightning Network routing',
      'Channel management complexity',
      { text: 'Not positioned to scale to billions of agent transactions', bold: true },
    ],
  },
];

export const Slide05ProtocolGap = () => {
  return (
    <section>
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <GradientText colors={['#f59e0b', '#ef4444', '#dc2626']}>
          The Protocol Gap
        </GradientText>
      </motion.h2>

      <div className="grid grid-cols-2 gap-4">
        {protocols.map((protocol, i) => (
          <motion.div
            key={protocol.name}
            className="bg-white rounded-xl p-4 shadow-lg border-t-4"
            style={{ borderColor: protocol.color }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15 }}
          >
            <h3 className="font-bold text-lg mb-3" style={{ color: protocol.color }}>
              {protocol.name}
            </h3>
            <ul className="space-y-1.5">
              {protocol.points.map((point, j) => (
                <motion.li
                  key={j}
                  className="flex items-start gap-2 text-xs"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.15 + j * 0.05 }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: protocol.color }}
                  />
                  <span className={typeof point === 'object' && point.bold ? 'font-bold text-slate-800' : 'text-slate-600'}>
                    {typeof point === 'object' ? point.text : point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-slate-800 text-white rounded-xl p-4 mt-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <p className="font-bold">
          Both are chain-specific. Neither solves N×M. Neither has authorization.
        </p>
      </motion.div>
    </section>
  );
};
