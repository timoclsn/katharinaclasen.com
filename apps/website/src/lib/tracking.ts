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
  splitbee.track(event, data);
};
