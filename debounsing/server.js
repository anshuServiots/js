//import { json } from "body-parser"
import { WebSocketServer } from "ws"

const wss = new WebSocketServer({
    port : 3005
})

const names= [ 'anshu' , 'devansh' , 'idk' , 'shyam' , 'ram' ]

wss.on("connection" , function(ws){
    console.log("req came from frontend")

    ws.on('message' , function(message){ 
        const nameTOSearch = message.toString()      
        console.log(nameTOSearch)
        names.forEach((name)=>{
            if(name.includes( nameTOSearch )){
                console.log(name)
                ws.send(name)
            }
        })
    })
})