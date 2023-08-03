import { useState } from "react";
export default function serviceDetails(serviceID) {
    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(!showMe);
    }

    return (
        <>
            <li className="pb-3 sm:pb-4 pb-2" key={serviceID.data.serviceID} onClick={toggle}>
                <div className="w-11/12 m-auto border border-searchGrey rounded-lg text-center">
                    {serviceID.data.destination.location.map((Dest) => (
                        <h2 className="font-bold text-l ">{Dest.locationName}</h2>
                    ))}
                    <div className="text-sm flex items-center space-x-4">
                        <div className="flex-1 min-w-0 flex w-99 font-bold ">
                            <div className="flex-1">
                                <p>Exp:{serviceID.data.std}</p>
                            </div>
                            <div className="flex-1 ">
                                <p>Est:{serviceID.data.etd}</p>
                            </div>
                            <div className="flex-1">
                                <p>Platform:{serviceID.data.platform}</p>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className={`flex ${showMe ? "block" : "hidden"}`}>
                        {serviceID.data.subsequentCallingPoints.callingPointList.callingPoint.map((callingPoint) => (
                            <div className="flex m-auto w-99 px-1 relative">
                                <div className="px-1 w-2/12">
                                    <div className=""><p>{callingPoint.st}</p></div>
                                    <div className=""><p>{callingPoint.et}</p></div>
                                </div>
                                <div className="relative">
                                <div className="w-1 h-full bg-black" />
                                </div>
                                <div className="px-1 w-10/12 m-auto text-left"><p>{callingPoint.locationName}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </li >
        </>
    )
}