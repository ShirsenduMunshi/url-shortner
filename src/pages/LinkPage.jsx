// import DeviceStats from "@/components/device-stats";
// import Location from "@/components/location-stats";
// import {Button} from "@/components/ui/button";
// import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
// import {UrlState} from "@/context";
// import {getClicksForUrls} from "@/db/apiClicks";
// import {deleteUrl, getUrl} from "@/db/apiUrls";
// import useFetch from "@/hooks/use-fetch";
// import {Copy, Download, LinkIcon, Trash} from "lucide-react";
// import {useEffect} from "react";
// import {useNavigate, useParams} from "react-router-dom";
// import {BarLoader, BeatLoader} from "react-spinners";

// const LinkPage = () => {
//   const downloadImage = () => {
//     const imageUrl = url?.qr;
//     const fileName = url?.title;

//     // Create an anchor element
//     const anchor = document.createElement("a");
//     anchor.href = imageUrl;
//     anchor.download = fileName;

//     // Append the anchor to the body
//     document.body.appendChild(anchor);

//     // Trigger the download by simulating a click event
//     anchor.click();

//     // Remove the anchor from the document
//     document.body.removeChild(anchor);
//   };
//   const navigate = useNavigate();
//   const {user} = UrlState();
//   const {id} = useParams();
//   const {
//     loading,
//     data: url,
//     fn,
//     error,
//   } = useFetch(getUrl, {id, user_id: user?.id});

//   const {
//     loading: loadingStats,
//     data: stats,
//     fn: fnStats,
//   } = useFetch(getClicksForUrls, id);

//   const {loading: loadingDelete, fn: fnDelete} = useFetch(deleteUrl, id);

//   useEffect(() => {
//     fn();
//   }, []);

//   useEffect(() => {
//     if (!error && loading === false) fnStats();
//   }, [loading, error]);

//   if (error) {
//     navigate("/dashboard");
//   }

//   let link = "";
//   if (url) {
//     link = url?.custom_url ? url?.custom_url : url?.short_url;
//   }

//   return (
//     <>
//       {(loading || loadingStats) && (
//         <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
//       )}
//       <div className="flex flex-col gap-8 sm:flex-row justify-between container max-w-[90%] mx-auto mt-10">
//         <div className="flex flex-col items-start gap-8 rounded-lg sm:w-2/5">
//           <span className="text-6xl font-extrabold hover:underline cursor-pointer">
//             {url?.title}
//           </span>
//           <a
//             href={`https://sortx.in/${link}`}
//             target="_blank"
//             className="text-3xl sm:text-4xl text-blue-400 font-bold hover:underline cursor-pointer"
//           >
//             https://sortx.in/{link}
//           </a>
//           <a
//             href={url?.original_url}
//             target="_blank"
//             className="flex items-center gap-1 hover:underline cursor-pointer"
//           >
//             <LinkIcon className="p-1" />
//             {url?.original_url}
//           </a>
//           <span className="flex items-end font-extralight text-sm">
//             {new Date(url?.created_at).toLocaleString()}
//           </span>
//           <div className="flex gap-2">
//             <Button
//               variant="ghost"
//               onClick={() =>
//                 navigator.clipboard.writeText(`https://trimrr.in/${link}`)
//               }
//             >
//               <Copy />
//             </Button>
//             <Button variant="ghost" onClick={downloadImage}>
//               <Download />
//             </Button>
//             <Button
//               variant="ghost"
//               onClick={() =>
//                 fnDelete().then(() => {
//                   navigate("/dashboard");
//                 })
//               }
//               disable={loadingDelete}
//             >
//               {loadingDelete ? (
//                 <BeatLoader size={5} color="white" />
//               ) : (
//                 <Trash />
//               )}
//             </Button>
//           </div>
//           <img
//             src={url?.qr}
//             className="w-1/2 self-center sm:self-start ring ring-blue-500 p-1 object-contain"
//             alt="qr code"
//           />
//         </div>

//         <Card className="sm:w-3/5">
//           <CardHeader>
//             <CardTitle className="text-4xl font-extrabold">Stats</CardTitle>
//           </CardHeader>
//           {stats && stats.length ? (
//             <CardContent className="flex flex-col gap-6">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Total Clicks</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p>{stats?.length}</p>
//                 </CardContent>
//               </Card>

//               <CardTitle>Location Data</CardTitle>
//               <Location stats={stats} />
//               <CardTitle>Device Info</CardTitle>
//               <DeviceStats stats={stats} />
//             </CardContent>
//           ) : (
//             <CardContent>
//               {loadingStats === false
//                 ? "No Statistics yet"
//                 : "Loading Statistics.."}
//             </CardContent>
//           )}
//         </Card>
//       </div>
//     </>
//   );
// };

