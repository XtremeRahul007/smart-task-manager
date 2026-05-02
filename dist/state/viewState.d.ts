export type View = "tasks" | "create" | "edit" | "idle" | "inspect";
type ViewState = {
    current: View | null;
    previous: View | null;
};
export declare const viewState: ViewState;
export declare function setView(newView: View): void;
export declare function initLandingView(): void;
export {};
//# sourceMappingURL=viewState.d.ts.map