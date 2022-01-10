/*
Koa.js ile web sunucumuzu yazalım.
Öncelikle şunu belirteyim. Koa.js hakkında konuşmadığımızı biliyorum ve bu ödev ilk aşamada bizi zorlayacak. Buradaki amacım yeni bir teknolojiye başlama cesareti oluşturmak ve hata yapma özgürlüğümüz olduğunu göstermek.
koa paketini indirelim.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
port numarası olarak 3000'i kullanalım.
*/

const Koa = require('koa'); //koa paketini indirelim.
const app = new Koa();

// response
app.use(ctx => {
  if (ctx.url === '/') { //index, hakkimda ve iletisim sayfaları oluşturalım.
    ctx.body = '<h1>Index Sayfasina Hosgeldiniz.</h1>' //Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
  } else if(ctx.url === '/hakkimda') {
    ctx.body = '<h1>Hakkimda Sayfasina Hosgeldiniz.</h1>'
  }else if (ctx.url === '/iletisim') {
    ctx.body = '<h1>Iletisim Sayfasina Hosgeldiniz.</h1>'
  } else {
    ctx.body = '<h1>Sayfa Bulunamadi.</h1>'
  }
});
const port = 3000;
app.listen(port); //port numarası olarak 3000'i kullanalım.