// pages/api/items.ts

export default function handler(req, res) {
    if (req.method === 'GET') {
        const items = ['item 1', 'item 2', 'item 3']
        res.status(200).json({ items })
    } else {
        res.status(400).json({ message: 'Invalid request method' })
    }
}