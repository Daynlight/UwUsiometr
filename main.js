var Count = 0;
var Wynik = 0;
var AnimatioSpeed = 0.1;

function PrzeliczWynikTestu()
{
  
  document.querySelector(".Przelicz").addEventListener("click",()=>
  {
    Wynik = Math.floor(Math.random() * 100);
   
  })

}
function WynikAnimation()
{
  var bar = document.getElementById("bar");

  if((Wynik != Math.floor(Count)) && (Wynik != Math.round(Count)))
  {
    if(Count<Wynik) Count += AnimatioSpeed;
    if(Count>Wynik) Count -= AnimatioSpeed;
    bar.style.setProperty("--Wynik",`${Count}%`);
  }

  
  
}


PrzeliczWynikTestu(); 
setInterval(WynikAnimation,1)