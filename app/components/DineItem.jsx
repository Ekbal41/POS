export default function DineItem({ setDine, dine, allItems }) {
  const handleAddDine = (item) => {
    if (dine.dineItems.find((dineItem) => dineItem.id === item.id)) {
      return;
    }
    setDine({ ...dine, dineItems: [...dine.dineItems, item] });
  };
  return (
    <>
      <div
        className="grid grid-cols-3 gap-2"
        style={{
          maxHeight: "78vh",
          overflowY: "scroll",
        }}
      >
        {allItems?.map((item, index) => (
          <div
            onClick={() => handleAddDine(item)}
            key={index}
            className="cursor-pointer border border-teal-500 p-2 transition-all hover:bg-gray-50 "
            style={{
              height: "20vh",
            }}
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
