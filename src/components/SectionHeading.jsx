import { motion, useReducedMotion } from 'framer-motion';

export default function SectionHeading({ title, text, align = 'center' }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`section-heading section-heading--${align}`}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </motion.div>
  );
}
