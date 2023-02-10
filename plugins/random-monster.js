import fetch from 'node-fetch'
let handler  = async (m, { conn, text }) => {
try {
let res = await fetch('https://loremflickr.com/g/320/240/monster,energy/all')
let img = await res.buffer()
let caption = `
𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿
`.trim()
conn.sendFile(m.chat, img, 'monster.jpg', caption, m) https://loremflickr.com/g/320/240/nazismo/all
} catch (e) {
console.log(e)
throw '*Error!*'
}}
handler.help = ['monster']
handler.tags = ['random']
handler.command = /^monster$/i
handler.fail = null
export default handler
