import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50">
      <div className="flex items-end justify-between max-w-7xl mx-auto">
        <div className="logo p-6 pt-16 ml-6">
          <svg
            width="38"
            height="39"
            viewBox="0 0 38 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.3361 6.85374V0.885742H16.6641V6.85374H0.328125V11.5417H16.6641V17.5097H21.3361V11.5417H37.6721V6.85374H21.3361Z"
              fill="#F9F9FC"
            />
            <path
              d="M33.0001 27.7817H5.00013V21.8137H0.328125V29.8137C0.328113 30.5748 0.629344 31.3049 1.16599 31.8446C1.70264 32.3842 2.43108 32.6895 3.19212 32.6937H16.6641V38.6617H21.3361V32.7097H34.8081C35.5692 32.7055 36.2976 32.4002 36.8343 31.8606C37.3709 31.3209 37.6721 30.5908 37.6721 29.8297V21.8297H33.0001V27.7817Z"
              fill="#F9F9FC"
            />
          </svg>
        </div>
        <nav className="p-6 text-white">
          <ul className="flex space-x-6">
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
