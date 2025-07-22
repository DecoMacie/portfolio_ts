import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LinkNotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-extrabold text-red-700 mb-4 animate-pulse">
        PAGE NOT FOUND
      </h1>
      <h3 className="text-2xl font-bold">
        Redirecting<span className="animate-pulse">...</span>
      </h3>
      <p>You will be redirected in {countdown} secounds</p>
      <div className="w-1/3 bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-red-400 h-full transition-all duration-1000"
          style={{ width: `${(countdown / 5) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
