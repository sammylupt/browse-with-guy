(function(){

  function center(el) {
    var w = document.documentElement.clientWidth,
        h = document.documentElement.clientHeight;
    el.style.position = 'fixed';
    el.style.left = (w - el.offsetWidth)/2 + 'px';
    el.style.top = (h - el.offsetHeight)/2 + window.pageYOffset + 'px';
  }

  var fieri = document.createElement("img");
  fieri.src = chrome.extension.getURL("guy.png");
  fieri.style.zIndex = "99999999999999";
  fieri.onload = function() { center(fieri) };
  document.body.appendChild(fieri);

})()
