import axios from 'axios'
let split = '|'
let handler = async (m, { conn, args: [effect], text: txt, usedPrefix, command, name }) => {
if (!effect) throw `${mg}𝙐𝙎𝘼𝙍 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙈𝘼𝙉𝙀𝙍𝘼\n𝙐𝙎𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝘼𝙎 𝙁𝙊𝙇𝙇𝙊𝙒𝙎\n💫 *${usedPrefix + command} efecto texto*\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊 | 𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n💫 *${usedPrefix + command} American-flag-3D GataBot*\n\n𝙀𝙉 𝘾𝘼𝙎𝙊 𝘿𝙀 𝙌𝙐𝙀 𝘿𝙄𝙂𝘼 𝙌𝙐𝙀 𝙁𝘼𝙇𝙏𝘼 𝙏𝙀𝙓𝙏𝙊 𝙐𝙎𝘼𝙍 𝘿𝙀 𝙀𝙎𝙏𝘼 𝙁𝙊𝙍𝙈𝘼\n𝙄𝙉 𝘾𝘼𝙎𝙀 𝙄𝙏 𝙎𝘼𝙔𝙎 𝙏𝙀𝙓𝙏 𝙄𝙎 𝙈𝙄𝙎𝙎𝙄𝙉𝙂 𝙐𝙎𝙀 𝙇𝙄𝙆𝙀 𝙏𝙃𝙄𝙎\n💫 *${usedPrefix + command} efecto texto1|texto2*\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊 | 𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n💫 *${usedPrefix + command} Wolf-Logo-Galaxy GataBot|GataDios*\n\n*✨ 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙇𝙊𝙂𝙊𝙎*\n\n🤍 ${usedPrefix + command} ` + effects.map(v => v.title).join(`\n💜 ${usedPrefix + command} `)
effect = effect.toLowerCase()
if (!effects.find(v => (new RegExp(v.title, 'gi')).test(effect))) throw `${mg}𝙀𝙇 𝙇𝙊𝙂𝙊 ${effect}𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙐𝙀𝙉𝙏𝙍𝘼 𝙀𝙉 𝙇𝘼 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙇𝙊𝙂𝙊𝙎\n\n𝙏𝙃𝙀 𝙇𝙊𝙂𝙊 ${effect} 𝙄𝙏 𝙄𝙎 𝙉𝙊𝙏 𝙄𝙉 𝙏𝙃𝙀 𝙇𝙄𝙎𝙏 𝙊𝙁 𝙇𝙊𝙂𝙊𝙎`
let text = txt.replace(new RegExp(effect, 'gi'), '').trimStart()
if (text.includes(split)) text = text.split(split)
text = Array.isArray(text) ? text : [text]
let res = await textpro(effect, ...text)
if (typeof res == 'number') throw res == -1 ? `${mg}𝙀𝙇 𝙇𝙊𝙂𝙊 ${effect} 𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙐𝙀𝙉𝙏𝙍𝘼 𝙀𝙉 𝙇𝘼 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙇𝙊𝙂𝙊𝙎\n\n𝙏𝙃𝙀 𝙇𝙊𝙂𝙊 ${effect} 𝙄𝙏 𝙄𝙎 𝙉𝙊𝙏 𝙄𝙉 𝙏𝙃𝙀 𝙇𝙄𝙎𝙏 𝙊𝙁 𝙇𝙊𝙂𝙊𝙎` : `𝙐𝙎𝘼𝙍 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙈𝘼𝙉𝙀𝙍𝘼\n𝙐𝙎𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝘼𝙎 𝙁𝙊𝙇𝙇𝙊𝙒𝙎\n\n${usedPrefix + command} ${effect} ${new Array(res).fill('texto').map((v, i) => v + (i ? i + 1 : '')).join('|')}*`
let result = await axios.get(res, {
responseType: 'arraybuffer'
})
await conn.sendFile(m.chat, result.data, 'Error.jpg', `✅ *AQUÍ ESTA TÚ LOGO!!*\n✅ *HERE IS YOUR LOGO!!*\n\n🔆 *EFECTO: ${effect}*\n${wm}`, m)
}
handler.help = ['logos']
handler.tags = ['nulis']
handler.command = /^(logo|logos)$/i
export default handler

