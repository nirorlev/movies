import React, { createContext, useContext, useReducer } from "react";

export enum SortAction {
  Votes = "VOTES",
  Az = "A-Z",
  Trending = "TRENDING",
  New = "NEW"
};

type Action = { type: SortAction };
type State = { selected?: string, method: (ar: any[]) => any[] };
type Context = { state: State, dispatch: React.Dispatch<Action> };

const initial = { selected: SortAction.Trending, method: (ar: any[]) => ar };
const SortContext = createContext<Context>({ state: initial, dispatch: () => undefined });

const byVotes = (ar: {vote_count: number, vote_average: number}[]) =>
  [...ar].sort((x, y) => y.vote_count * y.vote_average - x.vote_count * x.vote_average);
const byAz = (ar: {title: string}[]) =>
  [...ar].sort((x, y) => x.title.localeCompare(y.title));
const byTrending = (ar: {popularity: number}[]) =>
  [...ar].sort((x, y) => y.popularity - x.popularity );
const byDate = (ar: {release_date: string}[]) =>
  [...ar].sort((x, y) => y.release_date.localeCompare(x.release_date) );

export const SortContextProvider = ({ children }: { children: React.ReactElement[] }) => {
  const [state, dispatch] = useReducer(
    (prev: any, action: Action) => {
      switch (action.type) {
        case SortAction.Votes:
          return { ...prev, selected: SortAction.Votes, method: byVotes };
        case SortAction.Az:
          return { ...prev, selected: SortAction.Az, method: byAz };
        case SortAction.Trending:
            return { ...prev, selected: SortAction.Trending, method: byTrending };
        case SortAction.New:
          return { ...prev, selected: SortAction.New, method: byDate };
        default:
          throw new Error("Dispatch sort action failed");
      }
    }, initial
  );

  return (
    <SortContext.Provider value={{ state, dispatch }} >
      {children}
    </SortContext.Provider>
  );
};

export const useSort = () => useContext(SortContext)

export { SortContextProvider as default };
