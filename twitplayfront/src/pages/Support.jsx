import { icons } from "../assets/icons";

function Support() {
  return (
    <>
      <section className="w-full flex justify-center pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        <div className="flex relative top-20 justify-center p-4">
          <div className="w-full max-w-fit text-center">
            <p className="mb-3 w-full drop-shadow-2xl ">
              <span className="inline-flex w-36 h-36 rounded-full dark:bg-[#E4D3FF] bg-[#ffefef] text-red-500  p-2 dark:text-[#AE7AFF]">
                {icons.support}
              </span>
            </p>
            <h5 className="mt-6 mb-7 text-2xl font-semibold dark:text-white  text-red-400 ">
              Need Help? Reach Out to Us!
            </h5>
            <ul className="text-center flex flex-col items-center space-y-2">
              <li className="flex items-center">
                <span className="w-9 h-9 rounded-full mr-4">{icons.link}</span>
                <div className="h-full">
                  <h2 className="text-lg font-bold my-0">Twitter</h2>
                  <a
                    href="https://x.com/"
                    target="_blank"
                    className="text-blue-500 text-sm hover:text-blue-400 "
                  >
                    /twitplay
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-9 h-9 rounded-full mr-4">{icons.link}</span>
                <div className="h-full">
                  <h2 className="text-lg font-bold my-0">LinkedIn</h2>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="text-blue-500 text-sm hover:text-blue-400 "
                  >
                    /twitplay
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-9 h-9 rounded-full mr-4">{icons.link}</span>
                <div className="h-full">
                  <h2 className="text-lg font-bold my-0">GitHub</h2>
                  <a
                    href="https://github.com/AKSHAYAYAY"
                    target="_blank"
                    className="text-blue-500 text-sm hover:text-blue-400 "
                  >
                    /twitplay
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Support;
