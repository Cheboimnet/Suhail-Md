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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+254726544530";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_00_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDkxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDcwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjU1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NixcbiAgICAgICAgMTcsXG4gICAgICAgIDEwLFxuICAgICAgICAxODUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA1NixcbiAgICAgICAgNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDc0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNixcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg4LFxuICAgICAgICA2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDksXG4gICAgICAgIDUyLFxuICAgICAgICA4MixcbiAgICAgICAgNDEsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDc1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODEsXG4gICAgICAgIDY3LFxuICAgICAgICA5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDgyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MixcbiAgICAgICAgODIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MixcbiAgICAgICAgMjMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjksXG4gICAgICAgIDgzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInU4bGRWQWlkTEY4bmljK3JoQzRPaTAvSnphRk5MK3d0a1VOSDNiVEQxdFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFkVFA3ajVRVHZxakE2NE5tSndLbFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWY5NzEzODgtYzE4MS00MzBhLWI2MTYtYmFjZjMyNWMxNDI1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNixcbiAgICAgIDM2LFxuICAgICAgMTk1LFxuICAgICAgMTEsXG4gICAgICAxMzYsXG4gICAgICAyMTAsXG4gICAgICAxMjAsXG4gICAgICAyMTYsXG4gICAgICAxNDgsXG4gICAgICAxNTUsXG4gICAgICA4MixcbiAgICAgIDUwLFxuICAgICAgNjksXG4gICAgICAyNDAsXG4gICAgICAyNDgsXG4gICAgICA2NCxcbiAgICAgIDI3LFxuICAgICAgMjM2LFxuICAgICAgMTk0LFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMCxcbiAgICAgIDE4MixcbiAgICAgIDExNixcbiAgICAgIDI1NSxcbiAgICAgIDE4MixcbiAgICAgIDEyNixcbiAgICAgIDIxMyxcbiAgICAgIDEzNSxcbiAgICAgIDE3OSxcbiAgICAgIDExNSxcbiAgICAgIDE5NixcbiAgICAgIDg4LFxuICAgICAgMTEwLFxuICAgICAgMjQ2LFxuICAgICAgNTgsXG4gICAgICAyNTMsXG4gICAgICA3NSxcbiAgICAgIDE5OCxcbiAgICAgIDE0OSxcbiAgICAgIDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOU03Qjg3NVhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcyNjU0NDUzMDo3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkYAt8J2RgfCdkLjwnZGH8JOFk1wiLFxuICAgIFwibGlkXCI6IFwiMTYxODA4NjgxODQ5MDE2Ojc5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BIbmhZa0VFUGU1NkxRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMG94V00rWGo4eVlVL2NXTzlUWDlEdUtzSDJrNXZyVkFmVndrdXBacHYyZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjUXdDdjkyRHlFYVcrVG1vaEphV2V0K25rai9wd0NFblZjYUtJVklOSE1yV1UxVEFLVms0NmZrUC9hTnZDYjB0NDBlbnhjTFVJOHZ1OHB4RlRYYU9CUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWckxieE1tRklZaForejdzUmtUeDB3eTBWTjZSejFNQ0dhdW0zMFFHNVB5WDNzTUlFeW9HOXFWeTlnU09ZbklLT2dzelEwYWF3bGNMRUJ3dStLdytnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MjY1NDQ1MzA6NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzc1OTk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0RZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLRFkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHbDJkcVdPbnVMazRxeEFHbnprUkN1blpqSTZsYlpMSkdhRC80MEtmMDN3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwOTI3MTE0MDYsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAzNDc3MDQ5NjhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
