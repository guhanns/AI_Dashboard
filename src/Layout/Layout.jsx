import { useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Topbar } from "../Topbar/Tobar";

export default function Layout({ children }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-background">
      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-30 lg:static lg:inset-auto
        transform transition-transform duration-300 ease-in-out lg:transform-none
        ${
          isMobileSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
      `}
      >
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggle={toggleSidebar}
          className="h-full"
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <Topbar onToggleSidebar={toggleMobileSidebar} />
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
