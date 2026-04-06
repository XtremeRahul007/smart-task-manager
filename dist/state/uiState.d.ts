type ActiveComponent = {
    name: string;
    close: () => void;
    needOverlay: boolean;
    dismissibleOverlay: boolean;
};
export declare function activeState(name: string, closeFunction: () => void, needOverlay: boolean, dismissibleOverlay: boolean): void;
export declare function closeState(name: string): void;
export declare function subscribe(listener: (state: ActiveComponent | null) => void): () => void;
export declare function getState(): ActiveComponent | null;
export {};
//# sourceMappingURL=uiState.d.ts.map