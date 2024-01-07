import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex relative">
      <div className="w-1/2 mt-10">
        <div>
          <h2 className="text-secondary-color font-bold text-3xl border-b-4 border-secondary-color my-text-shadow w-fit mx-auto px-10 py-5">
            WHO HE IS
          </h2>
        </div>

        <div className="mt-10 mx-auto w-3/4 my-box-shadow ">
          <div className="bg-secondary-color flex items-center  p-1  mx-auto">
            <span className="bg-last-color mx-2  h-5 w-5"></span>
            <span className="text-primary-color font-bold">SYSTEM</span>
          </div>
          <div className="bg-last-color  text-center p-10  font-bold border border-secondary-color">
            <p className="leading-loose text-xl">
              Hello human, his name is Kevin Armache he is from Kinshasa, in the
              Democratic Republic of Congo. Full-Stack and ReactJs web
              developer. Bachelor of Business Administration from Leadership
              Academy University Kinshasa.
            </p>
            <hr className="border-secondary-color my-5" />
            <p className="leading-loose text-xl">
              He participated in team projects and also alone as a freelancer
              for start-ups and for individuals or entrepreneurs.
            </p>
            <hr className="border-secondary-color my-5" />
            <p className="leading-loose text-xl">
              Since technology is advancing every day, he continues to learn new
              concepts on his own until today.
            </p>
          </div>
        </div>
        <div className="text-center w-3/5 mx-auto  m-10 flex">
          <p className="text-xl text-secondary-color mx-auto">
            « Strive to build things that make a difference ! »
          </p>
        </div>
      </div>

      <div className="w-1/2">
        <div className="group border-4 relative border-secondary-color  mt-20 w-3/4 mx-auto  p-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="320"
            height="512"
            viewBox="0 0 320 512"
            className="mx-auto "
          >
            <path
              fill="#4a473d"
              d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1a87.983 87.983 0 0 0-40.4 74v1.5c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128h-32C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32m80 320a40 40 0 1 0 0-80a40 40 0 1 0 0 80"
            />
          </svg>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300  mt-10 mx-auto w-1/3 my-box-shadow absolute bottom-0 right-0 -mb-20 -mr-10">
            <div className="flex bg-secondary-color justify-between items-center">
              <div className="bg-secondary-color flex items-center">
                <span className="bg-last-color my-2 ml-2 h-5 w-5"></span>
                <span className="text-primary-color my-2 mx-2 font-bold">
                  SYSTEM
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 48 48"
                className="m-2"
              >
                <g
                  fill="none"
                  stroke="#dad4bb"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                >
                  <path d="m42 42l-9-9M6 6l9 9zm0 36l9-9M42 6l-9 9z" />
                  <path
                    fill="#dad4bb"
                    d="M24 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10"
                  />
                </g>
              </svg>
            </div>
            <div className="bg-last-color  text-center p-1  font-bold border border-secondary-color">
              <p className="leading-loose text-lg">
                This is not a 404 error, this human just did not want to put his
                picture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
