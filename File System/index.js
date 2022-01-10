import { readFile, writeFile, appendFile, unlink, mkdir, rm} from 'fs';

 
//readFile ile dosya okuma
/*
readFile('password.txt','utf8', (err, data) => {
  if (err) throw err;;
  console.log(data);
});



//writeFile ile dosya oluşturma

writeFile('example.txt', "Bu bir metin mesajıdır. writeFile ile oluşturulmuştur.", (err) => {
  if (err) throw err;
  console.log('Dosya başarılı bir şekilde oluşturuldu');
});



writeFile('example.json', '{"name":"Mehmet Ali","lastname":"ÇAKIR"}', (err) => {
    if (err) throw err;
    console.log('Json başarılı bir şekilde oluşturuldu');
  });


//appendFile ile dosyaya veri eklemek

appendFile('example.txt', "\nBu ikinci metin mesajıdır. appendFile ile oluşturulmuştur.", (err) => {
    if (err) throw err;
    console.log('Dosya başarılı bir şekilde eklendi.');
  });


//unlink ile dosya silmek
unlink('example.json', (err) => {
    if (err) throw err;
    console.log('Dosya başarılı bir şekilde silindi');
  });


// Klasör oluşturmak

mkdir('./img/second file', { recursive: true }, (err) => {
    if(err) throw err;
    console.log("Klasör başarılı bir şekilde oluşturuldu.");
  });
*/
// Klasör silmak
rm('./img', { recursive: true }, (err) => {
    if(err) throw err;
    console.log("Klasör başarılı bir şekilde silindi.");
  });

    