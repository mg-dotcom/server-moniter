import { cookies } from "next/headers";
import { Server } from "@/types/server";
import { ApiResponse } from "@/types/api";
import { Log } from "@/types/log";

export async function getServers(): Promise<Server[]> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const res = await fetch("http://localhost:8080/api/servers", {
    headers: {
      Cookie: `token=${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch servers");
  }

  const data: ApiResponse<Server[]> = await res.json();

  return data.data;
}


export async function getServerLogs(id: string): Promise<Log[]> {
  const cookieStore = await cookies(); 
  const token = cookieStore.get("token")?.value;

  const res = await fetch(
    `http://localhost:8080/api/servers/${id}/logs`,
    {
      headers: {
        Cookie: `token=${token}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const text = await res.text();
    console.log("ERROR BODY:", text);
    throw new Error("Failed to fetch logs");
  }

  const data = await res.json();
  return data.data;
}