import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute top-0 w-full z-50">
      <div className="flex items-end justify-between max-w-6xl mx-auto px-6">
        <h1 className="flex uppercase basis-1/3 tracking-wider p-6 text-xs">
          Chris <span className="opacity-75 mx-1">Topher</span> Young
        </h1>
        <div className="logo flex p-4 pt-16 ml-6">
          <svg
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8292 4.72122V0.885742H10.8266V4.72122H0.327881V7.73407H10.8266V11.5695H13.8292V7.73407H24.3279V4.72122H13.8292Z"
              fill="#F9F9FC"
            />
            <path
              d="M21.3253 18.1712H3.33045V14.3357H0.327881V19.4771C0.327873 19.9662 0.521466 20.4354 0.866356 20.7822C1.21125 21.1291 1.67939 21.3253 2.1685 21.328H10.8266V25.1635H13.8292V21.3383H22.4873C22.9764 21.3355 23.4445 21.1393 23.7894 20.7925C24.1343 20.4457 24.3279 19.9765 24.3279 19.4874V14.346H21.3253V18.1712Z"
              fill="#F9F9FC"
            />
          </svg>
        </div>
        <nav className="p-6 flex basis-1/3 uppercase tracking-wider text-xs justify-end">
          <ul className="flex space-x-4">
            <li>
              <Link href="/about" className="transition-all">
                About
              </Link>
            </li>
            <li>
              <Link href="/mixtapes" className="transition-all">
                Mixtapes
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
