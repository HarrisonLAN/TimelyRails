
export default function liveTrains(services) {

if (services.data == null) {
    return (
        <div className="">Search Live Trains</div>
    )
} else {
    for(let i =0; i< services.data.depBoard.trainServices.service.length; i++){
        if(services.data.depBoard.trainServices.service[i].destination.location[0].locationName === services.data.depBoard.locationName){
            services.data.depBoard.trainServices.service.splice(i, 1);
            i--;
        }

    }
    return (
        <div className=''>
            <div className="border-b border font-bold text-xl  m-auto h-auto">
                <h2 className="">Departing From</h2>
                <h3>{services.data.depBoard.locationName}</h3>
            </div>
            <ul className="w-99 p-1">

                {services.data.depBoard.trainServices.service.map((serviceID) => (
                    <li className="pb-3 sm:pb-4 border border-searchGrey" key={serviceID.serviceID}>
                        {serviceID.destination.location.map((Dest) => (
                            <p>{Dest.locationName}</p>
                        ))}
                        <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                                <p>exp:{serviceID.std}   est:{serviceID.etd}   Platform:{serviceID.platform}</p>
                            </div>
                        </div>
                    </li>
                ))}


            </ul>
        </div>
    )
}
}
