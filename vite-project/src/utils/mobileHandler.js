const { useState, useEffect } = require("react");
const { createContext } = require("react");

const MobileHandlerContext = createContext();

function MobileHandlerProvider({childern}) {
    const [isMobile, setIsMobile] = useState()
    const isMobileHandler = (e)=>{
        setIsMobile(e.matches);
    }
    useEffect(() => {
        window.matchMedia("(max-width:1024px)").addEventListener("change" , isMobileHandler);
        setIsMobile(window.matchMedia("(max-width:1024)").matches);
    },[]);
    return <MobileHandlerContext.Provider value={{isMobile}}>{childern}</MobileHandlerContext.Provider>
}
export {MobileHandlerContext ,MobileHandlerProvider};