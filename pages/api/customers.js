const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public/data/Customer.csv');
  const csv = fs.readFileSync(filePath, 'utf-8');
  const records = parse(csv, {
    columns: true,
    skip_empty_lines: true
  });
  res.status(200).json({ value: records });
}
