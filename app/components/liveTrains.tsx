import { useState, useEffect, useMemo } from "react";
import TwitterWidget from "./twitterWidget";
import ServiceDetails from "./serviceDetails";
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
                                    <ServiceDetails data={serviceID} key={serviceID.serviceID} />
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