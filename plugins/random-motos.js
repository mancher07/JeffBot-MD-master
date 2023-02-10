import fetch from 'node-fetch'
let handler  = async (m, { conn, text }) => {
try {
let res = await fetch('https://loremflickr.com/g/320/240/motos/all')
let img = await res.buffer()
let caption = `
𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿
`.trim()
conn.sendFile(m.chat, img, 'motos.jpg', caption, m)
} catch (e) {
console.log(e)
throw '*Error!*'
}}
handler.help = ['motos']
handler.tags = ['random']
handler.command = /^motos$/i
handler.fail = null
export default handler
