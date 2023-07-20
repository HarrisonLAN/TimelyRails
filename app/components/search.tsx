'use client'
import { useState } from "react";
export default function Search({ onChange }) {
  const [service, setService] = useState();
  const makeApiCall = async (event) => {
    event.preventDefault()
    const data = {
      crs: event.target.depCRS.value,
    }
    const JSONdata = JSON.stringify(data)
    const response = await fetch('/api/getDepartures', { method: 'POST', body: JSONdata })
    setService(await response.json())
    onChange(service)
  }
  return (
    <div className="main-container bg-white p-5">
      <div className="sub-container text-base font-semibold whitespace-nowrap dark:text-white">
        <form className="w-4/6 bg-darkBG p-5 rounded-full m-auto" onSubmit={makeApiCall}>
          <div className="flex departing-from-container basis-2/5 bg-white rounded-full">
            <div className="m-auto border-r-4 border-darkBG">
              <label className="pr-2" htmlFor="depCRS">
                Departing From:
              </label>
              <input className="" id="depCRS" type="text" placeholder="Station name or code" />
            </div>
            <div className="flex going-to-container basis-2/5 bg-white rounded-full">
              <div className="m-auto border-r-4 border-darkBG">
                <label className="pr-2" htmlFor="arvCRS">
                  Going to (Optional):
                </label>
                <input className="" id="arvCRS" type="text" placeholder="Station name or code" />
              </div>
            </div>
                <button className="search-Container bg-white rounded-" type="submit">
                  Search
                </button>
          </div>
        </form>
      </div>
    </div>
  )
}