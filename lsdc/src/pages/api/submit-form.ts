// pages/api/submit-form.ts

import { NextApiRequest, NextApiResponse } from "next";

type FormData = {
    name: string;
    email: string;
    message: string;
}

export default function submitForm(req: NextApiRequest, res: NextApiResponse) {
    const formData: FormData = req.body;

    // Here, you would typically store the form data in a database or perform some other action with it.
    // For the sake of this example, we'll just log the form data to the console.
    console.log(formData);

    res.status(200).json({ success: true });
}
