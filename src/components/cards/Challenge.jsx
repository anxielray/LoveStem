export function ChallengeCard() {
  return (
    <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-[#0f1724]/50 to-[#071129]/40 border border-white/5">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-bold">Mastery Challenge</div>
          <div className="text-sm text-slate-300">Solve a puzzle to earn 120 XP</div>
        </div>
        <button className="btn-primary">Attempt</button>
      </div>
    </div>
  );
}
