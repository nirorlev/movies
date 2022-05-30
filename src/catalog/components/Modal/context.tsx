import React, { createContext, useContext, useReducer } from "react";

export enum ModalAction {
  Reveal = "REVEAL",
  Hide = "HIDE",
  Position = "POSITION"
};

type Action = { type: ModalAction, payload: number | object };
type State = { hidden: boolean, offsetTop?: number, data?: any };
type Context = { state: State, dispatch: React.Dispatch<Action> };

const ModalContext = createContext<Context>({ state: { hidden: true }, dispatch: () => undefined });

export const ModalContextProvider = ({ children }: { children: React.ReactElement[] }) => {
  const [state, dispatch] = useReducer(
    (prev: any, action: Action) => {
      switch (action.type) {
        case ModalAction.Reveal:
          return { ...prev, hidden: false, data: action.payload };
        case ModalAction.Hide:
          return { ...prev, hidden: true };
        case ModalAction.Position:
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
