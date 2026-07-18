const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/heyyouth';
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB.');
    seedMockData(); // Seed some initial data for testing if database is empty
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Schema definition
const certificateSchema = new mongoose.Schema({
  email: { type: String, required: true, lowercase: true, index: true },
  name: { type: String, required: true },
  role: { type: String, default: 'Participant' },
  eventName: { type: String, required: true },
  issueDate: { type: String, required: true },
  certificateNumber: { type: String, required: true, unique: true }
}, { timestamps: true });

const Certificate = mongoose.model('Certificate', certificateSchema);

// Seeding function (Local Development / Testing Helper)
async function seedMockData() {
  try {
    const count = await Certificate.countDocuments();
    if (count === 0) {
      console.log('Seeding mock certificates...');
      await Certificate.create([
        {
          email: 'peserta@heyyouth.org',
          name: 'Budi Santoso',
          role: 'Participant',
          eventName: 'HeyYouth Digital Summit 2026',
          issueDate: '18 Juli 2026',
          certificateNumber: 'HY-DS26-0001'
        },
        {
          email: 'speaker@heyyouth.org',
          name: 'Jane Doe',
          role: 'Speaker',
          eventName: 'HeyYouth Digital Summit 2026',
          issueDate: '18 Juli 2026',
          certificateNumber: 'HY-DS26-0002'
        }
      ]);
      console.log('Mock certificates seeded successfully.');
    }
  } catch (err) {
    console.error('Error seeding mock data:', err);
  }
}

// Routes
// 1. Get certificate by email
app.get('/api/certificates', async (req, res) => {
  const email = req.query.email;
  if (!email) {
    return res.status(400).json({ message: 'Email query parameter is required.' });
  }

  try {
    const cert = await Certificate.findOne({ email: email.toLowerCase() });
    if (!cert) {
      return res.status(404).json({ message: 'Certificate not found for this email.' });
    }
    res.json(cert);
  } catch (err) {
    console.error('Error fetching certificate:', err);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// 2. Create certificate (Admin/CMS endpoint)
app.post('/api/certificates', async (req, res) => {
  const { email, name, role, eventName, issueDate, certificateNumber } = req.body;

  if (!email || !name || !eventName || !issueDate || !certificateNumber) {
    return res.status(400).json({ message: 'Missing required fields.' });
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
    res.status(201).json(newCert);
  } catch (err) {
    console.error('Error creating certificate:', err);
    if (err.code === 11000) {
      return res.status(400).json({ message: 'Certificate number must be unique.' });
    }
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Base Route
app.get('/', (req, res) => {
  res.send('HeyYouth API is running...');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
