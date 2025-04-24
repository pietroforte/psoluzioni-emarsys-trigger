import { addLog } from '../../lib/auditLog';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { contactID, eventCode, source } = req.body;

    const entry = {
      contactID,
      eventCode,
      source,
      message: `Triggered ${eventCode} from ${source}`
    };

    addLog(entry); // 🔁 Add to memory

    const emailPreview = `<b>Hello, ${contactID || "Guest"}!</b><br/>
      You triggered <i>${eventCode}</i> from <u>${source}</u>.`;

    res.status(200).json({
      status: "Success",
      campaign: eventCode,
      channel: "Email",
      emailPreview,
      timestamp: new Date().toISOString()
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
