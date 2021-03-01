// TP Partie 1 fonction addPost
const add = require('./addPost.js')
const list = require('./listPosts.js')
const cmd = process.argv;

const commandes = {
    add: "Commande add",
    remove: "Commande remove",
    list: "Commande list",
    read: "Commande read"
}

console.log(`${commandes[cmd[2]] || "unknow command"}`)

if(cmd[2] == "add"){
    add.addPost(cmd[3], cmd[4]) 
}
else if (cmd[2] == "list") {
    list.listPosts() 
}

