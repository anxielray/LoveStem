export function ProfileCard() {
  return (
    <div className="glass p-5 rounded-2xl shadow-lg">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#6ee7f5] flex items-center justify-center text-[#061021] font-bold text-xl">RM</div>
        <div>
          <div className="text-lg font-semibold">Raymond Martin</div>
          <div className="text-sm text-slate-300">Level: Apprentice • XP 420</div>
          <div className="mt-3">
            <div className="text-sm text-slate-300">Badges</div>
            <div className="flex gap-2 mt-2">
              <div className="px-2 py-1 rounded-md glass-mini">Mechanics</div>
              <div className="px-2 py-1 rounded-md glass-mini">Electro</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
