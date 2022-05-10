//Alapérték felvétele
let count = 0;

//Gombok és egyéb elemek eltárolása változóban
//const value = document.getElementById("value");
//const decrease = document.getElementById("decrease");
//const reset = document.getElementById("reset");
//const increase = document.getElementById("increase");

//Egyszerű, lusta módszer
/*increase.addEventListener("click", () => {
  //Növelem az alapértéket 1-el
  count++;
  //Megnézem hogy az alapértékem nagyobb e mint 0
  if (count > 0) {
    //Ha nagyobb akkor hozzáadok egy zöld betűszínt
    value.style.color = "green";
  }
  //Majd az alapértékem aktuális értékét beállítom a value id-val ellátott spannek
  value.textContent = count;
});
decrease.addEventListener("click", () => {
  //Csökkentem az alapértéket 1-el
  count--;
  //Megnézem hogy az alapértékem kisebb e mint 0
  if (count < 0) {
    //Ha nagyobb akkor hozzáadok egy piros betűszínt
    value.style.color = "red";
  }
  //Majd az alapértékem aktuális értékét beállítom a value id-val ellátott spannek
  value.textContent = count;
});

reset.addEventListener("click", () => {
  //Az alapértéket visszaállítjuk 0-ra
  count = 0;

  //Visszaállítom az alap betűszínt
  value.style.color = "black";

  value.textContent = count;
});*/

//Nem egyszerű megoldás

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

//Ciklussal végiglépkedek az eltártol gombokon, amelyeken rajta van a .btn class

btns.forEach((btn) => {
  //a btn jelenleg a 3 gomb egyike, az első lefutásnál a decrease, a másodiknál a reset a harmadik lefutásnál pedig az increase gomb

  //Az összes gomb közül, amelyeket bejárok a ciklussal, azt kattintottam meg amelyik az aktuális ciklusfutáskor jön  a sorba
  btn.addEventListener("click", (e) => {
    //Az éppen aktuálisan megkattintott gombon milyen class/classok vannak

    const style = e.currentTarget.classList;
    console.log(style);

    //Ha az aktuálisan megkattintott gombom classai közül tartalmazza a decrease classt
    if (style.contains("decrease")) {
      //Akkor csökkentjuk az alapértéket
      count--;
    } else if (style.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    //Színek hozzáadása a spanhez
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }

    value.textContent = count;
  });
});
