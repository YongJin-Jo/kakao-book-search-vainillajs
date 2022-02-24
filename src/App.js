console.log("App is running!");
class App {
  
  $target = null;
  current_page = 0
  total_count = 0
  data = [];
  keyward = ''
  constructor($target) {
    this.$target = $target;
    this.searchInput = new SearchInput({
      $target,
      onSearch:async (keyward)=>{
      this.data = []
      this.keyward = keyward
      this.current_page =1
      const {documents,meta:{total_count}} = await fetchSearchCat(keyward,this.page)
      this.total_count = total_count
      this.setState(documents)
      }
    })

    this.searchResult = new SearchResult({
      $target,
      initialData:this.data,
      onClick:(data)=>{
        this.imageInfo.setData({
          visible: true,
          info:data
        })
      },
      onScroll: async()=>{
        if(this.current_page >= this.total_count) return
        this.current_page = this.current_page +1
        const {documents} = await fetchSearchCat(this.keyward,this.current_page)
        this.setState(documents)
      }
    })
  
    this.imageInfo = new ImageInfo({$target,
      data:{
        visible: false,
        info:null
      }
    })
  }

  setState(nextData){
    this.data = this.data.concat(nextData)
    this.searchResult.setState(this.data)
    console.log(this.data);
  }
}