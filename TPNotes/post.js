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

function listPosts() {
    let final = ""
    fs.readFile('./posts.json', 'utf8', (err, data) =>{
        if(err) throw err;
        const res = JSON.parse(data)
        final += "Printing " + res.length + " posts \n"
        for(let post of res){
            let title = "Title : " + post.title
            let body = "Body : " + post.body
            final += "-- \n" + title + "\n" + body + "\n"
        }

        console.log(final)
        return final
    })
}

module.exports = {addPost, listPosts}