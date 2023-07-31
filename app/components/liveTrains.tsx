import { useState, useEffect, useMemo } from "react";
import TwitterWidget from "./twitterWidget";
import Comp2 from "./comp2";
export default function LiveTrains(services) {

        // This is basically like useEffect except it memoizes (caches) the data and only updates from the dependencies array
        const data = useMemo(() => {
            // not loaded yet?
            if (!services?.data) return [];

            const depBoard = services.data.depBoard;
            const serviceData = depBoard.trainServices.service || [];

            // filter the data
            return serviceData.filter(

                (s) => s.destination.location[0].locationName !== depBoard.locationName
            );
        }, [services?.data]); // <-- dependencies array

        // NO data

        const noData = data.length === 0;

        return (
            <div className="pb-2">
                {noData ? (
                    <div className="py-2 w-11/12 m-auto">
                        <div className="twitterWidget">
                            <TwitterWidget />
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="border-b border font-bold text-xl  m-auto h-auto text-center">
                            <h4 className="">Departing From:</h4>
                            <h2>{services.data.depBoard.locationName}</h2>
                        </div>
                        <div className="lg:flex">
                            <ul className="lg:w-1/2 w-99 p-1">
                                {data?.map((serviceID) => (
                                    <li className="pb-3 sm:pb-4 pb-2" key={serviceID.serviceID}>
                                        <div className="w-11/12 m-auto border border-searchGrey rounded-lg text-center">
                                            {serviceID.destination.location.map((Dest) => (
                                                <h2 className="font-bold text-l ">{Dest.locationName}</h2>
                                            ))}
                                            <div className="text-sm flex items-center space-x-4">
                                                <div className="flex-1 min-w-0 flex w-99 font-bold ">
                                                    <div className="flex-1">
                                                        <p>Exp:{serviceID.std}</p>
                                                    </div>
                                                    <div className="flex-1 ">
                                                        <p>Est:{serviceID.etd}</p>
                                                    </div>
                                                    <div className="flex-1">
                                                        <p>Platform:{serviceID.platform}</p>
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
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="lg:w-1/2 p-1">
                                <div className="w-99 m-auto">
                                    <TwitterWidget />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        );
    }