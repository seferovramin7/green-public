declare const _default: ({ strapi }: any) => {
    create: ({ userAbility, model }: any) => {
        can: (action: any, entity: any, field: any) => any;
        cannot: (action: any, entity: any, field: any) => any;
        sanitizeOutput: (data: any, { action }?: {
            action?: any;
        }) => any;
        sanitizeQuery: (query: any, { action }?: {
            action?: any;
        }) => any;
        sanitizeCreateInput: (data: any) => any;
        sanitizeUpdateInput: (entity: any) => (data: any) => any;
        validateQuery: (query: any, { action }?: {
            action?: any;
        }) => any;
        validateInput: (action: any, data: any, entity: any) => any;
        sanitizedQuery: (query: any, action: any) => Promise<any>;
    };
};
export default _default;
//# sourceMappingURL=permission-checker.d.ts.map