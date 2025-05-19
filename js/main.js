$(document).ready(function(){
    let text = $('h1');
    let contenu = text.html();
    text.html('');

    let index = 0;
    let timer = setInterval(function(){
        if(index < contenu.length){
            text.html(text.html() + contenu.charAt(index));
            index++;
        } else{
            clearInterval(timer)
        }
    },150);
})