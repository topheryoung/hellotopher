import Image from "next/image";

interface Props {
  index: {
    current: number;
    total: number;
  };
  name: string;
  header: string;
  roles: string;
  dates: string;
  desc: string;
  website?: string;
  children: React.ReactNode;
}

const Showcase = ({
  index,
  name,
  header,
  roles,
  dates,
  desc,
  website,
  children,
}: Props) => {
  return (
    <article className="relative flex flex-col space-y-12 my-24">
      <div>
        <small className="text-orange-400">
          0{index.current}/0{index.total}
        </small>
        <h1 className="text-4xl">
          <strong>{name}</strong>
          <span className="font-light"> — {header}</span>
        </h1>
      </div>
      {children}
      <div className="grid gap-4 grid-cols-2 grid-rows-1 font-light">
        <ul>
          <li>
            <span className="text-orange-400">Roles</span>: {roles}
          </li>
          <li>
            <span className="text-orange-400">Dates</span>: {dates}
          </li>
          {website ? (
            <li>
              <a href={website} target="_blank" className="text-orange-400">
                Visit Website
              </a>
            </li>
          ) : null}
        </ul>
        <p>{desc}</p>
      </div>
    </article>
  );
};

export default Showcase;
