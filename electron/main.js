const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname + '/logo192.png',
        title: 'movie sucker',
        webPreferences: {
            preload: './preload.js'
        },
        frame: false
    });

    win.removeMenu();

    win.loadURL('https://movie-sucker.vercel.app')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
