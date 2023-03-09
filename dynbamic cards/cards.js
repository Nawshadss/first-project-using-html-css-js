const post=[
    {
        tittle:"nawshad1",
        body:"this is the body decription"
    },
    {
        tittle:"nawshad2",
        body:"this is the body decription"
    },
    {
        tittle:"nawshad3",
        body:"this is the body decription"
    },
    {
        tittle:"nawshad4",
        body:"this is the body decription"
    },
    {
        tittle:"nawshad5",
        body:"this is the body decription"
    },
    {
        tittle:"nawshad6",
        body:"this is the body decription"
    },
    {
        tittle:"nawshad7",
        body:"this is the body decription"
    }
];

const postsElement=document.querySelector(".posts");


const loadalldata=()=>{
post.map((posts)=>{
   const postE=document.createElement("div");
   postE.classList.add("post")

   postE.innerHTML=` 
   <h4 class="posttittle">${posts.tittle}</h4>
   <p class="postbody">${posts.body}</p>  
   `
   postsElement.appendChild(postE)
})
};

loadalldata()