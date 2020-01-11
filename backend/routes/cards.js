const express = require('express');
const multer = require('multer');

const router = express.Router();

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg'
}

const Card = require('../models/card');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, 'images');
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('_');
    const extention = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '_' + Date.now() + '.' + extention);
  }
});

router.post('', multer({ storage: storage }).single('image'), (req, res, next) => {
  const url = req.protocol + '://' + req.get("host");
  const card = new Card({
    name: req.body.name,
    mainFeatures: req.body.mainFeatures,
    rating: req.body.rating,
    reviews: req.body.reviews,
    price: req.body.price,
    location: req.body.location,
    address: req.body.address,
    telephone: req.body.telephone,
    openHours: req.body.openHours,
    parking: req.body.parking,
    description: req.body.description,
    club: req.body.club,
    pub: req.body.pub,
    restaurant: req.body.restaurant,
    event: req.body.event,
    imagePath: url + '/images/' + req.file.filename
  });
  card.save()
    .then(createdCard => {
      res.status(201).json({
        message: 'card added',
        card: {
          id: createdCard._id,
          name: createdCard.name,
          mainFeatures: createdCard.mainFeatures,
          rating: createdCard.rating,
          reviews: createdCard.reviews,
          price: createdCard.price,
          location: createdCard.location,
          address: createdCard.address,
          telephone: createdCard.telephone,
          openHours: createdCard.openHours,
          parking: createdCard.parking,
          description: createdCard.description,
          club: createdCard.club,
          pub: createdCard.pub,
          restaurant: createdCard.restaurant,
          event: createdCard.event,
          imagePath: createdCard.imagePath

        }
      });
    }
    );
});

// router.put('/:id', multer({ storage: storage }).single('image'), (req, res, next) => {
//   let imagePath = req.body.imagePath;
//   if (req.file) {
//     const url = req.protocol + '://' + req.get("host");
//     imagePath = url + '/images/' + req.file.filename;
//   }

//   const card = new Card({
//     _id: req.body.id,
//     title: req.body.title,
//     content: req.body.content,
//     imagePath: imagePath
//   });
//   console.log('updated', card);

//   const filter = { _id: req.params.id }
//   Card.updateOne(filter, card).then(result => {
//     console.log(result);
//     res.status(200).json({ message: 'card successfully updated' });
//   });
// });

router.get('', (req, res, next) => {
  Card.find()
    .then(documents => {
      res.status(200).json({
        message: 'card fetched successfully',
        cards: documents
      });
    });
});

router.get('/:id', (req, res, next) => {
  Card.findById(req.params.id).then(card => {
    if (card) {
      res.status(200).json(card);
    } else {
      res.status(404).json({
        message: 'Card not found!'
      });
    }
  });
});

router.delete('/:id', (req, res, next) => {
  Card.deleteOne({
    _id: req.params.id
  }).then(result => {
    // console.log(result);
    res.status(200).json({
      message: 'cards deleted successfully'
    });
  });
});

router.get('/filter/:filterAction', (req, res, next) => {

  let filter;

  if (req.params.filterAction === 'clubs') {
    filter = { club: '1' };

  }
  if (req.params.filterAction === 'pubs') {
    filter = { pub: '1' };

  }
  if (req.params.filterAction === 'restaurants') {
    filter = { restaurant: '1' };

  }
  if (req.params.filterAction === 'events') {
    filter = { event: '1' };
  }
  Card.find(filter)
    .then(documents => {
      res.status(200).json({
        message: 'card fetched successfully',
        cards: documents
      });
    });
});

module.exports = router;

