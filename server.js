import express from "express";
import cors from "cors";
import { Resend } from "resend";

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend("re_Zt4UuCdi_2y3rynwQGBkaqStrggZ3Qvh9");

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, company, location, message } = req.body;

    await resend.emails.send({
      from: "Apex Global <onboarding@resend.dev>",
      to: "hasrazan810@gmail.com", // 👈 YOUR email
      subject: "New Facility Request",
      html: `
        <h2>New Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});