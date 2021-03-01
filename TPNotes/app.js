// TP Partie 1 fonction addPost

const post = require('./post.js')
const cmd = process.argv;

const commande = {
    add: "Commande add",
    remove: "Commande remove",
    list: "Commande list",
    read: "Commande read"
}

console.log(`${commande[cmd[2]] || "unknow command"}`)

if(cmd[3] == undefined){
    console.log("Il manque le titre")
}if(cmd[4] == undefined){
    console.log("Il manque le body")
} else if(cmd[2] == "add" && cmd[3] != undefined && cmd[4] != undefined){
    post.addPost(cmd[3], cmd[4])
}

