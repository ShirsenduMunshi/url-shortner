import { storeClicks } from "@/db/apiClicks";
import { getLongUrl } from "@/db/apiUrls";
import useFetch from "@/hooks/use-fetch";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";

const RedirectPage = () => {
  const { id } = useParams(); // Get the short or custom URL ID from the route
  const { loading, data, fn, error } = useFetch(getLongUrl, id ?? null); // Fetch the original URL
  const { fn: fnStoreClicks, error: clicksError } = useFetch(storeClicks);

  useEffect(() => {
    if (id) {
      console.log("Fetching original URL for ID:", id);
      fn(); // Call `getLongUrl` with the `id`
    } else {
      console.error("Redirect ID is missing. Cannot proceed.");
    }
  }, [id]);

  useEffect(() => {
    if (data?.original_url) {
      console.log("Recording click and redirecting...");
      fnStoreClicks({
        id: data?.id,
        originalUrl: data?.original_url,
      });

      // Redirect to the original URL
      window.location.href = data.original_url;
    }
  }, [data]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <BarLoader width={"50%"} color="#36d7b7" />
        <p style={{ marginTop: "1rem", fontSize: "1.2rem", color: "#555" }}>
          Redirecting to your destination...
        </p>
      </div>
    );
  }

  if (error || clicksError) {
    console.error("Error occurred during redirect:", error || clicksError);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <p style={{ color: "red", fontSize: "1.2rem" }}>
          Failed to redirect. Please try again later.
        </p>
      </div>
    );
  }

  return null;
};

export default RedirectPage;