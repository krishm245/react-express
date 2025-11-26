import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../lib/api";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/users`);
      if (!res.ok) throw new Error("Failed to fetch users");
      return res.json();
    },
  });
}
