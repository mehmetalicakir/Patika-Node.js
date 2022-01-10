/*
Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım, 
sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.
*/


const posts = ["Post Name 1","Post Name 2","Post Name 3","Post Name 4","Post Name 5",];

const listPosts = () => {
    posts.map((post) => {
        console.log(post);
    })
}

// First List
listPosts();

const addPosts = (post) => {
    const promiseAddPost = new Promise((resolve,reject) => {
    posts.push(post);
    resolve(posts);
    reject("Couldn't be added");
    })
    return promiseAddPost;
};

async function addAndList() {
    try {
        await addPosts("New Post");
        listPosts();
    } catch (error) {
        console.log(error);
    }
}

addAndList();