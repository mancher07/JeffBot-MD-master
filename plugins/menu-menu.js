import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let vn = './media/menu.mp3'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
let pp = gataVidMenu.getRandom()
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}


let menuA = `${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level} || ${user.exp - min}/${xp}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'} ${(conn.user.jid == global.conn.user.jid ? '' : `\n┊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┊დ 𝙎𝙊𝙔 𝙐𝙉 𝙎𝙐𝘽 𝘽𝙊𝙏 𝘿𝙀𝙇: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || ''}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱`.trim()

let menuB = `
*╭━〔* ${username} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ' : ''} *〕━✪*
*┆⚡ EXPERIENCIA ➟ ${exp}*
*┆💎 DIAMANTES ➟ ${limit}*
*┆🩸 JEFFCOINS ➟ ${money}*
*┆🪙 TOKENS ➟ ${joincount}*
*╰*▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*
${readMore}
*╭━〔 🩸𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜Ó𝗡 𝗗𝗘 𝗝𝗘𝗙𝗙𝗕𝗢𝗧🩸 〕✪*
┃💫🔪➺ _${usedPrefix}🩸🔪cuentasJeffbot | cuentasgb_
┃💫🔪➺ _${usedPrefix}🩸🔪gruposgb | grupos | groupgb_
┃💫🔪➺ _${usedPrefix}🩸🔪donar | donate_
┃💫🔪➺ _${usedPrefix}🩸🔪listagrupos | grouplist_
┃💫🔪➺ _${usedPrefix}🩸🔪estado | heyJeff | status_
┃💫🔪➺ _${usedPrefix}🩸🔪infoJeff | infobot_
┃💫🔪➺ _${usedPrefix}🩸🔪instalarbot | installbot_
┃💫🔪➺ _${usedPrefix}🩸🔪creadora | owner_
┃💫🔪➺ _${usedPrefix}🩸🔪velocidad | ping_
┃💫➺ _Bot_ 
┃💫➺ _términos y condiciones_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━〔 FUNCIÓN SUB BOT 〕━✪*
┃ *Ya puedes convertir tú*
┃ *Número en JeffBot!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💻 _${usedPrefix}serbot | jadibot_
┃💻 _${usedPrefix}bots | listjadibots_
┃💻 _${usedPrefix}detener | stop_
┃💻 _${usedPrefix}bcbot_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━〔 REPORTAR COMANDO 〕━✪*
┃ *Reporta con este comando de haber*
┃ *Fallas para poder Solucionar!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 💌 _${usedPrefix}reporte *texto*_
┃ 💌 _${usedPrefix}report *texto*_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━〔 ÚNETE AL GRUPO 〕━✪*
┃ *Une a JeffBot en Grupos!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🪅 _${usedPrefix}botemporal *enlace* *cantidad*_
┃🪅 _${usedPrefix}addbot *enlace* *cantidad*_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━〔 SER PREMIUM 〕━✪*
┃ *Convierte en un(a)*
┃ *Usuario(a) Premium!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🎟️ _${usedPrefix}listapremium | listprem_
┃🎟️ _${usedPrefix}pase premium_
┃🎟️ _${usedPrefix}pass premium_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━〔 JUEGOS - MULTI JUEGOS 〕━✪*
┃🎡🔪➺ _${usedPrefix}🩸🔪mates | matemáticas | math_
┃🎡🔪➺ _${usedPrefix}🩸🔪ppt *piedra : papel : tijera*_
┃🎡🔪➺ _${usedPrefix}🩸🔪tictactoe | ttt *sala*_
┃🎡🔪➺ _${usedPrefix}🩸🔪deltictactoe | delttt_
┃🎡🔪➺ _${usedPrefix}🩸🔪topgays_
┃🎡🔪➺ _${usedPrefix}🩸🔪topotakus_
┃🎡🔪➺ _${usedPrefix}🩸🔪toppajer@s_
┃🎡🔪➺ _${usedPrefix}🩸🔪topput@s_
┃🎡🔪➺ _${usedPrefix}🩸🔪topintegrantes | topintegrante_
┃🎡🔪➺ _${usedPrefix}🩸🔪toplagrasa | topgrasa_
┃🎡🔪➺ _${usedPrefix}🩸🔪toppanafrescos | toppanafresco_
┃🎡🔪➺ _${usedPrefix}🩸🔪topshiposters | topshipost_
┃🎡🔪➺ _${usedPrefix}🩸🔪toplindos | toplind@s_
┃🎡🔪➺ _${usedPrefix}🩸🔪topfamosos | topfamos@s_
┃🎡🔪➺ _${usedPrefix}🩸🔪topparejas | top5parejas_
┃🎡🔪➺ _${usedPrefix}🩸🔪gay | gay *@tag*_
┃🎡🔪➺ _${usedPrefix}🩸🔪gay2 *nombre : @tag*_
┃🎡🔪➺ _${usedPrefix}🩸🔪lesbiana *nombre : @tag*_
┃🎡🔪➺ _${usedPrefix}🩸🔪manca *nombre : @tag*_
┃🎡🔪➺ _${usedPrefix}🩸🔪manco *nombre : @tag*_
┃🎡🔪➺ _${usedPrefix}🩸🔪pajero *nombre : @tag*_
┃🎡🔪➺ _${usedPrefix}🩸🔪pajera *nombre : @tag*_
┃🎡🔪➺ _${usedPrefix}🩸🔪puto *nombre : @tag*_
┃🎡🔪➺ _${usedPrefix}🩸🔪puta *nombre : @tag*_
┃🎡🔪➺ _${usedPrefix}🩸🔪rata *nombre : @tag*_
┃🎡🔪➺ _${usedPrefix}🩸🔪love *nombre : @tag*_
┃🎡🔪➺ _${usedPrefix}🩸🔪doxear *nombre : @tag*_
┃🎡🔪➺ _${usedPrefix}🩸🔪doxxeame_
┃🎡🔪➺ _${usedPrefix}🩸🔪pregunta *texto*_
┃🎡🔪➺ _${usedPrefix}🩸🔪apostar | slot *cantidad*_
┃🎡🔪➺ _${usedPrefix}🩸🔪formarpareja_
┃🎡🔪➺ _${usedPrefix}🩸🔪dado_
┃🎡🔪➺ _${usedPrefix}🩸🔪verdad_
┃🎡🔪➺ _${usedPrefix}🩸🔪reto_
┃🎡🔪➺ _${usedPrefix}🩸🔪multijuegos_
┃🎡🔪➺ _${usedPrefix}🩸🔪juegos_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━〔 IA 〕━✪*
┃ *Tienes la Ocasión de*
┃ *Conversar con JeffBot!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🪄🔪➺ _${usedPrefix}🩸🔪simi | okgoogle *texto*_
┃🪄🔪➺ _${usedPrefix}🩸🔪alexa | siri | cortana *texto*_
┃🪄🔪➺ _${usedPrefix}🩸🔪simsimi | bixby *texto*_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━━━[ AJUSTES - CHATS ]━━━✪*
┃ *Configura si eres Propietario(a) y/o*
┃ *Admin!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⚙️ _${usedPrefix}on *:* off *bienvenida | welcome*_
┃⚙️ _${usedPrefix}on *:* off *avisos | detect*_
┃⚙️ _${usedPrefix}on *:* off *autonivel | autolevelup*_
┃⚙️ _${usedPrefix}on *:* off *restringir | restrict*_
┃⚙️ _${usedPrefix}on *:* off *antillamar | anticall*_
┃⚙️ _${usedPrefix}on *:* off *publico | public*_
┃⚙️ _${usedPrefix}on *:* off *autovisto | autoread*_
┃⚙️ _${usedPrefix}on *:* off *temporal*_
┃⚙️ _${usedPrefix}on *:* off *stickers*_
┃⚙️ _${usedPrefix}on *:* off *autosticker*_
┃⚙️ _${usedPrefix}on *:* off *reacciones | reaction*_
┃⚙️ _${usedPrefix}on *:* off *audios*_
┃⚙️ _${usedPrefix}on *:* off *modocaliente | modohorny*_
┃⚙️ _${usedPrefix}on *:* off *antitoxicos | antitoxic*_
┃⚙️ _${usedPrefix}on *:* off *antiver | antiviewonce*_
┃⚙️ _${usedPrefix}on *:* off *antieliminar | antidelete*_
┃⚙️ _${usedPrefix}on *:* off *antinternacional | antifake*_
┃⚙️ _${usedPrefix}on *:* off *antienlace | antilink*_
┃⚙️ _${usedPrefix}on *:* off *antienlace2 | antilink2*_
┃⚙️ _${usedPrefix}on *:* off *antitiktok | antitk*_
┃⚙️ _${usedPrefix}on *:* off *antiyoutube | antiyt*_
┃⚙️ _${usedPrefix}on *:* off *antitelegram | antitel*_
┃⚙️ _${usedPrefix}on *:* off *antifacebook | antifb*_
┃⚙️ _${usedPrefix}on *:* off *antinstagram | antig*_
┃⚙️ _${usedPrefix}on *:* off *antitwitter | antitw*_
┃⚙️ _${usedPrefix}on *:* off *soloprivados | pconly*_
┃⚙️ _${usedPrefix}on *:* off *sologrupos | gconly*_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━〔 GRUPO - RESUMEN 〕━✪*
┃ *Ahora puedes ver el resumen*
┃ *de configuracion de Grupos!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🧾🔪➺ _${usedPrefix}🩸🔪configuracion_
┃🧾🔪➺ _${usedPrefix}🩸🔪settings_
┃🧾🔪➺ _${usedPrefix}🩸🔪vergrupo_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━[ DESCARGAS | DOWNLOADS ]━✪*
┃🚀🔪➺ _${usedPrefix}🩸🔪imagen | image *texto*_
┃🚀🔪➺ _${usedPrefix}🩸🔪pinterest | dlpinterest *texto*_
┃🚀🔪➺ _${usedPrefix}🩸🔪wallpaper|wp *texto*_
┃🚀🔪➺ _${usedPrefix}🩸🔪play | play2 *texto o link*_
┃🚀🔪➺ _${usedPrefix}🩸🔪play.1 *texto o link*_
┃🚀🔪➺ _${usedPrefix}🩸🔪play.2 *texto o link*_ 
┃🚀🔪➺ _${usedPrefix}🩸🔪ytmp3 | yta *link*_
┃🚀🔪➺ _${usedPrefix}🩸🔪ytmp4 | ytv *link*_
┃🚀🔪➺ _${usedPrefix}🩸🔪pdocaudio | ytadoc *link*_
┃🚀🔪➺ _${usedPrefix}🩸🔪pdocvieo | ytvdoc *link*_
┃🚀🔪➺ _${usedPrefix}🩸🔪tw |twdl | twitter *link*_
┃🚀🔪➺ _${usedPrefix}🩸🔪facebook | fb *link*_
┃🚀🔪➺ _${usedPrefix}🩸🔪instagram *link video o imagen*_
┃🚀🔪➺ _${usedPrefix}🩸🔪verig | igstalk *usuario(a)*_
┃🚀🔪➺ _${usedPrefix}🩸🔪ighistoria | igstory *usuario(a)*_
┃🚀🔪➺ _${usedPrefix}🩸🔪tiktok *link*_
┃🚀🔪➺ _${usedPrefix}🩸🔪tiktokfoto | tiktokphoto *usuario(a)*_
┃🚀🔪➺ _${usedPrefix}🩸🔪vertiktok | tiktokstalk *usuario(a)*_
┃🚀🔪➺ _${usedPrefix}🩸🔪mediafire | dlmediafire *link*_
┃🚀🔪➺ _${usedPrefix}🩸🔪clonarepo | gitclone *link*_
┃🚀🔪➺ _${usedPrefix}🩸🔪clima *país ciudad*_
┃🚀🔪➺ _${usedPrefix}🩸🔪consejo_
┃🚀🔪➺ _${usedPrefix}🩸🔪morse codificar *texto*_
┃🚀🔪➺ _${usedPrefix}🩸🔪morse decodificar *morse*_
┃🚀🔪➺ _${usedPrefix}🩸🔪fraseromantica_
┃🚀🔪➺ _${usedPrefix}🩸🔪historia_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━[ CHAT ANONIMO ]━✪*
┃ *¡Escribe con Alguien* 
┃ *de forma Anónima!* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃👤🔪➺ _${usedPrefix}🩸🔪chatanonimo | anonimochat_
┃👤🔪➺ _${usedPrefix}🩸🔪anonimoch_
┃👤🔪➺ _${usedPrefix}🩸🔪start_
┃👤🔪➺ _${usedPrefix}🩸🔪next_
┃👤🔪➺ _${usedPrefix}🩸🔪leave_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━[ CONFIGURACIÓN - GRUPOS ]━✪*
┃ *Mejora tú Grupo con JeffBot!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🌐🔪➺ _${usedPrefix}🩸🔪add *numero*_
┃🌐🔪➺ _${usedPrefix}🩸🔪sacar | ban | kick  *@tag*_
┃🌐🔪➺ _${usedPrefix}🩸🔪grupo *abrir : cerrar*_
┃🌐🔪➺ _${usedPrefix}🩸🔪group *open : close*_
┃🌐🔪➺ _${usedPrefix}🩸🔪daradmin | promote *@tag*_
┃🌐🔪➺ _${usedPrefix}🩸🔪quitar | demote *@tag*_
┃🌐🔪➺ _${usedPrefix}🩸🔪banchat_
┃🌐🔪➺ _${usedPrefix}🩸🔪unbanchat_
┃🌐🔪➺ _${usedPrefix}🩸🔪banuser *@tag*_
┃🌐🔪➺ _${usedPrefix}🩸🔪unbanuser *@tag*_
┃🌐🔪➺ _${usedPrefix}🩸🔪admins *texto*_
┃🌐🔪➺ _${usedPrefix}🩸🔪invocar *texto*_
┃🌐🔪➺ _${usedPrefix}🩸🔪tagall *texto*_
┃🌐🔪➺ _${usedPrefix}🩸🔪hidetag *texto*_
┃🌐🔪➺ _${usedPrefix}🩸🔪infogrupo | infogroup_
┃🌐🔪➺ _${usedPrefix}🩸🔪grupotiempo | grouptime *Cantidad*_
┃🌐🔪➺ _${usedPrefix}🩸🔪advertencia *@tag*_
┃🌐🔪➺ _${usedPrefix}🩸🔪deladvertencia *@tag*_
┃🌐🔪➺ _${usedPrefix}🩸🔪delwarn *@tag*_
┃🌐🔪➺ _${usedPrefix}🩸🔪crearvoto | startvoto *texto*_
┃🌐🔪➺ _${usedPrefix}🩸🔪sivotar | upvote_
┃🌐🔪➺ _${usedPrefix}🩸🔪novotar | devote_
┃🌐🔪➺ _${usedPrefix}🩸🔪vervotos | cekvoto_
┃🌐🔪➺ _${usedPrefix}🩸🔪delvoto | deletevoto_
┃🌐🔪➺ _${usedPrefix}🩸🔪enlace | link_
┃🌐🔪➺ _${usedPrefix}🩸🔪newnombre | nuevonombre *texto*_
┃🌐🔪➺ _${usedPrefix}🩸🔪newdesc | descripcion *texto*_
┃🌐🔪➺ _${usedPrefix}🩸🔪setwelcome | bienvenida *texto*_
┃🌐🔪➺ _${usedPrefix}🩸🔪setbye | despedida *texto*_
┃🌐🔪➺ _${usedPrefix}🩸🔪nuevoenlace | resetlink_
┃🌐🔪➺ _${usedPrefix}🩸🔪on_
┃🌐🔪➺ _${usedPrefix}🩸🔪off_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━━━[ PAREJAS 💞 ]━━✪*
┃ *Declarate con alguien*
┃ *para que sean Parejas!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃❤️🔪➺ _${usedPrefix}🩸🔪listaparejas | listship_
┃❤️🔪➺ _${usedPrefix}🩸🔪mipareja | mylove_
┃❤️🔪➺ _${usedPrefix}🩸🔪pareja | couple *@tag*_
┃❤️🔪➺ _${usedPrefix}🩸🔪aceptar | accept *@tag*_
┃❤️🔪➺ _${usedPrefix}🩸🔪rechazar | decline *@tag*_
┃❤️🔪➺ _${usedPrefix}🩸🔪terminar | finish *@tag*_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━[ VOTACIONES EN GRUPOS 📧 ]━✪*
┃ *Ahora puedes hacer*
┃ *Votaciones en Grupos!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃📧🔪➺ _${usedPrefix}🩸🔪crearvoto | startvoto *texto*_
┃📧🔪➺ _${usedPrefix}🩸🔪sivotar | upvote_
┃📧🔪➺ _${usedPrefix}🩸🔪novotar | devote_
┃📧🔪➺ _${usedPrefix}🩸🔪vervotos | cekvoto_
┃📧🔪➺ _${usedPrefix}🩸🔪delvoto | deletevoto_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━━━[ CONTENIDO 🔞 ]━━✪*
┃ *Visita el Menú de Comandos*
┃ *Para Adultos!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔞🔪➺ _${usedPrefix}🩸🔪hornymenu_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━[ CONVERTIDORES 🛰️ ]━✪*
┃ *Convierte sticker en imagen!!*
┃ *Crea enlace de archivos!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🛰️🔪➺ _${usedPrefix}🩸🔪toimg | img | jpg *sticker*_
┃🛰️🔪➺ _${usedPrefix}🩸🔪tomp3 | mp3 *video o nota de voz*_
┃🛰️🔪➺ _${usedPrefix}🩸🔪tovn | vn *video o audio*_
┃🛰️🔪➺ _${usedPrefix}🩸🔪tovideo *audio*_
┃🛰️🔪➺ _${usedPrefix}🩸🔪tourl *video, imagen*_
┃🛰️🔪➺ _${usedPrefix}🩸🔪toenlace  *video, imagen o audio*_
┃🛰️🔪➺ _${usedPrefix}🩸🔪tts es *texto*_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━━━[ LOGOS 🔆 ]━━✪*
┃ *Crea Logos o personaliza*
┃ *la información del Logo!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔆 _${usedPrefix}logos *efecto texto*_
┃🌅 _${usedPrefix}menulogos2_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━━━[ EFECTOS ⛺ ]━━✪*
┃⛺ _${usedPrefix}simpcard *@tag*_
┃⛺ _${usedPrefix}hornycard *@tag*_
┃⛺ _${usedPrefix}lolice *@tag*_
┃⛺ _${usedPrefix}ytcomment *texto*_
┃⛺ _${usedPrefix}itssostupid_
┃⛺ _${usedPrefix}pixelar_
┃⛺ _${usedPrefix}blur_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━[ RANDOM | ANIME 🧩 ]━✪*
┃🧩 _${usedPrefix}chica_
┃🧩 _${usedPrefix}chico_
┃🧩 _${usedPrefix}cristianoronaldo_
┃🧩 _${usedPrefix}messi_
┃🧩 _${usedPrefix}meme_
┃🧩 _${usedPrefix}meme2_
┃🧩 _${usedPrefix}itzy_
┃🧩 _${usedPrefix}blackpink_
┃🧩 _${usedPrefix}kpop *blackpink : exo : bts*_
┃🧩 _${usedPrefix}lolivid_
┃🧩 _${usedPrefix}loli_
┃🧩 _${usedPrefix}navidad_
┃🧩 _${usedPrefix}ppcouple_
┃🧩 _${usedPrefix}neko_
┃🧩 _${usedPrefix}waifu_
┃🧩 _${usedPrefix}akira_
┃🧩 _${usedPrefix}akiyama_
┃🧩 _${usedPrefix}anna_
┃🧩 _${usedPrefix}asuna_
┃🧩 _${usedPrefix}ayuzawa_
┃🧩 _${usedPrefix}boruto_
┃🧩 _${usedPrefix}chiho_
┃🧩 _${usedPrefix}chitoge_
┃🧩 _${usedPrefix}deidara_
┃🧩 _${usedPrefix}erza_
┃🧩 _${usedPrefix}elaina_
┃🧩 _${usedPrefix}eba_
┃🧩 _${usedPrefix}emilia_
┃🧩 _${usedPrefix}hestia_
┃🧩 _${usedPrefix}hinata_
┃🧩 _${usedPrefix}inori_
┃🧩 _${usedPrefix}isuzu_
┃🧩 _${usedPrefix}itachi_
┃🧩 _${usedPrefix}itori_
┃🧩 _${usedPrefix}kaga_
┃🧩 _${usedPrefix}kagura_
┃🧩 _${usedPrefix}kaori_
┃🧩 _${usedPrefix}keneki_
┃🧩 _${usedPrefix}kotori_
┃🧩 _${usedPrefix}kurumi_
┃🧩 _${usedPrefix}madara_
┃🧩 _${usedPrefix}mikasa_
┃🧩 _${usedPrefix}miku_
┃🧩 _${usedPrefix}minato_
┃🧩 _${usedPrefix}naruto_
┃🧩 _${usedPrefix}nezuko_
┃🧩 _${usedPrefix}sagiri_
┃🧩 _${usedPrefix}sasuke_
┃🧩 _${usedPrefix}sakura_
┃🧩 _${usedPrefix}cosplay_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━[ MODIFICAR AUDIO 🧰 ]━✪*
┃ *Realiza Modificaciones*
┃ *al Audio o Nota de Voz!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🧰 _${usedPrefix}bass_
┃🧰 _${usedPrefix}blown_
┃🧰 _${usedPrefix}deep_
┃🧰 _${usedPrefix}earrape_
┃🧰 _${usedPrefix}fast_
┃🧰 _${usedPrefix}fat_
┃🧰 _${usedPrefix}nightcore_
┃🧰 _${usedPrefix}reverse_
┃🧰 _${usedPrefix}robot_
┃🧰 _${usedPrefix}slow_
┃🧰 _${usedPrefix}smooth_
┃🧰 _${usedPrefix}tupai_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━━[ BÚSQUEDAS 🔍 ]━━✪*
┃ *Busca lo que quieres con JeffBot!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔍🔪➺ _${usedPrefix}🩸🔪animeinfo *texto*_
┃🔍🔪➺ _${usedPrefix}🩸🔪mangainfo *texto*_
┃🔍🔪➺ _${usedPrefix}🩸🔪google *texto*_
┃🔍🔪➺ _${usedPrefix}🩸🔪letra | lirik *texto*_
┃🔍🔪➺ _${usedPrefix}🩸🔪ytsearch | yts *texto*_
┃🔍🔪➺ _${usedPrefix}🩸🔪wiki | wikipedia *texto*_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━━━[ AUDIOS 🔊 ]━━✪*
┃ *Visita el Menú de Audios!!*
┃ *Disfruta de una Gran Variedad*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➫🔊 _${usedPrefix}audios_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━━[ HERRAMIENTAS 🛠️ ]━━✪*
┃🛠️ _${usedPrefix}afk *motivo*_
┃🛠️ _${usedPrefix}acortar *url*_
┃🛠️ _${usedPrefix}calc *operacion math*_
┃🛠️ _${usedPrefix}del *respondre a mensaje del Bot*_
┃🛠️ _${usedPrefix}qrcode *texto*_
┃🛠️ _${usedPrefix}readmore *texto1|texto2*_
┃🛠️ _${usedPrefix}spamwa *numero|texto|cantidad*_
┃🛠️ _${usedPrefix}styletext *texto*_
┃🛠️ _${usedPrefix}traducir *texto*_
┃🛠️🔪➺ _${usedPrefix}🩸🔪morse codificar *texto*_
┃🛠️🔪➺ _${usedPrefix}🩸🔪morse decodificar *morse*_
┃🛠️🔪➺ _${usedPrefix}🩸🔪encuesta | poll *Motivo*_
┃🛠️🔪➺ _${usedPrefix}🩸🔪horario_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━━━[ FUNCIÓN RPG ]━━✪*
┃ *Compra, Adquiere Recuersos*
┃ *Mejora Tú Nivel y Rango!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🪅 _${usedPrefix}botemporal *enlace* *cantidad*_
┃🪅 _${usedPrefix}addbot *enlace* *cantidad*_
┃⚗️🔪➺ _${usedPrefix}🩸🔪pase premium_
┃⚗️🔪➺ _${usedPrefix}🩸🔪pass premium_
┃⚗️🔪➺ _${usedPrefix}🩸🔪listapremium | listprem_
┃⚗️🔪➺ _${usedPrefix}🩸🔪transfer *tipo cantidad @tag*_
┃⚗️🔪➺ _${usedPrefix}🩸🔪dar *tipo cantidad @tag*_
┃⚗️🔪➺ _${usedPrefix}🩸🔪enviar *tipo cantidad @tag*_
┃⚗️🔪➺ _${usedPrefix}🩸🔪balance_
┃⚗️🔪➺ _${usedPrefix}🩸🔪cartera | wallet_
┃⚗️🔪➺ _${usedPrefix}🩸🔪experiencia | exp_
┃⚗️🔪➺ _${usedPrefix}🩸🔪top | lb | leaderboard_
┃⚗️🔪➺ _${usedPrefix}🩸🔪nivel | level | lvl_
┃⚗️🔪➺ _${usedPrefix}🩸🔪rol | rango_
┃⚗️🔪➺ _${usedPrefix}🩸🔪inventario | inventory_
┃⚗️🔪➺ _${usedPrefix}🩸🔪aventura | adventure_
┃⚗️🔪➺ _${usedPrefix}🩸🔪caza | cazar | hunt_
┃⚗️🔪➺ _${usedPrefix}🩸🔪pescar | fishing_
┃⚗️🔪➺ _${usedPrefix}🩸🔪animales_
┃⚗️🔪➺ _${usedPrefix}🩸🔪alimentos_
┃⚗️🔪➺ _${usedPrefix}🩸🔪curar | heal_
┃⚗️🔪➺ _${usedPrefix}🩸🔪buy_
┃⚗️🔪➺ _${usedPrefix}🩸🔪sell_
┃⚗️🔪➺ _${usedPrefix}🩸🔪verificar | registrar_
┃⚗️🔪➺ _${usedPrefix}🩸🔪perfil | profile_
┃⚗️🔪➺ _${usedPrefix}🩸🔪myns_
┃⚗️🔪➺ _${usedPrefix}🩸🔪unreg *numero de serie*_
┃⚗️🔪➺ _${usedPrefix}🩸🔪minardiamantes | minargemas_
┃⚗️🔪➺ _${usedPrefix}🩸🔪minarJeffcoins | minarcoins_
┃⚗️🔪➺ _${usedPrefix}🩸🔪minarexperiencia | minarexp_
┃⚗️🔪➺ _${usedPrefix}🩸🔪minar *:* minar2 *:* minar3_
┃⚗️🔪➺ _${usedPrefix}🩸🔪reclamar | regalo | claim_
┃⚗️🔪➺ _${usedPrefix}🩸🔪cadahora | hourly_
┃⚗️🔪➺ _${usedPrefix}🩸🔪cadasemana | semanal | weekly_
┃⚗️🔪➺ _${usedPrefix}🩸🔪cadames | mes | monthly_
┃⚗️🔪➺ _${usedPrefix}🩸🔪cofre | abrircofre | coffer_
┃⚗️🔪➺ _${usedPrefix}🩸🔪trabajar | work_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━━━[ TOP EN JeffBOT ]━━✪*
┃ *Averigua en que Top te encuentras!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🏆🔪➺ _${usedPrefix}🩸🔪top | lb | leaderboard_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━[ STICKERS Y FILTROS ]━✪*
┃ *Realiza stickers o crea*
┃ *stickers con filtros!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🎐 _${usedPrefix}sticker | s *imagen o video*_
┃🎐 _${usedPrefix}sticker | s *url de tipo jpg*_
┃🎐 _${usedPrefix}emojimix *😺+😆*_
┃🎐 _${usedPrefix}scircle | círculo *imagen*_
┃🎐 _${usedPrefix}semoji | emoji *tipo emoji*_
┃🎐 _${usedPrefix}attp *texto*_
┃🎐 _${usedPrefix}attp2 *texto*_
┃🎐 _${usedPrefix}ttp *texto*_
┃🎐 _${usedPrefix}ttp2 *texto*_
┃🎐 _${usedPrefix}ttp3 *texto*_
┃🎐 _${usedPrefix}ttp4 *texto*_
┃🎐 _${usedPrefix}ttp5 *texto*_
┃🎐 _${usedPrefix}ttp6 *texto*_
┃🎐 _${usedPrefix}dado_
┃🎐 _${usedPrefix}stickermarker *efecto : responder a imagen*_
┃🎐 _${usedPrefix}stickerfilter *efecto : responder a imagen*_
┃🎐 _${usedPrefix}cs *:* cs2_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━[ MODIFICAR STICKERS ]━✪*
┃ *Personaliza la información del Sticker!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💡 _${usedPrefix}wm *packname|author*_
┃💡 _${usedPrefix}wm *texto1|texto2*_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━[ STICKERS DINÁMICOS ]━✪*
┃ *Realiza acciones con Stickers*
┃ *Etiquetando a alguien!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⛱️ _${usedPrefix}palmaditas | pat *@tag*_
┃⛱️ _${usedPrefix}bofetada | slap *@tag*_
┃⛱️ _${usedPrefix}golpear *@tag*_
┃⛱️ _${usedPrefix}besar | kiss *@tag*_
┃⛱️ _${usedPrefix}alimentar | food *@tag*_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*

