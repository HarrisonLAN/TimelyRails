export default function Search({ onChange }) {
  const makeApiCall = async (event) => {
    event.preventDefault()
    const data = {
      crs: event.target.depCRS.value,
    }
    const JSONdata = JSON.stringify(data)
    const response = await fetch('/api/getDepartures', { method: 'POST', body: JSONdata })
    onChange(await response.json())
  }
  return (
    <div className="main-container p-1 md:p-5">
      <div className="content-container w-11/12 rounded-lg m-auto text-lg bg-searchBG">
        <form className="" onSubmit={makeApiCall}>
          <div className="p-2 relative">
            <div className="w-99 m-auto py-1">
              <div className="bg-white rounded-lg border border-searchGrey">
                <div className="p-1">
                  <label className="flex text-xs" htmlFor="depCRS">
                    Departing From
                  </label>
                  <input className="font-bold w-full" id="depCRS" type="text" placeholder="Station name or code" />
                </div>
              </div>
            </div>
            <div className="flex h-0">
            <div className="top-10 w-14 h-14 absolute right-26px bg-white rounded-full border border-searchGrey"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" w-12 h-12 absolute top-11 right-5 text-searchGrey">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" w-12 h-12  absolute top-11 right-10 text-searchGrey">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
            </svg>
            </div>
            <div className="w-99 m-auto py-1">
              <div className="bg-white rounded-lg border border-searchGrey">
                <div className="p-1">
                  <label className="flex text-xs" htmlFor="arvCRS">
                    Going to (Optional)
                  </label>
                  <input className="font-bold w-full" id="arvCRS" type="text" placeholder="Station name or code" />
                </div>
              </div>
            </div>
            <div className="w-99 py-1">
              <div className=" ">
                <div className="flex items-end bg-searchBTN h-52 rounded-lg p-1 border border-searchGrey">
                  <button className="h-full flex-1 text-oangeColour font-bold text-left" type="submit">
                    Show Live Trains
                  </button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-full flex-none w-6 h-6 text-oangeColour ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>

                </div>
              </div>
            </div>
          </div>
        </form>
      </div >
    </div >
  )
}