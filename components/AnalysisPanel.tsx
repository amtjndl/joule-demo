export default function AnalysisPanel() {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl font-semibold">Executive Insights</h2>
        <p className="text-joule-subtle text-sm mt-1">
          Data-driven highlights generated from your conversation
        </p>
      </div>
      {/* Card 1 */}
      <div className="p-6 bg-white rounded-xl shadow border border-joule-border">
        <h3 className="text-lg font-semibold mb-4">Key Metrics Overview</h3>
        <svg width="100%" height="140">
          <polyline
            fill="none"
            stroke="#3a7bd5"
            strokeWidth="3"
            points="0,80 40,60 80,70 120,45 160,55 200,35 240,50 280,20"
          />
        </svg>
      </div>
      {/* Card 2 */}
      <div className="p-6 bg-white rounded-xl shadow border border-joule-border">
        <h3 className="text-lg font-semibold mb-3">Insights Summary</h3>
        <p className="text-joule-subtle text-sm leading-relaxed">
          This section provides executive-level summaries, detected patterns,
          and recommended actions based on your dialogue with the assistant.
        </p>
      </div>
    </div>
  );
}