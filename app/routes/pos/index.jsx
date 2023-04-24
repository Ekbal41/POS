import { Link } from "@remix-run/react";
import Sidebar from "../../components/Sidebar";

export default function PosIndexPage() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid grid-cols-4 ">
          <Sidebar />
          <div className="col-span-3 p-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            repellat facere atque deleniti obcaecati nisi optio tempore officia
            voluptatum, ad explicabo quod ullam non culpa facilis eum nemo vero
            rem ea. Dignissimos, exercitationem error omnis, perferendis natus
            porro aut, ea quaerat ad labore autem vero minima impedit. Nesciunt
          </div>
        </div>
        <div className=" p-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
          repellat facere atque deleniti obcaecati nisi optio tempore officia
          voluptatum, ad explicabo quod ullam non culpa facilis eum nemo vero
          rem ea. Dignissimos, exercitationem error omnis, perferendis natus
          porro aut, ea quaerat ad labore autem vero minima impedit. Nesciunt
          harum dicta itaque, quam cumque officia? Totam itaque error fugiat
          deleniti quasi, nulla expedita ab qui eaque culpa vitae, natus,
          veritatis beatae atque corporis vel assumenda. Corrupti mollitia sed
          odit neque dolore earum ab libero repudiandae non magni. Laborum quam
          non nihil provident repudiandae possimus reprehenderit architecto
          velit, cupiditate maxime at? Omnis.
        </div>
      </div>
    </>
  );
}
