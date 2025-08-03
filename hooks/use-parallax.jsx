import { useEffect, useState } from "react"

export const useParallax=()=>{
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
      const handelScroll = () => setScrollY(window.scrollY)

      window.addEventListener("scroll", handelScroll)

      return () => window.removeEventListener("scroll" , handelScroll)
    
        
    }, [])

    return scrollY;
    
};