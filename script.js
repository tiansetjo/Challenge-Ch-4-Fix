//fungsi random komputer
function getPilihanComputer() {
  let computer = Math.random();
  if (computer < 0.34) return "gunting";
  if (computer >= 0.34 && computer < 0.67) return "batu";
  return "kertas";
}

// rules game
function getHasil(computer, player) {
  if (player == computer) return "DRAW";
  if (player == "gunting") return computer == "batu" ? "PLAYER <br /> WIN" : "COMPUTER <br /> WIN";
  if (player == "batu") return computer == "gunting" ? "PLAYER <br /> WIN" : "COMPUTER <br /> WIN";
  if (player == "kertas") return computer == "batu" ? "PLAYER <br /> WIN" : "COMPUTER <br /> WIN";
}

// conten game
let pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    let pilihanComputer = getPilihanComputer();
    let pilihanPlayer = pil.className;
    let hasil = getHasil(pilihanComputer, pilihanPlayer);
    let imgComputer = document.querySelector(".img-komputer");
    let info = document.getElementById("info");
    info.classList.add("infostyle");
    info.innerHTML = hasil;
    let x = pilihanComputer;
    y = document.getElementById(`${x}`);
    y.classList.add("hover");
    let refresh = document.getElementById("refresh");
    refresh.addEventListener("click", function () {
      let x = pilihanComputer;
      y = document.getElementById(`${x}`);
      y.classList.remove("hover");
      let info2 = document.getElementById("info");
      info2.classList.remove("infostyle");
      let info3 = document.getElementById("info");
      info3.classList.add("new");
      info3.innerHTML = "VS";
    });
  });
});
