import { motion } from "framer-motion";

export default function Home({ onStart }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-indigo-600 mb-6"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Speed Card Challenge
        </motion.h1>
        <p className="text-xl text-gray-700 mb-8">
          1부터 20까지 빠르게 카드를 터치하세요!
        </p>
        <motion.button
          onClick={onStart}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-12 rounded-lg text-xl shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          게임 시작
        </motion.button>
      </motion.div>
    </div>
  );
}

