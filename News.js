window.addEventListener("load", () => {
  getData();
});

let getData = async () => {
  let res = await fetch(
    `https://intense-mesa-01660.herokuapp.com/api/cricketnews`
  );
  let data = await res.json();
  //   console.log(data);
  appendNews(data);
};

let appendNews = (data) => {
  document.getElementById("all-news").innerHTML = "";
  data.forEach(({ id, img, h4, p2, t, type }) => {
    let div1 = document.createElement("div");
    div1.setAttribute("id", "news-card");
    let div2 = document.createElement("div");
    div2.setAttribute("id", "news-img");
    let div3 = document.createElement("div");
    div3.setAttribute("id", "news-head");

    let image = document.createElement("img");
    image.src = img;

    let n_type = document.createElement("p");
    n_type.innerText = type;

    let head = document.createElement("h3");
    head.innerText = h4;

    let desc = document.createElement("p");
    desc.innerText = p2;

    let time = document.createElement("p");
    time.innerHTML = t;

    div2.append(image, n_type);
    div3.append(head, desc, time);
    div1.append(div2, div3);
    console.log(div1);
    document.getElementById("all-news").append(div1);
  });
};

let latest = () => {
  getData();
};

let news = async () => {
  let res = await fetch(
    `https://intense-mesa-01660.herokuapp.com/api/cricketnews?page=news`
  );
  let data = await res.json();
  appendNews(data);
};

let onthisday = async () => {
  let res = await fetch(
    `https://intense-mesa-01660.herokuapp.com/api/cricketnews?page=onthisday`
  );

  let data = await res.json();
  appendNews(data);
};

let matchrelated = async () => {
  let res = await fetch(
    `https://intense-mesa-01660.herokuapp.com/api/cricketnews?page=matchrelated`
  );
  let data = await res.json();
  appendNews(data);
};

let features = async () => {
  let res = await fetch(
    `https://intense-mesa-01660.herokuapp.com/api/cricketnews?page=features`
  );
  let data = await res.json();
  appendNews(data);
};
