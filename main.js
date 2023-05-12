import DataJson from "/Data/Data.json";

var JsonArray = DataJson["iamges"];
var Count = 0;
var Wynik = 0;
var AnimatioSpeed = 0.1;
var NoweZdjęcie = false;
var Data = "";
var Wygeneruj = false;

function PrzeliczWynikTestu()
{
  
  document.querySelector(".Przelicz").addEventListener("click",()=>
  {
    if(NoweZdjęcie)
    {
      Wygeneruj = true;
      for(var i=0;i<JsonArray.length;i++)
      {
        if(JsonArray[i].data==Data)
        {
          Wynik = JsonArray[i].Ocena;
          Wygeneruj = false;
          console.log("asd");
        }
      }
      if(Wygeneruj) WygenereujWynik();
      NoweZdjęcie = false;
    }
  })

}
function WygenereujWynik()
{
  var WynikLocal = Math.floor(Math.random() * 100);
  Wynik = WynikLocal;
  JsonArray.push({"data": Data,"Ocena":WynikLocal});
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
        Data = e.target.result;
        document.getElementById("image").style.backgroundImage = `url(${Data})`;
      }
      reader.readAsDataURL(FileData);
    }

    NoweZdjęcie = true;
  })
}


PrzeliczWynikTestu(); 
ZdjęciePoPrzeciągnięciu()
setInterval(WynikAnimation,1)