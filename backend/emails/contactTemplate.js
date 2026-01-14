export function clientEmailTemplate(name) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6">
      <h2>Thanks for contacting TechFavours 👋</h2>
      <p>Hi ${name},</p>

      <p>
        We’ve received your inquiry and our team will review it shortly.
        You can expect a response within <strong>24 hours</strong>.
      </p>

      <p>
        In the meantime, feel free to explore our services:
        <br />
        <a href="https://www.techfavours.com/services">
          www.techfavours.com/services
        </a>
      </p>

      <p>
        Regards,<br />
        <strong>TechFavours Team</strong>
      </p>
    </div>
  `;
}

export function adminEmailTemplate(data) {
  return `
    <div style="font-family:Arial,sans-serif">
      <h3>🚀 New Contact Inquiry</h3>

      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company || "—"}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Message:</strong></p>

      <blockquote>${data.message}</blockquote>

      <p style="margin-top:20px">
        📅 Follow up within 24 hours
      </p>
    </div>
  `;
}
