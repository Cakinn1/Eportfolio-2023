

export default function AboutMain() {
  return (
    <>
      <div className="w-full md:w-1/2 mb-6 md:mb-0 relative h-full">
        <img
          src="./about-me-image.webp"
          className="object-cover min-h-[400px] hidden md:flex  w-full "
          alt=""
        />
        <img
          src="1.png"
          className="md:absolute bg-right md:w-[120px] mx-auto w-[200px]  rounded-full md:-bottom-8 md:-right-5 border-4 border-white "
          alt=""
        />
      </div>
      <div className="w-full md:w-1/2 space-y-3 text-[#888] text-sm">
        <header className="uppercase font-bold text-black">About me</header>
        <h1 className="font-bold text-[20px] text-black">
          A dedicted Front-end Developer based in Gold Coast, Australia. 📍
        </h1>
        <p >
          As a Junior Front-End Developer, I possess an impressive arsenal of
          skills in HTML, CSS, JavaScript, Typescript, React, Nextjs, Redux and Tailwind CSS.
        </p>
        <p>
          I excel in designing and maintaining responsive websites that offer a
          smooth user experience.
        </p>
        <p >
          My expertise lies in crafting dynamic, engaging interfaces through
          writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
      </div>
    </>
  );
}
