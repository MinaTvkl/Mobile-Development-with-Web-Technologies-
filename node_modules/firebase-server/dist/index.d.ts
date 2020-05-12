/// <reference types="node" />
import * as firebase from 'firebase';
import { AddressInfo } from 'net';
import * as WebSocket from 'ws';
declare class FirebaseServer {
    private name;
    private app;
    private baseRef;
    private authSecret;
    private targaryen;
    private https;
    private wss;
    private clock;
    private tokenValidator;
    private maxFrameLength;
    constructor(portOrOptions: any, name?: string, data?: null);
    protected handleConnection(ws: WebSocket & {
        _socket: any;
        frameBuffer?: string;
    }): void;
    setRules(rules: object): void;
    getData(ref?: firebase.database.Reference): null;
    getSnap(ref?: firebase.database.Reference): Promise<{}>;
    getValue(ref?: firebase.database.Reference): Promise<any>;
    exportData(ref?: firebase.database.Reference): Promise<any>;
    address(): string | AddressInfo;
    getPort(): number;
    close(callback?: (err?: Error) => void): Promise<void>;
    setTime(newTime: number | null): void;
    setAuthSecret(newSecret: string): void;
}
export = FirebaseServer;
