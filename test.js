const repoRequset = ()=>{  


    return new Promise((resolve, reject)=>{
    
    
        let myRequest = new XMLHttpRequest();
    
    
        myRequest.onload= function () {
    
            if(this.readyState===4 && this.status===200){
                resolve(JSON.parse(this.responseText)); 
            } 
    
            else {
                reject("Request Failed");
            }
    
        }
    
        myRequest.open("GET","https://api.github.com/users/KhalidElnaghi/repos", true);
        myRequest.send();
    });
};

repoRequset().then(
    (response)  =>  console.log(response),
    (error)     =>  console.log(error));