console.log("starting")

function promise1API(){
  const promise1Data=  new Promise(function promiseApi(resolve, reject){
        console.log("func",promise1Data);
    setTimeout(() => 
        fetch("https://dummyjson.com/posts")
        .then((res)=> res.json())
        .then((data)=>{
        console.log("data",data);
        const posts = data.posts;
        console.log("posts",posts);

  })
    )
  })
 promise1Data.then((res1)=>{
    console.log("res", res1);

 })
 .catch((err) => {
    console.log("ERROR", err);
  });
    
}


promise1API()