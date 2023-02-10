import fetch from 'node-fetch'
let handler  = async (m, { conn, text }) => {
try {
let res = await fetch('https://loremflickr.com/g/320/240/creepypasta/all')
let img = await res.buffer()
let caption = `
𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿
`.trim()
conn.sendFile(m.chat, img, 'creepypasta.jpg', caption, m)
} catch (e) {
console.log(e)
throw '*Error!*'
}}
handler.help = ['creepypasta']
handler.tags = ['random']
handler.command = /^creepypasta$/i
handler.fail = null
export default handler
