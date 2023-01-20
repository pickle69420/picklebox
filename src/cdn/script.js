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
                var tooltip = document.getElementsByClassName('pikl-tasktooltip')[0];
                div.classList.add('pikl-taskicon');
                app.classList.add('jam');
                app.classList.add(data[i].icon);
                taskbar.appendChild(div);
                div.appendChild(app);
                div.addEventListener('mouseenter', (event) => {
                    tooltip.innerHTML = data[i].displayname + `<div></div>`;
                    tooltip.style.setProperty('--tw-scale-x','1');
                    tooltip.style.setProperty('--tw-scale-y','1');
                    if(event.target.classList.contains('pikl-taskicon')) {
                        event.target.prepend(tooltip);
                    } else {
                        event.target.parentNode.prepend(tooltip);
                    }
                });
                div.addEventListener('mouseleave', (event) => {
                    tooltip.style.setProperty('--tw-scale-x','0');
                    tooltip.style.setProperty('--tw-scale-y','0');
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