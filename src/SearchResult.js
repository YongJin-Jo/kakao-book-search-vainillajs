class SearchResult{
  $searchResult = null
  data = null
  onClick = null
  constructor({$target, initialData, onClick,onScroll,scrollState }){
    const $searchResult = document.createElement('div')
    this.$searchResult = $searchResult
    this.$searchResult.className = 'SearchResult'
    $target.appendChild(this.$searchResult)
    this.data = initialData;
    this.onClick = onClick

    this.render()
    
    // 인피니티 스크롤  기능 구현
    window.addEventListener("scroll", (e) =>{
      const target = e.target.scrollingElement
      const clientHeight = target.clientHeight
      const scrollHeight = target.scrollHeight
      const scrollTop = target.scrollTop 
      if(scrollHeight - scrollTop <= clientHeight+100){
        scrollState? null:onScroll()
      }

    })
  }
  
  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render(){
    if(this.data.length !== 0){
      this.$searchResult.innerHTML = this.data.map(
        item => `
          <div class="item">
            <img src=${item.thumbnail} alt=${item.title}  loading="lazy" />
          </div>
        `
      )
      .join("");
  
      this.$searchResult.querySelectorAll('.item').forEach(($item,index) => {
        $item.addEventListener("click",()=>{
          this.onClick(this.data[index])
        })
      });
    }else{
      this.$searchResult.innerHTML = `
      <strong>검색된 결과가 없습니다</strong>
      `
    }
     
  
    
  }
}