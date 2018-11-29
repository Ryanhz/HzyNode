import app from "./app";
let port = 8008
app.listen(port,()=>{
  console.log(`服务启动：${port} 端口`)
})

export default app;