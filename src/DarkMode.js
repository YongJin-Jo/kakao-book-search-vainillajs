class DarkMode{
  $darkMode = null
  currentMode = null
  constructor({$target}){
    const $darkMode = document.createElement('div')
    this.$darkMode = $darkMode
    this.$darkMode.className = 'dark-mode-wrapper'
    this.currentMode = window.matchMedia("(prefers-color-scheme: dark)").matches? "dark":"light"
    $target.appendChild(this.$darkMode)
    this.render()
  }

  toggleMode(){
    const body =document.querySelector('body')
    if(this.currentMode === 'dark'){
      this.currentMode = 'light'
      body.className = 'light'
    }else{
      this.currentMode = 'dark'
      body.className = 'dark'
    }
    
    document.querySelector('.dark-mode-btn').remove()
    this.render()
    

  }

  render(){
    const darkModeBtn = document.createElement('button') 
    darkModeBtn.className = "dark-mode-btn";
    darkModeBtn.innerText = this.currentMode == "dark" ? "🌑" : "🌕";

    darkModeBtn.addEventListener('click',()=>{
      this.toggleMode()
    })
    this.$darkMode.appendChild(darkModeBtn)
  }

}