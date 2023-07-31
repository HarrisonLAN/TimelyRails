import { useState, useEffect } from "react";
export default function twitterWidget() {
    useEffect(() => {
        const s = document.createElement("script");
        s.setAttribute("src", "https://platform.twitter.com/widgets.js");
        s.setAttribute("async", "true");
        document.head.appendChild(s);
    }, []);
    const [domLoaded, setDomLoaded] = useState(false);


    return (
        <>
            <a className="twitter-timeline" data-height="620" href="https://twitter.com/nationalrailenq?ref_src=twsrc%5Etfw">Tweets by nationalrailenq</a>
        </>
    )
}