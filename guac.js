console.log('guac.js loaded')

window.onload = function() {
  document.title = "r2frida - training lab"

  const appName = document.getElementsByClassName("app-name")
  if (appName) {
    appName.innerHTML = "r2frida labs"
  }
  
  console.log('page updated')
}
