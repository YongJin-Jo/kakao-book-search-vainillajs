class ImageInfo{
  $ImageInfo = null
  data=null
  onClick = null
  closeState = true
  constructor({$target, data,onClick}){
    const $ImageInfo = document.createElement('div')
    this.$ImageInfo = $ImageInfo
    this.$ImageInfo.id="modal-container"
    this.$ImageInfo.classList.add("fade-in-box")
    
    this.onClick = onClick
    // modal clickEvent 구현 
    
      this.$ImageInfo.addEventListener("click",(e)=>{ 
        if(this.closeState){ 
          this.$ImageInfo.classList.add("fade-out-box")
          this.close(e)
        } 
      })

    $target.appendChild(this.$ImageInfo)
    this.data = data
    this.render()
  }
  
  close(e){
      if(e.target.id ==='modal-container'){
        this.closeState =false
        const animation = document.querySelector('.fade-out-box');
        animation.addEventListener("animationend",(e)=>{
          if(e.target.className =='fade-in-box fade-out-box'){
            this.$ImageInfo.classList.remove("fade-out-box")
            this.setData({visible:false,info:null})
            this.closeState = true
          }
        })
      }  
  }

  setData(data){
    this.data = data
    this.render()
  }

  render(){
    if(this.data.visible){
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