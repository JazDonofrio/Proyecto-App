import { useState } from "react";
import "./marco.css";


const ipcRenderer  = window.require('electron').ipcRenderer

//var isLeftMenuAactive = false
function Marco(){
  const [isMaximizedApp, changeMaxResBtn] = useState(false)


  function minimize() {
    ipcRenderer.end('minimizeApp')
  }
  function maxRes() {
    ipcRenderer.send('maximizeRestoreApp')
  }
  function close() {
    ipcRenderer.send('closeApp')
  }


    // Escuchamos el proceso de la aplicación cuando nos dice que se maximiza o se restaura.
  ipcRenderer.on("isMaximized", () => {
  changeMaxResBtn(true)
  })
  ipcRenderer.on("isRestored", () => {
  changeMaxResBtn(false)
  })

  return(
    <div id="topBar">
        <div id="titleBar">
          <div id="title">
            Red Social
          </div>
        </div>
        
        <div className="titleBarBtns">
        <button onClick={e => minimize()} id="minimizeBtn" className="topBtn minimizeBtn"></button>
        <button
          id="maxResBtn"
          title={isMaximizedApp ? 'Restore' : 'Maximize'}
          className={isMaximizedApp ? "topBtn restoreBtn" : "topBtn maximizeBtn"}
          onClick={e => maxRes()}>
        </button>
        <button onClick={e => close()} id="closeBtn" className="topBtn closeBtn"></button>
        </div>
    </div>
  )

}

export default Marco;