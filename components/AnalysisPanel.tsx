"use client";
import { useState } from "react";
import Dashboard from "./screens/Dashboard";
import PaymentCenter from "./screens/PaymentCenter";
import InvestigationView from "./screens/InvestigationView";
import TimelineView from "./screens/TimelineView";
export type ScreenState =
  | "HOME"
  | "PAYMENT_CENTER"
  | "INVESTIGATION"
  | "TIMELINE";
export default function AnalysisPanel() {
  const [screen, setScreen] = useState<ScreenState>("HOME");
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const handleNavigate = (target: ScreenState, payload?: any) => {
    if (payload) setSelectedFile(payload);
    setScreen(target);
  };
  return (
    <div className="space-y-6">
      {screen === "HOME" && <Dashboard onNavigate={handleNavigate} />}
      {screen === "PAYMENT_CENTER" && (
        <PaymentCenter onNavigate={handleNavigate} />
      )}
      {screen === "INVESTIGATION" && (
        <InvestigationView file={selectedFile} onNavigate={handleNavigate} />
      )}
      {screen === "TIMELINE" && (
        <TimelineView file={selectedFile} onNavigate={handleNavigate} />
      )}
    </div>
  );
}