import formData from 'form-data'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
var effects = [
  {
    "title": "3ddeepseametal",
    "url": "https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html"
  },
  {
    "title": "Americanflag3D",
    "url": "https://textpro.me/create-american-flag-3d-text-effect-online-1051.html"
  },
  {
    "title": "3Dscifi",
    "url": "https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html"
  },
  {
    "title": "3Drainbowcolorcalligraphy",
    "url": "https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html"
  },
  {
    "title": "3Dwaterpipe",
    "url": "https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html"
  },
  {
    "title": "Halloweenskeleton",
    "url": "https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html"
  },
  {
    "title": "aspookyHalloween",
    "url": "https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html"
  },
  {
    "title": "acinematichorror",
    "url": "https://textpro.me/create-a-cinematic-horror-text-effect-1045.html"
  },
  {
    "title": "asketch",
    "url": "https://textpro.me/create-a-sketch-text-effect-online-1044.html"
  },
  {
    "title": "bluecircuitstyle",
    "url": "https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html"
  },
  {
    "title": "space",
    "url": "https://textpro.me/create-space-text-effects-online-free-1042.html"
  },
  {
    "title": "ametallic",
    "url": "https://textpro.me/create-a-metallic-text-effect-free-online-1041.html"
  },
  {
    "title": "Creatglossymetalic",
    "url": "https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html"
  },
  {
    "title": "aCaptainAmerica",
    "url": "https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html"
  },
  {
    "title": "sciencefiction",
    "url": "https://textpro.me/create-science-fiction-text-effect-online-free-1038.html"
  },
  {
    "title": "Videogameclassic8bit",
    "url": "https://textpro.me/video-game-classic-8-bit-text-effect-1037.html"
  },
  {
    "title": "greenhorrorstyle",
    "url": "https://textpro.me/create-green-horror-style-text-effect-online-1036.html"
  },
  {
    "title": "atransformer",
    "url": "https://textpro.me/create-a-transformer-text-effect-online-1035.html"
  },
  {
    "title": "berry",
    "url": "https://textpro.me/create-berry-text-effect-online-free-1033.html"
  },
  {
    "title": "layered",
    "url": "https://textpro.me/create-layered-text-effects-online-free-1032.html"
  },
  {
    "title": "Onlinethundergenerator",
    "url": "https://textpro.me/online-thunder-text-effect-generator-1031.html"
  },
  {
    "title": "amagmahot",
    "url": "https://textpro.me/create-a-magma-hot-text-effect-online-1030.html"
  },
  {
    "title": "3Dstonecrackedcool",
    "url": "https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html"
  },
  {
    "title": "3Dneonlight",
    "url": "https://textpro.me/create-3d-neon-light-text-effect-online-1028.html"
  },
  {
    "title": "impressiveglitch",
    "url": "https://textpro.me/create-impressive-glitch-text-effects-online-1027.html"
  },
  {
    "title": "aglitch",
    "url": "https://textpro.me/create-a-glitch-text-effect-online-free-1026.html"
  },
  {
    "title": "HarryPotter",
    "url": "https://textpro.me/create-harry-potter-text-effect-online-1025.html"
  },
  {
    "title": "embossedoncrackedsurface",
    "url": "https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html"
  },
  {
    "title": "Brokenglass",
    "url": "https://textpro.me/broken-glass-text-effect-free-online-1023.html"
  },
  {
    "title": "artpapercut",
    "url": "https://textpro.me/create-art-paper-cut-text-effect-online-1022.html"
  },
  {
    "title": "artisticblackandwhitestatusandquotewithyourphotos",
    "url": "https://textpro.me/create-artistic-black-and-white-status-and-quote-with-your-photos-1021.html"
  },
  {
    "title": "Online3Dgradientgenerator",
    "url": "https://textpro.me/online-3d-gradient-text-effect-generator-1020.html"
  },
  {
    "title": "a3Dglossymetal",
    "url": "https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html"
  },
  {
    "title": "3Drealisticonthebeach",
    "url": "https://textpro.me/create-3d-realistic-text-effect-on-the-beach-online-1018.html"
  },
  {
    "title": "awatercolor",
    "url": "https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html"
  },
  {
    "title": "Onlinemulticolor3Dpapercut",
    "url": "https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html"
  },
  {
    "title": "Writetextonfoggywindow",
    "url": "https://textpro.me/write-text-on-foggy-window-online-free-1015.html"
  },
  {
    "title": "neondevilwings",
    "url": "https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html"
  },
  {
    "title": "3Dunderwatergenerator",
    "url": "https://textpro.me/3d-underwater-text-effect-generator-online-1013.html"
  },
  {
    "title": "Onlineblackandwhitebearmascotlogocreation",
    "url": "https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html"
  },
  {
    "title": "wonderfulgraffitiart",
    "url": "https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html"
  },
  {
    "title": "acoolgraffititextonthewall",
    "url": "https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html"
  },
  {
    "title": "coolwallgraffiti",
    "url": "https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html"
  },
  {
    "title": "achristmasholidaysnow",
    "url": "https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html"
  },
  {
    "title": "afuturistictechnologyneonlight",
    "url": "https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html"
  },
  {
    "title": "snowforwinterholidays",
    "url": "https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html"
  },
  {
    "title": "acloudonthesky",
    "url": "https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html"
  },
  {
    "title": "3Dluxurygold",
    "url": "https://textpro.me/3d-luxury-gold-text-effect-online-1003.html"
  },
  {
    "title": "3Dgradient",
    "url": "https://textpro.me/3d-gradient-text-effect-online-free-1002.html"
  },
  {
    "title": "Blackpinklogostyle",
    "url": "https://textpro.me/create-blackpink-logo-style-online-1001.html"
  },
  {
    "title": "realisticvintagestylelightbulb",
    "url": "https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html"
  },
  {
    "title": "realisticcloud",
    "url": "https://textpro.me/create-realistic-cloud-text-effect-online-free-999.html"
  },
  {
    "title": "acloudinthesky",
    "url": "https://textpro.me/create-a-cloud-text-effect-in-the-sky-online-997.html"
  },
  {
    "title": "WriteinSandSummerBeach",
    "url": "https://textpro.me/write-in-sand-summer-beach-free-online-991.html"
  },
  {
    "title": "SandWriting",
    "url": "https://textpro.me/sand-writing-text-effect-online-990.html"
  },
  {
    "title": "Sandengraved3d",
    "url": "https://textpro.me/sand-engraved-3d-text-effect-989.html"
  },
  {
    "title": "asummerysandwriting",
    "url": "https://textpro.me/create-a-summery-sand-writing-text-effect-988.html"
  },
  {
    "title": "FoilBalloonForBirthday",
    "url": "https://textpro.me/foil-balloon-text-effect-for-birthday-987.html"
  },
  {
    "title": "3dgluewithrealisticstyle",
    "url": "https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html"
  },
  {
    "title": "space3D",
    "url": "https://textpro.me/create-space-3d-text-effect-online-985.html"
  },
  {
    "title": "MetalDarkGold",
    "url": "https://textpro.me/metal-dark-gold-text-effect-984.html"
  },
  {
    "title": "GlitchStyleTikTok",
    "url": "https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html"
  },
  {
    "title": "aStone",
    "url": "https://textpro.me/create-a-stone-text-effect-online-982.html"
  },
  {
    "title": "NeonLightWithGalaxyStyle",
    "url": "https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html"
  },
  {
    "title": "1917Style",
    "url": "https://textpro.me/1917-style-text-effect-online-980.html"
  },
  {
    "title": "80sRetroNeon",
    "url": "https://textpro.me/80-s-retro-neon-text-effect-online-979.html"
  },
  {
    "title": "Minion3D",
    "url": "https://textpro.me/minion-text-effect-3d-online-978.html"
  },
  {
    "title": "PornhubStyleLogo",
    "url": "https://textpro.me/pornhub-style-logo-online-generator-free-977.html"
  },
  {
    "title": "DoubleExposureBlack&White",
    "url": "https://textpro.me/double-exposure-text-effect-black-white-976.html"
  },
  {
    "title": "Holographic3D",
    "url": "https://textpro.me/holographic-3d-text-effect-975.html"
  },
  {
    "title": "3DAvengerslogo",
    "url": "https://textpro.me/create-3d-avengers-logo-online-974.html"
  },
  {
    "title": "MetalPurpleDualEffect",
    "url": "https://textpro.me/metal-purple-dual-effect-973.html"
  },
  {
    "title": "logostyleMarvelstudiosVermetal",
    "url": "https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html"
  },
  {
    "title": "logostyleMarvelstudios",
    "url": "https://textpro.me/create-logo-style-marvel-studios-online-971.html"
  },
  {
    "title": "DeluxeSilver",
    "url": "https://textpro.me/deluxe-silver-text-effect-970.html"
  },
  {
    "title": "ColorFullLuxuryMetal",
    "url": "https://textpro.me/color-full-luxury-metal-text-effect-969.html"
  },
  {
    "title": "GlossyBlueMetal",
    "url": "https://textpro.me/glossy-blue-metal-text-effect-967.html"
  },
  {
    "title": "DeluxeGold",
    "url": "https://textpro.me/deluxe-gold-text-effect-966.html"
  },
  {
    "title": "GlossyCarbon",
    "url": "https://textpro.me/glossy-carbon-text-effect-965.html"
  },
  {
    "title": "Fabric",
    "url": "https://textpro.me/fabric-text-effect-online-964.html"
  },
  {
    "title": "Neon",
    "url": "https://textpro.me/neon-text-effect-online-963.html"
  },
  {
    "title": "NewYearCards3DByName",
    "url": "https://textpro.me/new-year-cards-3d-by-name-960.html"
  },
  {
    "title": "Happnewyearcardfireworkgif",
    "url": "https://textpro.me/happ-new-year-card-firework-gif-959.html"
  },
  {
    "title": "FullcolorBalloon",
    "url": "https://textpro.me/fullcolor-balloon-text-effect-958.html"
  },
  {
    "title": "TextLogo3DMetal",
    "url": "https://textpro.me/create-text-logo-3d-metal-online-957.html"
  },
  {
    "title": "avatargold",
    "url": "https://textpro.me/create-avatar-gold-online-956.html"
  },
  {
    "title": "TextLogo3DMetalSilver",
    "url": "https://textpro.me/text-logo-3d-metal-silver-946.html"
  },
  {
    "title": "TextLogo3DMetalRoseGold",
    "url": "https://textpro.me/text-logo-3d-metal-rose-gold-945.html"
  },
  {
    "title": "TextLogo3DMetalGold",
    "url": "https://textpro.me/text-logo-3d-metal-gold-944.html"
  },
  {
    "title": "TextLogo3DMetalGalaxy",
    "url": "https://textpro.me/text-logo-3d-metal-galaxy-943.html"
  },
  {
    "title": "XmasCards3D",
    "url": "https://textpro.me/xmas-cards-3d-online-942.html"
  },
  {
    "title": "BloodTextOnTheFrostedGlass",
    "url": "https://textpro.me/blood-text-on-the-frosted-glass-941.html"
  },
  {
    "title": "HalloweenFire",
    "url": "https://textpro.me/halloween-fire-text-effect-940.html"
  },
  {
    "title": "MetalDarkGold",
    "url": "https://textpro.me/metal-dark-gold-text-effect-online-939.html"
  },
  {
    "title": "LionLogoMascot",
    "url": "https://textpro.me/create-lion-logo-mascot-online-938.html"
  },
  {
    "title": "WolfLogoBlack&White",
    "url": "https://textpro.me/create-wolf-logo-black-white-937.html"
  },
  {
    "title": "WolfLogoGalaxy",
    "url": "https://textpro.me/create-wolf-logo-galaxy-online-936.html"
  },
  {
    "title": "NinjaLogo",
    "url": "https://textpro.me/create-ninja-logo-online-935.html"
  },
  {
    "title": "LogoJoker",
    "url": "https://textpro.me/create-logo-joker-online-934.html"
  },
  {
    "title": "Wicker",
    "url": "https://textpro.me/wicker-text-effect-online-932.html"
  },
  {
    "title": "NaturalLeaves",
    "url": "https://textpro.me/natural-leaves-text-effect-931.html"
  },
  {
    "title": "FireworkSparkle",
    "url": "https://textpro.me/firework-sparkle-text-effect-930.html"
  },
  {
    "title": "Skeleton",
    "url": "https://textpro.me/skeleton-text-effect-online-929.html"
  },
  {
    "title": "RedFoilBalloon",
    "url": "https://textpro.me/red-foil-balloon-text-effect-928.html"
  },
  {
    "title": "PurpleFoilBalloon",
    "url": "https://textpro.me/purple-foil-balloon-text-effect-927.html"
  },
  {
    "title": "PinkFoilBalloon",
    "url": "https://textpro.me/pink-foil-balloon-text-effect-926.html"
  },
  {
    "title": "GreenFoilBalloon",
    "url": "https://textpro.me/green-foil-balloon-text-effect-925.html"
  },
  {
    "title": "CyanFoilBalloon",
    "url": "https://textpro.me/cyan-foil-balloon-text-effect-924.html"
  },
  {
    "title": "BlueFoilBalloon",
    "url": "https://textpro.me/blue-foil-balloon-text-effect-923.html"
  },
  {
    "title": "GoldFoilBalloon",
    "url": "https://textpro.me/gold-foil-balloon-text-effect-922.html"
  },
  {
    "title": "Steel",
    "url": "https://textpro.me/steel-text-effect-online-921.html"
  },
  {
    "title": "UltraGloss",
    "url": "https://textpro.me/ultra-gloss-text-effect-online-920.html"
  },
  {
    "title": "Denim",
    "url": "https://textpro.me/denim-text-effect-online-919.html"
  },
  {
    "title": "DecorateGreen",
    "url": "https://textpro.me/decorate-green-text-effect-918.html"
  },
  {
    "title": "DecoratePurple",
    "url": "https://textpro.me/decorate-purple-text-effect-917.html"
  },
  {
    "title": "PeridotStone",
    "url": "https://textpro.me/peridot-stone-text-effect-916.html"
  },
  {
    "title": "Rock",
    "url": "https://textpro.me/rock-text-effect-online-915.html"
  },
  {
    "title": "Lava",
    "url": "https://textpro.me/lava-text-effect-online-914.html"
  },
  {
    "title": "YellowGlass",
    "url": "https://textpro.me/yellow-glass-text-effect-913.html"
  },
  {
    "title": "PurpleGlass",
    "url": "https://textpro.me/purple-glass-text-effect-912.html"
  },
  {
    "title": "OrangeGlass",
    "url": "https://textpro.me/orange-glass-text-effect-911.html"
  },
  {
    "title": "GreenGlass",
    "url": "https://textpro.me/green-glass-text-effect-910.html"
  },
  {
    "title": "CyanGlass",
    "url": "https://textpro.me/cyan-glass-text-effect-909.html"
  },
  {
    "title": "BlueGlass",
    "url": "https://textpro.me/blue-glass-text-effect-908.html"
  },
  {
    "title": "RedGlass",
    "url": "https://textpro.me/red-glass-text-effect-907.html"
  },
  {
    "title": "PurpleShinyGlass",
    "url": "https://textpro.me/purple-shiny-glass-text-effect-906.html"
  },
  {
    "title": "CaptainAmerica",
    "url": "https://textpro.me/captain-america-text-effect-905.html"
  },
  {
    "title": "RobotR2D2",
    "url": "https://textpro.me/robot-r2-d2-text-effect-903.html"
  },
  {
    "title": "RainbowEqualizer",
    "url": "https://textpro.me/rainbow-equalizer-text-effect-902.html"
  },
  {
    "title": "Toxic",
    "url": "https://textpro.me/toxic-text-effect-online-901.html"
  },
  {
    "title": "PinkSparklingJewelry",
    "url": "https://textpro.me/pink-sparkling-jewelry-text-effect-899.html"
  },
  {
    "title": "BlueSparklingJewelry",
    "url": "https://textpro.me/blue-sparkling-jewelry-text-effect-898.html"
  },
  {
    "title": "GreenSparklingJewelry",
    "url": "https://textpro.me/green-sparkling-jewelry-text-effect-897.html"
  },
  {
    "title": "PurpleSparklingJewelry",
    "url": "https://textpro.me/purple-sparkling-jewelry-text-effect-896.html"
  },
  {
    "title": "GoldSparklingJewelry",
    "url": "https://textpro.me/gold-sparkling-jewelry-text-effect-895.html"
  },
  {
    "title": "RedSparklingJewelry",
    "url": "https://textpro.me/red-sparkling-jewelry-text-effect-894.html"
  },
  {
    "title": "CyanSparklingJewelry",
    "url": "https://textpro.me/cyan-sparkling-jewelry-text-effect-893.html"
  },
  {
    "title": "PurpleGlass",
    "url": "https://textpro.me/purple-glass-text-effect-online-892.html"
  },
  {
    "title": "DecorativeGlass",
    "url": "https://textpro.me/decorative-glass-text-effect-891.html"
  },
  {
    "title": "ChocolateCake",
    "url": "https://textpro.me/chocolate-cake-text-effect-890.html"
  },
  {
    "title": "Strawberry",
    "url": "https://textpro.me/strawberry-text-effect-online-889.html"
  },
  {
    "title": "KoiFish",
    "url": "https://textpro.me/koi-fish-text-effect-online-888.html"
  },
  {
    "title": "Bread",
    "url": "https://textpro.me/bread-text-effect-online-887.html"
  },
  {
    "title": "MatrixStyle",
    "url": "https://textpro.me/matrix-style-text-effect-online-884.html"
  },
  {
    "title": "Blood",
    "url": "https://textpro.me/horror-blood-text-effect-online-883.html"
  },
  {
    "title": "NeonLight",
    "url": "https://textpro.me/neon-light-text-effect-online-882.html"
  },
  {
    "title": "Thunder",
    "url": "https://textpro.me/create-thunder-text-effect-online-881.html"
  },
  {
    "title": "3DBox",
    "url": "https://textpro.me/3d-box-text-effect-online-880.html"
  },
  {
    "title": "Neon",
    "url": "https://textpro.me/neon-text-effect-online-879.html"
  },
  {
    "title": "RoadWarning",
    "url": "https://textpro.me/road-warning-text-effect-878.html"
  },
  {
    "title": "3DSteel",
    "url": "https://textpro.me/3d-steel-text-effect-877.html"
  },
  {
    "title": "Bokeh",
    "url": "https://textpro.me/bokeh-text-effect-876.html"
  },
  {
    "title": "GreenNeon",
    "url": "https://textpro.me/green-neon-text-effect-874.html"
  },
  {
    "title": "FreeAdvancedGlow",
    "url": "https://textpro.me/free-advanced-glow-text-effect-873.html"
  },
  {
    "title": "Dropwater",
    "url": "https://textpro.me/dropwater-text-effect-872.html"
  },
  {
    "title": "BreakWall",
    "url": "https://textpro.me/break-wall-text-effect-871.html"
  },
  {
    "title": "ChrismastGift",
    "url": "https://textpro.me/chrismast-gift-text-effect-869.html"
  },
  {
    "title": "Honey",
    "url": "https://textpro.me/honey-text-effect-868.html"
  },
  {
    "title": "PlasticBagDrug",
    "url": "https://textpro.me/plastic-bag-drug-text-effect-867.html"
  },
  {
    "title": "HorrorGift",
    "url": "https://textpro.me/horror-gift-text-effect-866.html"
  },
  {
    "title": "MarbleSlabs",
    "url": "https://textpro.me/marble-slabs-text-effect-864.html"
  },
  {
    "title": "Marble",
    "url": "https://textpro.me/marble-text-effect-863.html"
  },
  {
    "title": "IceCold",
    "url": "https://textpro.me/ice-cold-text-effect-862.html"
  },
  {
    "title": "FruitJuice",
    "url": "https://textpro.me/fruit-juice-text-effect-861.html"
  },
  {
    "title": "RustyMetal",
    "url": "https://textpro.me/rusty-metal-text-effect-860.html"
  },
  {
    "title": "AbstraGold",
    "url": "https://textpro.me/abstra-gold-text-effect-859.html"
  },
  {
    "title": "Biscuit",
    "url": "https://textpro.me/biscuit-text-effect-858.html"
  },
  {
    "title": "Bagel",
    "url": "https://textpro.me/bagel-text-effect-857.html"
  },
  {
    "title": "Wood",
    "url": "https://textpro.me/wood-text-effect-856.html"
  },
  {
    "title": "SCIFi",
    "url": "https://textpro.me/sci-fi-text-effect-855.html"
  },
  {
    "title": "MetalRainbow",
    "url": "https://textpro.me/metal-rainbow-text-effect-854.html"
  },
  {
    "title": "PurpleGem",
    "url": "https://textpro.me/purple-gem-text-effect-853.html"
  },
  {
    "title": "ShinyMetal",
    "url": "https://textpro.me/shiny-metal-text-effect-852.html"
  },
  {
    "title": "YellowJewelry",
    "url": "https://textpro.me/yellow-jewelry-text-effect-851.html"
  },
  {
    "title": "SilverJewelry",
    "url": "https://textpro.me/silver-jewelry-text-effect-850.html"
  },
  {
    "title": "RedJewelry",
    "url": "https://textpro.me/red-jewelry-text-effect-849.html"
  },
  {
    "title": "PurpleJewelry",
    "url": "https://textpro.me/purple-jewelry-text-effect-848.html"
  },
  {
    "title": "OrangeJewelry",
    "url": "https://textpro.me/orange-jewelry-text-effect-847.html"
  },
  {
    "title": "GreenJewelry",
    "url": "https://textpro.me/green-jewelry-text-effect-846.html"
  },
  {
    "title": "CyanJewelry",
    "url": "https://textpro.me/cyan-jewelry-text-effect-845.html"
  },
  {
    "title": "BlueJewelry",
    "url": "https://textpro.me/blue-jewelry-text-effect-844.html"
  },
  {
    "title": "HotMetal",
    "url": "https://textpro.me/hot-metal-text-effect-843.html"
  },
  {
    "title": "HexaGolden",
    "url": "https://textpro.me/hexa-golden-text-effect-842.html"
  },
  {
    "title": "BlueGlitter",
    "url": "https://textpro.me/blue-glitter-text-effect-841.html"
  },
  {
    "title": "PurpleGlitter",
    "url": "https://textpro.me/purple-glitter-text-effect-840.html"
  },
  {
    "title": "PinkGlitter",
    "url": "https://textpro.me/pink-glitter-text-effect-839.html"
  },
  {
    "title": "GreenGlitter",
    "url": "https://textpro.me/green-glitter-text-effect-838.html"
  },
  {
    "title": "SilverGlitter",
    "url": "https://textpro.me/silver-glitter-text-effect-837.html"
  },
  {
    "title": "GoldGlitter",
    "url": "https://textpro.me/gold-glitter-text-effect-836.html"
  },
  {
    "title": "BronzeGlitter",
    "url": "https://textpro.me/bronze-glitter-text-effect-835.html"
  },
  {
    "title": "ErodedMetal",
    "url": "https://textpro.me/eroded-metal-text-effect-834.html"
  },
  {
    "title": "Carbon",
    "url": "https://textpro.me/carbon-text-effect-833.html"
  },
  {
    "title": "PinkCandy",
    "url": "https://textpro.me/pink-candy-text-effect-832.html"
  },
  {
    "title": "BlueMetal",
    "url": "https://textpro.me/blue-metal-text-effect-831.html"
  },
  {
    "title": "BlueGem",
    "url": "https://textpro.me/blue-gem-text-effect-830.html"
  },
  {
    "title": "BlackMetal",
    "url": "https://textpro.me/black-metal-text-effect-829.html"
  },
  {
    "title": "3DGlowingMetal",
    "url": "https://textpro.me/3d-glowing-metal-text-effect-828.html"
  },
  {
    "title": "3DChrome",
    "url": "https://textpro.me/3d-chrome-text-effect-827.html"
  }
]
async function textpro(effect, ...texts) {
  texts = texts.filter(v => v)
  let eff = effects.find(v => (new RegExp(v.title, 'gi')).test(effect))
  if (!eff) return -1
  let resCookie = await fetch(eff.url, {
    headers: {
      "User-Agent": "GoogleBot",
    },
  })
  let html = await resCookie.text()
  const $$$ = cheerio.load(html)
  let textRequire = [!!$$$('#text-0').length, !!$$$('#text-1').length, !!$$$('#text-2').length].filter(v => v)
  // console.log({ textRequire, texts, textRequireLength: textRequire.length, textsLength: texts.length })
  if (textRequire.length > texts.length) return textRequire.length
  let cookieParse = (cookie, query) => cookie.includes(query + '=') ? cookie.split(query + '=')[1].split(';')[0] : 'undefined'
  let hasilcookie = resCookie.headers
    .get("set-cookie")
  hasilcookie = {
    __cfduid: cookieParse(hasilcookie, '__cfduid'),
    PHPSESSID: cookieParse(hasilcookie, 'PHPSESSID')
  }
  hasilcookie = Object.entries(hasilcookie).map(([nama, value]) => nama + '=' + value).join("; ")
  const $ = cheerio.load(html)
  const token = $('input[name="token"]').attr("value")
  const form = new formData()
  for (let text of texts) form.append("text[]", text)
  form.append("submit", "Go")
  form.append("token", token)
  form.append("build_server", "https://textpro.me")
  form.append("build_server_id", 1)
  let resUrl = await fetch(eff.url, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: hasilcookie,
      ...form.getHeaders(),
    },
    body: form.getBuffer(),
  })
  const $$ = cheerio.load(await resUrl.text())
  let token2 = JSON.parse($$('#form_value').eq(1).text())
  let encode = encodeURIComponent;
  let body = Object.keys(token2)
    .map((key) => {
      let vals = token2[key];
      let isArray = Array.isArray(vals);
      let keys = encode(key + (isArray ? "[]" : ""));
      if (!isArray) vals = [vals];
      let out = [];
      for (let valq of vals) out.push(keys + "=" + encode(valq));
      return out.join("&");
    })
    .join("&")
  let resImgUrl = await fetch(`https://textpro.me/effect/create-image?${body}`, {
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: hasilcookie,
    }
  })
  let results = await resImgUrl.json()
  return 'https://textpro.me' + results.fullsize_image
}
