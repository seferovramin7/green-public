export declare const formatAPIErrors: ({ data }: {
    data: Record<string, string[]>;
}) => Record<string, {
    id: string;
    defaultMessage: string;
}>;
