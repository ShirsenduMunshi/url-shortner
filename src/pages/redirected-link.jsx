import { storeClicks } from "@/db/apiClicks";
import { getLongUrl } from "@/db/apiUrls";
import useFetch from "@/hooks/use-fetch";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";

const RedirectLink = () => {
  const { id } = useParams();
  console.log("Redirect ID:", id);
  // Debugging 
  const { loading, data, fn, error } = useFetch(getLongUrl, id ?? null);
  const { loading: loadingStats, fn: fnStats, error: errorStats } = useFetch(storeClicks, { id: data?.id, originalUrl: data?.original_url, });
  useEffect(() => { fn(); }, []);
  useEffect(() => { if (!loading && data) { fnStats(); } }, [loading]);
  if (loading || loadingStats) {
    return (<> <BarLoader width={"100%"} color="#36d7b7" /> <br /> Redirecting... </>);
  }
  if (error || errorStats) {
    console.error('Error occurred:', error || errorStats);
    return (<> <p>Error occurred while redirecting. Please try again later.</p> </>);
  }
  return null;
};
export default RedirectLink;