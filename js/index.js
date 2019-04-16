let url = 'https://ghibliapi.herokuapp.com/films'; // <-- get this from the doc get url of website

//change the color 

fetch(url) 
.then(function(response){
    if(response.status !== 200){
        console.log("wrong");
        return;
    }
    else{
        response.json().then(function(data){
            data.forEach(movies =>{
                let div = document.createElement('div');
                div.setAttribute('class', 'card'); // class = type of attr, card is the name of it

                let span = document.createElement("span");
                span.setAttribute("class", "title");

                let btn = document.createElement("button");
                btn.setAttribute("class", "btn");
                btn.setAttribute("id", "list"); // changed 
                //btn.addEventListener("click", addList, false); //<-- when the btn is created we need to add the event listener, eleminates the null error 
                btn.textContent = "X";

                let h1 = document.createElement("h1");
                h1.textContent = movies.title;

                let h3 = document.createElement("h3");
                h3.textContent = "Release Date: " + movies.release_date;

                let p = document.createElement("p");
                p.description = movies.description.substring(0,300); //<-- limiting to 300 chars
                p.textContent = `${movies.description}...`;

                container.appendChild(div);
                div.appendChild(h1);
                //span.appendChild(btn);
                div.appendChild(span);
                div.appendChild(h3);
                div.appendChild(p);
            })
        })
    }
}).catch(function(err){
    console.log("error");
})


const app = document.getElementById("root");

const logo = document.createElement("img");
logo.src = "logo.png";

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);

let search = document.getElementById("Search");
let adding = document.getElementById("list");

search.addEventListener("keyup", filterList, false);


/***THis creates filter list*** */
function filterList(e){
    var text = e.target.value.toLowerCase();

    var x = document.getElementsByClassName("card");  
    
   
    // turn all div with classname of card to araay 
    Array.from(x).forEach(function(item){ // filter through the divs with forEach 
        var iName = item.firstChild.textContent; // get the first child of the div 
        if(iName.toLowerCase().indexOf(text) != -1){ //<-- checks if the header is equal to the text
            item.style.display = "block"; // display if it is 
        }
        else{
            item.style.display = "none"; // dont display if not
        }
    });

}


