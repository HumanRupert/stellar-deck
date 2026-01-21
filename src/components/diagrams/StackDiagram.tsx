import { motion } from 'framer-motion';

const stackItems = [
  { name: 'Stellar', description: 'Settlement Rails', color: '#0052ff' },
  { name: 'WDK', description: 'Wallet Provider', color: '#7c3aed' },
  { name: 'AP2', description: 'Authorization', color: '#06b6d4' },
  { name: 'x402', description: 'Negotiation Protocol', color: '#10b981' },
];

export const StackDiagram = () => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      {stackItems.map((item, index) => (
        <motion.div
          key={item.name}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
        >
          <motion.div
            className="w-28 h-20 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
            style={{ backgroundColor: item.color }}
            whileHover={{ scale: 1.05, boxShadow: `0 10px 30px ${item.color}40` }}
            transition={{ duration: 0.2 }}
          >
            {item.name}
          </motion.div>
          <motion.div
            className="mt-2 h-8 w-0.5 bg-gradient-to-b from-slate-300 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.3 }}
          />
          <p className="text-xs text-slate-500 text-center mt-1">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};
