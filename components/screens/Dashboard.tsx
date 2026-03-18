import WidgetCard from "../ui/WidgetCard";
export default function Dashboard({ onNavigate }: any) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
      <p className="text-joule-subtle mb-6">
        Select a workflow to begin your financial operations analysis.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <WidgetCard
          title="Payment Command Center"
          description="Monitor payments, detect anomalies, and resolve discrepancies."
          onClick={() => onNavigate("PAYMENT_CENTER")}
        />
        <WidgetCard
          title="Intelligent Auto Reconcile Hub"
          description="AI-driven reconciliation insights across systems."
        />
        <WidgetCard
          title="Financial Close Tracker"
          description="Track close processes and automation opportunities."
        />
        <WidgetCard
          title="Health Monitor"
          description="System stability, reliability, and SLA overview."
        />
      </div>
    </div>
  );
}