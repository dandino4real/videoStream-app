/// <reference types="multer" />
import { Video } from "../model/video.schema";
import { VideoService } from "../service/video.service";
export declare class VideoController {
    private readonly videoService;
    constructor(videoService: VideoService);
    createBook(response: any, request: any, video: Video, files: {
        video?: Express.Multer.File[];
        cover?: Express.Multer.File[];
    }): Promise<any>;
    read(id: any): Promise<Object>;
    stream(id: any, response: any, request: any): Promise<void>;
    update(response: any, id: any, video: Video): Promise<any>;
    delete(response: any, id: any): Promise<any>;
}
