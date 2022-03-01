class ImageInfo{
  $ImageInfo = null
  data=null
  onClick = null
  constructor({$target, data,onClick}){
    const $ImageInfo = document.createElement('div')
    this.$ImageInfo = $ImageInfo
    this.$ImageInfo.classList.add("ImageInfo")
    this.$ImageInfo.classList.toggle("fade-in-box")

    this.onClick = onClick
    // modal clickEvent 구현 
    this.$ImageInfo.addEventListener("click",()=>{
      this.setData({visible:false,info:null})
      
    })

    $target.appendChild(this.$ImageInfo)
    this.data = data
    this.render()
  }
  
  setData(data){
    this.data = data
    this.render()
  }

  render(){
    if(this.data.visible){
      this.$ImageInfo.classList.add("fade-in-box")
      const {title,thumbnail,contents,price,publisher,authors} = this.data.info
      this.$ImageInfo.innerHTML = `
        <div class="modal-warrper">
          <h2>${title}</h2>
          <div class ="modal-article">
            <img src=${thumbnail} alt=''/>
            <div class ="modal-info">
              <span>저자</span>
              <span>${authors.map(itme => itme)}</span>
              <span>출판</span>
              <span>${publisher}</span>
              <span>판매가</span>
              <span>${price}</span>
            </div>
          </div>
          <div class="modal-contens">
          <span>${contents}</span>
          </div>
        </div>
        `  
      this.$ImageInfo.style.display = "flex";
    }else{
     
      this.$ImageInfo.style.display = "none";
    }
    
  }

}