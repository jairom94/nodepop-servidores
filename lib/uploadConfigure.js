import multer from "multer";
import path from 'node:path';
import { pathToUpload } from "./funcTools.js";


const storage = multer.diskStorage({
    destination:async function(req,file,cb) {
        const ruta = path.join(import.meta.dirname,'..','public','imgs','products')
        try {
            await pathToUpload(ruta)
            cb(null,ruta)
        } catch (error) {
            cb(error,null)
        }
    },
    filename:function(req,file,cb){
        const filename = `${Date.now()}-${file.originalname}`
        cb(null,filename)
    }
})

const upload = multer({ storage })

export default upload