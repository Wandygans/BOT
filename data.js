//button img
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await vanz.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
vanz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
/////end

//button play
case 'play': case 'ytplay': case 'plays': case 'ytplays':
var id = m.chat
vanz.plays = vanz.plays ? vanz.plays : {}
if ((id in vanz.plays)) return reply('sedang ada sesi pencarian, silahkan menunggu giliran')
buttons = [
{buttonId: 'm4p', buttonText: {displayText: 'MP4'}, type: 1},
{buttonId: 'm3p', buttonText: {displayText: 'MP3'}, type: 1},
{buttonId: 'vnn', buttonText: {displayText: 'PTT'}, type: 1}
]
if (m.quoted && m.quoted.text) {
pencarian = m.quoted.text
ytsnya = await yts(pencarian)
res = ytsnya.all
anu = res[0].url
vanz.plays[id] = [anu]
tum = await getBuffer(res[0].thumbnail)
capt = `_YOUTUBE PLAY_
*• Judul :* ${res[0].title}
*• Link :* ${res[0].url}
*• Desc :* ${res[0].description}`
sendButImage(from, capt,'Silahkan Pilih Type Berikut\nCreated By @fauzan_', tum, buttons, {quoted: vnz, thumbnail: Buffer.alloc(0), viewOnce:false})
} else {
if (!q) return reply(prefix+command+'link/query atau reply')
pencarian = q
ytsnya = await yts(pencarian)
res = ytsnya.all
anu = res[0].url
vanz.plays[id] = [anu]
tum = await getBuffer(res[0].thumbnail)
capt = `_YOUTUBE PLAY_
*• Judul :* ${res[0].title}
*• Link :* ${res[0].url}
*• Desc :* ${res[0].description}`
sendButImage(from, capt,'Silahkan Pilih Type Berikut\nCreated By @fauzan_', tum, buttons, {quoted: vnz, thumbnail: Buffer.alloc(0), viewOnce:false})
}
break
//end