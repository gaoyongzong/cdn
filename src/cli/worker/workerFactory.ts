/**
*  worker map
*/
import { Worker } from '../model/worker';
import * as TYPES from '../type';
import { QiniuWorder } from './qiniuWorker';
import { AliyunWorker } from './aliyunWorker';


export function createWorker ( key: string ) : Worker {
    switch ( key ) {
        case TYPES.ALIYUN:
            return new AliyunWorker();
        case TYPES.TENCENT:    
        case TYPES.QINIU:
            return new QiniuWorder();
    }

    throw new Error('mapWorker key error');
}
