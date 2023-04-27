export default function Sidebar({ filterByCategory, currentCategory }) {
  return (
    <>
      <div
        className=" bg-gray-50  shadow"
        style={{
          height: "91vh",
        }}
      >
        <ul className="flex flex-col gap-2">
          <li
            onClick={() => filterByCategory("")}
            className={` ${
              currentCategory === "" && "bg-teal-500 font-bold text-white"
            } p-2 capitalize transition-all hover:bg-teal-500  hover:font-bold hover:text-white hover:shadow`}
          >
            <div className="">
              <span className="text-lg">
                <i className="bi bi-hash"></i>
              </span>
              All
            </div>
          </li>
          <li
            onClick={() => filterByCategory("fastfood")}
            className={` ${
              currentCategory === "fastfood" &&
              "bg-teal-500 font-bold text-white"
            } p-2 capitalize transition-all hover:bg-teal-500  hover:font-bold hover:text-white hover:shadow`}
          >
            <div className="">
              <span className="text-lg">
                <i className="bi bi-hash"></i>
              </span>
              Fast Food
            </div>
          </li>
          <li
            onClick={() => filterByCategory("nonfastfood")}
            className={` ${
              currentCategory === "nonfastfood" &&
              "bg-teal-500 font-bold text-white"
            } p-2 capitalize transition-all hover:bg-teal-500  hover:font-bold hover:text-white hover:shadow`}
          >
            <div className="">
              <span className="text-lg ">
                <i className="bi bi-hash"></i>
              </span>
              Non Fast Food
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
