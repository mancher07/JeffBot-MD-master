async function handler(m, { usedPrefix }) {
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
await m.reply( 'EMILIANO, 19 ANITOS DE ARGENTINA.\n\nORIENTACION: BISEXUAL\n\n❕ ME GUSTA LOS PERROS, COMER PANSITO-\n\n❗ ESPERO PODER HABLARTE AL PRIVADO MI AMOR...\n\nSOY VERSATIL ME DEJO POR TODOS LOS OYOS ;v\n\nduermo mucho zzzz.\n\nMusica Fav; Rock, Dubstep, Y sonido de la lluvia..\n\nmi alias elmascapito\n\ncuando hablo muy desesperado; me llaman simp-atico.\n\nadoro las patas y sus olores *')
await m.reply(users.map(v => '🐈 wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}estado\n(${v.name})\n\n`).join('\n'))}
handler.command = handler.help = ['listjadibot2','bots2','subsbots2']
handler.tags = ['jadibot']
export default handler
