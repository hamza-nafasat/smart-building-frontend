import React from "react";

const Logo = () => {
  const svgStyle = {
    animation: "bounce 1s infinite",
  };

  const keyframes = `
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `;
  return (
    <>
      <style>{keyframes}</style>
      <svg
        style={svgStyle}
        width="31"
        height="34"
        viewBox="0 0 31 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1369_7151)">
          <path
            d="M22.8843 0L15.4414 1.42629V22.5628H16.5047V2.32075L22.8843 1.1362V19.8768H23.9475V1.65729L27.1772 3.18028L27.6291 2.20793L22.8843 0Z"
            fill="white"
          />
          <path
            d="M15.6506 12.4689L10.9855 10.457L2.94727 11.9075V20.4142H4.01053V12.8046L10.3901 11.655V11.2816H11.4534V11.8457L15.4406 13.6991L15.6506 12.4689Z"
            fill="white"
          />
          <path
            d="M10.3906 11.2812V11.6546V20.4138H11.4539V11.8453V11.2812H10.3906Z"
            fill="white"
          />
          <path
            d="M19.6943 6.98395L18.3652 7.52116V4.56651L19.6943 4.0293V6.98395Z"
            fill="white"
          />
          <path
            d="M6.93455 16.1168L5.60547 16.654V13.6993L6.93455 13.1621V16.1168Z"
            fill="white"
          />
          <path
            d="M6.93455 19.8765L5.60547 20.4137V17.4591L6.93455 16.9219V19.8765Z"
            fill="white"
          />
          <path
            d="M19.6943 11.0132L18.3652 11.5505V8.5958L19.6943 8.05859V11.0132Z"
            fill="white"
          />
          <path
            d="M21.8193 14.773L20.4902 15.3102V12.3556L21.8193 11.8184V14.773Z"
            fill="white"
          />
          <path
            d="M21.8193 18.8023L20.4902 19.3395V16.3849L21.8193 15.8477V18.8023Z"
            fill="white"
          />
          <path
            d="M30.5707 26.3019L29.9062 26.3233C29.6563 26.3314 25.2784 26.5006 21.02 28.1713C24.9115 25.5686 29.0396 24.8487 29.1034 24.838L29.76 24.7305L29.5474 23.4063L28.8908 23.5137C28.4921 23.5782 19.3879 25.1495 15.0604 32.4099C13.1359 30.2154 7.1816 23.9381 1.43199 23.2398L0.772771 23.1592L0.613281 24.4915L1.27251 24.572C7.57235 25.3349 14.5899 33.9141 14.659 34.0001L15.7648 33.8819C16.0705 33.2829 16.416 32.7269 16.7908 32.2031L16.7696 32.23L17.3278 31.8056C21.8759 27.9753 29.869 27.6664 29.9487 27.6637L30.6133 27.6422L30.5707 26.2992V26.3019Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1369_7151">
            <rect
              width="30"
              height="34"
              fill="white"
              transform="translate(0.613281)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default Logo;