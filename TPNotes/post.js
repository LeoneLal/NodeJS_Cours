const fs = require('fs');

function addPost(titre, corp) {
    let data = {
        title: titre,
        body: corp
    }
    
    fs.appendFile('posts.json', JSON.stringify(data), 'utf8', (err, data) =>{
        if(err) throw err;
        console.log(data)
    })
}

module.exports = {addPost}