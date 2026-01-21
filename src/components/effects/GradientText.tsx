import { motion } from 'framer-motion';

interface GradientTextProps {
  children: React.ReactNode;
  colors?: string[];
  animate?: boolean;
  className?: string;
}

export const GradientText = ({
  children,
  colors = ['#0052ff', '#7c3aed', '#06b6d4'],
  animate = true,
  className = ''
}: GradientTextProps) => {
  const gradient = `linear-gradient(135deg, ${colors.join(', ')})`;

  return (
    <motion.span
      className={`inline-block ${className}`}
      style={{
        background: animate
          ? `linear-gradient(90deg, ${colors.join(', ')}, ${colors[0]})`
          : gradient,
        backgroundSize: animate ? '200% 100%' : '100% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
      animate={animate ? {
        backgroundPosition: ['0% center', '100% center', '0% center'],
      } : undefined}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </motion.span>
  );
};
