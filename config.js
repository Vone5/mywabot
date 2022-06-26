4https://script.google.com/macros/s/AKfycbyMoRDFuHbHyVH-hJQ8IZZovChzyKxGK0tSnqYPPH9rI8fHWFNH4EH24UjTeMqUqzxg_Q/exec/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
   * Recode By Muhammad Fuad Hasan
   * Contact Me on wa.me/6285161510489
   * Follow https://Facebook.com/aba.alyaa
*/

const fs = require('fs')
const chalk = require('chalk')

// Other
global.sheet = 'https://script.google.com/macros/s/AKfycbyMoRDFuHbHyVH-hJQ8IZZovChzyKxGK0tSnqYPPH9rI8fHWFNH4EH24UjTeMqUqzxg_Q/execi'  //silahkan isi google script app spread sheet nya
global.blockcall = false //autoblock telepon
global.welcome = false //pesan selamat datang di group
global.online = true     //online && mengetik
global.autoread = true   //ceklis biru
global.tutup = false //Mode Libur / Di Luar Jam Kerja
global.owner = ['8562099151601']   //ganti agar fitur bisa di gunakan
global.sessionName = 'session'  //sesuaikan nama file sesi nya
global.packname = 'My Sticker'
global.author = 'WhatsApp Bot'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Berhasil',
    wait: 'Tunggu Sebentar ...',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