// export default LinkPage;

import DeviceStats from "@/components/device-stats";
import Location from "@/components/location-stats";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UrlState } from "@/context";
import { getClicksForUrls } from "@/db/apiClicks";
import { deleteUrl, getUrl } from "@/db/apiUrls";
import useFetch from "@/hooks/use-fetch";
import { Copy, Download, LinkIcon, Trash } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BarLoader, BeatLoader } from "react-spinners";

const LinkPage = () => {
  const navigate = useNavigate();
  const { user } = UrlState();
  const { id } = useParams();

  const BASE_URL = import.meta.env.VITE_BASE_URL || "https://sortx.in";

  const { loading, data: url, fn: fetchUrl, error } = useFetch(getUrl, {
    id,
    user_id: user?.id,
  });

  const {
    loading: loadingStats,
    data: stats,
    fn: fetchStats,
  } = useFetch(getClicksForUrls, id);

  const { loading: loadingDelete, fn: deleteFn } = useFetch(deleteUrl, id);

  // Fetch URL data on component mount
  useEffect(() => {
    fetchUrl();
  }, []);

  // Fetch stats after URL data is fetched
  useEffect(() => {
    if (!error && !loading) {
      fetchStats();
    }
  }, [loading, error]);

  // Redirect to dashboard on error
  useEffect(() => {
    if (error) {
      console.error("Error fetching URL data:", error);
      navigate("/dashboard");
    }
  }, [error, navigate]);

  const downloadImage = () => {
    if (url?.qr) {
      const anchor = document.createElement("a");
      anchor.href = url.qr;
      anchor.download = url.title || "QR Code";
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }
  };

  const shortLink = url?.custom_url || url?.short_url || null;
  const originalUrl = url?.original_url || null;
  
  return (
    <>
      {(loading || loadingStats) && (
        <BarLoader className="mb-4" width="100%" color="#36d7b7" />
      )}
      <div className="flex flex-col gap-8 sm:flex-row justify-between container max-w-[90%] mx-auto mt-10">
        <div className="flex flex-col items-start gap-8 rounded-lg sm:w-2/5">
          <h1 className="text-6xl font-extrabold hover:underline cursor-pointer">
            {url?.title || "Untitled"}
          </h1>
          {shortLink ? (
            <a href={`${BASE_URL}/${shortLink}`} target="_blank"rel="noopener noreferrer" className="text-3xl sm:text-4xl text-blue-400 font-bold hover:underline cursor-pointer">
              {`${BASE_URL}/${shortLink}`}
              {console.log("Short Url: ",shortLink)}
              {console.log("Base Url: ",BASE_URL)}
              {console.log("Full Link: ",BASE_URL + "/" + shortLink)}
            </a>
          ) : (
            <p className="text-red-500">Short link is not available</p>
          )}
          {originalUrl ? (
            <a
              href={originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline cursor-pointer"
            >
              <LinkIcon className="p-1" />
              {originalUrl}
            </a>
          ) : (
            <p className="text-red-500">Original URL is not available</p>
          )}
          <span className="flex items-end font-extralight text-sm">
            {url?.created_at
              ? new Date(url.created_at).toLocaleString()
              : "Creation date not available"}
          </span>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              onClick={() =>
                navigator.clipboard.writeText(`${BASE_URL}/${shortLink}`)
              }
              disabled={!shortLink}
            >
              <Copy />
            </Button>
            <Button variant="ghost" onClick={downloadImage} disabled={!url?.qr}>
              <Download />
            </Button>
            <Button
              variant="ghost"
              onClick={() =>
                deleteFn().then(() => navigate("/dashboard"))
              }
              disabled={loadingDelete}
            >
              {loadingDelete ? (
                <BeatLoader size={5} color="white" />
              ) : (
                <Trash />
              )}
            </Button>
          </div>
          {url?.qr && (
            <img
              src={url.qr}
              className="w-1/2 self-center sm:self-start ring ring-blue-500 p-1 object-contain"
              alt="QR Code"
            />
          )}
        </div>

        <Card className="sm:w-3/5">
          <CardHeader>
            <CardTitle className="text-4xl font-extrabold">Stats</CardTitle>
          </CardHeader>
          {stats && stats.length ? (
            <CardContent className="flex flex-col gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Total Clicks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{stats.length}</p>
                </CardContent>
              </Card>

              <CardTitle>Location Data</CardTitle>
              <Location stats={stats} />
              <CardTitle>Device Info</CardTitle>
              <DeviceStats stats={stats} />
            </CardContent>
          ) : (
            <CardContent>
              {!loadingStats
                ? "No statistics available yet."
                : "Loading statistics..."}
            </CardContent>
          )}
        </Card>
      </div>
    </>
  );
};

export default LinkPage;
