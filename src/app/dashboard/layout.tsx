import { SidebarProvider } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/layout/app-sidebar";
import { AppHeader } from "../../components/layout/app-header";
import { AppFooter } from "../../components/layout/app-footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <div
        id="main-content"
        className="h-full w-full bg-gray-50 overflow-y-auto"
      >
        <AppHeader />
        <main className="pt-6 px-4 w-full min-h-[calc(100vh-230px)]">
          {children}
        </main>
        <AppFooter />
      </div>
    </SidebarProvider>
  );
}
