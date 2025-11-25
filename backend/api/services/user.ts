import { VercelRequest, VercelResponse } from "@vercel/node";

export const getUsers = (req: VercelRequest, res: VercelResponse) => {
  res.json([
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
  ]);
};
