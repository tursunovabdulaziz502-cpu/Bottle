const totalEl = document.getElementById("total");
const buttons = document.querySelectorAll("#savat");

let total = 0;

const bg = document.createElement("div");
const box = document.createElement("div");

box.innerHTML = `
  <i class="fa-solid fa-circle-check"></i>
  <h3>Savatga qo'shildi</h3>
  <button>OK</button>
`;

bg.appendChild(box);
document.body.appendChild(bg);

const icon = box.querySelector("i");
const title = box.querySelector("h3");
const okBtn = box.querySelector("button");

Object.assign(bg.style, {
  position: "fixed",
  inset: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(11, 31, 51, 0.5)",
  backdropFilter: "blur(4px)",
  opacity: "0",
  pointerEvents: "none",
  transition: "0.3s",
  zIndex: "200",
});

Object.assign(box.style, {
  width: "320px",
  padding: "32px 24px",
  background: "#fff",
  borderRadius: "16px",
  textAlign: "center",
  transform: "scale(0.8)",
  transition: "0.3s",
});

Object.assign(icon.style, {
  fontSize: "48px",
  color: "#2BB3C0",
  marginBottom: "12px",
});

Object.assign(title.style, {
  margin: "0 0 20px",
  fontFamily: "Arial, sans-serif",
  color: "#0B1F33",
});

Object.assign(okBtn.style, {
  padding: "12px 40px",
  border: "0",
  borderRadius: "10px",
  background: "#2BB3C0",
  color: "#0B1F33",
  fontWeight: "600",
  cursor: "pointer",
  transition: "0.2s",
});

okBtn.addEventListener("mouseenter", function () {
  okBtn.style.background = "#229AA6";
});
okBtn.addEventListener("mouseleave", function () {
  okBtn.style.background = "#2BB3C0";
});

function showAlert() {
  bg.style.opacity = "1";
  bg.style.pointerEvents = "auto";
  box.style.transform = "scale(1)";
}

function hideAlert() {
  bg.style.opacity = "0";
  bg.style.pointerEvents = "none";
  box.style.transform = "scale(0.8)";
}

okBtn.addEventListener("click", hideAlert);

bg.addEventListener("click", function (e) {
  if (e.target === bg) hideAlert();   
});

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    total++;
    totalEl.textContent = total;
    showAlert();
  });
});