const container = document.querySelector(".card-container")
console.log(container)
const card = [
    {title: `card 1` ,  descreption: `lorem lorem lorem lorem`, img1:`build.png`,img2:`logo.png`},
    {title: `card 2` ,  descreption: `lorem lorem lorem lorem`, img1:`build.png`,img2:`logo.png`},
    {title: `card 3` ,  descreption: `lorem lorem lorem lorem`, img1:`build.png`,img2:`logo.png`},
    {title: `card 3` ,  descreption: `lorem lorem lorem lorem`, img1:`build.png`,img2:`logo.png`},
    {title: `card 3` ,  descreption: `lorem lorem lorem lorem`, img1:`build.png`,img2:`logo.png`},
    {title: `card 3` ,  descreption: `lorem lorem lorem lorem`, img1:`build.png`,img2:`logo.png`},
    {title: `card 3` ,  descreption: `lorem lorem lorem lorem`, img1:`build.png`,img2:`logo.png`},
    {title: `card 3` ,  descreption: `lorem lorem lorem lorem`, img1:`build.png`,img2:`logo.png`},
]



card.forEach((data) => 
container.innerHTML += `<div class="card">
            
             <img src="${data.img1}">
             <img src="${data.img2}">
            <div>
             <h2>${data.title}</h2> 
             <p>${data.descreption}</p>
             </div>
        </div>`
)