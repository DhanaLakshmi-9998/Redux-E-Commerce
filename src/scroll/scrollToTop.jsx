import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop(){
    const {pathName}=useLocation();
    useEffect(()=>{
        window.scrollTo(0,0); // navigate to a new page or reset the scroll position.
    },[pathName])
    return null;
}