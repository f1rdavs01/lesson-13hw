import { phones, getProduct } from "./server.js";

const phonesEL = document.querySelector(".box");
const modal = document.querySelector(".modal");
const closemodal = document.querySelector(".close");
const modal__content = document.querySelector(".modal__content");

const render = async () => {
  const data = await phones("phones");

  phonesEL.innerHTML = data
    ?.map(
      (item) => `
  <div class=" border bottom-1 shadow-xl">
  <div class="card-img  flex mr-auto ml-auto w-[250px] h-[250px]">
  <img src="${item.img}">
  </div>
   <div class="card-title p-5 flex flex-col items-center">
    <h1 class="font-bold text-2xl">${item.brand}</h1>
    <p>${item.title}</p>
    <p class="text-orange-500 text-xl">${item.price} UZS</p>
   <div class="pt-5">
   <button data-name="phones" data-id="${item.id}" class="btn-buy px-5 py-2 cursor-pointer text-white bg-orange-500">More...</button>
   </div> 
   </div>
  </div>
  `
    )
    .join("");
};
render();

const Local = (data) => {
  const old = JSON.parse(localStorage.getItem("numbers")) || [];
  localStorage.setItem("numbers", JSON.stringify([data, ...old]));
};

const openmodal = (data) => {
  modal.style.display = "block";
  modal__content.innerHTML = `
  <div>
   <div>
<img src="${data.img}"
</div>
 <div>
<p class="text-red-500">${data.brand}</p>
<h1>${data.title}</h1>
<p>${data.rame}</p>
<p>${data.color}</p>
<p>${data.price}</p>
</div>
<button class="btn py-2 px-5 bg-orange-500 text-white">Add</button>
</div>
`;
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", () => {
    Local(data);
  });
};

phonesEL.addEventListener("click", async (e) => {
  if (e.target.dataset.id) {
    const data = await getProduct(e.target.dataset.name, e.target.dataset.id);
    openmodal(data);
  }
});

closemodal.addEventListener("click", () => {
  modal.style.display = "none";
});
