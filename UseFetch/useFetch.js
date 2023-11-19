import { useEffect } from "react";

export const useFetch = ( url ) => {

    const getFetch = async () => {
        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data);
    }

    useEffect(() => {
      getFetch();
    }, [url]);
    
  return {} ;
}
