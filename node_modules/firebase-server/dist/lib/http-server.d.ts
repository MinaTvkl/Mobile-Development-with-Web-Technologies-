/// <reference types="node" />
import * as firebase from 'firebase/app';
import * as http from 'http';
export declare function HttpServer(port: number, address: undefined, db: firebase.database.Database): http.Server;
