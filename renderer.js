    //alert('heyy');
    var electron = require('electron');
    const {ipcRenderer} = electron;
    var btns = document.getElementsByClassName('installButton');
    for(var i=0; i<btns.length; i++){
    btns[i].addEventListener('click', function(){
        console.log('called');
        const reply = ipcRenderer.sendSync('synchronous-message', 'ping');
        console.log(`reply : ${reply}`);
    });
}
    
        /*ipcRenderer.send('asynchronous-message', 'ping');

        ipcRenderer.on('asynchronous-reply', (event, arg) => {
            console.log(`reply : ${arg}`);
        })*/
        /*ipcRenderer.on('synchronous-message', function(){
            console.log('display');
        });*/
        
    


/*function abc(){
    console.log('heyyyyy');
}*/