const mongoose = require('mongoose');
const cors = require('cors');

// Initialize CORS middleware
const corsMiddleware = cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
});

// Helper function to run middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// Database Connection Caching for Serverless Functions
let cachedDb = null;
async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside Vercel Dashboard');
  }
  // Connect to MongoDB
  const db = await mongoose.connect(MONGODB_URI);
  cachedDb = db;
  return db;
}

// Schema & Model definition
const certificateSchema = new mongoose.Schema({
  email: { type: String, required: true, lowercase: true, index: true },
  name: { type: String, required: true },
  role: { type: String, default: 'Participant' },
  eventName: { type: String, required: true },
  issueDate: { type: String, required: true },
  certificateNumber: { type: String, required: true, unique: true }
}, { timestamps: true });

const Certificate = mongoose.models.Certificate || mongoose.model('Certificate', certificateSchema);

module.exports = async (req, res) => {
  // Run CORS
  await runMiddleware(req, res, corsMiddleware);

  // Handle Options preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Connect to Database
  try {
    await connectToDatabase();
  } catch (err) {
    console.error('Database connection error:', err);
    return res.status(500).json({ error: 'Database connection failed' });
  }

  const { method } = req;

  if (method === 'GET') {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ error: 'Email parameter is required' });
    }
    try {
      const cert = await Certificate.findOne({ email: email.toLowerCase() });
      if (!cert) {
        return res.status(404).json({ error: 'Certificate not found' });
      }
      return res.json(cert);
    } catch (err) {
      console.error('Error fetching certificate:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else if (method === 'POST') {
    const { email, name, role, eventName, issueDate, certificateNumber } = req.body;
    if (!email || !name || !eventName || !issueDate || !certificateNumber) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    try {
      const newCert = new Certificate({
        email,
        name,
        role,
        eventName,
        issueDate,
        certificateNumber
      });
      await newCert.save();
      return res.status(201).json(newCert);
    } catch (err) {
      console.error('Error creating certificate:', err);
      if (err.code === 11000) {
        return res.status(400).json({ error: 'Certificate number must be unique' });
      }
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
