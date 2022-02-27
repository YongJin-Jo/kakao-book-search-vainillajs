class SearchKeyword{
  $searchKeyword = null
  data =[]
  constructor({$target, onClick}){
    const $searchKeyword = document.createElement('div')
    this.$searchKeyword = $searchKeyword
    this.$searchKeyword.className = 'searchKeyword'

    
    this.$searchKeyword.onclick = (event) =>{
      const target = event.target
      if(target.tagName !== 'SPAN') return;
      onClick(target.textContent)
    }
    $target.appendChild(this.$searchKeyword)
  }

  setData(keyword){

    const overlapping = this.data.find(item => item === keyword)
    if(overlapping !== undefined) return; 
    
    if(this.data.length >= 5){
      this.data.splice(0,1)
      this.data.push(keyword)
    }else{
      this.data.push(keyword)
    }
    
    this.render()
  }

  render(){
    const reverceData = [...this.data]
    this.$searchKeyword.innerHTML= reverceData.reverse().map((itme,index) => `
    <span data-${index}>${itme}</span>`
    )
    
  }
}