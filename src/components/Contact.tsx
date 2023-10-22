import { AiFillMail } from "react-icons/ai";
import { BsPhone, BsPhoneFill } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";

export default function Contact() {
  return (
    <div className="container space-y-4 md:space-y-0 gap-x-8 flex flex-col md:flex-row py-[100px]  p-6">
      <div className=" md:w-1/2  space-y-4">
        <h1 className="font-semibold">Contact</h1>
        <p className="font-bold text-3xl">Ready to build something great</p>
        <p>
          If you have any opportunities, ideas or questions you want to throw my
          way, don't hesitate to message me or call me!
        </p>
        <div className="flex items-center gap-x-2">
          <AiFillMail />
          <a href="mailto:anthonycakins@gmail.com">anthonycakins@gmail.com</a>
        </div>
        {/* <div className="flex items-center gap-x-2">
          <BiPhone />
          <a href="tel:0414792398">0414792398</a>
        </div> */}
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="md:w-1/2 space-y-4">
        <div>
          <h1 className="font-bold">Name</h1>
          <input
            type="text"
            className="w-full rounded-md bg-gray-200 focus:outline-none px-4 py-2"
          />
        </div>
        <div>
          <h1 className="font-bold">Email</h1>
          <input
            type="text"
            className="w-full rounded-md bg-gray-200 focus:outline-none  px-4 py-2"
          />
        </div>
        <div>
          <h1 className="font-bold">Message</h1>
          <input
            type="text"
            className="w-full rounded-md bg-gray-200 focus:outline-none px-4 pt-2 pb-20 "
          />
        </div>
        <div>
          <button className="bg-black w-full py-3 shadow-2xl text-white hover:bg-transparent border hover:text-black ease-in-out border-black transition-colors duration-500 hover:duration-500">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
