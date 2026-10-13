import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const root=resolve(import.meta.dirname);const port=Number(process.env.PORT||3000);
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.otf':'font/otf','.woff2':'font/woff2','.pdf':'application/pdf'};
createServer(async(req,res)=>{try{let path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(path==='/'){res.writeHead(302,{Location:'/presentation/index.html'});res.end();return}const file=resolve(root,'.'+path);if(!file.startsWith(root+sep)||path.split('/').some(p=>p.startsWith('.'))){res.writeHead(403);res.end();return}const data=await readFile(file);res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream'});res.end(data)}catch{res.writeHead(404);res.end('Not found')}}).listen(port,'0.0.0.0',()=>console.log(`KALINDO presentation running on port ${port}`));
