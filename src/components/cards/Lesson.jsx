import { motion } from "framer-motion";

export function LessonCard({ lesson }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="flex items-center justify-between p-4 rounded-xl border border-white/5"
    >
      <div>
        <div className="font-semibold">{lesson.title}</div>
        <div className="text-sm text-slate-300">Quick interactive exercise</div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-sm text-slate-300">{lesson.time}</div>
        <button className="btn-primary">Start</button>
      </div>
    </motion.div>
  );
}
