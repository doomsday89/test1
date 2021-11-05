
const {app, BrowserWindow, protocol} = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
      title:"Wallet",
       
        center:true,
        backgroundColor:"ffffff",
        icon: url.format({pathname:path.join(__dirname, 'dist/Carteraapp/favicon.ico'),protocol:"file", slashes:true})
    });

    mainWindow.loadURL(url.format({pathname:path.join(__dirname, 'dist/Carteraapp/index.html'),protocol:'file',slashes:true}));
  }    
    //app.on('ready',createWindow);
    
      app.whenReady().then(() => {
        createWindow()
      
        app.on('activate', function () {
          if (BrowserWindow.getAllWindows().length === 0) createWindow()
        })
      });
      app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') app.quit()
      });
      app.on('closed',  function(){mainWindow=null});

