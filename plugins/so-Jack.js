import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 13000 
global.db.data.users[m.sender].exp += 13000
  
let vn = './media/Jack.mp3'
conn.sendFile(m.chat, vn, 'Jack.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Jack| Jack|Jack|invocar a jack|Jack/
handler.command = new RegExp
export default handler
