const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).send("<h1>Index Sayfasi</h1>")
})
app.get('/about', (req, res) => {
  res.status(200).send("<h1>About Sayfasi</h1>")
})
app.get('/contact', (req, res) => {
  res.status(200).send("<h1>Contact Sayfasi</h1>")
})
app.get('*', (req, res) => {
  res.status(404).send("<h1>Sayfa Bulunamadi</h1>")
})

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu su portta calismaya basladi: ${port}`);
})