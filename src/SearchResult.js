class SearchResult{
  $searchResult = null
  data = null
  constructor({$target, initialData}){
    const $searchResult = document.createElement('div')
    this.$searchResult = $searchResult
    this.$searchResult.className = 'SearchResult'
    $target.appendChild(this.$searchResult)
    this.data = initialData;
    this.render()
  }

  setState(nextData) {
    console.log(nextData);
    this.data = nextData;
    this.render();
  }

  render(){
    this.$searchResult.innerHTML = this.data.map(
      item => `
        <div class="item">
          <img src=${item.thumbnail} alt=${item.title} />
        </div>
      `
    )
    .join("");
  }
}