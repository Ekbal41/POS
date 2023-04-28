import { useMatches } from "react-router";

export default function Navbar({ user }) {
  const matches = useMatches();

  const { pathname } = matches[matches.length - 1];

  return (
    <>
      <nav>
        <div className="flex flex-col items-center justify-between bg-slate-100 p-4 shadow md:flex-row">
          <a href="/pos" className="font-bold text-teal-500">
            <img src="/logo.svg" className="h-7 w-7" />
          </a>
          <ul className="flex items-center justify-center gap-8">
            <li>
              <a
                href="/pos"
                className={` ${
                  pathname === "/pos/" ? "bg-slate-200 text-slate-700" : ""
                } rounded-full px-3 py-2 transition-colors hover:bg-slate-200 hover:text-slate-700`}
              >
                <span className="mr-1">
                  <i className="bi bi-plus-circle"></i>
                </span>{" "}
                Create
              </a>
            </li>
            <li>
              <a
                href="/pos/dines"
                className={` ${
                  pathname === "/pos/dines" ? "bg-slate-200 text-slate-700" : ""
                } rounded-full px-3 py-2 transition-colors hover:bg-slate-200 hover:text-slate-700`}
              >
                <span className="mr-1">
                  <i className="bi bi-file-text"></i>{" "}
                </span>{" "}
                Dine In
              </a>
            </li>
            <li>
              <a
                href="/pos"
                className=" rounded-full px-3 py-2 transition-colors hover:bg-slate-200 hover:text-slate-700"
              >
                <span className="mr-1">
                  <i className="bi bi-tools"></i>
                </span>{" "}
                Tools
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" rounded-full px-3 py-2 transition-colors hover:bg-slate-200 hover:text-slate-700"
              >
                <span className="mr-1">
                  <i className="bi bi-person-circle"></i>{" "}
                </span>{" "}
                {user.name}
              </a>
            </li>
            <li>
              <form method="post" action="/logout">
                <button
                  type="submit"
                  className=" rounded-full px-3 py-2 transition-colors hover:bg-slate-200 hover:text-slate-700"
                >
                  <span className="mr-1">
                    <i className="bi bi-box-arrow-right"></i>{" "}
                  </span>{" "}
                  Logout
                </button>
              </form>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
