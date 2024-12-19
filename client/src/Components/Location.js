import React, { useState, useEffect } from "react";
import axios from "axios";

function Location() {
  const [ip, setIp] = useState(null); //State to hold the IP address
  const [country, setCountry] = useState(null); //State to hold geolocation
  const [region, setRegion] = useState(null); // State to hold geolocation
  

  const getGeoLocationData = async () => {
    try { 
      const response = await axios.get(`${process.env.REACT_APP_LOCAION_API_KEY}`);
      setIp(response.data.ip);
      setCountry(response.data.location.country); // Set country
      setRegion(response.data.location.region); // Set region
     
    } catch (error) {
      console.error("Error fetching geolocation data:", error.message);
    }
  };
   

    useEffect(() => {
      getGeoLocationData();
  }, []);

 return (
    <div>
      <p className="text-muted"> IP address: {ip}</p>
      <p className="text-muted"> Country: {country}</p>
      <p  className="text-muted"> Region: {region}</p>
    </div>
  );
}


export default Location