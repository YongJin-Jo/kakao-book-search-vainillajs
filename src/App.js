console.log("App is running!");
class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;
    
    this.searchInput = new SearchInput({
      $target,
      onSearch:async (keyword)=>{
      await fetchSearchCat(keyword).then((data) =>this.setState(data))
      }
    })

    this.searchResult = new SearchResult({$target,initialData:this.data})
  }

  setState(nextData){
    this.data =nextData.documents
    this.searchResult.setState(nextData.documents)
    console.log(this.data);
  }
}