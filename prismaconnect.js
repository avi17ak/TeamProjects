import express from 'express';
const form = document.getElementById('search-form');
const input = document.getElementById('search-input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = input.value;
  fetch('/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Display the search results
    })
    .catch((error) => {
      console.error(error);
    });
});

const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.post('/search', async (req, res) => {
  const { query } = req.body;
  const searchResults = await prisma.Users.findMany({
    where: {
         name : { contains: query } ,

    },
    
  });
  res.send(searchResults);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
