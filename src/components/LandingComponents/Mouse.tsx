export default function Mouse() {
  const handleMouseClick = () => {
    window.scrollTo({ top: 790, behavior: 'smooth' });
  };

  return (
    <div
    onClick={() => handleMouseClick()}
      className={` absolute animate__mouse cursor-pointer  flex justify-center items-center border-2 border-black w-6 rounded-t-full rounded-b-full h-10 bottom-14 left-1/2 -translate-x-1/2`}
    >
      <div className="bg-black scroll-up h-2 rounded-full w-1"></div>
    </div>
  );
}
