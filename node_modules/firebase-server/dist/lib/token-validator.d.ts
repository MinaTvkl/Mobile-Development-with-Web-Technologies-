export declare function TokenValidator(secret?: string | null): {
    decode: (token: string, noVerify?: boolean) => any;
    isValidTimestamp: (claims: object, now?: number) => boolean;
    normalize: typeof normalize;
    setSecret: (newSecret?: string | null | undefined) => void;
    withSecret: (newSecret: any) => any;
};
export declare function normalize(input: object): {};
