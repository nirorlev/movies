import { EventHandler, SyntheticEvent } from "react";

const fallbackHandler: EventHandler<any> = (event: Event) => {
  event.preventDefault();
  alert(":( Sorry still a TODO\nIt was not part of the assigment");
};

export { fallbackHandler };
