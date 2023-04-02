function MeawSound()
{
    let chance = Math.floor(Math.random() * 7);
    if(chance > 5)
    {
        var audio = new Audio('SECRET.mp3');
        audio.play();
    }
    else{
        var audio = new Audio('meaw.mp3');
        audio.play();
    }
    
}