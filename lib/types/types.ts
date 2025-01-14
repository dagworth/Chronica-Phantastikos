export type Stringifiable = { toString: () => string };

export type VoidedFunction = (...args: any[]) => void;

export type ReplaceKeys<Type, Keys extends string, NewType> = Omit<Type, Keys> & {
    [key in Keys]: NewType;
};
