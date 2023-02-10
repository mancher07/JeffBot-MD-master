import fetch from 'node-fetch'
let handler  = async (m, { conn, text }) => {
try {
let res = await fetch('https://loremflickr.com/g/320/240/paris,girl/all')
let img = await res.buffer()
let caption = `
𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿
`.trim()
conn.sendFile(m.chat, img, 'cheetos.jpg', caption, m)
} catch (e) {
console.log(e)
throw '*Error!*'
}}
handler.help = ['cheetos']
handler.tags = ['random']
handler.command = /^cheetos$/i
handler.fail = null
export default handler
