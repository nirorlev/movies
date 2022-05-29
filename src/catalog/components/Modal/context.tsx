import React, { createContext, useContext, useReducer } from "react";

export enum ActionKind {
  Reveal = "REVEAL",
  Hide = "HIDE",
  Position = "POSITION"
};

type Action = { type: ActionKind, payload: number | object };
type State = { hidden: boolean, offsetTop?: number, data?: object };
type Context = { state: State, dispatch: React.Dispatch<Action> };

const ModalContext = createContext<Context>({ state: { hidden: true }, dispatch: () => undefined });

export const ModalContextProvider = ({ children }: { children: React.ReactElement[] }) => {
  const [state, dispatch] = useReducer(
    (prev: any, action: Action) => {
      switch (action.type) {
        case ActionKind.Reveal:
          return { ...prev, hidden: false, data: action.payload };
        case ActionKind.Hide:
          return { ...prev, hidden: true };
        case ActionKind.Position:
          return { ...prev, offsetTop: action.payload };
        default:
          throw new Error("Dispatch modal action failed");
      }
    },
    { hidden: true, offsetTop: 0, data: {} }
  );

  return (
    <ModalContext.Provider value={{ state, dispatch }} >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext)

export { ModalContextProvider as default };
