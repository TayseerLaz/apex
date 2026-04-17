import express from "express";
import cors from "cors";
import { Resend } from "resend";

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, company, location, message } = req.body;

    await resend.emails.send({
      from: "Apex Global <noreply@mail.apexglobalfm.com>",
      to: "info@apexglobalfm.com", 
      subject: "New Facility Inquiry",
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});