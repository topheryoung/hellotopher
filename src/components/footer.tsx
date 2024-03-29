const Footer = () => {
  return (
    <footer className="flex flex-col lg:mt-24 space-y-4 mx-auto items-center">
      <span className="text-xs text-gray-500">
        Designed and Developed in PDX & BCN.
      </span>
      <svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
      >
        <path
          d="M4.036 1a4.036 4.036 0 00-2.854 6.89l5.964 5.964a.5.5 0 00.708 0l5.964-5.965a4.036 4.036 0 00-5.707-5.707l-.611.61-.61-.61A4.036 4.036 0 004.035 1z"
          fill="currentColor"
        ></path>
      </svg>
    </footer>
  );
};

export default Footer;
