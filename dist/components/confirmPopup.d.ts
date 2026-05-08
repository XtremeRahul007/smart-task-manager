type ConfirmOptions = {
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
};
export declare function openConfirmPopup({ title, message, confirmText, cancelText }: ConfirmOptions): Promise<boolean>;
export {};
//# sourceMappingURL=confirmPopup.d.ts.map