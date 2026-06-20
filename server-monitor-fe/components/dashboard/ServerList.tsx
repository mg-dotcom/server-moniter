import { Server } from "@/types/server";
import Link from "next/link";

type Props = {
  servers: Server[];
};

export default function ServerList({ servers }: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all duration-300">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-800 bg-slate-900/50">
            <th className="p-4 text-left text-slate-300 font-semibold">
              Server Name
            </th>

            <th className="p-4 text-left text-slate-300 font-semibold">
              Status
            </th>

            <th className="p-4 text-left text-slate-300 font-semibold">
              Endpoint
            </th>

            <th className="p-4 text-left text-slate-300 font-semibold">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {servers.map((server, idx) => (
            <tr
              key={server.id}
              className="border-b border-slate-800 hover:bg-slate-800/50 transition-all duration-200 animate-slide-up"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <td className="p-4 text-white font-medium">
                {server.name}
              </td>

              <td className="p-4">
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-semibold text-sm ${
                    server.currentStatus === "UP"
                      ? "bg-green-500/10 text-green-400 border border-green-500/30"
                      : "bg-red-500/10 text-red-400 border border-red-500/30"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      server.currentStatus === "UP"
                        ? "bg-green-400 animate-pulse-light"
                        : "bg-red-400"
                    }`}
                  />
                  {server.currentStatus}
                </span>
              </td>

              <td className="p-4 text-slate-300 font-mono text-sm">
                {server.endpoint}
              </td>

              <td className="p-4">
                <Link
                  href={`/dashboard/servers/${server.id}`}
                  className="inline-flex items-center gap-1 px-3 py-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-all duration-200 active:scale-95"
                >
                  <span>View Logs</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {servers.length === 0 && (
        <div className="p-8 text-center text-slate-400">
          <svg
            className="w-12 h-12 mx-auto mb-3 opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          No servers found
        </div>
      )}
    </div>
  );
}