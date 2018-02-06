const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// ウィンドウズオブジェクトのグローバル参照を保持する
// そうしないとJavaScriptオブジェクトがガベージコレクションされると自動的に閉じられる
let win;

function createWindow() {
  // ブラウザウィンドウの作成をする
  // Chromeなしのウィンドウ、または任意の形状の透明なウィンドウを作成するには、
  // Frameless Window API(https://github.com/electron/electron/blob/master/docs/api/frameless-window.md)を利用する
  win = new BrowserWindow({ width: 800, height: 600 });

  // index.htmlをアプリとして読み込む
  win.loadURL(url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file',
    // 「http:」のようなプロトコルのコロンの後に2つのASCIIスラッシュ文字（/）が必要な場合はtrueにする
    // ようは「http://」にしたい場合はtrue
    slashes: true
  }));

  // Chrome dev toolsを開く
  win.webContents.openDevTools();

  win.on('closed', () => {
    // ウィンドウオブジェクトを参照しない。
    // 通常、アプリケーションが複数のウィンドウをサポートしている場合は、配列にウィンドウを格納する。
    // 対応する要素を削除する必要があるとき。
    win = null;
  });
}

// Electronの初期化が完了した際に呼び出される
// 一部のAPIは、このイベントが発生した後にのみ利用できる
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // macOSでは、ユーザがCmd + Qで明示的に終了するまで、
  // アプリケーションとそのメニューバーがアクティブになるのが一般的です
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  // MacOSでは、ドックアイコンがクリックされ、他のウィンドウが開いていないときに、
  // アプリケーションでウィンドウを再作成するのが一般的。
  if (win === null) {
    createWindow()
  }
});