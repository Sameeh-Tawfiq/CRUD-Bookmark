var siteName = document.getElementById("sn");
var siteUrl = document.getElementById("su");
var store = [];

function addData() {
  var newSite = {
    name: siteName.value,
    url: siteUrl.value
  }
  store.push(newSite);
  localStorage.setItem("store", JSON.stringify(store));
  clearData();
  displayData();
}
// adding function


function clearData() {
  siteName.value = ""
  siteUrl.value = ""
}
// clearing data function


function displayData() {

  var dataStorage = ""

  for (var i = 0; i < store.length; i++) {
    dataStorage += `<tr>
    <td>${store[i].name}</td>
    <td>${store[i].url}</td>
    <td>
      <a href="${store[i].url}" target="_blank">
      <button id="visitBtn" class="btn btn-primary">Visit</button>
      </a>
      <button id="deleteBtn" class="btn btn-danger" onclick="deleteRow(${i})">Delete</button>
    </td>
    </tr>`
  }

  document.getElementById("tableBody").innerHTML = dataStorage
}
// displaying data function


function deleteRow(index) {
  store.splice(index, 1);
  localStorage.setItem("store", JSON.stringify(store));
  displayData();
}
// delete function


if (localStorage.getItem("store") != null) {
  store = JSON.parse(localStorage.getItem("store"));
  displayData();
}