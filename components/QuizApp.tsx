"use client";

import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import QuizCard from "@/components/QuizCard";
import ProgressBar from "@/components/ProgressBar";
import ResultView from "@/components/ResultView";
import { questions, type AITool } from "@/data/quizData";

type Phase = "hero" | "quiz" | "result";

const initialScores: Record<AITool, number> = {
  cursor: 0,
  claude: 0,
  chatgpt: 0,
  perplexity: 0,
  midjourney: 0,
  notionAI: 0,
};

export default function QuizApp() {
  const [phase, setPhase] = useState<Phase>("hero");
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<Record<AITool, number>>({ ...initialScores });

  const handleStart = useCallback(() => {
    console.log("QuizApp: Starting quiz...");
    setPhase("quiz");
  }, []);

  const handleSelect = useCallback(
    (optionIndex: number) => {
      console.log("QuizApp: Option selected:", optionIndex);
      const option = questions[currentQ].options[optionIndex];
      setScores((prev) => {
        const next = { ...prev };
        for (const [tool, value] of Object.entries(option.scores)) {
          next[tool as AITool] += value as number;
        }
        return next;
      });

      if (currentQ + 1 < questions.length) {
        console.log("QuizApp: Next question...");
        setCurrentQ((p) => p + 1);
      } else {
        console.log("QuizApp: Reached end, showing results...");
        setPhase("result");
      }
    },
    [currentQ]
  );

  const handleRestart = useCallback(() => {
    setPhase("hero");
    setCurrentQ(0);
    setScores({ ...initialScores });
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12 sm:py-16">
      <AnimatePresence mode="wait">
        {phase === "hero" && (
          <HeroSection key="hero" onStart={handleStart} />
        )}

        {phase === "quiz" && (
          <div key="quiz" className="w-full flex flex-col items-center">
            <ProgressBar current={currentQ + 1} total={questions.length} />
            <QuizCard
              question={questions[currentQ]}
              onSelect={handleSelect}
            />
          </div>
        )}

        {phase === "result" && (
          <ResultView key="result" scores={scores} onRestart={handleRestart} />
        )}
      </AnimatePresence>
    </div>
  );
}
