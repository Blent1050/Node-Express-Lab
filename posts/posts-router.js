const express = require('express');

const Posts = require('../data/db');

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
  try {
    const posts = await Posts.find(req.query);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);

    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: 'Post not found!' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users.' });
  }
});

router.post('/', async (req, res) => {
  if (!req.body.title || !req.body.contents) {
    res
      .status(400)
      .json({ message: 'Please provide a valid title and content section.' });
  } else {
    try {
      const post = req.body;
      if (post) {
        await Posts.insert(req.body);
        res.status(201).json({ message: 'The post has been created!', post });
      }
    } catch (error) {
      res.status(500).json({ message: 'Could not make the post!.' });
    }
  }
});

router.delete('/:id', async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users.' });
  }
});

router.put('/:id', async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users.' });
  }
});

module.exports = router;
