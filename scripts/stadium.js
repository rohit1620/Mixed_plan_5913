// let data=[{
    
// },
// ]

// data-1

let data1=[{
    image:"https://images.cricket.com/stadiums/112_actionshot_safari.jpg",
    title:"Kingsmead stadium, Durban "
},
{
    image:"https://images.cricket.com/stadiums/84_actionshot_safari.jpg",
    title:"Sharjah Cricket Asssociation Stadium"
},
{
    image:"https://images.cricket.com/stadiums/34_actionshot_safari.jpg",
    title:"Old Trafford, Menchester"
},
{
    image:"https://images.cricket.com/stadiums/117_actionshot_safari.jpg",
    title:"Kensigton Ovel, Bridgetoun, Barbold"
},
{
    image:"https://images.cricket.com/stadiums/159_actionshot_safari.jpg",
    title:"The Rose Bowl, Southanpton"
}]


// data-2

let data2=[{
    image:"https://images.cricket.com/stadiums/143_actionshot_safari.jpg",
    title:"Sharjah Cricket Asssociation Stadium"
},
{
    image:"https://images.cricket.com/stadiums/48_actionshot_safari.jpg",
    title:"Eden Gardends, Kolkata"
},

{
    image:"https://images.cricket.com/stadiums/89_actionshot_safari.jpg",
    title:"Lord's London"
},
{
    image:"https://images.cricket.com/stadiums/96_actionshot_safari.jpg",
    title:"Melbourne cricket Ground"
},
{
    image:"https://images.cricket.com/stadiums/91_actionshot_safari.jpg",
    title:"Kensigton Ovel, Bridgetoun, Barbold"
}]


// data-3

let data3=[{
    image:"https://images.cricket.com/stadiums/139_actionshot_safari.jpg",
    title:"Swai Mansington stadium"
},
{
    image:"https://images.cricket.com/stadiums/168_actionshot_safari.jpg",
    title:"Wankeode stadium ,mumbai"
},

{
    image:"https://images.cricket.com/stadiums/158_actionshot_safari.jpg",
    title:"Eden Gardends, Kolkata"
},
{
    image:"https://images.cricket.com/stadiums/90_actionshot_safari.jpg",
    title:"Sharjah Cricket Asssociation Stadium"
},
{
    image:"https://images.cricket.com/stadiums/48_actionshot_safari.jpg",
    title:"Old Trafford, Menchester"
}]


// data-4

let data4=[{
    image:"https://images.cricket.com/stadiums/1918_actionshot_safari.jpg",
    title:"Brian Lara stadium"
},
{
    image:"https://www.cricket.com/pngs/stadium-placeholder.jpg",
    title:"Old Trafford, Menchester"
},

{
    image:"https://images.cricket.com/stadiums/161_actionshot_safari.jpg",
    title:"Eden Gardends, Kolkata"
},
{
    image:"https://images.cricket.com/stadiums/50_actionshot_safari.jpg",
    title:"Sharjah Cricket Asssociation Stadium"
},
{
    image:"https://images.cricket.com/stadiums/149_actionshot_safari.jpg",
    title:"Melbourne cricket Ground"
}]


data1.forEach((el)=>{
    let img=document.createElement("img");
    let h4=document.createElement("p");
    let div=document.createElement("div");
     h4.innerText=el.title
    img.src=el.image;
    div.append(img,h4)
   document.getElementById("one").append(div)
})



data2.forEach((el)=>{
    let img=document.createElement("img");
    let h4=document.createElement("p");
    let div=document.createElement("div");
     h4.innerText=el.title
    img.src=el.image;
    div.append(img,h4)
   document.getElementById("two").append(div)
})



data3.forEach((el)=>{
    let img=document.createElement("img");
    let h4=document.createElement("p");
    let div=document.createElement("div");
     h4.innerText=el.title
    img.src=el.image;
    div.append(img,h4)
   document.getElementById("three").append(div)
})



data4.forEach((el)=>{
    let img=document.createElement("img");
    let h4=document.createElement("p");
    let div=document.createElement("div");
     h4.innerText=el.title
    img.src=el.image;
    div.append(img,h4)
   document.getElementById("four").append(div)
})