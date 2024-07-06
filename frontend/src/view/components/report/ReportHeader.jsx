import { useContext } from "react";
import ReportContext from "../../../context/ReportContext";

function ReportHeader() {
  
  const reportData = useContext(ReportContext);

  return (
    <>
      <div className="flex gap-5 justify-between items-start px-12 pb-8 w-full text-gray-700 border-b border-gray-300 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-4 mt-1 text-4xl font-extralight leading-10 max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfa3676b51afe445cbf6733a7ad08ff7350e37320dbe99913ef8132fda748333?apiKey=ffe900c0da0f45f9af6d3b4f4c162962&"
            className="shrink-0 self-start w-8 aspect-square"
          />
          <div className="flex-auto">Google Drive Risk Report</div>
        </div>
        <div className="flex gap-5">
          <div className="grow my-auto text-sm font-semibold leading-5">
            Risk Score:
          </div>
          <div className="flex gap-2 justify-center p-3 text-base font-medium tracking-wider leading-6 uppercase whitespace-nowrap rounded-lg bg-orange-400 bg-opacity-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4201dcc75a5ae6a6941b46b084d6445a33e47f52bd6f588d4f82201d52eed11?apiKey=ffe900c0da0f45f9af6d3b4f4c162962&"
              className="shrink-0 w-4 aspect-square"
            />
            <div>High</div>
          </div>
        </div>
      </div>
      <div className="self-center px-5 mt-12 w-full max-w-[1288px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col items-center self-stretch px-14 pt-16 pb-8 my-auto text-center aspect-[1.22] max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c20682c65e2d42e5a194c914f27a3f0f189b90e9a7187ce0a584829f68a44194?apiKey=ffe900c0da0f45f9af6d3b4f4c162962&"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex overflow-hidden relative flex-col px-14 py-11 aspect-[1.32] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c714ddb2926658c26d17ad859fce6e9e169ca2e9899e2fac3508d06184d9d0f?apiKey=ffe900c0da0f45f9af6d3b4f4c162962&"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative text-xs font-semibold leading-4 text-gray-700 uppercase">
                  Risk Score
                </div>
                <div className="relative mt-2.5 text-5xl font-light leading-10 text-orange-400 max-md:text-4xl">
                  75
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center py-7 pr-8 pl-16 text-center text-gray-700 rounded-lg border border border-solid max-md:px-5 max-md:mt-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/acb1f3cea72f154b9a2a6ea0ca9fe639e3ae506ec30c6ce50259b2b87fbfb2bf?apiKey=ffe900c0da0f45f9af6d3b4f4c162962&"
                className="w-12 aspect-square"
              />
              <div className="mt-8 text-6xl font-extralight leading-[60px] max-md:text-4xl">
                {reportData?.publicFiles?.length || 0}
              </div>
              <div className="mt-9 text-base font-semibold leading-6 text-gray-500">
                Public files
              </div>
              <div className="self-start mt-6 text-sm leading-5">
                Files that are available to
                <br />
                anyone over the web via link
                <br />
                sharing.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-16 py-7 text-center text-gray-700 rounded-lg border border border-solid max-md:px-5 max-md:mt-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/83bbeb391e47c2322f0a18a058860f494fda92eec388fdcc657082dcd63bc972?apiKey=ffe900c0da0f45f9af6d3b4f4c162962&"
                className="self-center w-12 aspect-square"
              />
              <div className="self-center mt-8 text-6xl font-extralight leading-[60px] max-md:text-4xl">
                {reportData?.peopleFiles?.length || 0}
              </div>
              <div className="self-start mt-9 text-base font-semibold leading-6 text-gray-500">
                People with access
              </div>
              <div className="self-start mt-5 text-sm leading-5">
                People who have access to
                <br />
                files in your Google Drive.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-14 py-7 text-center text-gray-700 rounded-lg border border border-solid max-md:px-5 max-md:mt-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4632e381f1d508782562741469cc671564d67736ba9f0d162bf872d920d599a?apiKey=ffe900c0da0f45f9af6d3b4f4c162962&"
                className="self-center w-12 aspect-square"
              />
              <div className="self-center mt-8 text-6xl font-extralight leading-[60px] max-md:text-4xl">
                {reportData?.externalFiles?.length || 0}
              </div>
              <div className="self-start mt-9 text-base font-semibold leading-6 text-gray-500">
                Files shared externally
              </div>
              <div className="mt-5 ml-3.5 text-sm leading-5 max-md:ml-2.5">
                Files that have been shared
                <br />
                directly with other people.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReportHeader;
