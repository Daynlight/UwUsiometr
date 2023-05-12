var Count = 0;
var Wynik = 0;
var AnimatioSpeed = 0.1;
var NoweZdjęcie = true;


function PrzeliczWynikTestu()
{
  
  document.querySelector(".Przelicz").addEventListener("click",()=>
  {
    if(NoweZdjęcie)
    Wynik = Math.floor(Math.random() * 100);
    NoweZdjęcie = false;
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
function ZdjęciePoPrzeciągnięciu()
{
  
  File = document.getElementById("file");
  File.addEventListener("change",(e)=>
  {
    const FileData = e.target.files[0];
    if(FileData)
    {
      const reader = new FileReader();
      reader.onload = (e) =>
      {
        const Data = e.target.result;
        document.getElementById("image").style.backgroundImage = `url(${Data})`;
        console.log(Data);
      }
      reader.readAsDataURL(FileData);
    }

    NoweZdjęcie = true;
  })
}


PrzeliczWynikTestu(); 
ZdjęciePoPrzeciągnięciu()
setInterval(WynikAnimation,1)