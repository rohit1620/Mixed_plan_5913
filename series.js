window.addEventListener("load", () => {
  getData();
});

let getData = async () => {
  let res = await fetch(`https://intense-mesa-01660.herokuapp.com/api/ongoing`);
  let data = await res.json();
  console.log(data);
  appendSeries(data);
};

let appendSeries = (data) => {
  document.getElementById("play-matches").innerHTML = "";
  data.forEach(({ match, s_match, e_match, number, type, categeory }) => {
    let div1 = document.createElement("div");
    div1.setAttribute("id", "series-card");
    let div2 = document.createElement("div");
    div2.setAttribute("id", "match-name");
    let div3 = document.createElement("div");
    div3.setAttribute("id", "match-date");
    let div4 = document.createElement("div");
    div4.setAttribute("id", "match-num");

    let name = document.createElement("h3");
    name.innerHTML = match;

    let num = document.createElement("p");
    num.innerHTML = number;

    let typ = document.createElement("p");
    typ.innerHTML = type;

    let start_m = document.createElement("h5");
    start_m.innerHTML = s_match;

    let end_m = document.createElement("h5");
    end_m.innerHTML = e_match;

    let to = document.createElement("p");
    to.innerText = "To";

    div2.append(name, div4);
    div4.append(num, typ);
    div3.append(start_m, to, end_m);

    div1.append(div2, div3);

    document.getElementById("play-matches").append(div1);
  });
};
let x;
let matchPart = async (id) => {
  let res = await fetch(`https://intense-mesa-01660.herokuapp.com/api/${id}`);
  let data = await res.json();
  appendSeries(data);
  x = id;
};

let allSeries = () => {
  getData();
};

let newSeries = async (id) => {
  console.log(x);
  let res = await fetch(
    `https://intense-mesa-01660.herokuapp.com/api/${x}?categeory=${id}`
  );
  let data = await res.json();
  appendSeries(data);
};
