import useAnimate from "../useAnimate";

export default function Mouse() {
  const handleMouseClick = () => {
    window.scrollTo({ top: 790, behavior: "smooth" });
  };

  const { inViewPort: inView, ref: refInView } = useAnimate();
  return (
    <div
      onClick={() => handleMouseClick()}
      ref={refInView}
      className={` click absolute animate__mouse cursor-pointer  flex justify-center items-center border-2 border-black w-6 rounded-t-full rounded-b-full h-10 bottom-14 left-1/2 -translate-x-1/2`}
    >
      <div
        className={` ${
          inView && "animate__mouse"
        }  bg-black scroll-up h-2 rounded-full w-1`}
      ></div>
    </div>
  );
}
