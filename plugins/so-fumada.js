import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 1000 
global.db.data.users[m.sender].exp += 1000
  
let vn = './media/fumada.mp3'
conn.sendFile(m.chat, vn, 'fumada.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /fumada| fumada|fumada|fun|fumada/
handler.command = new RegExp
export default handler
