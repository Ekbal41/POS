import { useLoaderData } from "react-router";
import DineCard from "../../components/DineCard";
import { getAllDine } from "../../models/dine.server";
import { getUser, getUserId } from "../../session.server";

export async function loader({ request }) {
  const userId = getUserId(request);
  const user = await getUser(request);
  if (!user) {
    return redirect("/login");
  }
  const alldines = await getAllDine({ userId });
  return { alldines };
}

export default function Dines() {
  const { alldines } = useLoaderData();
  return (
    <>
      <div className=" w-full  ">
        <div className="h-screen border bg-slate-100">
          <div className="flex justify-between  border bg-slate-50 p-5">
            <div className="flex gap-5">
              <div>
                <p className=" text-lg">
                  Active
                  <span className="mx-2 rounded-full bg-teal-500 px-2 py-1 text-xs text-white">
                    {alldines.filter((dine) => dine.status === true).length}
                  </span>
                </p>
              </div>
              <div>
                <p className=" text-lg">
                  Pending
                  <span className="mx-2 rounded-full bg-teal-500 px-2 py-1 text-xs text-white">
                    {alldines.filter((dine) => dine.status === false).length}{" "}
                  </span>
                </p>
              </div>
            </div>
            <div>
              <p className=" text-lg">
                Papaya Restarount
                <span className="mx-2 rounded-full bg-teal-500 px-2 py-1 text-xs text-white">
                  {alldines.length}
                </span>
              </p>
            </div>
          </div>{" "}
          <div className="p-5">
            <div className="mb-10">
              <p>Active Orders</p>
              <div className="mt-4 grid grid-cols-4 gap-4">
                {alldines && alldines.map((dine) => <DineCard dine={dine} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
