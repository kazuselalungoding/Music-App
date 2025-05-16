const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));



// Dummy data
const cards = [
  {
    id: 1,
    imageSrc: 'http://localhost:5000/images/lana1.png',
    title: 'Lana Del Rey - Born To Die',
    caption: 'Pop Album',
  },
  {
    id: 2,
    imageSrc: 'http://localhost:5000/images/metal1.png',
    title: 'System Of A Down - Science',
    caption: 'Metal Album',
  },
  {
    id: 3,
    imageSrc: 'http://localhost:5000/images/lana2.png',
    title: 'Lana Del Rey - Honeymoon',
    caption: 'Pop Album',
  },
  {
    id: 4,
    imageSrc: 'http://localhost:5000/images/metal2.png',
    title: 'System Of A Down - Mind',
    caption: 'Metal Album',
  },
  {
    id: 5,
    imageSrc: 'http://localhost:5000/images/nirvana1.png',
    title: 'Nirvana - In Utero',
    caption: 'Rock Album',
  },
  {
    id: 6,
    imageSrc: 'http://localhost:5000/images/nirvana2.png',
    title: 'Nirvana - Smells Like Spirit',
    caption: 'Rock Album',
  },
  {
    id: 7,
    imageSrc: 'http://localhost:5000/images/nirvana1.png',
    title: 'Nirvana - In Utero',
    caption: 'Rock Album',
  },
  {
    id: 8,
    imageSrc: 'http://localhost:5000/images/south.png',
    title: 'Slayer - South Of Heaven',
    caption: 'Metal Album',
  },
  {
    id: 9,
    imageSrc: 'http://localhost:5000/images/darso.png',
    title: 'Darso - Mapay Jalan Shut Tha Fuck',
    caption: 'Pop Album',
  },
  {
    id: 10,
    imageSrc: 'http://localhost:5000/images/nirvana1.png',
    title: 'Nirvana - In Utero',
    caption: 'Rock Album',
  },
  {
    id: 11,
    imageSrc: 'http://localhost:5000/images/galdive.png',
    title: 'Galdive - Teach Me How To Love',
    caption: 'R&B Album',
  },
  {
    id: 12,
    imageSrc: 'http://localhost:5000/images/rhcp.png',
    title: 'RHCP - I Could Die For You',
    caption: 'Rock Album',
  },
  {
    id: 13,
    imageSrc: 'http://localhost:5000/images/centrall.png',
    title: 'Central Cee - Can\`t Rush',
    caption: 'Hiphop Album',
  },
  {
    id: 14,
    imageSrc: 'http://localhost:5000/images/metalica.png',
    title: 'Metalica - Ride The Lightning',
    caption: 'Metal Album',
  },
  {
    id: 15,
    imageSrc: 'http://localhost:5000/images/2pac.png',
    title: '2pac - All Eyez On Me',
    caption: 'Hiphop Album',
  },
  {
    id: 16,
    imageSrc: 'http://localhost:5000/images/fr.png',
    title: 'Frank Ocean - Godspeed',
    caption: 'Pop Album',
  },
  {
    id: 17,
    imageSrc: 'http://localhost:5000/images/radio.png',
    title: 'Radiohead - No Suprises',
    caption: 'Pop Album',
  },
  {
    id: 18,
    imageSrc: 'http://localhost:5000/images/loaded.png',
    title: 'Lil Loaded - 6locc 6a6y',
    caption: 'Hiphop Album',
  },
  {
    id: 19,
    imageSrc: 'http://localhost:5000/images/nwa.png',
    title: 'NWA - Fuck THA POLICE',
    caption: 'Hiphop Album',
  },
  {
    id: 20,
    imageSrc: 'http://localhost:5000/images/peach.png',
    title: 'Peach Luffe - Ego',
    caption: 'Pop Album',
  },
];

// API endpoint
app.get('/api/cards', (req, res) => {
  res.json(cards);
});

app.get('/api/images', (req, res) => {
  const fs = require('fs');
  const imageDir = path.join(__dirname, 'images');

  // Baca semua file di folder "images"
  fs.readdir(imageDir, (err, files) => {
    if (err) {
      console.error('Error reading image directory:', err);
      return res.status(500).json({ error: 'Failed to read image directory' });
    }

    // Buat URL untuk setiap file
    const imageUrls = files.map((file) => `http://localhost:${PORT}/images/${file}`);
    res.json(imageUrls);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});