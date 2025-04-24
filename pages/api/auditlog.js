import { getAllLogs } from '../../lib/auditLog';

export default function handler(req, res) {
  const logs = getAllLogs();
  res.status(200).json({ value: logs });
}
