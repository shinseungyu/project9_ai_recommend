import { motion } from "framer-motion";
import type { AITool } from "@/data/quizData";
import { aiToolDetails } from "@/data/quizData";

interface ResultViewProps {
  scores: Record<AITool, number>;
  onRestart: () => void;
}

const ResultView = ({ scores, onRestart }: ResultViewProps) => {
  const sorted = (Object.entries(scores) as [AITool, number][])
    .sort(([, a], [, b]) => b - a);

  const mainTool = sorted[0][0];
  const subTool = sorted[1][0];
  const main = aiToolDetails[mainTool];
  const sub = aiToolDetails[subTool];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-sm font-semibold uppercase tracking-widest text-primary mb-2"
      >
        분석 완료
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-2xl sm:text-3xl font-extrabold text-foreground mb-10"
      >
        당신에게 딱 맞는 AI 조합은?
      </motion.h2>

      {/* Main Tool */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="relative bg-card rounded-2xl border-2 border-primary/30 p-6 sm:p-8 mb-4 shadow-[var(--card-shadow)]"
      >
        <span className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
          🏆 메인 도구
        </span>
        <div className="text-5xl mb-3">{main.icon}</div>
        <h3 className="text-2xl font-bold text-foreground mb-1">{main.name}</h3>
        <p className="text-sm font-semibold text-primary mb-3">{main.tagline}</p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{main.description}</p>
        <a
          href={main.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-xl font-semibold text-primary-foreground transition-transform hover:scale-105"
          style={{ background: "var(--hero-gradient)" }}
        >
          ✨ 한 달 무료 체험하기
        </a>
      </motion.div>

      {/* Sub Tool */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35, type: "spring", stiffness: 200 }}
        className="bg-card rounded-2xl border border-border p-6 mb-6"
      >
        <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-3">
          🥈 서브 도구
        </span>
        <div className="text-4xl mb-2">{sub.icon}</div>
        <h3 className="text-xl font-bold text-foreground mb-1">{sub.name}</h3>
        <p className="text-sm font-semibold text-muted-foreground mb-2">{sub.tagline}</p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{sub.description}</p>
        <a
          href={sub.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2.5 rounded-lg font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
        >
          무료 체험하기 →
        </a>
      </motion.div>

      {/* Adsense placeholder */}
      <div
        id="adsense-banner"
        className="w-full h-32 bg-secondary rounded-xl flex items-center justify-center my-6 border border-border"
      >
        <span className="text-muted-foreground text-sm">광고 배너 영역</span>
      </div>

      {/* Score breakdown */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-card rounded-2xl border border-border p-6 mb-8"
      >
        <h4 className="text-sm font-semibold text-muted-foreground mb-4">전체 점수 분석</h4>
        <div className="space-y-3">
          {sorted.map(([tool, score], i) => {
            const info = aiToolDetails[tool];
            const maxScore = sorted[0][1];
            const pct = maxScore > 0 ? (score / maxScore) * 100 : 0;
            return (
              <div key={tool} className="flex items-center gap-3">
                <span className="text-lg w-8">{info.icon}</span>
                <span className="text-sm font-medium text-foreground w-24 text-left">{info.name}</span>
                <div className="flex-1 h-2.5 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: info.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                  />
                </div>
                <span className="text-xs font-mono text-muted-foreground w-8 text-right">{score}점</span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Restart */}
      <motion.button
        onClick={onRestart}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-colors"
      >
        🔄 다시 테스트하기
      </motion.button>
    </motion.div>
  );
};

export default ResultView;
