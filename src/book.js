(async function(){
    var jselem = document.createElement('script');
    await fetch('./script.js')
	.then((response) => response.text())
	.then((data) => {
		jselem.innerHTML = data;
	});
    document.body.appendChild(jselem);
    var csselem = document.createElement('style');
    await fetch('./style.css')
	.then((response) => response.text())
	.then((data) => {
		csselem.innerHTML = data;
	});
    document.head.appendChild(csselem);
})();