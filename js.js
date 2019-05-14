
function getFormula(which) {
  switch(which) {
    case "leftangle":
      document.getElementById('formula').innerHTML="<img src='billeder/1.png' width='200'></img> <br> eller <br> <img src='billeder/2.png' width='200'></img> <br> eller <br> <img src='billeder/3.png' width='200'></img>";
      break;
    case "rightcathode":
      document.getElementById('formula').innerHTML="<img src='billeder/a4.png' width='200'></img> <br> eller <br> <img src='billeder/5.png' width='200'></img> <br> eller <br> <img src='billeder/6.png' width='200'></img> <br> eller <br> <img src='billeder/7.png' width='200'></img> <br> eller <br> <img src='billeder/8.png' width='200'></img>";
      break;
    case "lowercathode":
      document.getElementById('formula').innerHTML="<img src='billeder/9.png' width='200'></img> <br> eller <br> <img src='billeder/10.png' width='200'></img> <br> eller <br> <img src='billeder/11.png' width='200'></img> <br> eller <br> <img src='billeder/12.png' width='200'></img> <br> eller <br> <img src='billeder/13.png' width='200'></img>";
      break;
    case "hypotenuse":
      document.getElementById('formula').innerHTML="<img src='billeder/14.png' width='200'></img> <br> eller <br> <img src='billeder/15.png' width='200'></img> <br> eller <br> <img src='billeder/16.png' width='200'></img> <br> eller <br> <img src='billeder/17.png' width='200'></img> <br> eller <br> <img src='billeder/18.png' width='200'></img>";
      break;
    case "topangle":
      document.getElementById('formula').innerHTML="<img src='billeder/19.png' width='200'></img>";
      break;
    case "rightangle":
      document.getElementById('formula').innerHTML="<img src='billeder/20.jpg' width='200'></img>";
      break;
  }
}
