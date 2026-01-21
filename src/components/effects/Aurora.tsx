import { motion } from 'framer-motion';

interface AuroraProps {
  colors?: string[];
  speed?: number;
  blur?: number;
  className?: string;
}

export const Aurora = ({
  colors = ['#0052ff', '#7c3aed', '#06b6d4', '#10b981'],
  speed = 8,
  blur = 80,
  className = ''
}: AuroraProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {colors.map((color, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-40"
          style={{
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            width: '50%',
            height: '50%',
            filter: `blur(${blur}px)`,
          }}
          initial={{
            x: `${20 + i * 15}%`,
            y: `${10 + i * 20}%`,
          }}
          animate={{
            x: [`${20 + i * 15}%`, `${60 - i * 10}%`, `${20 + i * 15}%`],
            y: [`${10 + i * 20}%`, `${50 - i * 10}%`, `${10 + i * 20}%`],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: speed + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
