const fs = require('fs');

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

module.exports = {listPosts}
