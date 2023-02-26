import React, { useState } from "react";
import connectToDatabase from "@/database/db";

export default function Form(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const db = await connectToDatabase();
        const collection = db.collection('users');
        await collection.insertOne({  name, email});

        setName('');
        setEmail('');
};


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Email:
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}