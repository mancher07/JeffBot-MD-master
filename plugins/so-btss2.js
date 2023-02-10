import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text }) => {
if (stiker) return conn.sendFile(m.chat, stiker, 'btss.webp', '', m)
if (!text) return m.reply(`*𝖏𝖊𝖋𝖋𝖑𝖔𝖗𝖉 𝖊𝖑 𝖒𝖊𝖏𝖔𝖗! 2*`)
throw stiker.toString() 
global.db.data.users[m.sender].money += 999 
global.db.data.users[m.sender].exp += 400
  
let vn = './media/btss.webp'
conn.sendFile(m.chat, vn, 'btss.webp', null, m, true, {
type: 'stickerMessage', 
ptt: true 
})
}
handler.customPrefix = /btss2|king2|lord2/
handler.command = new RegExp
export default handler


