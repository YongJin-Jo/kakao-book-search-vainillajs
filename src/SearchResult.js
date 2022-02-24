class SearchResult{
  $searchResult = null
  data = null
  onClick = null
  constructor({$target, initialData, onClick}){
    const $searchResult = document.createElement('div')
    this.$searchResult = $searchResult
    this.$searchResult.className = 'SearchResult'
    $target.appendChild(this.$searchResult)
    this.data = initialData;
    this.onClick = onClick

    this.render()
  }

  setState(nextData) {
    console.log(nextData);
    this.data = nextData;
    this.render();
  }

  render(){
    if(this.data.length > 0){
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
    }else if(this.data.length == 0){
      this.$searchResult.innerHTML = `
        <h1>검색한 데이터는 찾을수 없습니다.</h1>
      `
    }
     
  
    
  }
}