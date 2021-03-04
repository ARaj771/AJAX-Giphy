console.log("Let's get this party started!");

$searchTerm = $("#searchTerm");


async function getGif(searchfor){
    let response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=DsSUk9dVsvATC29Bgldzk8RZyT265jeA&q=${searchfor}&limit=1&offset=0&rating=g&lang=en`);
    console.log(response);
    let imgUrl = response.data.data[0].images.fixed_height.url;
    console.log(imgUrl);
    createImg(imgUrl);
    
}

$("#search").on('click',function(e){
    e.preventDefault();
    let searchInput= $searchTerm.val();
    // getGif(input.value);
    // input.value = "";
    getGif(searchInput);
    $searchTerm.val("");      
})
    
 function createImg(imageAddress){
        containdiv = document.querySelector('#imgContainer');
        newImg = document.createElement('img');
        newImg.classList.add('imgDisp');
        newImg.setAttribute('src',`${imageAddress}`);
        containdiv.append(newImg);
}

$('#rem').on("click",function(){
    $("#imgContainer").empty();
})





    
   
    



