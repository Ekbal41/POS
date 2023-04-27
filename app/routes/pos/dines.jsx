import DineCard from "../../components/DineCard";

export default function Dines() {
  return (
    <>
      <div className="w-full   ">
        <div className="border bg-slate-100">
          <div className="flex justify-between  border bg-slate-50 p-5">
            <div className="flex gap-5">
              <div>
                <p className=" text-lg">
                  Active
                  <span className="mx-2 rounded-full bg-teal-500 px-2 py-1 text-xs text-white">
                    30
                  </span>
                </p>
              </div>
              <div>
                <p className=" text-lg">
                  Pending
                  <span className="mx-2 rounded-full bg-teal-500 px-2 py-1 text-xs text-white">
                    20
                  </span>
                </p>
              </div>
              <div>
                <p className=" text-lg">
                  Served
                  <span className="mx-2 rounded-full bg-teal-500 px-2 py-1 text-xs text-white">
                    22
                  </span>
                </p>
              </div>
            </div>
            <div>
              <p className=" text-lg">
                Papaya Restarount
                <span className="mx-2 rounded-full bg-teal-500 px-2 py-1 text-xs text-white">
                  50
                </span>
              </p>
            </div>
          </div>{" "}
          <div className="p-5">
            <div className="mb-10">
              <p>Active Orders</p>
              <div className="mt-4 grid grid-cols-4 gap-4">
                <DineCard />
                <DineCard />
                <DineCard />
                <DineCard />
                <DineCard />
                <DineCard />
                <DineCard />
                <DineCard />
                <DineCard />
                <DineCard />
                <DineCard />
                <DineCard />
                <DineCard />
                <DineCard />
              </div>
            </div>
            <div>
              <p>Pending Orders</p>
              <div className="mt-4 grid grid-cols-4 gap-4">
                <DineCard />
                <DineCard />
                <DineCard />
                <DineCard />
                <DineCard />
                <DineCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
