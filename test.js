var menu = document.getElementById("navbar").getElementsByTagName("ul")[0];
var child = menu.getElementsByTagName("li")[0];
var removed = menu.removeChild(child);
menu.appendChild(removed);