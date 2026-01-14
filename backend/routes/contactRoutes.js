import express from "express";
import Contact from "../model/contactSchema.js";
import { sendEmail } from "../utils/sendEmail.js";
import {
  clientEmailTemplate,
  adminEmailTemplate,
} from "../emails/contactTemplate.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      fullName,
      email,
      company,
      service,
      message,
    } = req.body;

    if (!fullName || !email || !service || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const contact = await Contact.create({
      fullName,
      email,
      company,
      service,
      message,
      ipAddress: req.ip,
      userAgent: req.headers["user-agent"],
    });

    /* 🔔 SEND EMAIL TO CLIENT */
    await sendEmail({
      to: email,
      subject: "We received your request | TechFavours",
      html: clientEmailTemplate(fullName),
    });

    /* 🚨 SEND EMAIL TO ADMIN */
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: "New Website Lead | TechFavours",
      html: adminEmailTemplate(contact),
    });

    res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully",
    });
  } catch (error) {
    console.error("CONTACT EMAIL ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
