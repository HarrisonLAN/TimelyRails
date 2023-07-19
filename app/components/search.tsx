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
    <div className="main-container">
      <form className="" onSubmit={makeApiCall}>
        <div className="sub-container flex">
          <div className="departing-from-container">
            <label className="" htmlFor="depCRS">
              Departing From
            </label>
            <input className="" id="depCRS" type="text" placeholder="Station name or code" />
          </div>
          <div className="going-to-container">
            <label className="" htmlFor="arvCRS">
              Going to (Optional)
            </label>
            <input className="" id="arvCRS" type="text" placeholder="Station name or code" />
          </div>
          <div className="search-Container">
            <button className="" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}