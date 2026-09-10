import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ value, suffix = '', decimals = 0, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    const controls = animate(0, value, {
      duration: 1.3,
      ease: 'easeOut',
      onUpdate(latest) {
        setDisplay(latest);
      },
    });

    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  return (
    <motion.div ref={ref} className="stat-card" initial={false}>
      <strong>{Number(display).toFixed(decimals)}{suffix}</strong>
      <span>{label}</span>
    </motion.div>
  );
}
