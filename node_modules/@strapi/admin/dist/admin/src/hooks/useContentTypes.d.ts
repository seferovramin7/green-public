import { Component, ContentType } from '../../../shared/schema';
export declare function useContentTypes(): {
    isLoading: boolean;
    components: Component[];
    collectionTypes: ContentType[];
    singleTypes: ContentType[];
};
