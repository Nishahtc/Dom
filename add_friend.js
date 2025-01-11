let isststus = document.querySelector("h5")

let addfriend = document.querySelector("button")
let check =0;
addfriend.addEventListener("click",function(){
    if(check == 0){
        isststus.innerHTML="Friends"
        isststus.style.color ="green"
        addfriend.innerHTML="Remove Friend"
        check =1
    }else{
        isststus.innerHTML="Stranger"
        isststus.style.color ="red"
        addfriend.innerHTML="Add Friend"
        check =0
    }
})
// let reovefriend = document.querySelector(".remove")

// reovefriend.addEventListener("click",function(){
//     isststus.innerHTML="Remove"
// })


