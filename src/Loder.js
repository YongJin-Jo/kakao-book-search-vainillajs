class Loder{
  $loder = null
  data = null
  constructor({$target,data}){
    const $loder = document.createElement('div')
    this.$loder = $loder
    this.$loder.className = 'loder'
    $target.appendChild(this.$loder)
    this.data = data
    this.render()
  }

  onChange(){
    this.data.visible = !this.data.visible;
    this.$loder.style.display = this.data.visible? 'block': 'none'
  }

  render(){
    this.$loder.innerHTML = `
    <div class="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    `
  }
}