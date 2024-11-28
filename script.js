let allPost=document.querySelector(".allPost")
let name=document.querySelector(".name")
let caption=document.querySelector(".caption")
let submitBtn=document.querySelector(".submitBtn")
let updateBtn=document.querySelector(".updateBtn")
let error=document.querySelector(".error")
let arr=[];
let indexstore;

submitBtn.addEventListener("click",function(){
    if(!name.value || !caption.value){
        error.innerHTML="Please Enter something first"
    } else if(!(isNaN(name.value))){
        arr.push({
            name:name.value,
            caption:caption.value
        
        })
        
        allPost.innerHTML=" "
        name.value=""
        caption.value=""
        
        display2()
        
    } else{
        arr.push({
            name:name.value,
            caption:caption.value
        
        })
        
        allPost.innerHTML=" "
        name.value=""
        caption.value=""
        
        display()
    } 
    
});

updateBtn.addEventListener("click", function () {
    arr[indexstore].name = name.value;
    arr[indexstore].caption = caption.value;


    allPost.innerHTML = " ";
    display();

    updateBtn.style.display = "none";
    submitBtn.style.display = "inline-block";

    name.value = " "
    caption.value = " "
});


function display(){

     arr.map(item=>{  
        
        allPost.innerHTML+=` <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.caption}</p>
            <button type="button" class="btn btn-primary editBtn">edit</button>
            <button type="button" class="btn btn-danger deleteBtn">delete</button>
        </div>
      </div>`
    
    })

    let deleteBtn=document.querySelectorAll(".deleteBtn")
    let deleteBtnConvert=Array.from(deleteBtn)
    deleteBtnConvert.map((deleteBtn,index)=>{

 deleteBtn.addEventListener("click",function(){

    arr.splice(index,1)

    allPost.innerHTML=""
display()
 })
    });

    let editBtn=document.querySelectorAll(".editBtn")
    let editBtnConvert=Array.from(editBtn)
    editBtnConvert.map((editBtn,index)=>{

 editBtn.addEventListener("click",function(){

    name.value=arr[index].name
    caption.value=arr[index].caption

    updateBtn.style.display="inline-block"
     submitBtn.style.display="none"

allPost.innerHTML=" "
    indexstore=index;
display()
 })
    })
  
}


function display2(){

    arr.map(item2=>{  
       
       allPost.innerHTML+=` <div class="card" style="width: 18rem;">
       <div class="card-body">
         <h5 class="card-title">${item2.name}</h5>
         <p class="card-text">${item2.caption}</p>
           <button type="button" class="btn btn-primary playBtn">Play</button>
           <button type="button" class="btn btn-danger deleteBtn">delete</button>
       </div>
     </div>`
   
   })
 
}