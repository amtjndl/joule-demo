import AnomalyCard from "../ui/AnomalyCard";
const highAlerts = [
  {
    id: "file-123",
    fileName: "Payments_Jan_12.xml",
    status: "ACK Delayed",
    action: "Retry initiated",
    recommendation: ["Investigate", "Escalate"],
  },
  {
    id: "file-124",
    fileName: "Payables_US_02.xml",
    status: "ACK Delayed",
    action: "Awaiting bank response",
    recommendation: ["Investigate"],
  },
  {
    id: "file-125",
    fileName: "ACH_North_Region.xml",
    status: "ACK Delayed",
    action: "Pending",
    recommendation: ["Investigate"],
  },
];
export default function PaymentCenter({ onNavigate }: any) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Payment Command Center</h2>
      <div>
        <h3 className="text-lg font-semibold text-red-600 mb-3">High Priority</h3>
        <div className="space-y-3">
          {highAlerts.map((alert) => (
            <AnomalyCard
              key={alert.id}
              {...alert}
              onInvestigate={() =>
                onNavigate("INVESTIGATION", { fileId: alert.id })
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}