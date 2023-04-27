export default function DineCard() {
  return (
    <>
      <div className="flex justify-between rounded-md border bg-white p-4">
        <div className="pr-2">
          <div>
            <p className="text-xs text-gray-600">2 minutes age</p>
            <p className="font-mono font-bold  text-gray-600">#12rt-2345</p>
          </div>
          <div className="mt-5 flex gap-5">
            <div>
              {" "}
              <p className="text-xs text-gray-600">Items</p>
              <p className=" font-mono  text-gray-600">5</p>
            </div>
            <div>
              {" "}
              <p className="text-xs text-gray-600">Total</p>
              <p className=" font-mono  text-gray-600"> Tk 2345</p>
            </div>
          </div>
        </div>
        <div className=" pl-2">
          <div className="py-2 text-center">
            <div className="">
              <p className=" font-mono font-bold text-gray-600">
                Current Order
              </p>
            </div>
            <div className="mt-10">
              <p className="  rounded-md bg-teal-100  font-mono text-teal-500">
                Accepted
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
