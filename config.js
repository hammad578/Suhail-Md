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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_15_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTczLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDM4LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDE4LFxuICAgICAgICA5NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDY3LFxuICAgICAgICA0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQxLFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MixcbiAgICAgICAgNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMixcbiAgICAgICAgNjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDc1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODksXG4gICAgICAgIDM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgODMsXG4gICAgICAgIDY3LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDU4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgODcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODYsXG4gICAgICAgIDc3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0UXZMRytOeitwYzUybXF3VG43ZXoyQXl3OEZjamxmRmZkeklTRDZpODBvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0WDI4VHNCX1RHQ0UyOVQwSW5FMG5RXCIsXG4gIFwicGhvbmVJZFwiOiBcImE4NWYzM2M2LWVhODItNGVjYy1iYmE2LTk5ZDRkZjhlZWUwZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTYsXG4gICAgICAyMDUsXG4gICAgICAyNDMsXG4gICAgICAyMzksXG4gICAgICAyMTMsXG4gICAgICAxMzksXG4gICAgICAxMDgsXG4gICAgICAyOSxcbiAgICAgIDE4MixcbiAgICAgIDEwMyxcbiAgICAgIDU2LFxuICAgICAgMjU0LFxuICAgICAgMTU5LFxuICAgICAgMTUyLFxuICAgICAgNDcsXG4gICAgICA4OCxcbiAgICAgIDQyLFxuICAgICAgMjEsXG4gICAgICAyLFxuICAgICAgMjE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OCxcbiAgICAgIDE3MCxcbiAgICAgIDI1NSxcbiAgICAgIDc3LFxuICAgICAgNTcsXG4gICAgICAxNjksXG4gICAgICAyNDEsXG4gICAgICA5LFxuICAgICAgNzAsXG4gICAgICAxNzksXG4gICAgICAxNTgsXG4gICAgICAyMDcsXG4gICAgICAyMjMsXG4gICAgICA5MixcbiAgICAgIDIyNSxcbiAgICAgIDIyNSxcbiAgICAgIDI1MSxcbiAgICAgIDU4LFxuICAgICAgNzcsXG4gICAgICAxMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNlE1TlhDNFhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE5ODk1MzA4NzoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE5MTY0MzIwNjI4ODg1OjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xIdjlmNEJFS1crNnJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTzVtaEM4UGNEblZLSUtTY0g5TlUxODJNaXVGS1RGSlVKSXdqN29IelIzWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3WWFCM2JSUyt5ckpPV0FXRVBMemRQUklWWnpMR2hZQ0dza0ZzZ1gyNFZyKzh0UnByUzJMN3grU1BzanE0RmRxRUkyckhRWmVVK2JsckFVTmZUakxBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIyMU85Nmd1SVBBa0UreEtIOGkyaGx3ejRRWjRuL3lGa1B4dnV4eldCRHZNT2RVYkkxV1hoa1NTYzhsa0NzZ3hudCtBcm1uZXUyUXcrbnZNTHJlTDdqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxOTg5NTMwODc6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDA5MzIwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTzNkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPM2QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYYnNBOVg4dkpXY0ozc21RbW4yZmxraFV5QXpKSDFxRkFwa1ZlS21wQkJZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUzNDYwNzc5MCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyNzAxNjc4NzNcIn0iCn0="  // PUT your SESSION_ID 


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
