function interval()
{
setInterval(change,1500);
}
function change()
{
 var str=document.getElementById("6").getAttribute("src");
 var k=str.substr(0,Number(str.lastIndexOf(".")));
 var newsrc=(Number(k)+1);
 if(newsrc==5)
 {
  newsrc=1;
 }
  newsrc+=".jpg";
 document.getElementById("6").setAttribute("src",newsrc);
}
function aler()
{
var decision=confirm("you want to order");
if(decision==true)
{
var product=document.getElementById("pr").value;
var brand=document.getElementById("br").value;
var k="your ordered"+" "+product+" "+brand;
document.getElementById("n").innerHTML=k;
}
}