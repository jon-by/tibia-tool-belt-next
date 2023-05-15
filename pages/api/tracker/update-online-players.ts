// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
/**
 * 1 - Busca todos os players que estavam online, verifica e salva caso haja mortes recentes
 * 2 - Busca os players online no momento e salva na base de dados
 */

import { getAndSaveOnlinePlayers } from "./_controllers/_track-death-controller";


type Data = {
    error: boolean;
    hash: string
};
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    getAndSaveOnlinePlayers(req, res)
}
