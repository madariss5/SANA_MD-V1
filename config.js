import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

import dotenv from 'dotenv'
dotenv.config()

const defaultOwner = '4915563151347';


// Check for the OWNERS environment variable; if not found, use the default
const ownervb = process.env.OWNERS || process.env.OWNER_NUMBER || '4915563151347';  // put your number here

const ownerlist = ownervb.split(';');

global.owner = [];
for (let i = 0; i < ownerlist.length; i++) {
    global.owner.push([ownerlist[i], true]);
}
//
global.botname = process.env.BOTNAME || '𝔹𝕃𝔸ℂ𝕂𝕊𝕂𝕐-𝕄𝔻';
global.pairingNumber = process.env.BOT_NUMBER || '4915562378343';  // put your number here
global.SESSION_ID = process.env.SESSION_ID || '6NxDSQRY#1PJe7il0R5WxrcI5TRKzhk1SGfGriX6XvqpiL5vHbNU';  // put your session id here

global.mods = []
global.prems = []
global.allowed = ['4915563151347', '4915562378343']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = [
  '29d4b59a4aa687ca',
  '5LTV57azwaid7dXfz5fzJu',
  'cb15ed422c71a2fb',
  '5bd33b276d41d6b4',
  'HIRO',
  'kurrxd09',
  'ebb6251cc00f9c63',
]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.canal = 'https://whatsapp.com/channel/0029VagcqzY1XquemrHOM51n'


global.APIs = {
  // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz',
}
global.APIKeys = {
  // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`,
  'https://api.fgmods.xyz': 'm2XBbNvz',
}

// Sticker WM
global.premium = 'true'
global.packname = 'SANA_MD-V1'
global.author = 'Sanatech'
global.menuvid = 'https://i.imgur.com/2Sp3cqD.mp4'
global.igfg = ' Follow on Instagram\nhttps://www.instagram.com/Tohidkhan6332'
global.dygp = 'https://whatsapp.com/channel/0029VagcqzY1XquemrHOM51n'
global.fgsc = 'https://Github.com/sana3165829/SANA_MD-V1'
global.fgyt = 'https://youtube.com/@Tohidkhan_6332'
global.fgpyp = 'https://GitHub.com/Tohidkhan6332'
global.fglog = 'https://i.imgur.com/nqCsIHZ.jpeg'
global.thumb = fs.readFileSync('./assets/tohid.jpg')

global.wait = '⏳'
global.rwait = '⏳'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌'
global.xmoji = '🤩'

global.multiplier = 69
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
