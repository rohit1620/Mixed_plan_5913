window.addEventListener("load", () => {
  getData();
});

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

    let name = document.createElement("h4");
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

    if (categeory == "International") {
      div3.style.backgroundColor = "#43b88e";
    } else if (categeory == "Domestic") {
      div3.style.backgroundColor = "#a4c0c6";
    } else if (categeory == "Womens") {
      div3.style.backgroundColor = "#ff8474";
    }
  });
};

let x;
let matchPart = async (id) => {
  let res = await fetch(`https://intense-mesa-01660.herokuapp.com/api/${id}`);
  let data = await res.json();
  appendSeries(data);
  x = id;

  //   let y = document.getElementById(`${id}`);

  //   y.style.backgroundColor = "red";
  //   y = requestFocusFromTouch();

  let y = (document.querySelectorAll(".btn").style.color = "red");
  y = focus();
};

let getData = async () => {
  let res = await fetch(`https://intense-mesa-01660.herokuapp.com/api/upcoming
    `);
  let data = await res.json();
  //   console.log(data);
  appendSeries(data);
};

let allSeries = () => {
  getData();
};

let newSeries = async (id) => {
  let res = await fetch(
    `https://intense-mesa-01660.herokuapp.com/api/${x}?categeory=${id}`
  );
  let data = await res.json();
  appendSeries(data);
};

// var header = document.getElementById("match-heading");
// var btns = header.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace("active", "");
//     this.className += "active";
//   });
// }
// window.onload = () => {
//   let x = document.getElementById("upcoming");
//   x.focus();
//   x.style.border = " 1px solid red";
//   x.style.borderTop = "none";
//   x.style.borderLeft = "none";
//   x.style.borderRight = "none";
// };

// let btns = document.getElementById(this.id);
// console.log(btns);
