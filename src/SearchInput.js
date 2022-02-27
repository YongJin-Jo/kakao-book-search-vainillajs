class SearchInput{
  onSearch=null
  $searchKeyword=null
  data =[]
  constructor({$target, onSearch}){
    const $searchInput = document.createElement("input") 
    this.$searchInput = $searchInput
    this.$searchInput.className ="SearchInput"
    this.$searchInput.placeholder = "원하시는 도서를 검색해 보세요.!"
    this.$searchInput.addEventListener('keyup', e =>{
      if (e.keyCode === 13) {
        onSearch(e.target.value) 
        e.target.value = ''
      }
    })
    $target.appendChild(this.$searchInput)
  }

}