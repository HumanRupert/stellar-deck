import { motion } from 'framer-motion';

const mandates = [
  {
    title: 'CART MANDATE',
    subtitle: '(Human Present)',
    items: ['Exact items, amounts, payee', 'Signed at transaction time', 'Non-repudiable proof'],
    color: '#0052ff',
    bgColor: '#eff6ff',
  },
  {
    title: 'INTENT MANDATE',
    subtitle: '(Human Not Present)',
    items: ['"Pay up to $10/day for weather data"', 'Spending limits, categories, TTL', 'Signed before agent acts autonomously'],
    color: '#7c3aed',
    bgColor: '#f5f3ff',
  },
  {
    title: 'PAYMENT MANDATE',
    subtitle: '(Network Visibility)',
    items: ['Signals AI involvement to networks', 'Enables appropriate risk rules', 'Creates audit trail'],
    color: '#10b981',
    bgColor: '#ecfdf5',
  },
];

export const AP2MandateDiagram = () => {
  return (
    <div className="mt-2">
      <motion.div
        className="text-center mb-3 px-4 py-2 bg-slate-100 rounded-lg inline-block"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-semibold text-slate-700 text-sm">AP2 MANDATE TYPES</span>
      </motion.div>

      <div className="grid grid-cols-3 gap-3">
        {mandates.map((mandate, i) => (
          <motion.div
            key={mandate.title}
            className="rounded-xl p-3 border"
            style={{
              backgroundColor: mandate.bgColor,
              borderColor: `${mandate.color}30`,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
            whileHover={{
              scale: 1.02,
              boxShadow: `0 8px 25px ${mandate.color}20`
            }}
          >
            <h4
              className="font-bold text-xs mb-0.5"
              style={{ color: mandate.color }}
            >
              {mandate.title}
            </h4>
            <p className="text-xs text-slate-500 mb-2">{mandate.subtitle}</p>

            <ul className="space-y-1">
              {mandate.items.map((item, j) => (
                <motion.li
                  key={j}
                  className="flex items-start gap-1.5 text-xs text-slate-600"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 + j * 0.1 + 0.2 }}
                >
                  <span
                    className="mt-1 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ backgroundColor: mandate.color }}
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
