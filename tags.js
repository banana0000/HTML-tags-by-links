document.write("a linkek szama:" + document.getElementsByTagName("a").length);

var a = document.getElementsByTagName('A'),
    aL = a.length,
    s = document.getElementById('sr'),
    t = document.getElementById('together'),
sty = document.getElementsByTagName('STYLE'),
str = document.createTextNode('div#together>*{display:inline-block; border:1px solid yellow; border-radius:5px; background:black; color:yellow; line-height:1.85;} div#together{word-wrap:break-word;} a{padding:0 9px;}');

sty[0].appendChild(str);

function searching() {
  t.innerHTML = 'Result:' + (t.children.length - 1) + ';<br>';
  for (var x = 0; x < aL; x++) {
    if (s.value.length < 1) {
      t.innerHTML = 'Result: 0';
    } else if (a[x].textContent.includes(s.value)) {
      t.innerHTML +=a[x].outerHTML;
      x++
    } 
  }
  window.setTimeout(searching, 1000);
}
searching();
