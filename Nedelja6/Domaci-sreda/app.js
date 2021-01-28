let data = [];
let id = 0;

function formSubmit(event) {
  event.preventDefault();

  var opis = document.getElementById("opis").value;

  form.reset();

  return add(opis);
}

const form = document.getElementById("forma");
form.addEventListener("submit", formSubmit);

const add = (opis) => {
  const myId = id++;

  const newObj = { id: myId, opis, done: false };
  data.push(newObj);

  var result = document.getElementById("result");

  var newEl = document.createElement("div");
  var newP = document.createElement("p");
  var delP = document.createElement("span");
  newEl.style.display = "flex";
  newEl.style.alignItems = "center";
  delP.style.marginLeft = "8px";
  delP.style.marginRight = "8px";

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = `check-${myId}`;
  checkbox.value = "value";
  checkbox.id = `check-${myId}`;

  delP.onclick = function () {
    return deleteById(myId);
  };
  checkbox.onclick = function () {
    return changeById(myId);
  };

  newP.innerHTML = opis;
  delP.innerHTML = "Obrisi";
  newEl.setAttribute("id", `item-${myId}`);

  result.append(newEl);
  newEl.append(newP, delP, checkbox);

  console.log("New data added:", data);
};

const deleteById = (id) => {
  let index = data.findIndex((item) => id === item.id);
  data.splice(index, 1);

  var el = document.getElementById(`item-${id}`);
  el.remove();

  console.log("Data after delete:", data);
};

const changeById = (id) => {
  var find = data.find((item) => id === item.id);
  let index = data.findIndex((item) => id === item.id);

  let newItem;
  let done = find.done;

  if (done === true) {
    newItem = {
      id: id,
      opis: find.opis,
      done: false,
    };

    var e = document.getElementById(`item-${id}`);
    e.firstElementChild.style.textDecoration = "initial";
  } else {
    newItem = {
      id: id,
      opis: find.opis,
      done: true,
    };

    var e = document.getElementById(`item-${id}`);
    e.firstElementChild.style.textDecoration = "line-through";
  }

  data.splice(index, 1, { id: id, ...newItem });

  console.log("Data after change:", data);
};
