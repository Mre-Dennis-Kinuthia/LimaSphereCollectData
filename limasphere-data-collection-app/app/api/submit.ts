import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@app/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed' });
        return;
    }

    const { name, email } = req.body;

    if (!name || !email) {
        res.status(422).json({ message: 'Invalid input' });
        return;
    }

    const { db } = await connectToDatabase();

    try {
        await db.collection('messages').insertOne({
            name,
            email,
        });
        res.status(201).json({ message: 'Message sent' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}
