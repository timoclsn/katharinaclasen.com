const NEXT_PUBLIC_VERCEL_ENV = process.env.NEXT_PUBLIC_VERCEL_ENV;
const NODE_ENV = process.env.NODE_ENV;

interface TrackingEvents {
  "Carousel item selected": {
    item: any;
  };
  "Carousel navigation": {
    direction: "next" | "prev";
  };
  "Accordion item selected": {
    title: string;
  };
  "Filter projects by service": {
    service: string;
  };
  "Filter projects by topic": {
    topic: string;
  };
  "Sort projects by": {
    sort: string;
  };
}

export const track = <TEventKey extends keyof TrackingEvents>(
  ...args: TrackingEvents[TEventKey] extends null
    ? [event: TEventKey]
    : [event: TEventKey, data: TrackingEvents[TEventKey]]
) => {
  const [event, data] = args;

  if (NODE_ENV === "development") {
    console.info("Tracking event:", { event, data });
    return;
  }

  if (NEXT_PUBLIC_VERCEL_ENV !== "production") return;

  // @ts-expect-error - stonks is loaded from external script
  if (typeof window === "undefined" || !window.stonks) return;

  // @ts-expect-error - stonks is loaded from external script
  window.stonks.event(event, data);
};
