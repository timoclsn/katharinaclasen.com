/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";

export const runtime = "experimental-edge";

const sourceSans3 = fetch(
  new URL("./source-sans-3-latin-400-normal.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const sourceSerif4 = fetch(
  new URL("./source-serif-4-latin-400-normal.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export const GET = async (request: Request) => {
  const sourceSans3Data = await sourceSans3;
  const sourceSerif4Data = await sourceSerif4;

  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "";
  const subtitle = searchParams.get("subtitle") || "";
  const image = searchParams.get("image") || "";

  return new ImageResponse(
    (
      <div tw="flex w-full h-full bg-[#F9F7F6]">
        <div tw="w-[670px] p-10 flex flex-col justify-between items-start">
          <div tw="flex flex-col">
            <div
              style={{
                fontFamily: "Sans",
                fontWeight: "400",
                color: "rgba(23, 29, 45, 0.64)",
                fontSize: "32px",
                lineHeight: "32px",
                marginBottom: "24px",
              }}
            >
              {subtitle}
            </div>
            <div
              style={{
                fontFamily: "Serif",
                fontWeight: "400",
                color: "#171D2D",
                fontSize: "72px",
                lineHeight: "62px",
              }}
            >
              {title}
            </div>
          </div>
          <div
            tw="px-4 rounded-full flex items-center justify-center"
            style={{
              gap: "4px",
              border: "3px dashed rgba(23, 29, 45, 0.24)",
              color: "",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#686B75"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span
              style={{
                fontFamily: "Sans",
                fontWeight: "400",
                color: "#171D2D",
                fontSize: "24px",
                lineHeight: "32px",
              }}
            >
              katharinaclasen.com
            </span>
          </div>
        </div>
        <img
          src={image}
          alt="Image"
          tw="w-[530px] h-full"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Sans",
          data: sourceSans3Data,
          style: "normal",
        },
        {
          name: "Serif",
          data: sourceSerif4Data,
          style: "normal",
        },
      ],
    }
  );
};
