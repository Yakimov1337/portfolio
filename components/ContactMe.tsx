import React from "react";
import {PhoneIcon,MapPinIcon,EnvelopeIcon} from "@heroicons/react/24/solid";
type Props = {};

export default function ContactMe({}: Props) {
  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        ContactMe
      </h3>
      <div className="flex fex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>
        <div>
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+1231231</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">asdasd@abv.bg</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">123 devlepoer lane</p>
          </div>
        </div>
        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex ">
            <input placeholder="Name" className="contactInput" type="text"/>
            <input placeholder="Email" className="contactInput" type="email"/>
          </div>
          <input placeholder="Subject" className="contactInput" type="text"/>
          <textarea placeholder="Message" className="contactInput"/>
          <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
        </form>
      </div>
    </div>
  );
}
