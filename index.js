function toggleCover(){
    let cover = document.getElementById('cover');
    let content = document.getElementById('description');
    let btn = document.getElementById("toogle");

    cover.classList.toggle('register');

    content.classList.toggle('contentActive');

    if(content.className == "contentActive"){
        content.innerHTML="Masz już konto?";
        btn.innerHTML="Zaloguj się";
    }
    else{
        content.innerHTML="Nie masz jeszcze konta?";
        btn.innerHTML="Zarejestruj się";
    }
}