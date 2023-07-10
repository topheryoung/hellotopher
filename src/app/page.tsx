import Image from "next/image";

export default function Home() {
  return (
    <div className="container flex items-center justify-center pt-24 px-12">
      <article className="relative flex flex-col space-y-12">
        <div>
          <small>01/05</small>
          <h1 className="text-4xl">
            <strong>Embed/FTX</strong> - Building a industry defining clearing &
            custody platform that transforms the ancient ways by building for
            developers by developers
          </h1>
        </div>
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            fill
            src="/test.png"
            alt="Next.js Logo"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </article>
    </div>
  );
}
