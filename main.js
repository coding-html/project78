var pics= ["dad.jpg", "mom.png", "sister.png"];
var i=0;
function next()
{
  document.getElementById ("pic1").src=pics[i];
  i++;
  if(i==9)
    {
      i=1;
    }
}