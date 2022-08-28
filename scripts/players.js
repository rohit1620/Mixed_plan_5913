// let data=[{
    
// },
// ]

// data-1

let data1=[{
    image:"https://images.cricket.com/players/66818_headshot_safari.png",
    title:"Shubman Gill "
},
{
    image:"https://images.cricket.com/players/65632_headshot_safari.png",
    title:"Sanju Samson"
},
{
    image:"https://images.cricket.com/players/3722_headshot_safari.png",
    title:"Shikhar Dhawan"
},
{
    image:"https://images.cricket.com/players/63187_headshot_safari.png",
    title:"Kuldeep Yadav"
},
{
    image:"https://images.cricket.com/players/62576_headshot_safari.png",
    title:"Axar Patel"
}]


// data-2

let data2=[{
    image:"https://images.cricket.com/players/69756_headshot_safari.png",
    title:"Shardul Thakur"
},
{
    image:"https://images.cricket.com/players/10167_headshot_safari.png",
    title:"Mohammed Siraj"
},

{
    image:"https://images.cricket.com/players/25422_headshot_safari.png",
    title:"Paul Strilling"
},
{
    image:"https://images.cricket.com/players/60122_headshot_safari.png",
    title:"Prasidh Krishana"
},
{
    image:"https://images.cricket.com/players/65548_headshot_safari.png",
    title:"Tom Lathan"
}]


// data-3

let data3=[{
    image:"https://images.cricket.com/players/11724_headshot_safari.png",
    title:"Sikandar Raza"
},
{
    image:"https://images.cricket.com/players/19394_headshot_safari.png",
    title:"KL Rahul"
},

{
    image:"https://images.cricket.com/players/65748_headshot_safari.png",
    title:"Deepak Chahar"
},
{
    image:"https://images.cricket.com/players/28891_headshot_safari.png",
    title:"Adan lyth"
},
{
    image:"https://images.cricket.com/players/66632_headshot_safari.png",
    title:"Dan Laurence"
}]


// data-4

let data4=[{
    image:"https://images.cricket.com/players/3430_headshot_safari.png",
    title:"Mohammed Siraj"
},
{
    image:"https://images.cricket.com/players/63755_headshot_safari.png",
    title:"Shubman Gill"
},

{
    image:"https://images.cricket.com/players/3932_headshot_safari.png",
    title:"Deepak Chahar"
},
{
    image:"https://images.cricket.com/players/45853_headshot_safari.png",
    title:"Prasidh Krishana"
},
{
    image:"https://images.cricket.com/players/64511_headshot_safari.png",
    title:"Paul Strilling"
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