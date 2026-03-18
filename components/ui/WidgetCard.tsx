export default function WidgetCard({ title, description, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-joule-border rounded-xl p-5 shadow hover:shadow-lg cursor-pointer transition"
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-joule-subtle">{description}</p>
    </div>
  );
}