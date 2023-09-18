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
      <div className="elfsight-app-35fb6f4e-6f67-41ca-a983-ba4bb3d5233d"></div>
    </div>
  );
};

export default Reviews;
