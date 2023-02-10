import fetch from 'node-fetch'
let handler  = async (m, { conn, text }) => {
try {
let res = await fetch('https://picsum.photos/200/300')
let img = await res.buffer()
let caption = `
𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿
`.trim()
conn.sendFile(m.chat, img, 'paisaje.jpg', caption, m)
} catch (e) {
console.log(e)
throw '*Error!*'
}}
handler.help = ['paisaje']
handler.tags = ['random']
handler.command = /^paisajes$/i
handler.fail = null
export default handler
