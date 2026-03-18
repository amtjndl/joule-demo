export default function InvestigationView({ file, onNavigate }: any) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Investigation</h2>
      <p className="text-joule-subtle mb-4">
        ACK delay detected for file <strong>{file?.fileId}</strong>.
      </p>
      <div className="bg-white border border-joule-border rounded-xl p-5 shadow">
        <h3 className="font-semibold mb-3">File Details</h3>
        <p className="text-sm">Awaiting acknowledgment from Bank of America.</p>
      </div>
      <button
        onClick={() => onNavigate("TIMELINE", file)}
        className="mt-4 px-4 py-2 bg-joule-blue text-white rounded-md"
      >
        View Payment Lifecycle
      </button>
    </div>
  );
}