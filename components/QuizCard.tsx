import { motion, AnimatePresence } from "framer-motion";
import type { Question } from "@/data/quizData";

interface QuizCardProps {
  question: Question;
  onSelect: (optionIndex: number) => void;
}

const QuizCard = ({ question, onSelect }: QuizCardProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -60 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-2xl mx-auto"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-8 text-center leading-relaxed">
          {question.question}
        </h2>

        <div className="flex flex-col gap-3">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              onClick={() => onSelect(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.3 }}
              className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 rounded-xl bg-card border border-border
                         hover:border-primary/40 hover:shadow-[var(--card-shadow-hover)]
                         transition-all duration-200 cursor-pointer group"
            >
              <span className="text-base sm:text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                {option.text}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuizCard;
