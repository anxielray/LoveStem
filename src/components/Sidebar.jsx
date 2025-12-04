import '../App.css'

// Dummy data for sidebar


export default function Sidebar({sidebarData}) {
  return (
    <aside
      className="flex flex-col text-white"
      style={{
        fontFamily: "Source Sans Pro, Helvetica, sans-serif",
        fontSize: "18px",
        lineHeight: 1.6,
        userSelect: "none",
        WebkitTextSizeAdjust: "none",
        WebkitTapHighlightColor: "transparent",
        cursor: "inherit",
        background:
          "#054b85ff linear-gradient(transparent 240px, rgba(0,0,0,0.25))",
        boxShadow: "0 0 12px rgba(0,0,0,0.25)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: "60px",
        left: "0",
        bottom: "0",
        width: "300px",
        height: "calc(100vh - 60px)",
        zIndex: 301,
      }}
    >
      {/* Hero */}
      <div
        className="relative h-48 bg-cover bg-center"
        style={{ backgroundImage: sidebarData.img || sidebarData.img }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          <h2 className="text-lg font-bold">{sidebarData.label || sidebarData.label}</h2>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto">
        {sidebarData.lessons.map((lesson, idx) =>
          lesson.active ? (
            <div key={idx} className="flex items-center px-4 py-3 bg-[#179e3a]">
              <LessonProgress r={10} p={lesson.progress} />
              <span className="ml-3">{lesson.title}</span>
              <div className="flex-1 h-px bg-white/30 ml-2"></div>
            </div>
          ) : (
            <a
              key={idx}
              href={lesson.href}
              className="flex items-center px-4 py-3 hover:bg-[#16a438] transition-colors"
            >
              <LessonProgress r={10} p={lesson.progress} />
              <span className="ml-3">{lesson.title}</span>
              <div className="flex-1 h-px bg-white/30 ml-2"></div>
            </a>
          )
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-around p-3 border-t border-white/20">
        <SidebarButton icon="share" label="Share" />
        <SidebarButton icon="glossary" label="Glossary" />
        <SidebarButton icon="reset" label="Reset Progress" />
      </div>
    </aside>
  );
}

// Progress circle component
function LessonProgress({ r, p }) {
  const dashArray = 2 * Math.PI * r;
  const dashOffset = dashArray * (1 - p / 100);
  return (
    <svg width={2 * r + 4} height={2 * r + 4}>
      <circle
        cx={r + 2}
        cy={r + 2}
        r={r}
        stroke="white"
        strokeWidth="4"
        fill="none"
        strokeDasharray={dashArray}
        strokeDashoffset={dashOffset}
      />
    </svg>
  );
}

// Footer buttons
function SidebarButton({ icon, label }) {
  return (
    <button className="flex flex-col items-center text-sm hover:text-gray-200 transition">
      <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" /> {/* Placeholder icon */}
      </svg>
      <span>{label}</span>
    </button>
  );
}
