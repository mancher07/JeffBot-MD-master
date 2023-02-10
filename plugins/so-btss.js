import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0
if (!text) return m.reply(`*𝖏𝖊𝖋𝖋𝖑𝖔𝖗𝖉 𝖊𝖑 𝖒𝖊𝖏𝖔𝖗!*`) 
global.db.data.users[m.sender].money += 777 
global.db.data.users[m.sender].exp += 100
  
let vn = './media/btss.webp'
conn.sendFile(m.chat, vn, 'btss.webp', null, m, true, {
type: 'stickerMessage', 
ptt: true 
})
}
handler.customPrefix = /btss|king|lord/
handler.command = new RegExp
export default handler


