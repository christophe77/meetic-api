export declare function init(): void;
export declare function write(key: string, value: string): void;
export declare function read(key: string): any;
export declare function readAsync(key: string): Promise<any>;
export declare function writeAsync(key: string, value: string): Promise<void>;
