
export default function liveTrains(services) {

    if (services.data == null) {
        return (
            <div className="">Search Live Trains</div>
        )
    } else {
        for (let i = 0; i < services.data.depBoard.trainServices.service.length; i++) {
            if (services.data.depBoard.trainServices.service[i].destination.location[0].locationName === services.data.depBoard.locationName) {
                services.data.depBoard.trainServices.service.splice(i, 1);
                i--;
            }
        }
        return (
            <div className=''>
                <div className="border-b border font-bold text-xl  m-auto h-auto text-center">
                    <h4 className="">Departing From:</h4>
                    <h2>{services.data.depBoard.locationName}</h2>
                </div>
                <ul className="w-99 p-1">

                    {services.data.depBoard.trainServices.service.map((serviceID) => (
                        <li className="pb-3 sm:pb-4 pb-2" key={serviceID.serviceID}>
                            <div className="w-11/12 m-auto border border-searchGrey rounded-lg text-center">
                                {serviceID.destination.location.map((Dest) => (
                                    <h2 className="font-bold text-l ">{Dest.locationName}</h2>
                                ))}
                                <div className="text-sm flex items-center space-x-4">
                                    <div className="flex-1 min-w-0 flex w-99 font-bold ">
                                        <div className="flex-1">
                                            <p>Exp:{serviceID.std}
                                            </p>

                                        </div>
                                        <div className="flex-1 ">
                                            <p>Est:{serviceID.etd}
                                            </p>
                                        </div>
                                        <div className="flex-1">
                                            <p>Platform:{serviceID.platform}
                                            </p>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}


                </ul>
            </div>
        )
    }
}
