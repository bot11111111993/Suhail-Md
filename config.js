const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_53_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDQxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDMxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MixcbiAgICAgICAgOTQsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzksXG4gICAgICAgIDMyLFxuICAgICAgICAyNDksXG4gICAgICAgIDYyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5LFxuICAgICAgICAxMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MixcbiAgICAgICAgMTczLFxuICAgICAgICA0NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNixcbiAgICAgICAgMTc2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDMyLFxuICAgICAgICA3NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDU1LFxuICAgICAgICAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg2LFxuICAgICAgICA4NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDU0LFxuICAgICAgICA4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDY0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJTSnFUYlh1bTRZRzNDaDV2L3JHRnB5NjBteEgvL1ZROHhRVVpCQ1h4K2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkxNTHRjR2FnVFhpN3pfUkEyVERPVVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWMzYWNiMjEtYTIwZS00MGE1LWJjYjAtOWNjOTRmYmQyZWJmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MyxcbiAgICAgIDE4NixcbiAgICAgIDkzLFxuICAgICAgMTc2LFxuICAgICAgMTMwLFxuICAgICAgMTI5LFxuICAgICAgMTQxLFxuICAgICAgNTgsXG4gICAgICA1MSxcbiAgICAgIDEzOSxcbiAgICAgIDYsXG4gICAgICAyNTEsXG4gICAgICAxMDEsXG4gICAgICAzMCxcbiAgICAgIDQ1LFxuICAgICAgNDksXG4gICAgICAxODAsXG4gICAgICAyMTAsXG4gICAgICA4MSxcbiAgICAgIDY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NixcbiAgICAgIDI0NSxcbiAgICAgIDI1MixcbiAgICAgIDMwLFxuICAgICAgOSxcbiAgICAgIDIyNixcbiAgICAgIDE2NyxcbiAgICAgIDY2LFxuICAgICAgMTE3LFxuICAgICAgMjE0LFxuICAgICAgMjM4LFxuICAgICAgMjAsXG4gICAgICA3MyxcbiAgICAgIDk4LFxuICAgICAgNzUsXG4gICAgICAxNjAsXG4gICAgICAyNDMsXG4gICAgICAyLFxuICAgICAgMTkxLFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW1UdU1zQ0VJbmV5OElHR0F3Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0QU9TWjAwTkE1V2I4K3pQWlNyOHBsTnFiRFhuZERqR2J1TmgxVmVWR0FzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9JSUxqSXJUcFFtaW9BV3hPMy9pN3pTUXhScFNQWWo3R3lkazZDQVZtcTlpT3JhS3pPQmhTTTVRVTZ5dTdwRUZ5L2ZCcDRZNVc4WHZZV0FabG9Cc0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVDWVJkalFGVjlwRkVORmFmNGJGOENmUEM3VW44b0t2K2tFOGxDbk1EZ2xJZHdleTNzWVp2cG5vYjZIMXF1WTdFVjkyMWtwWGlWKy9ncmF5Sy8wR0NBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTk0NDAzNjEzNDIwOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzM1MDQzOTc4NDg1ODk6MjJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5OTQ0MDM2MTM0MjA6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUwMjY1NjEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBd0FBSGM3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIYysuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxYk03c2dQWStmOWFWb2NlbVQvRnM5bCszZGJRSHc0OE52OXpTRXVLb0gwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI1NyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ5MTgyODcxMDM3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGMwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNDVmSE1YQzlaRjNUSitTY2lDSUZhVXlQbVpBVk9uSWhteTdnYmtJV0xqcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTUwNzcyNTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODI2MjIwMDU4MFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhjMi5qc29uIjogIntcImtleURhdGFcIjpcIllhZStQTUZUNVFPaEVwUTdVZzVHYzJQd0pFdnVjeDlwWm1mQXJzY1pQUmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njk1MDc3MjU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDgyNjMyNTkxMjNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIYzQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1NVFIZmQ0aGxRTjl2NUR0UGU5ckpJMFAvcENJbjFlWmtkNWNmVjFZYTRrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI1NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDg4MjQzODA4NDVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIYzYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyZUw5V3hVeGhrOWp6bWk3K0dxNnA5b2EzL3crTDRXZithLy9PYzJFUXNnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI1NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDg4MjQ0NDkyOTRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIYzguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJERHJNK3dtV2xFME9YbGc5eTY1Q2hCdW1qNlRZTmh3eXFRNVM4ZVFaclJFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI1NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIYzkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJGMENuSkFYTjh1bU1iVlVTa3k3TG8zc250OG1rMDBoV1hjeHBNNTNzUGdvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI1NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ5MTgyODMxNTQzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGRBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOXJuRlFTOVMrZHJrZk5JSUVxWGI2K1NRckxWRGYzMHp0aDNZWjFjTHR1TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTUwNzcyNTcsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGRCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVDRKNGZ2YUNVbXprSW91Yzl4Y3JkbzFLNU00N3QxKzRjV0w2NEszSW0yOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTUwNzcyNTcsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhkQy5qc29uIjogIntcImtleURhdGFcIjpcIjQ2WUJCWHNnb1RsVElma2ZOOXYyUVh1bUU2YTZoU0ZISzhiMkE5VHZWRjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njk1MDc3MjU3LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTAwOTE3NzE5MjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIZEUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvUi9paitwK2FuSElXM0NRb2MrMzFpblhSS1pjeThJOFUzR2pHMkxxNXRBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI1NyxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsNSw2XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIZEcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVaHF4K0Rod1JKZ3JRL2paVEQ4WEVFcWVOY2N0UlptaTlQbkcvUGR6V0hzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI1NyxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsNl19LFwidGltZXN0YW1wXCI6XCIxNzUwMDkzNzgxMzYwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGRJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVzNEMnRJb1ExaUwxWk9UZng2RDRIT0NCRkJPNHBxQXpoZzZqTmJ3VEpEaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTUwNzcyNTcsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDYsN119LFwidGltZXN0YW1wXCI6XCIxNzUwMjM0NzQ1NzczXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGRKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRXRpMWNzVnhDaEhrcHJ2akQySWpFYXhkNFBVWG0reVgyOXR2d0xXWkkvWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTUwNzcyNTcsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhkSy5qc29uIjogIntcImtleURhdGFcIjpcIjY4SnQvQUowaWQvNmdPUHRLYVBNbTNUTFVwTXFaalVzTUJGMnBNUEZhRXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njk1MDc3MjU3LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCw2XX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTAyNTA4MzI5NzZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIZE0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTdUJ4WXZhWktQNy91VlM0bXRFd0Z4Z3VHK0I1bG8yTElOMGN1QkY4UzNJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI1NyxcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzAsNiw5XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIZE4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjQ1BycXBtT2xUVzlXM1IyeGNuTGNoZTQ1UGNhaVowVUhUKzlENENxWnE0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI1NyxcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzAsNl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGRPLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQzJXVWF3Q29tY1VJRFN0UmxGUzN3SmhQbzEyQk9CL0FPL0VoSmJHb2dzdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTUwNzcyNTcsXCJjdXJyZW50SW5kZXhcIjoxMCxcImRldmljZUluZGV4ZXNcIjpbMCw2XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIZFAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNL3RjSDgweXk4WWlldEh1L1o0NkEybzAzSGNlOFZ1b0MzZkNvWDRDTllZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI1NyxcImN1cnJlbnRJbmRleFwiOjExLFwiZGV2aWNlSW5kZXhlc1wiOlswLDZdfSxcInRpbWVzdGFtcFwiOlwiMTc1MDI2NTU1NjE5N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQXdBQUhjMS5qc29uIjogIntcImtleURhdGFcIjpcIlIrVHozNTEvckFHSzVqOTFndFc4YUo1bWRPTG9zVjNDNTRVWkwwUHp6cWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njk1MDc3MjU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxMl19LFwidGltZXN0YW1wXCI6XCIxNzQ4MjYyMjY3NDYwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBd0FBSGMzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiemRpRkROVXpvK25QUGdYOUNVdVpBaDByeWQ2MlNlKzBDeEFzMTY4TUxkUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTUwNzcyNTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsMTJdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODI2MzMxNzg3OFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQXdBQUhjNS5qc29uIjogIntcImtleURhdGFcIjpcInM4Y1hCR29JaE43L0luOWJmdVJra0o5RENvWWl2Y1IyTncvSHU0Q09NOWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njk1MDc3MjU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwyLDEyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDg4MjQ0MjU2MTlcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUF3QUFIYzcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYUVVkdkxDRUZHTVAwckdzOE1yWW5vU3BOcVdwMmVDT2kwSXVidzdkNzJjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI1NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwxMl19LFwidGltZXN0YW1wXCI6XCIxNzQ4ODI0NjI3NzI4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBd0FBSGNfXy5qc29uIjogIntcImtleURhdGFcIjpcIkZoQitKQVpPTHA3NXdnclVHd0dVV3VnWUlCbTlJUGFrZkFJdXVHbkpvMDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njk1MDc3MjU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCw0LDEyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDkyMzA4NDI5MDNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUJBQUFIZEQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4OVJ0NEl2RFU1VmpjclVISXJIL0svMlQ5eGlUQ09LYWRKOE02WFNSM3NrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI1NyxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMTYsNV19LFwidGltZXN0YW1wXCI6XCIxNzUwMDkyMDA1NjgyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFCQUFBSGRGLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaWFYcW9rZ3BwOEZtOWQrWmFxMEhMdEpPcnMxWTRWUFdFcEs2RXhaNk1lRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTUwNzcyNTcsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDE2LDVdfSxcInRpbWVzdGFtcFwiOlwiMTc1MDA5MzMxNjgyNlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQkFBQUhkSC5qc29uIjogIntcImtleURhdGFcIjpcImRwcVBqWG85a2N1NHN0eUNJSmZSZ0FBUkxuSG9wZHUyM05yYU9UV1BFSXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njk1MDc3MjU3LFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwxNiw3XX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTAxMTYwMjIwNzNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUJBQUFIZEwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPK2p4cGJUcGdWcW9rbUw4VjZKT3FWSW0zL0NVYjFCU0dmaVcxVVNnVENzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI1NyxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMTYsOV19LFwidGltZXN0YW1wXCI6XCIxNzUwMjUxMDc3NDE0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "🌸ضـ۬ـۧۛـ𝆊۬ـ۬ــــ۬ـۧۛـ𝆊۬دی مــّْ͢ـْــلـ۬ـۧۛـ𝆊۬ک⁰¹²🩷03247116683🤌🏻",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
