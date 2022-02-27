console.log("App is running!");
class App {
  $target = null;
  current_page = 0
  total_count = 0
  data = [];
  scrollState = false
  keyword = null
  constructor($target) {
    this.$target = $target;
    this.searchInput = new SearchInput({
      $target,
      onSearch:async (keyword)=>{
      try {
        this.loder.onChange()
        this.data = []
        this.keyword = keyword
        this.current_page =1
        const {documents,meta:{total_count}} = await fetchSearchCat(keyword,this.page)
        this.total_count = total_count
        this.searchKeyword.setData(keyword)
        this.setState(documents)
      } catch (error) {
        console.error(error);
      }finally{
        this.loder.onChange()
      }
    }
    })

    this.searchKeyword = new SearchKeyword({
      $target,
      onClick:async (keyword)=>{
        try {
          this.loder.onChange()
          this.data = []
          this.keyword = keyword
          this.current_page =1
          const {documents,meta:{total_count}} = await fetchSearchCat(keyword,this.page)
          this.total_count = total_count
          this.setState(documents)
        } catch (error) {
          console.error(error);
        }finally{
          this.loder.onChange()
        }
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
        try {
          if(this.current_page <= this.total_count && this.data.length !==0) {
            this.scrollState = true
            this.current_page = this.current_page +1
            await fetchSearchCat(this.keyword,this.current_page).then((data) => {
            this.setState(data.documents)
            this.scrollState = false
        })
          }
          
        } catch (error) {
          console.error(error);
        }
        
      },
      scrollState:this.scrollState
    })
  
    this.imageInfo = new ImageInfo({
      $target,
      data:{
        visible: false,
        info:null
      }
    })

    this.loder = new Loder({
      $target,
      data:{
        visible: false,
      }
    })

  }


  setState(nextData){
    this.data = this.data.concat(nextData)
    this.searchResult.setState(this.data)
  }
}