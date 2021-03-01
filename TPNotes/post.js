const fs = require('fs');

function addPost(titre, corp) {
    if(titre == undefined){
        console.log("Il manque le titre et le body");
        return "Il manque le titre";
    } 
    if(corp == undefined){
        console.log("Il manque le body");
        return "Il manque le body";
    } 
    else {
        const tab = listPosts();
        let alreadyExist = false
        let data = {
            title: titre,
            body: corp
        };
        tab.forEach(post => {
           if (post.title === data.title){
               console.log("Ce titre existe déjà");
               alreadyExist = true;
           }
        });
        if ( alreadyExist === false){
            tab.push(data)        
            fs.writeFile('posts.json', JSON.stringify(tab), 'utf8', (err) =>{
                if(err) throw err;
                console.log("Succesfully added");
            });
        };
    };
}

// function listPosts() {
//     let final = ""
//     fs.readFile('./posts.json', 'utf8', (err, data) =>{
//         if(err) throw err;
//         const res = JSON.parse(data)
//         final += "Printing " + res.length + " posts \n"
//         for(let post of res){
//             let title = "Title : " + post.title
//             let body = "Body : " + post.body
//             final += "-- \n" + title + "\n" + body + "\n"
//         }

//         console.log(final)
//         return final
//     })
// }

function listPosts() {
    return  JSON.parse(fs.readFileSync('./posts.json', 'utf8'));
}

module.exports = {addPost, listPosts}