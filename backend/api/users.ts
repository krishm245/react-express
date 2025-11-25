import { VercelRequest, VercelResponse } from "@vercel/node";
import { getUsers } from "./services/user";

export default function handler(req: VercelRequest, res: VercelResponse) {
  return getUsers(req, res);
}
