export default function AnomalyCard({
  fileName,
  status,
  action,
  recommendation,
  onInvestigate,
}: any) {
  return (
    <div className="bg-white border border-joule-border rounded-lg p-4 shadow">
      <div className="font-semibold text-sm">{fileName}</div>
      <div className="text-joule-subtle text-xs mb-2">{status}</div>
      <div className="text-xs mb-3">
        <span className="font-medium">System Action:</span> {action}
      </div>
      <div className="flex gap-2">
        {recommendation.map((opt: string) => (
          <button
            key={opt}
            onClick={onInvestigate}
            className="px-3 py-1 text-xs bg-joule-blue text-white rounded-md hover:opacity-90"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}