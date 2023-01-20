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
        fetch('./cdn/apps.json')
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                var taskbar = document.getElementsByClassName('pikl-taskbar')[0];
                var div = document.createElement('div');
                var app = document.createElement('span');
                var tooltip = document.createElement('div');
                tooltip.classList.add('pikl-tasktooltip');
                tooltip.innerHTML = data[i].displayname + `<div></div>`;
                div.classList.add('pikl-taskicon');
                app.classList.add('jam');
                app.classList.add(data[i].icon);
                taskbar.appendChild(div);
                div.appendChild(app);
                div.appendChild(tooltip);
                console.log(div.lastChild);
                div.addEventListener('mouseenter', (event) => {
                    if(event.target.classList.contains('pikl-taskicon')) {
                        event.target.lastChild.style.setProperty('--tw-scale-x','1');
                        event.target.lastChild.style.setProperty('--tw-scale-y','1');
                    } else {
                        event.target.parentNode.lastChild.style.setProperty('--tw-scale-x','1');
                        event.target.parentNode.lastChild.style.setProperty('--tw-scale-y','1');
                    }
                });
                div.addEventListener('mouseleave', (event) => {
                    if(event.target.classList.contains('pikl-taskicon')) {
                        event.target.lastChild.style.setProperty('--tw-scale-x','0');
                        event.target.lastChild.style.setProperty('--tw-scale-y','0');
                    } else {
                        event.target.parentNode.lastChild.style.setProperty('--tw-scale-x','0');
                        event.target.parentNode.lastChild.style.setProperty('--tw-scale-y','0');
                    }
                });
            }
        });
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