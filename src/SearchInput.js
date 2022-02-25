class SearchInput{
  onSearch=null
  $searchKeyword=null
  data =[]
  constructor({$target, onSearch}){
    const $searchInput = document.createElement("input") 
    const $searchKeyword = document.createElement("div")
    this.$searchInput = $searchInput
    this.$searchKeyword = $searchKeyword
    this.$searchInput.className ="SearchInput"
    this.$searchKeyword.className ="SearchKeyward"
    this.$searchInput.placeholder = "원하시는 도서를 검색해 보세요.!"
    this.$searchInput.addEventListener('keyup', e =>{
      if (e.keyCode === 13) {
        onSearch(e.target.value) 
        e.target.value = ''
      }
    })
    this.onSearch = onSearch
    $target.appendChild(this.$searchInput)
    $target.appendChild(this.$searchKeyword)
  }

  setData(keyward){
    console.log(keyward);
    if(this.data.length >= 5){
      this.data.splice(0,1)
      this.data.push(keyward)
    }else{
      this.data.push(keyward)
    }
    this.render()
  }

  render(){
    this.$searchKeyword.innerHTML= this.data.map(itme => `<span class="keywardItem">${itme}</span>`)
    this.$searchKeyword.addEventListener("click",(event)=>{
    })
  }
}