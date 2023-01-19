function piklload() {
    return new Promise((resolve,reject)=>{
        var modalbox = document.getElementsByClassName('pikl-maincontainer')[0];
        fetch('./cdn/module.html')
	    .then((response) => response.text())
	    .then((data) => {
		    modalbox.innerHTML = data;
	    });
        var jamlib = document.createElement('link');
        jamlib.rel = 'stylesheet';
        jamlib.href = 'https://unpkg.com/jam-icons/css/jam.min.css'
        document.head.appendChild(jamlib);
        resolve();
    });
}
async function piklinit() {
    var modalbox = document.createElement('div');
    modalbox.classList.add('pikl-maincontainer');
    document.body.appendChild(modalbox);
    await piklload();
}
piklinit();