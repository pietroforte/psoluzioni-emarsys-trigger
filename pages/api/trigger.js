export default function handler(req, res) {
    if (req.method === 'POST') {
      const { contactID, eventCode, source } = req.body;
  
      const emailPreview = `<b>Hello, ${contactID || "Guest"}!</b><br/>
        You triggered <i>${eventCode || "a campaign"}</i> from <u>${source}</u>.`;
  
      res.status(200).json({
        status: "Success",
        campaign: eventCode || "Unknown",
        channel: "Email",
        emailPreview,
        timestamp: new Date().toISOString()
      });
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  }
  