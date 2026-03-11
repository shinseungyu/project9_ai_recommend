import { motion } from "framer-motion";

interface HeroSectionProps {
  onStart: () => void;
}

const HeroSection = ({ onStart }: HeroSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-2xl mx-auto"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
        className="text-6xl mb-6"
      >
        🤖
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4 leading-tight"
      >
        내 업무에 딱 맞는
        <br />
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: "var(--hero-gradient)" }}
        >
          AI 툴 찾기
        </span>
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-muted-foreground text-base sm:text-lg mb-10 leading-relaxed"
      >
        8개의 간단한 질문에 답하면,
        <br className="sm:hidden" />
        {" "}당신의 업무 스타일에 최적화된 AI를 추천해드려요.
      </motion.p>

      <motion.button
        onClick={onStart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="px-8 py-4 rounded-2xl text-lg font-bold text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
        style={{ background: "var(--hero-gradient)" }}
      >
        테스트 시작하기 →
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4 text-xs text-muted-foreground"
      >
        ⏱️ 약 2분 소요 · 로그인 불필요
      </motion.p>
    </motion.div>
  );
};

export default HeroSection;
