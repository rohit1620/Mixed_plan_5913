window.addEventListener("load",()=>{
    getData()
})

let getData=async()=>{
    let res=await fetch("https://infinite-brushlands-51927.herokuapp.com/api/ranking?type=ODI");
    let data=await res.json();
    console.log(data)
    renderDom(data)
}
let renderDom=(data)=>{
    let container=document.querySelector("#container");
    container.innerHTML=null;
    data.forEach(({rank,img,country})=>{

        let ranking=document.createElement("p");
        ranking.innerText=rank;
        ranking.setAttribute("class","teamrankingNum");

        let image=document.createElement("img");
        image.src=img;
        image.setAttribute("class","imagewidth")

        let countryn=document.createElement("p");
        countryn.innerText=country;
        countryn.setAttribute("class","countOrigin")

        // let signing=document.createElement("h1");
        // signing.innerText=sign;
        // signing.setAttribute("class","signtodel")


        let div=document.createElement("div");
        div.setAttribute("class","reankingteam");

        div.append(ranking,image,countryn);

        container.append(div);
    })
}

let changeranking=async(id)=>{
let res=await fetch(`https://infinite-brushlands-51927.herokuapp.com/api/ranking?type=${id}`)
res=await res.json();
renderDom(res)

}