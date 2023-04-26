import { Link } from "@remix-run/react";
import Sidebar from "../../components/Sidebar";
import DineItem from "../../components/DineItem";
import { useCallback, useEffect, useState } from "react";

export default function PosIndexPage() {
  const [discount, setDiscount] = useState({
    5: 0,
    10: 0,
    20: 0,
  });
  const [total, setTotal] = useState(0);
  const [modelOpen, setModelOpen] = useState(false);
  const [netDiscount, setNetDiscount] = useState(0);
  const [netPayable, setNetPayable] = useState(0);
  const [dine, setDine] = useState({
    name: "",
    phone: "",
    email: "",
    dineItems: [],
  });
  const handleDiscountClick = (key) => {
    setDiscount({
      ...discount,
      [key]: (totalPayAble() * key) / 100,
    });
  };

  const calDiscount = () => {
    let dis = Object.values(discount).reduce((acc, item) => acc + item, 0);
    return dis;
  };

  const removeSingleDiscount = (key) => {
    setDiscount({
      ...discount,
      [key]: 0,
    });
  };

  const removeAllDiscount = () => {
    const blankDiscountObj = {};
    Object.keys(discount).map((key, index) => {
      blankDiscountObj[key] = 0;
    });
    setDiscount(blankDiscountObj);
  };
  const totalPayAble = () => {
    let netTotal = 0;
    for (let i = 0; i < dine.dineItems.length; i++) {
      const item = dine.dineItems[i];
      netTotal += item.price * item.quantity;
    }
    return netTotal;
  };

  useEffect(() => {
    setTotal(totalPayAble() - calDiscount());
    setNetDiscount(calDiscount());
  }, [dine.dineItems.length, discount]);
  return (
    <>
      <div
        className="grid grid-cols-2 gap-4"
        style={{
          height: "91vh",
        }}
      >
        <div className="grid grid-cols-4 ">
          <Sidebar />
          <div className="col-span-3 p-4">
            <DineItem setDine={setDine} dine={dine} />
          </div>
        </div>
        <div className=" border-2 border-l-gray-100 p-4">
          <div className="grid grid-cols-3 gap-4">
            <input
              onChange={(e) => {
                setDine({
                  ...dine,
                  name: e.target.value,
                });
              }} // handle change
              value={dine.name}
              placeholder="Customer Name"
              required
              autoFocus={true}
              name="name"
              type="text"
              autoComplete="name"
              className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
            />
            <input
              onChange={(e) => {
                setDine({
                  ...dine,
                  phone: e.target.value,
                }); // handle change
              }}
              value={dine.phone}
              placeholder="Customer Phone"
              required
              name="phone"
              type="text"
              autoComplete="phone"
              className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
            />
            <input
              onChange={(e) => {
                setDine({
                  ...dine,
                  email: e.target.value,
                });
              }} // handle change
              value={dine.email}
              placeholder="Customer Email"
              required
              name="email"
              type="email"
              autoComplete="email"
              className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
            />
          </div>
          <div
            className=""
            style={{
              maxHeight: "calc(100vh - 250px)",
              minHeight: "calc(100vh - 250px)",
              overflowY: "auto",
            }}
          >
            {dine?.dineItems.length > 0 ? (
              dine.dineItems
                .slice(0)
                .reverse()
                .map((item, index) => (
                  <div
                    key={index}
                    className="mt-2 flex items-center justify-between   gap-4 bg-slate-100 p-4  "
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        className="h-14 w-14 rounded-full border border-teal-500"
                        alt=""
                      />
                      <div>
                        <div>
                          <p className="text-teal-500">{item.name}</p>
                        </div>
                        <div>
                          <span className="rounded-md border border-teal-500 bg-white px-2 text-teal-500">
                            {item.price}tk
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button className="rounded-full bg-white px-2 py-1 text-teal-500 hover:shadow-lg">
                        <i className="bi bi-dash-lg"></i>{" "}
                      </button>
                      <span className="px-2 font-bold">{item.quantity}</span>
                      <button className="rounded-full bg-white px-2 py-1 text-teal-500 hover:shadow-lg">
                        <i className="bi bi-plus-lg"></i>{" "}
                      </button>
                    </div>
                  </div>
                ))
            ) : (
              <p className="mt-10 text-center  text-gray-700">
                No Item Selected
              </p>
            )}
          </div>
          <div className="mt-2">
            {Object.keys(discount).map((key, index) => (
              <button
                disabled={discount[key] > 0}
                key={index}
                onClick={() => {
                  handleDiscountClick(key);
                }}
                className={`${
                  discount[key] > 0
                    ? "bg-green-500 text-white"
                    : "text-green-500"
                } mx-2 rounded-full  px-3   py-1 hover:shadow`}
              >
                + {key}% Discount
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 ">
            <button
              onClick={() => {
                setTotal(0),
                  removeAllDiscount(),
                  setNetDiscount(0),
                  setDine({
                    name: "",
                    phone: "",
                    email: "",
                    dineItems: [],
                  });
              }}
              className=" float-right mt-4 rounded-2xl   px-2 py-1 text-gray-700 hover:bg-gray-100"
            >
              <span style={{ fontSize: 20 }}>
                <i className="bi bi-arrow-clockwise "></i>
              </span>
            </button>
            <div className=" float-right mt-4  bg-white px-8 py-5 text-gray-700  ">
              <span className="mr-2">$</span>
              {total}
            </div>

            <button
              disabled={dine?.dineItems.length === 0}
              onClick={() => {
                setModelOpen(true);
              }}
              className=" float-right mt-4 cursor-pointer rounded-2xl border border-teal-500  px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600"
            >
              <i className="bi bi-cart-plus"></i> Create oreder
            </button>

            <button className=" float-right mt-4 rounded-2xl   px-2 py-1 text-gray-700 hover:bg-gray-100">
              <i className="bi bi-three-dots"></i>
            </button>
          </div>
        </div>
      </div>
      {modelOpen && (
        <div
          className="relative z-10"
          style={{
            maxHeight: "calc(100vh - 250px)",
          }}
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="">
                    <h1 className=" mb-5 font-bold text-teal-500">
                      Order Details
                    </h1>

                    <div className="">
                      <p className="font-mono">
                        <span className="font-bold">Customar : </span>
                        {dine?.name}{" "}
                      </p>
                      <p className="font-mono">
                        <span className=" font-bold">Order No : </span>
                        36hf874{" "}
                      </p>
                    </div>
                    <div className="flex gap-2 ">
                      <div className=" rounded-full border border-teal-500 px-2 text-gray-700">
                        Pre-Order
                      </div>
                      <div className=" rounded-full border border-teal-500 px-2 text-gray-700">
                        Order
                      </div>
                    </div>

                    <div className="mt-5 border-b-2 border-t-2 border-teal-500 pt-4 font-mono">
                      {dine?.dineItems.map((item, index) => (
                        <div key={index} className="mb-5 flex justify-between">
                          <div>
                            <p className="capitalize">
                              {item.name}{" "}
                              <span className="ml-1 rounded-full border border-teal-500  px-2">
                                {item.quantity}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="capitalize">
                              {item.price * item.quantity}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="mt-2 flex justify-between font-mono">
                        <div>
                          <p className="capitalize text-red-500">Discount</p>
                        </div>
                        <div>
                          <p className="capitalize text-red-500">
                            - {netDiscount}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-5  flex justify-between font-mono">
                        <div>
                          <p className="capitalize text-teal-500">Total Bill</p>
                        </div>
                        <div>
                          <p className="capitalize text-teal-500">{total}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    onClick={() => setModelOpen(false)}
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    className="mr-2 inline-flex w-full justify-center rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 sm:ml-3 sm:w-auto"
                  >
                    Save And Print
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 sm:ml-3 sm:w-auto"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
