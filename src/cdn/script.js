function load() {
    return new Promise((resolve,reject)=>{
        var modalbox = document.getElementsByClassName('modalbox')[0];
        fetch('./module.html')
	    .then((response) => response.text())
	    .then((data) => {
		    modalbox.innerHTML = data;
	    });
        resolve();
    });
}
async function init() {
    var modalbox = document.createElement('div');
    modalbox.classList.add('modalbox');
    document.body.appendChild(modalbox);
}