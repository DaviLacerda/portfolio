import { motion } from "framer-motion"

export function WavingHand(){
    return (
        <motion.span
            animate={{
                rotate: [0, 14, -8, 14, -4, 10, 0, 0]
            }}
            transition={{
                duration: 2.5,
                ease: "linear",
                loop: Infinity
            }}
            className="inline-block origin-[70%_70%]"
        >
            👋
        </motion.span>
    )
}