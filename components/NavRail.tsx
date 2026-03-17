"use client";
import { useState } from "react";
export default function NavRail() {
  const [active, setActive] = useState("home");
  const items = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "insights", label: "Insights", icon: "📊" },
    { id: "workflow", label: "Workflows", icon: "🧩" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];
  return (
    <div
      className="
        group 
        h-full
        bg-joule-blue 
        text-white 
        flex 
        flex-col 
        py-4 
        shadow-lg 
        transition-all 
        duration-300 
        w-16 
        hover:w-56
      "
    >
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => setActive(item.id)}
          className={`
            flex items-center gap-4 
            py-3 px-4 
            rounded-md mx-2 my-1 transition
            ${active === item.id ? "bg-white text-joule-blue shadow" : "opacity-90 hover:opacity-100"}
          `}
        >
          <span className="text-2xl">{item.icon}</span>
          {/* Label shows ONLY when expanded */}
          <span
            className="
              text-sm font-medium whitespace-nowrap 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-200
            "
          >
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
}