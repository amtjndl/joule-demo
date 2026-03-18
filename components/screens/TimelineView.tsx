"use client";
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
      <div className="relative border-l-4 border-joule-blue pl-6 space-y-8">
        {stages.map((stage, idx) => (
          <div key={idx} className="relative">
            {/* Dot */}
            <div
              className={`
                absolute -left-[14px] top-1.5 w-4 h-4 rounded-full 
                ${stage.status === "done" ? "bg-joule-blue" : "bg-orange-400"}
              `}
            />
            {/* Label */}
            <div>
              <p className="font-medium">{stage.label}</p>
              {stage.status === "pending" && (
                <p className="text-sm text-orange-600 mt-1">
                  Process delayed — waiting for bank acknowledgement
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}