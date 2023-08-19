var nameSiteInput = document.getElementById("siteName");
var nameUrlInput = document.getElementById("siteUrl");

var addButton= document.getElementById("addButton");
var searchInput=document.getElementById("searchInput");

var bookMarks =[];
var mainIndex=0;
if(localStorage.getItem("bookMarks")==null){

    bookMarks=[];
}
else {
    bookMarks=JSON.parse(localStorage.getItem("bookMarks"));
    displayData();
}




addButton.onclick=function addElemnt()
{

    if (addButton.innerHTML=="update")
    {
        addButton.innerHTML="Submit";
        var bookMark =
        {
         name: nameSiteInput.value,
         url: nameUrlInput.value,
        }
        bookMarks.splice(mainIndex,1,bookMark)
    }
    else{
        var bookMark =
        {
         name: nameSiteInput.value,
         url: nameUrlInput.value,
        }
        bookMarks.push(bookMark);
        // console.log(bookMarks);
        // displayData();
    }
        localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
        displayData();
        clearBook();
    
        
        
}


function displayData()
{
    var marks=``;
    for(var i=0; i<bookMarks.length;i++)
    {
        marks+=`

<tr>
<td> ${bookMarks[i].name}
</td>
<td><button class="btn  btn-primary"> Visit </button></td>
<td><button  onclick= "updateBook(${i})"class="btn  btn-primary"> Update </button></td>
<td><button  onclick= "deleteBook(${i})"class="btn  btn-primary"> Delete </button></td>

</tr>
  `
    }
    document.getElementById('tableBody').innerHTML=marks


}


function deleteBook (index)
{
    bookMarks.splice(index,1);
    localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
displayData();
}
function clearBook()
{
    nameSiteInput.value="";
    nameUrlInput.value="";
}

function updateBook(index)
{

nameSiteInput.value=bookMarks[index].name;
nameUrlInput.value=bookMarks[index].url;
addButton.innerHTML="update";
mainIndex=index;

}

