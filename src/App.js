console.log("App is running!");
class App {
  $target = null;
  current_page = 0
  total_count = 0
  data = [];
  keyward = ''
  scrollState = false

  constructor($target) {
    this.$target = $target;
    this.searchInput = new SearchInput({
      $target,
      onSearch:async (keyward)=>{
      try {
        this.loder.onChange()
        this.data = []
        this.keyward = keyward
        this.current_page =1
        const {documents,meta:{total_count}} = await fetchSearchCat(keyward,this.page)
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
            await fetchSearchCat(this.keyward,this.current_page).then((data) => {
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