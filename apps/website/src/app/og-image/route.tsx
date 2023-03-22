/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { BackgroundColor, backgroundColorsValueMap } from "../../lib/colors";
import { getImage } from "../../lib/queries";

export const runtime = "experimental-edge";
export const dynamic = "force-dynamic";

const sourceSans3 = fetch(
  new URL("./source-sans-3-latin-400-normal.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const sourceSans3_500 = fetch(
  new URL("./source-sans-3-latin-500-normal.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const sourceSerif4 = fetch(
  new URL("./source-serif-4-latin-400-normal.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export const GET = async (request: Request) => {
  const sourceSans3Data = await sourceSans3;
  const sourceSans3_500Data = await sourceSans3_500;
  const sourceSerif4Data = await sourceSerif4;

  const { searchParams } = new URL(request.url);
  const overline = searchParams.get("overline") || "Katharina Clasen";
  const headline =
    searchParams.get("headline") ||
    "Freelance UX Designer with 10+ years of experience";
  const readingTime = searchParams.get("readingTime");
  const date = searchParams.get("date");
  const client = searchParams.get("client");
  const backgroundColor =
    (searchParams.get("backgroundColor") as BackgroundColor) || "secondary";
  const backgroundColorValue = backgroundColorsValueMap[backgroundColor];
  let image = searchParams.get("image") || "";

  // Default image
  if (!image) {
    const { url } = await getImage("cbe752c1-eb31-429f-8b5f-c8d7d6081296");
    image = url;
  }

  return new ImageResponse(
    (
      <div
        tw="flex w-full h-full"
        style={{
          backgroundColor: backgroundColorValue,
        }}
      >
        <div tw="w-[670px] px-6 py-10 flex flex-col justify-between items-start">
          <div tw="flex flex-col">
            {/* Overline */}
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
              {overline}
            </div>

            {/* Headline */}
            <div
              style={{
                fontFamily: "Serif",
                fontWeight: "400",
                color: "#171D2D",
                fontSize: "72px",
                lineHeight: "62px",
                wordBreak: "break-word",
              }}
            >
              {headline}
            </div>
            <div
              tw="flex items-center justify-start mt-[24px]"
              style={{
                gap: "50px",
              }}
            >
              {/* Reading time */}
              {readingTime && (
                <div
                  tw="flex items-center justify-center"
                  style={{
                    gap: "8px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(23, 29, 45, 0.64)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16.5 12"></polyline>
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
                    {readingTime}
                  </span>
                </div>
              )}

              {/* Date */}
              {date && (
                <div
                  tw="flex items-center justify-center"
                  style={{
                    gap: "8px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(23, 29, 45, 0.64)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                    <path d="M8 14h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 18h.01"></path>
                    <path d="M12 18h.01"></path>
                    <path d="M16 18h.01"></path>
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
                    {date}
                  </span>
                </div>
              )}

              {/* Client */}
              {client && (
                <div
                  tw="flex items-center justify-center"
                  style={{
                    gap: "8px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(23, 29, 45, 0.64)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
                    <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                    <circle cx="12" cy="10" r="2"></circle>
                    <line x1="8" y1="2" x2="8" y2="4"></line>
                    <line x1="16" y1="2" x2="16" y2="4"></line>
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
                    {client}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Tag */}
          <div
            tw="px-4 rounded-full flex items-center justify-center"
            style={{
              gap: "8px",
              border: "3px dashed rgba(23, 29, 45, 0.24)",
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
                fontFamily: "Sans 500",
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
          name: "Sans 500",
          data: sourceSans3_500Data,
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
