export default function TimelineView({ file }: any) {
  const stages = [
    { label: "File generation in SAP", status: "done" },
    { label: "Transmitted to Integration Layer (B2B)", status: "done" },
    { label: "Sent to Bank of America", status: "done" },
    { label: "Acknowledgement Pending", status: "pending" },
  ];
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">
        Payment Lifecycle — {file?.fileId}
      </h2>
      <div className="relative border