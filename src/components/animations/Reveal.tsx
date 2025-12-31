import { motion, type HTMLMotionProps } from 'framer-motion'
import type { PropsWithChildren } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right'

type RevealProps = PropsWithChildren<{
  delay?: number
  once?: boolean
  direction?: Direction
  distance?: number
}> &
  HTMLMotionProps<'div'>

export function Reveal({
  children,
  delay = 0,
  once = false,
  className,
  direction = 'up',
  distance = 32,
  ...props
}: RevealProps) {
  const axis =
    direction === 'left' || direction === 'right' ? 'x' : 'y'

  const value =
    direction === 'left' || direction === 'up'
      ? distance
      : -distance

  return (
    <motion.div
      {...props}
      className={className}
      initial={{
        opacity: 0,
        [axis]: value,
      }}
      whileInView={{
        opacity: 1,
        [axis]: 0,
      }}
      viewport={{ once, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
