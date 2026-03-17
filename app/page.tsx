import ChatPanel from "@/components/ChatPanel";
import AnalysisPanel from "@/components/AnalysisPanel";
import NavRail from "@/components/NavRail";
export default function Page() {
  return (
    <main className="flex flex-col h-screen">
      {/* Header */}
      <header className="h-14 flex items-center px-6 bg-white shadow-md border-b border-joule-border">
        <h1 className="text-lg font-semibold tracking-tight">
          SAP Joule Executive Assistant
        </h1>
      </header>
      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left-most Navigation Rail */}
        <NavRail />
        {/* Chat Panel */}
        <div className="w-[32%] border-r border-joule-border bg-joule-surface overflow-hidden">
          <ChatPanel />
        </div>
        {/* Analysis Panel */}
        <div className="w-[68%] bg-joule-bg p-6 overflow-y-auto">
          <AnalysisPanel />
        </div>
      </div>
    </main>
  );
}