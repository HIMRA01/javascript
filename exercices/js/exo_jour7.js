var heure = prompt();
var minute = prompt();
var seconde = prompt();


if (
  heure >= 0 &&       heure <= 23 &&  minute >= 0 && minute <= 59 &&  seconde >= 0 &&  seconde <= 59
  
 
) {
  seconde++;
  if (seconde === 60) {
    seconde = 0;
    minute++;
    if (minute === 60) {
      minute = 0;
      heure++;
      if (heure === 24) {
        heure = 0;
      }
    }
  }

  document.write(
    "<h3> il est  " + heure +   " heure " + minute +" minute " + seconde + "  seconde </h3>"
     
   
  );
} else {
  document.write("les donnéesc sont incorrect");
}
