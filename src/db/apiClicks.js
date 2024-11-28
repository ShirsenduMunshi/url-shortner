// import { UAParser } from "ua-parser-js";
// import supabase from "./supabase";

// export async function getClicksForUrls(urlIds) {
//     const { data, error } = await supabase.from("clicks").select("*").in("url_id", urlIds);
//     if (error) {
//         console.error(error.message);
//         throw new Error("Unable to lode clicks!");
//     }
//     return data;
// }

// const parser = new UAParser();

// export  const storeClicks = async ({id, original_url}) => {
//     try {
//       const res = parser.getResult();
//       const device = res.type || "Desktop";

//       // Added Accept header to the request 
//       const response = await fetch("https://www.ipapi.co/json",{ headers: { 'Accept': 'application/json' } });
//         if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); }

//     // const response = await fetch("https://www.ipapi.co/json");
//       const {city, country_name: country} = await response.json();
//         const insertResponse = await supabase.from("clicks").insert({
//           url_id: id,
//           city: city,
//           country: country,
//           device: device
//         });
//         if (insertResponse.error) { throw new Error(insertResponse.error.message); }
//         window.location.href = original_url;
//     } catch (error) {
//       console.error(error.message);
//     }
// }

import { UAParser } from "ua-parser-js";
import supabase from "./supabase";

export async function getClicksForUrls(urlIds) {
    const { data, error } = await supabase.from("clicks").select("*").in("url_id", urlIds);
    if (error) {
        console.error(error.message);
        throw new Error("Unable to lode clicks!");
    }
    return data;
}

const parser = new UAParser();

export  const storeClicks = async ({id, original_url}) => {
    try {
      const res = parser.getResult();
      const device = res.type || "Desktop";

      // Added Accept header to the request 
      const response = await fetch("https://www.ipapi.co/json",{ headers: { 'Accept': 'application/json' } });
        if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); }

    // const response = await fetch("https://www.ipapi.co/json");
      const {city, country_name: country} = await response.json();
        const insertResponse = await supabase.from("clicks").insert({
          url_id: id,
          city: city,
          country: country,
          device: device
        });
        if (insertResponse.error) { throw new Error(insertResponse.error.message); }
        window.location.href = original_url;
    } catch (error) {
      console.error(error.message);
    }
}