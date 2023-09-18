import React, { useEffect } from 'react';

const Reviews = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "");
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="elfsight-app-74a49eb2-7510-4e9d-8c66-5f6f980050a3"></div>
    </div>
  );
};

export default Reviews;
