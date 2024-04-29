const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94760405102'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'maxdavid126@gmail.com'
global.github = 'https://github.com/Nadunsl/STAR-MD'
global.location = 'asia/colombo'
global.gurl = 'https://instagram.com/alex_david/' // add your username
global.sudo = process.env.SUDO || "94760405102"
global.devs = '94760405102'
global.website = 'https://github.com/Nadunsl/STAR-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3f3ae4aace2d012c11509.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'STAR MD BOT',
  packname:  process.env.PACK_NAME || 'Mr.Nadun ',
  
  botname:   process.env.BOT_NAME === undefined ? "STAR-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Mr.Nadun' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'fuck' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '888' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '╔═════ೋೋ═════╗
║✽╠ 𝙃𝙀𝙇𝙇𝙊 𝙐𝙎𝙀𝙍
║✽║ 𝙞𝙢 𝙖𝙡𝙞𝙫𝙚 𝙣𝙤𝙬
║   ╚═════════☬
║✤╠  𝚃𝚢𝚙𝚎 𝚝𝚘 .𝚖𝚎𝚗𝚞 
║✤║ 𝚘𝚛 𝚕𝚒𝚜𝚝
║   ╚══════════⛛
*╚═══❖•ೋ° °ೋ•❖═══╝*' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚂𝚃𝙰𝚁-𝙼𝙳•* ",   //*『sᴜʙsᴄʀɪʙᴇ •  ᴛᴇᴄʜ x』*\n https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? true : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||true,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '3b2f7680-ce96-401a-b525-bd386344c9f4' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'star-bot' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'STAR',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
