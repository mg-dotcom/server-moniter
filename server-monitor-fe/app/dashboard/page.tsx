import SummaryCards from "@/components/dashboard/SummaryCards";
import ServerList from "@/components/dashboard/ServerList";
import { getServers } from "@/lib/server-api";
import PageWrapper from "@/components/shared/PageWrapper";

export default async function DashboardPage() {
  const servers = await getServers();

  return (
    <PageWrapper title="Server Dashboard">
      <div className="max-w-6xl mx-auto space-y-8 px-6">
        <div className="animate-slide-up" style={{ animationDelay: "0s" }}>
          <SummaryCards servers={servers} />
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <ServerList servers={servers} />
        </div>
      </div>
    </PageWrapper>
  );
}