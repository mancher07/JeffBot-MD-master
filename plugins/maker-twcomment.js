let handler = async (m, { conn, text }) => {
if (!text) throw 'No Text'
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/misc/tweet', {
avatar: await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
comment: text,
displayname: conn.getName(m.sender)
username: conn.getName(m.sender)
}), 'error.png', '*HAS COMENTADO EN TWITTER!!* 😳', m)
}
handler.help = ['twcomment <comment>']
handler.tags = ['maker'] 
handler.command = /^(twcomment)$/i
export default handler
