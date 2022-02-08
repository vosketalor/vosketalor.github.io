
function updateSplash() {
    let splash = document.getElementById('splash');

    let splashes = [
        "Parfois on souhaite réellement un truc, mais pourtant on ne l'a pas...",
        "C'est décevant ? Moi aussi je suis déçu de la météo...",
        "Vous savez, moi je ne crois pas qu'il y ait de bonne ou de mauvaise situation...",
        "C'est fâcheux en effet... Mais que voulez vous ? C'est la vie..."
    ];

    splash.innerHTML = splashes[Math.round(Math.random()*(splashes.length-1))];
};

function petiteValeur() {
    document.getElementById('value').innerHTML = Math.round(Math.random()*100)==100?"666":"36";
};

function hackerMode() {
    // Fonction réservée aux H4CK3RS confirmés !!!!
    // Si tu sais pas faire un Hello world en JS quitte cette page !!!!
    // C'est très dangereux pour toi, tu pourrais t'abimer le pouce !!!!!!!!!!!!!!!
    // (PS: je pourrais mettre des commentaires multi-ligne mais j'ai oublié comment faire...)

    if(document.getElementById("fun") == null) {
        document.getElementById("nofun").id = "fun";
        document.getElementById("smiley").innerHTML = ":)";
        document.getElementById("desc").innerHTML = "Yop euh, j'ai eu la flemme de faire un site du coup voilà.";
    } else {
        document.getElementById("fun").id = "nofun";
        document.getElementById("smiley").innerHTML = "😈";
        document.getElementById("desc").innerHTML = "Mode H4CK3R activé!";
    };

};