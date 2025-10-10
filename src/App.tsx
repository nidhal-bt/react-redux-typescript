import { RouterProvider } from "react-router-dom";

import AppRouter from "./routes/app-routes";

// function App() {
//   console.log();
//   return <RouterProvider router={AppRouter} />;
// }

// export default App;

import React, { useState, useRef, useEffect } from "react";

interface Props {
  blobUrl: string;
  fileName?: string;
}

const DownloadBlobButton: React.FC<Props> = ({
  blobUrl,
  fileName = "download",
}) => {
  const hiddenLinkRef = useRef<HTMLAnchorElement>(null);

  const handleDownload = () => {
    if (hiddenLinkRef.current) {
      hiddenLinkRef.current.href = blobUrl;
      hiddenLinkRef.current.download = fileName;
      hiddenLinkRef.current.click();
    }
  };

  return (
    <>
      <button onClick={handleDownload}>Download</button>
      <a href="#" style={{ display: "none" }} ref={hiddenLinkRef} />
    </>
  );
};

function App() {
  const [IsBlobValid, setIsBlobValid] = useState(false);
  const [blobUrl, setblobUrl] = useState("");
  useEffect(() => {
    const checkBlobUrl = async () => {
      try {
        const response = await fetch(blobUrl);
        if (response.ok) {
          setIsBlobValid(true);
          setblobUrl(URL.createObjectURL(await response.blob()));
        } else {
          console.error(
            `Error fetching Blob: ${response.status} - ${response.statusText}`
          );
        }
      } catch (error) {
        console.error("Error fetching Blob:", error);
      }
    };

    checkBlobUrl();
  }, []);

  return IsBlobValid ? <DownloadBlobButton blobUrl={blobUrl} /> : null;
}

export default App;
