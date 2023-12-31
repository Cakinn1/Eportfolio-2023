import { AiFillMail } from "react-icons/ai";
import { BsPhone, BsPhoneFill } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import useAnimate from "../hooks/useAnimate";
import { useState } from "react";
import emailjs from "emailjs-com";
import { FaSpinner } from "react-icons/fa";
export default function Contact() {
  const { inViewPort: headerInView, ref: headerRef } = useAnimate();
  const { inViewPort: titleInView, ref: titleRef } = useAnimate();
  const { inViewPort: aboutInView, ref: aboutRef } = useAnimate();
  const { inViewPort: linksInView, ref: linksRef } = useAnimate();
  const { inViewPort: links1InView, ref: links1Ref } = useAnimate();

  const headerAnimation = headerInView ? "animate__header1" : "";
  const titleAnimation = titleInView ? "animate__title1" : "";
  const aboutAnimation = aboutInView ? "animate__about1" : "";
  const linksAnimation = linksInView ? "animate__links2" : "";
  const links1Animation = links1InView ? "animate__links12" : "";

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    console.log("Name:", name);
    console.log("Email:", email);

    const form = event.currentTarget;

    try {
      await emailjs.sendForm(
        "service_sz89zkj",
        "template_6a5t7z5",
        form,
        "xSrf96z8wZJVPEI1y"
      );
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setTimeout(() => {
        setSuccess(true);
      }, 1000);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (e) {
      setLoading(false);
    }
  };
  console.log(success);

  return (
    <div
      className="container space-y-4 md:space-y-0 gap-x-8 flex flex-col md:flex-row py-[100px]  p-6"
      id="contact"
    >
      <div className=" md:w-1/2 space-y-4">
        <h1
          className={`font-semibold ${headerAnimation}`}
          ref={headerRef}
          style={{ opacity: headerInView ? "1" : "0" }}
        >
          Contact
        </h1>
        <p
          className={`font-bold text-3xl ${titleAnimation}`}
          ref={titleRef}
          style={{ opacity: titleInView ? 1 : 0 }}
        >
          Ready to build something great
        </p>
        <p
          className={`${aboutAnimation}`}
          ref={aboutRef}
          style={{ opacity: aboutInView ? 1 : 0 }}
        >
          If you have any opportunities, ideas or questions you want to throw my
          way, don't hesitate to message me or call me!
        </p>
        <div
          className={`${linksAnimation} flex items-center gap-x-2`}
          ref={linksRef}
          style={{ opacity: linksInView ? 1 : 0 }}
        >
          <AiFillMail />
          <a href="mailto:anthonycakins@gmail.com">anthonycakins@gmail.com</a>
        </div>
        <div
          className={`${linksAnimation} flex items-center gap-x-2`}
          ref={linksRef}
          style={{ opacity: linksInView ? 1 : 0 }}
        >
          <BiPhone />
          <a href="tel:0414792398">0414792398</a>
        </div>
      </div>
      <form
        onSubmit={sendEmail}
        ref={links1Ref}
        style={{ opacity: links1InView ? 1 : 0 }}
        className={`md:w-1/2 space-y-4 ${links1Animation}`}
      >
        <div>
          <h1 className="font-bold">Name</h1>
          <input
            name="name"
            type="text"
            required
            className="w-full rounded-md bg-gray-200 focus:outline-none px-4 py-2"
          />
        </div>
        <div>
          <h1 className="font-bold">Email</h1>
          <input
            name="email"
            required
            type="email"
            className="w-full rounded-md bg-gray-200 focus:outline-none  px-4 py-2"
          />
        </div>
        <div>
          <h1 className="font-bold">Message</h1>
          <input
            name="message"
            required
            type="text"
            className="w-full rounded-md bg-gray-200 focus:outline-none px-4 pt-2 pb-20 "
          />
        </div>
        <div>
          {loading ? (
            <button className="bg-black flex justify-center items-center w-full py-3 shadow-2xl text-white :bgtransparent border :tet-black ease-in-out border-black transition-colors duration-500 hover:duration-500">
              <FaSpinner className="animate-spin text-3xl" />
            </button>
          ) : success ? (
            <button className="bg-green-500 w-full py-3 shadow-2xl font-bold text-white  ease-in-out border-black transition-colors duration-500 hover:duration-500">
              Success, Thank you!
            </button>
          ) : (
            <button className="bg-black w-full py-3 shadow-2xl text-white hover:bg-transparent border hover:text-black ease-in-out border-black transition-colors duration-500 hover:duration-500">
              Send
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
