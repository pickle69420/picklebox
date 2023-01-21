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
                var array = data;
                var window = document.createElement('div');
                var div = document.createElement('div');
                var app = document.createElement('span');
                var tooltip = document.createElement('div');
                tooltip.classList.add('pikl-tasktooltip');
                tooltip.innerHTML = data[i].displayname + `<div></div>`;
                window.classList.add('pikl-window');
                window.id = 'pikl-' + data[i].displayname.toLowerCase() + 'icon';
                fetch(data[i].url)
                .then((response) => response.text())
                .then((data) => {
                    document.getElementById('pikl-' + array[i].displayname.toLowerCase() + 'icon').innerHTML = data;
                });
                div.classList.add('pikl-taskicon');
                app.classList.add('jam');
                app.classList.add(data[i].icon);
                taskbar.appendChild(div);
                div.appendChild(app);
                div.appendChild(tooltip);
                modalbox.appendChild(window);
                document.getElementById('pikl-homeicon').classList.add('active');
                taskbar.getElementsByClassName('jam-home')[0].parentNode.classList.add('active');
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
                div.addEventListener('click',(event) => {
                    document.getElementsByClassName('pikl-window active')[0].classList.remove('active');
                    document.getElementById('pikl-' + data[i].displayname.toLowerCase() + 'icon').classList.add('active');
                    if(event.target.classList.contains('pikl-taskicon')) {
                        document.getElementsByClassName('pikl-taskicon active')[0].classList.remove('active');
                        event.target.classList.add('active');
                    } else {
                        document.getElementsByClassName('pikl-taskicon active')[0].classList.remove('active');
                        event.target.parentNode.classList.add('active');
                    }
                })
            }
        });
        resolve();
    });
}
function piklinit() {
    var modalbox = document.createElement('div');
    modalbox.classList.add('pikl-maincontainer');
    document.body.appendChild(modalbox);
    piklload();
    console.log('PickleHub is loading...');
}
piklinit();