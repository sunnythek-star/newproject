import { motion, AnimatePresence } from "framer-motion";

export default function ResultModal({ isOpen, time, onRestart }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onRestart}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <div className="text-6xl mb-4">🎉</div>
              </motion.div>
              <h2 className="text-3xl font-bold text-indigo-600 mb-4">
                축하합니다!
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                👏 당신의 기록: <span className="font-bold text-indigo-600">{time}초</span>
              </p>
              <motion.button
                onClick={onRestart}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                다시하기
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

