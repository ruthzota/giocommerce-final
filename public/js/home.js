//Login 

const greeting = document.querySelector('.greeting');

window.onload = () => {
    if(!sessionStorage.name) {
        location.href = '/login';
    } else{
        greeting.innerHTML = `hello ${sessionStorage}`
    }
}

const logOut = document.querySelector('.logout');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}




