import { motion } from "motion/react";
import { Sparkles, Crown } from "lucide-react";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.25, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-charcoal text-cream overflow-hidden"
    >
      {/* Background Decorative glow assets */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-softbrown/10 rounded-full blur-[100px] animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-peach/15 rounded-full blur-[100px] animate-pulse-subtle" />

      {/* Deluxe Rotating Gold Circle */}
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="w-32 h-32 border-2 border-dashed border-[#B68D6C]/30 rounded-full"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          className="absolute w-28 h-28 border border-solid border-t-[#B68D6C] border-r-[#FFD8BE] border-b-transparent border-l-transparent rounded-full"
        />

        {/* Center Crown Emblem */}
        <div className="absolute bg-charcoal border border-[#B68D6C]/40 p-4 rounded-full shadow-[0_0_25px_rgba(182,141,108,0.2)]">
          <motion.div
            animate={{ scale: [0.94, 1.06, 0.94] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <Crown className="h-10 w-10 text-[#FFD8BE] stroke-[1.5]" />
          </motion.div>
        </div>
      </div>

      {/* Text Branding with staggered letters or elegant opacity fade */}
      <div className="mt-8 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="font-heading text-2xl sm:text-3xl font-extrabold tracking-[0.25em] text-[#FFD8BE]"
        >
          SK <span className="text-cream">CATTERY</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex items-center justify-center gap-1.5 mt-2 text-[10px] sm:text-xs font-semibold tracking-[0.35em] text-beige uppercase"
        >
          <Sparkles className="h-3 w-3 text-[#B68D6C] animate-pulse" />
          The Epitome of Royal Felines
          <Sparkles className="h-3 w-3 text-[#B68D6C] animate-pulse" />
        </motion.div>
      </div>

      {/* Progress Line */}
      <div className="w-48 h-[1.5px] bg-[#B68D6C]/25 mt-10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-softbrown to-peach"
        />
      </div>
    </motion.div>
  );
}
