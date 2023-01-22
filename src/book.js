(async function(){
	var supa = document.createElement('script');
    supa.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
	document.head.appendChild(supa);
    var jselem = document.createElement('script');
    await fetch('./cdn/script.js')
	.then((response) => response.text())
	.then((data) => {
		jselem.innerHTML = data;
	});
    document.body.appendChild(jselem);
    var csselem = document.createElement('style');
    await fetch('./cdn/style.css')
	.then((response) => response.text())
	.then((data) => {
		csselem.innerHTML = data;
	});
    document.head.appendChild(csselem);
})();