
function getData(data) {
   return new Promise((resolve,reject) => {
       console.log("Veriler alınmaya çalışılıyor.");
        if (data) {
            resolve("Veriler alındı")
        } else {
            reject("Veriler alınamadı")
        }
    })
}

function cleanData(receivedData) {
    return new Promise((resolve,reject) => {
        console.log("Veriler düzenleniyor.");
         if (receivedData) {
             resolve("Veriler düzenlendi.")
         } else {
             reject("Veriler düzenlenemedi")
         }
     })
 }
/*

//Sırayla fonksiyon olarak çağırarak promise şeklinde kullanım
 getData(true)
    .then(result => {
        console.log(result);
        return cleanData(true)
    }).then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    })




Async-Await

*/
async function processData() {
// Async Fonksiyonu oluşturup içine try-catch eklenir.
try {
    const receivedData = await getData(true);
    console.log(receivedData);
    const cleanedData = await cleanData(false);
    console.log(cleanedData);
    
} catch (error) {
    console.log(error);
}
}
processData();