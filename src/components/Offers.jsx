import React, { useState, useEffect } from "react";

const Offers = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      window.location.href = "https://immaculateheart.tech/";
    }, 4000); // Delay for 4 seconds before redirecting

    return () => clearTimeout(timeout);
  }, []);

  return loading ? (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-gray-200 z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mb-4"></div>
      <p className="text-lg text-gray-900">
        Redirecting to Immaculate Heart Tech...
      </p>
      <p className="text-sm text-gray-700">A business founded by Aaron Nader</p>
    </div>
  ) : null;
};

export default Offers;
