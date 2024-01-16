export declare const useRegenerate: (url: string, id: number | string, onRegenerate: (accessKey: string) => void, onError?: ((error: unknown) => void) | undefined) => {
    isLoadingConfirmation: boolean;
    regenerateData: () => void;
};
