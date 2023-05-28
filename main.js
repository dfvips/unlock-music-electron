const { app, BrowserWindow, screen, Menu } = require('electron')
const path = require('path')

let win = null

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  const w = 1280, h = 720
  win = new BrowserWindow({
    width: w,
    height: h,
    x: (width - w) / 2,
    y: (height - h) / 2,
    webPreferences: {
      nodeIntegration: true
    },
    icon: path.join(__dirname, 'icons', 'icn.png')
  })

  Menu.setApplicationMenu(null);

  win.loadFile('dist/index.html')
  // 打开开发者工具
  // win.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
