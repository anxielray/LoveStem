export default function LessonSection({ title, content, children }) {
  return (
    <section className="bg-none p-8 transition-colors duration-300 space-y-4">
      <div className="bg-gray-300 h-0.5"></div>
      <h2 className="text-2xl font-bold text-black-900">{title}</h2>
      <p className="text-gray-500 text-lg" dangerouslySetInnerHTML={{ __html: content }} />
      {children && <div>{children}</div>}
    </section>
  );
}
