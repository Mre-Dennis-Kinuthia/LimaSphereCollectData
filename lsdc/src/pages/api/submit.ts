import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    success: boolean;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false });
    }

    const { data } = req.body;

    // Do something with the data

    return res.status(200).json({ success: true });
}