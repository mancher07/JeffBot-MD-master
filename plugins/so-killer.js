import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 1000 
global.db.data.users[m.sender].exp += 1000
  
let vn = './media/killer.mp3'
conn.sendFile(m.chat, vn, 'killer.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /killer| killer|killer|invocar a jeff the killer|killer/
handler.command = new RegExp
export default handler
