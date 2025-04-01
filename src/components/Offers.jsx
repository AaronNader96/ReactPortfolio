import React, { useState, useEffect } from "react";

const Offers = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      window.location.href = "https://immaculateheart.tech/";
    }, 4000); // 4-second delay before redirecting

    return () => clearTimeout(timeout);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gray-200 z-50">
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-gray-900 mb-4"></div>
      <p className="text-lg font-medium text-gray-900 mb-2">
        Redirecting to Immaculate Heart Tech...
      </p>
      <p className="text-sm text-gray-700">A business founded by Aaron Nader</p>
    </div>
  );
};

export default Offers;
