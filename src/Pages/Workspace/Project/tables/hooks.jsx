import { useEffect, useState } from "react";

export const useWaiting = () => {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
  }, []);

  return { isLoading, setisLoading };
};
