/*
 * @Author: bobo
 * @Description: 
 * @Date: 2023-05-30
 */
// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('themeMode',{
    dark: ()=> ipcRenderer.invoke('dark-mode'),
    light: ()=> ipcRenderer.invoke('light-mode')
})