const cards = document.getElementById("cards");

async function showMovie() {
  let data = await getData();
  console.log(data);

  data.forEach((item) => {
    cards.innerHTML += `<div class="card h-[400px] rounded-2xl group flex items-end relative overflow-hidden cursor-pointer">
                <img class="hover:scale-105 duration-300 object-cover group-hover:scale-[1.1] w-full h-full rounded-2xl fill-transparent"
                    src="https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F${item.image}&w=640&q=75" alt="movie" />
                <div class="flex flex-col gap-5 absolute left-[10%] bottom-[10%] z-100 text-white">
                    <h2 class="text-2xl font-bold">Cahim</h2>
                    <span class="text-[.8rem]">15.05.2025</span>
                    <div class="flex justify-between items-center">
                        <span>18+</span>
                        <div class="w-[25px] h-[25px]"><img src="" alt=""></div>
                    </div>
                </div>
                <div class="absolute top-0 left-0 w-full h-full bg-[rgba(168,168,168,0.2)]"></div>
            </div>`;
  });
}
showMovie();
