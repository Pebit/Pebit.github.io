function MeawSound()
{
    let chance = Math.floor(Math.random() * 5);
    if(chance > 6)
    {
        var audio = new Audio('SECRET.mp3');
        audio.play();
    }
    else{
        var audio = new Audio('meaw.mp3');
        audio.play();
    }
    
}