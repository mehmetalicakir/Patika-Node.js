/* 
Kendi Web Sunucumuzu yazalım.
Kendi bilgisayarımızda aşağıdaki özellikleri kullanarak sunucumuzu yazalım.

createServer metodunu kullanacağız.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
port numarası olarak 5000'i kullanalım.

*/


const http = require('http');
const port = 5000;
const server = http.createServer((req,res) => { //createServer metodunu kullanacağız.
     //port numarası olarak 5000'i kullanalım.
    const url = req.url; //index, hakkimda ve iletisim sayfaları oluşturalım.
    if (url==='/') {
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h2>Index Sayfasina Hosgeldiniz.</h2>") //Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
    }else if(url==='/hakkimda'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h2>Hakkimda Sayfasina Hosgeldiniz.</h2>")
    }else if(url==='/iletisim'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h2>Iletisim Sayfasina Hosgeldiniz.</h2>")
    }else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write("<h2>Yanlis giris yaptiniz.</h2>")
    }
    res.end();
});

server.listen(port, () => {
    console.log(`Sunucu ${port} portundan baslatildi.`);
})