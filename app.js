let myFriends = []
let friendName = document.querySelector("#amigo")

friendName.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        document.getElementById("btn-add").onclick()
    }
});

function addFriend() {
    if (friendName.value == '') {
        alert("Por favor, insira um nome.")
        friendName.focus()
    }

    myFriends.push(friendName.value)
    friendName.value = ''
    showFriend()
}

function showFriend() {
    let friendsList = document.querySelector("#listaAmigos")

    friendsList.innerHTML = "";

    for (let i = 0; i < myFriends.length; i++) {
        const item = document.createElement("li");
        item.textContent = myFriends[i];
        friendsList.appendChild(item);
    }
}

function sortFriend() {
    const result = document.getElementById("resultado");

    if (myFriends.length === 0) {
        result.innerHTML = "Nenhum amigo disponível para sortear!";
        return
    }

    const indice = Math.floor(Math.random() * myFriends.length)    
    const amigoSorteado = myFriends[indice]
    result.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`
}