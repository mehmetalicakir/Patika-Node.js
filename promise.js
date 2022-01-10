const promise1 = new Promise((resolve,reject) => {
    resolve("Veriler Alındı")
    reject("Bağlantı Hatası")
});

//console.log(promise1);

promise1
    .then(value => {
        console.log(value);
    }).catch(error => {
        console.log(error);
    });