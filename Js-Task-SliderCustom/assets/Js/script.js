let carusel=document.querySelector(".carusel")
let cons=document.querySelectorAll(".carusel .content");
let lefticon=document.querySelector(".carusel .left-icon")
let righticon=document.querySelector(".carusel .right-icon");


lefticon.addEventListener("click",function(){
    
    let content=document.querySelector(".carusel .current");
    content.previousElementSibling.classList.remove("d-none");
    content.classList.add("d-none");
    content.previousElementSibling.classList.add("current");
    content.classList.remove("current");
})
righticon.addEventListener("click",function(){
    let content=document.querySelector(".carusel .current");
    content.classList.add("d-none");
    content.nextElementSibling.classList.remove("d-none");
    content.nextElementSibling.classList.add("current");
    content.classList.remove("current");
    
})



// contents.forEach(content=>{
  
//     lefticon.addEventListener("click",function(){
//         content.classList.add("d-none") 
//       content.previousElementSibling.classList.remove("d-none");
      
      
//       //   elem.previousElementSibling.classList.remove("d-none")

     
        
//     })
//     righticon.addEventListener("click",function(){
        
//         content.classList.add("d-none")
//         content.previousElementSibling.classList.remove("d-none")
//     })
// })