
// {/* <img src="https://www.cricbuzz.com/a/img/v1/595x396/i1/c${241290}/jonny-bairstow-hammered-a-92-b.jpg" alt=""></img> */}

let getData=async()=>{
    let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=%20cricket%20video%20Aug%2C2022&key=${"AIzaSyBJOP_SWdYFIkJgZ1PvQOY4YqhUqkPG1Ug"}`);
    res=await res.json();
    console.log(res)
    append(res.items)
}
    getData()
  // `https://www.youtube.com/embed/${videoId}`
   /* data.forEach((el) => { el.id.videoId/ el.snippet.title */
    let append=(data)=>{
        console.log(data)
data.forEach(({ id: { videoId }, snippet: { title, thumbnails ,description} }) => {
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div = document.createElement("div");
let p = document.createElement("p");
p.innerText=description;
let iframe = document.createElement("img");
iframe.src =thumbnails.medium.url;
// iframe.allow = "fullscreen";
let h3 = document.createElement("h3");
h3.innerText = title;

div1.setAttribute("class","ifram");
div2.setAttribute("class","div2");

div1.append(iframe)
div2.append(h3,p)
div.append(div1, div2);

let video = {
  title,
  videoId,
};

div.onclick = () => {
  playVideo(video);
};


document.getElementById("conts").append(div)

});
};
let videos=JSON.parse(localStorage.getItem("video"))

console.log(videos)
// let right=()=>{
let iframe = document.createElement("iframe");
 iframe.src =`https://www.youtube.com/embed/${videos.videoId}`
 iframe.allow = "fullscreen";
 let h4 = document.createElement("h4");
h4.innerText = videos.title;
document.getElementById("iframe").append(iframe,h4)

// }

let playVideo=(video)=>{
   localStorage.setItem("video",JSON.stringify(video))
  window.location.href="video.html"
}


