type SocialLink = {
  href: string;
  label: string;
  children: React.ReactNode;
};

const IconButton = ({ href, label, children }: SocialLink) => (
  <a
    href={href}
    target="_blank"
    aria-label={label}
    className="my-4 flex space-x-4 items-center"
  >
    {children}
  </a>
);

const Social = () => {
  return (
    <>
      <IconButton href="https://github.com/topheryoung" label="Github">
        <svg
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
        >
          <path
            d="M9.358 2.145a8.209 8.209 0 00-3.716 0c-.706-.433-1.245-.632-1.637-.716a2.17 2.17 0 00-.51-.053 1.258 1.258 0 00-.232.028l-.01.002-.004.002h-.003l.137.481-.137-.48a.5.5 0 00-.32.276 3.12 3.12 0 00-.159 2.101A3.354 3.354 0 002 5.93c0 1.553.458 2.597 1.239 3.268.547.47 1.211.72 1.877.863a2.34 2.34 0 00-.116.958v.598c-.407.085-.689.058-.89-.008-.251-.083-.444-.25-.629-.49a4.798 4.798 0 01-.27-.402l-.057-.093a9.216 9.216 0 00-.224-.354c-.19-.281-.472-.633-.928-.753l-.484-.127-.254.968.484.127c.08.02.184.095.355.346a7.2 7.2 0 01.19.302l.068.11c.094.152.202.32.327.484.253.33.598.663 1.11.832.35.116.748.144 1.202.074V14.5a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-3.563c0-.315-.014-.604-.103-.873.663-.14 1.322-.39 1.866-.86.78-.676 1.237-1.73 1.237-3.292v-.001a3.354 3.354 0 00-.768-2.125 3.12 3.12 0 00-.159-2.1.5.5 0 00-.319-.277l-.137.48c.137-.48.136-.48.135-.48l-.002-.001-.004-.002-.009-.002a.671.671 0 00-.075-.015 1.261 1.261 0 00-.158-.013 2.172 2.172 0 00-.51.053c-.391.084-.93.283-1.636.716z"
            fill="currentColor"
          ></path>
        </svg>
        <span>Github</span>
      </IconButton>
      <IconButton href="https://dribbble.com/topheryoung" label="Dribbble">
        <svg
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
        >
          <path
            d="M4.044.842A7.508 7.508 0 00.092 6.32h.435c2.805-.065 5.004-.308 6.8-.858-.78-1.383-1.732-2.74-2.874-4.12l-.001-.001-.408-.499zM.002 7.32L0 7.5c0 2.017.796 3.848 2.091 5.196l.161-.324a.498.498 0 01.03-.052C3.94 9.798 5.816 8.298 7.914 7.625c.142-.046.286-.088.43-.126a21.803 21.803 0 00-.537-1.14c-1.965.633-4.327.893-7.263.96H.003z"
            fill="currentColor"
          ></path>
          <path
            d="M2.86 13.393A7.468 7.468 0 007.5 15c.893 0 1.75-.156 2.543-.442v-.72c-.244-1.935-.673-3.71-1.318-5.404-.17.042-.339.09-.506.143-1.822.585-3.525 1.903-5.085 4.268l-.273.548zm8.183.719a7.512 7.512 0 003.802-5.086l-.565-.255c-1.626-.478-3.141-.674-4.553-.515.638 1.72 1.067 3.526 1.312 5.488.003.02.004.04.004.062v.306zm3.941-6.12a7.471 7.471 0 00-1.805-5.39l-.297.329c-1.17 1.423-2.506 2.41-4.13 3.082.212.424.41.851.593 1.284 1.672-.24 3.43-.014 5.251.525a.497.497 0 01.065.024l.323.146zm-2.508-6.104A7.472 7.472 0 007.5 0c-.878 0-1.72.15-2.503.428l.228.278c1.22 1.473 2.232 2.929 3.058 4.418 1.543-.623 2.766-1.534 3.834-2.837a.48.48 0 01.015-.018l.344-.38z"
            fill="currentColor"
          ></path>
        </svg>
        <span>Dribbble</span>
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/ctopheryoung/"
        label="LinkedIn"
      >
        <svg
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 1.5A1.5 1.5 0 011.5 0h12A1.5 1.5 0 0115 1.5v12a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 13.5v-12zM5 5H4V4h1v1zm-1 6V6h1v5H4zm4.5-4A1.5 1.5 0 007 8.5V11H6V6h1v.5a2.5 2.5 0 014 2V11h-1V8.5A1.5 1.5 0 008.5 7z"
            fill="currentColor"
          ></path>
        </svg>
        <span>LinkedIn</span>
      </IconButton>
      <IconButton href="mailto:topher@hellotopher.com" label="Email Topher">
        <svg
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
        >
          <path
            d="M.5 2.5A1.5 1.5 0 012 1h12a1.5 1.5 0 011.5 1.5v1.208L8 7.926.5 3.708V2.5z"
            fill="currentColor"
          ></path>
          <path
            d="M.5 4.855V12.5A1.5 1.5 0 002 14h12a1.5 1.5 0 001.5-1.5V4.855L8 9.074.5 4.854z"
            fill="currentColor"
          ></path>
        </svg>
        <span>Contact Me</span>
      </IconButton>
    </>
  );
};

export default Social;
