const fs = require('fs');

function addPost(titre, corp) {
    if(titre == undefined){
        console.log("Il manque le titre et le body");
        return "Il manque le titre";
    }if(corp == undefined){
        console.log("Il manque le body");
        return "Il manque le body";
    } else {
        let data = {
            title: titre,
            body: corp
        };
        fs.appendFile('posts.json', JSON.stringify([data]), 'utf8', (err, data) =>{
            if(err) throw err;
            console.log("Succesfully added");
        });
    };
}

module.exports = {addPost}