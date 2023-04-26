export default function Sidebar() {
  return (
    <>
      <div
        className=" bg-gray-50  shadow"
        style={{
          height: "91vh",
        }}
      >
        <ul className="flex flex-col gap-2">
          <li className="border-b-2 border-teal-500 p-2 font-mono font-bold">
            All Items
          </li>
          <li className=" p-2 capitalize transition-all hover:bg-teal-500  hover:font-bold hover:text-white hover:shadow">
            <a href="#" className="">
              <span className="text-lg">
                <i className="bi bi-hash"></i>
              </span>
              Pizza
            </a>
          </li>
          <li className=" p-2 capitalize transition-all hover:bg-teal-500  hover:font-bold hover:text-white hover:shadow">
            <a href="#" className="">
              <span className="text-lg ">
                <i className="bi bi-hash"></i>
              </span>
              Ppala pum pum
            </a>
          </li>
          <li className=" p-2 capitalize transition-all hover:bg-teal-500  hover:font-bold hover:text-white hover:shadow">
            <a href="#" className="">
              <span className="text-lg ">
                <i className="bi bi-hash"></i>
              </span>
              Ilapanam
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
