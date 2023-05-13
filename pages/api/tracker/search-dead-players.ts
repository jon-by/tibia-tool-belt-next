// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
/**
 * 1 - Busca todos os players que estavam online, verifica e salva caso haja mortes recentes
 * 2 - Busca os players online no momento e salva na base de dados
 */

import { handleTrackRoutine } from "./_controllers/_track-death-controller";

type Data = {
  error: boolean;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  handleTrackRoutine(req, res);
}
