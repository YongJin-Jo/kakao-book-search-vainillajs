const myHeaders = new Headers()
myHeaders.append("Authorization",'KakaoAK 8fa9907863e42acbbc3712d84be5135e')



var requestOptionsGet = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

 async function fetchSearchCat(data,page){
  const response = await fetch(`https://dapi.kakao.com/v3/search/book?query=${data}&page=${page}`, requestOptionsGet);
   return await response.json().catch(err => console.log(err));
}