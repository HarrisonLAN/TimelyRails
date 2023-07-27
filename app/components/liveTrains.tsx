
export default function liveTrains(services) {
    return (
        <div className=''>
            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">

                {services.data.trainServices.service.map((serviceID) => (
                    <li className="pb-3 sm:pb-4" key={serviceID.serviceID}>
                        <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                                <p>{serviceID.serviceID}</p>
                                <p>{serviceID.sta}</p>
                            </div>
                        </div>
                    </li>
                ))}


            </ul>
        </div>

    )
}
