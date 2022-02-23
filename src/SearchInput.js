class SearchInput{
  constructor({$target, onSearch}){
    const $serchInput = document.createElement("input") 
    this.$serchInput = $serchInput
    this.$serchInput.className ="SerchInput"
    this.$serchInput.placeholder = "원하시는 도서를 검색해 보세요.!"

    this.$serchInput.addEventListener('keyup', e =>{
      if (e.keyCode === 13) {
        onSearch(e.target.value) 
        e.target.value = ''
      }
    })
    $target.appendChild(this.$serchInput)
  }

 
}