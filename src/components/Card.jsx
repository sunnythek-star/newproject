import { motion } from "framer-motion";

export default function Card({ number, isFlipped, onClick, isWrong }) {
  return (
    <motion.div
      className="relative aspect-square cursor-pointer"
      onClick={onClick}
      animate={isWrong ? {
        x: [0, -10, 10, -10, 10, 0],
      } : {}}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full h-full rounded-lg shadow-md flex items-center justify-center text-2xl font-bold"
        animate={{
          rotateY: isFlipped ? 180 : 0,
          backgroundColor: isFlipped 
            ? "#6b7280" 
            : isWrong 
            ? "#f87171" 
            : "#c7d2fe",
          scale: isWrong ? [1, 1.1, 1] : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
          }}
          animate={{
            rotateY: isFlipped ? 180 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {isFlipped ? (
            <span className="text-white opacity-0">{number}</span>
          ) : (
            <span className="text-indigo-600 font-bold">{number}</span>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

