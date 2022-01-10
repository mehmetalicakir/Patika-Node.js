import { writeFile, readFile, unlink} from 'fs';

/*
employees.json dosyası oluşturalım ve içerisine 
{"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
*/

writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', (err) => {
    if (err) throw err;
    console.log('Json başarılı bir şekilde oluşturuldu');
  });

// Bu veriyi okuyalım. (READ)

readFile('employees.json','utf8', (err, data) => {
    if (err) throw err;;
    console.log(data);
  });

// Bu veriyi güncelleyelim.
setTimeout(() => { //Dosya oluşturulacağı için bekleme
writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 3000}', (err) => {
    if (err) throw err;
    console.log('Veri güncellendi.');
  });
},1000)
// Dosyayı silelim.

setTimeout(() => {//Dosya güncelleneceği için bekleme
    unlink('employees.json', (err) => {
        if (err) throw err;
        console.log('Dosya başarılı bir şekilde silindi');
      });
},2000)