*╭━[ MENU PARA PROPIETARIO/A ]━✪*
┃ *Comandos solo para Propietario/a!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💎 _${usedPrefix}join *enlace*_
┃💎 _${usedPrefix}unete *enlace*_
┃💎🔪➺ _${usedPrefix}🩸🔪dardiamantes *cantidad*_
┃💎🔪➺ _${usedPrefix}🩸🔪darxp *cantidad*_
┃💎🔪➺ _${usedPrefix}🩸🔪darJeffcoins *cantidad*_
┃💎🔪➺ _${usedPrefix}🩸🔪addprem | userpremium *@tag* *cantidad*_
┃💎🔪➺ _${usedPrefix}🩸🔪addprem2 | userpremium2 *@tag* *cantidad*_
┃💎🔪➺ _${usedPrefix}🩸🔪addprem3 | userpremium3 *@tag* *cantidad*_
┃💎🔪➺ _${usedPrefix}🩸🔪addprem4 | userpremium4 *@tag* *cantidad*_
┃💎🔪➺ _${usedPrefix}🩸🔪idioma | language_
┃💎🔪➺ _${usedPrefix}🩸🔪cajafuerte_
┃💎🔪➺ _${usedPrefix}🩸🔪comunicar | broadcastall | bc *texto*_
┃💎🔪➺ _${usedPrefix}🩸🔪broadcastchats | bcc *texto*_
┃💎🔪➺ _${usedPrefix}🩸🔪comunicarpv *texto*_
┃💎🔪➺ _${usedPrefix}🩸🔪broadcastgc *texto*_
┃💎🔪➺ _${usedPrefix}🩸🔪comunicargrupos *texto*_
┃💎🔪➺ _${usedPrefix}🩸🔪borrartmp | cleartmp_
┃💎🔪➺ _${usedPrefix}🩸🔪delexp *@tag*_
┃💎🔪➺ _${usedPrefix}🩸🔪delJeffcoins *@tag*_
┃💎🔪➺ _${usedPrefix}🩸🔪deldiamantes *@tag*_
┃💎🔪➺ _${usedPrefix}🩸🔪reiniciar | restart_
┃💎🔪➺ _${usedPrefix}🩸🔪ctualizar | update_
┃💎🔪➺ _${usedPrefix}🩸🔪addprem | +prem *@tag*_
┃💎🔪➺ _${usedPrefix}🩸🔪delprem | -prem *@tag*_
┃💎🔪➺ _${usedPrefix}🩸🔪listapremium | listprem_
┃💎🔪➺ _${usedPrefix}🩸🔪añadirdiamantes *@tag cantidad*_
┃💎🔪➺ _${usedPrefix}🩸🔪añadirxp *@tag cantidad*_
┃💎🔪➺ _${usedPrefix}🩸🔪añadirJeffcoins *@tag cantidad*_
*╰▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬★*
`.trim()

await conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', '🎧 ' + lenguajeGB.smsTex16() + ' 🎧', '/audios', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
	
} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(jeff|menucompleto|allmenu|allm\?)$/i
//handler.register = true
handler.exp = 234
handler.money = 666
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
