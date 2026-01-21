import { motion } from 'framer-motion';

interface PulsingRingProps {
  size?: number;
  color?: string;
  className?: string;
}

export const PulsingRing = ({
  size = 200,
  color = '#0052ff',
  className = ''
}: PulsingRingProps) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-2"
          style={{ borderColor: color }}
          initial={{ scale: 0.8, opacity: 0.8 }}
          animate={{
            scale: [0.8, 1.5],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.6,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
      <div
        className="absolute inset-0 m-auto rounded-full"
        style={{
          width: size * 0.3,
          height: size * 0.3,
          background: color,
          boxShadow: `0 0 30px ${color}`,
        }}
      />
    </div>
  );
};
