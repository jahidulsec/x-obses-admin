import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: "transparent",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#e11d48",
        }}
      >
        <svg
          id="Layer_1"
          width={24}
          height={24}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 199.65 189.43"
        >
          <path
            d="M606.32,580.06a6.69,6.69,0,0,1,.87-7.11L737,414a6.7,6.7,0,0,1,5.19-2.47h56.45a6.71,6.71,0,0,1,5.19,10.95L674,581.43a6.69,6.69,0,0,1-5.19,2.46H612.38A6.71,6.71,0,0,1,606.32,580.06ZM784.48,424.91H745.35L626.51,570.48h39.13Z"
            transform="translate(-605.67 -394.47)"
            style={{ fill: "#005dcc" }}
          />
          <path
            d="M733.71,508.32l50.77,62.16,12.65,13.42h1.48a6.72,6.72,0,0,0,5.2-10.95l-61.43-75.24Z"
            transform="translate(-605.67 -394.47)"
            style={{ fill: "#005dcc" }}
          />
          <path
            d="M607.18,422.44l61.43,75.27,8.67,10.59,19.56,24,8.65,10.61L737,581.43a6.71,6.71,0,0,0,5.2,2.47h55l-12.65-13.42H745.36l-31.2-38.22-8.67-10.6-19.56-24-8.65-10.6-50.77-62.18h39.13L674,435.12a6.71,6.71,0,0,0,10.4-8.48L674,414a6.69,6.69,0,0,0-5.19-2.46H612.38a6.71,6.71,0,0,0-5.2,10.94Z"
            transform="translate(-605.67 -394.47)"
            style={{ fill: "#005dcc" }}
          />
          <path
            d="M677.62,394.47a23.78,23.78,0,1,1-23.79,23.78A23.78,23.78,0,0,1,677.62,394.47Z"
            transform="translate(-605.67 -394.47)"
            style={{ fill: "#ffc200" }}
          />
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
