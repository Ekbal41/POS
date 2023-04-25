export default function DineItem({ setDine, dine }) {
  const dineItems = [
    {
      name: "Burger",
      price: 120,
      quantity: 1,
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Papapa",
      price: 220,
      quantity: 1,
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Luma Bum Bum",
      price: 300,
      quantity: 1,
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Kula Kula",
      price: 120,
      quantity: 1,
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Mampa Na",
      price: 220,
      quantity: 1,
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Luma ",
      price: 300,
      quantity: 1,
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Mampa Na Xl",
      price: 420,
      quantity: 1,
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Luma Xl",
      price: 280,
      quantity: 1,
      image: "https://picsum.photos/200/300",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        {dineItems.map((item, index) => (
          <div
            onClick={
              () => setDine({ ...dine, dineItems: [...dine.dineItems, item] }) // handle change
            }
            key={index}
            className="cursor-pointer border border-teal-500 p-2 transition-all hover:bg-gray-50 "
          >
            <img
              src={item.image}
              className="h-14 w-14 rounded-full border border-teal-500"
              alt=""
            />
            <p className="mt-5  text-teal-500">{item.name}</p>
            <p className="">
              {item.price}
              <span className="text-sm">tk</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
