import { UserInfo } from '@strapi/helper-plugin';
export declare const utils: {
    bufferToHex(buffer: ArrayBuffer): string;
    digestMessage(message: string): Promise<string>;
};
export declare function hashAdminUserEmail(payload?: UserInfo): Promise<string | null>;
