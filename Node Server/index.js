const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Bir istek gönderildi.");
    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write("<h1>Index Sayfasi</h1>");
    }else if(url === '/about'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write("About Sayfasi");
    }else if(url === '/contact'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write("Contact Sayfasi");
    }else{
        res.writeHead(404, {'Content-Type':'text/html'})
        res.write("404 Sayfa Bulunamadi");
    }
    res.end();
});

const port = 3000;


server.listen(port, () => {
    console.log(`Sunucu port ${port} de başlatıldı`);
});