
import { useEffect,useState } from "react";
export default function randomComp() {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <div className="py-2 w-11/12 m-auto">
        <a className="twitter-timeline" data-height="620" href="https://twitter.com/nationalrailenq?ref_src=twsrc%5Etfw">Tweets by nationalrailenq</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
    )
}