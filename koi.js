/*
    Sc Lumine-MD V4.0
    
    Yt: QyuuNee

    Notes:
    NO SCAN?
    NO ENC? BUY DI 0895-0808-2845
   
*/

const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')

global.grup = 'soon'
global.ig = 'soon'
global.thumb = fs.readFileSync("./datakoi/image/thumb.jpg")
global.thumburl = 'https://telegra.ph/file/519605514e82433a5cb60.jpg'
global.email = 'harismcanime.com'
global.region = 'indonesia'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'kyo'
global.domain = 'https://panel.koi.pics'
global.apikey2 = '' // Isi Apikey Pltc Lu
global.capikey2 = ''
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

global.owner = ['6281232823363']

global.botname = 'Lumine bot'
global.packname = 'Lumine bot'
global.author = `Date: ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\nYouTube: gada\nBot: a`
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'Lumine-MD'
global.sp = '⭔'
global.anticall = true

global.mess = {
    success: '🤗 Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !\n\n🎯 *Premium Cuma 10k Permanen* 😋',
    error: '🚫 Fitur Sedang Error !',
    prem: '🚫 Fitur Khusus Premium!\n\n♨️ Buy Premium Cuma 10k Permanen',
}

global.limitawal = {
    premium: "Infinity",
    free: 30
}

global.multiplier = 1000

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})