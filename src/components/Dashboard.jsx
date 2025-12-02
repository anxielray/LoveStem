import { motion } from "framer-motion";
import { XPBar } from '../utils/XPBar';

export function Dashboard() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      <motion.div
        className="glass p-5 rounded-2xl shadow-lg"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.05 }}
      >
        <h3 className="text-sm text-slate-300">Continue</h3>
        <h2 className="text-xl font-bold mt-2">Rotational Dynamics — Module 4</h2>
        <div className="mt-4">
          <XPBar xp={420} levelXp={600} />
        </div>
        <div className="mt-4 flex gap-2">
          <button className="btn-primary">Resume</button>
          <button className="btn-ghost">Review</button>
        </div>
      </motion.div>

      <motion.div
        className="glass p-5 rounded-2xl shadow-lg"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.12 }}
      >
        <h3 className="text-sm text-slate-300">Streak</h3>
        <div className="flex items-center gap-3 mt-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ffd166] to-[#ff8fab] flex items-center justify-center text-[#061021] font-bold">🔥</div>
          <div>
            <div className="text-lg font-semibold">7 days</div>
            <div className="text-sm text-slate-300">Keep it up — unlock a puzzle!</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="glass p-5 rounded-2xl shadow-lg"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.18 }}
      >
        <h3 className="text-sm text-slate-300">Daily Goal</h3>
        <div className="mt-3 text-lg font-semibold">Solve 3 problems</div>
        <div className="mt-4">
          <div className="text-sm text-slate-300">Progress</div>
          <div className="w-full bg-slate-800 rounded-full h-3 mt-2 overflow-hidden">
            <div className="h-3 rounded-full" style={{ width: '40%', background: 'linear-gradient(90deg,#6ee7f5,#8b5cf6)' }}></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}