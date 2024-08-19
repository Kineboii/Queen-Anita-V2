//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR09VQUtQb1dpU3BQZWs1V3lGVWxBWk4weER2aS9KeHZTR25reDRnU1lYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGRURVRMQ1BzRVJZc1NvVFJSRm91ejF5cnIrRC9NZEdKVFpoN2d3aHRuYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQ2ZrWlhGMk9Qb0UwdnIrK2tQdVFGZFlqL1lGcUpvU3dadVRZbHFxZlhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6SXFlblpPUnFHVmxxL0NsZmpVS2tUalAxOXdPRVJ6U05MTUthSXJwUlU4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtFaUpvK1BHS2lEWEgvaEMzRXNaa2ZVclV5Zm94dEkzZW9OVUVYaHNERk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFpeFhVbU14Y1N6dERlMkZDSklPbnc3cC94VUtMS3FDQ3Mrem9jYmhyUzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU05MWVM0Z0UyNGNrN3p0N0g4YjlObHRmcjhHVDN5YldiUGVoZEVkM25YYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGMwTE5jMjQzc3IvSzh3S3ZkVlpqeUEyWjNlc1RDSWRMT0RmL1JBdkZpcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVmV1FiTFlzdnVvMkdQM0RYRFlORGd3MUUvMHBpSk44Z0VQVFE1V0Fkam51OTVvU2VrWXhMdjJaMXJ2b2dJT0xuQXBhM2RoSzdRYVZneVlMQ0tYb0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODMsImFkdlNlY3JldEtleSI6IjZMY1k5UVV3Z2s1NHVtaWNQN0JVT0FkQU9VWkdaR3dzTTJYaVJ2aFFscnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzgzNTI1ODI0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNEQkUwQTY5MTVENjAxMTU4QUIwRjY1Mjk2OEQ3RTJBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjQwNjUwODV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc4MzUyNTgyNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3NjQ0RkE5MkZDM0QzQzgwOEZGRDE5OTA3MkY1REMzRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI0MDY1MDg1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwNWdiSjAxa1NxQ0NJdS1SWktDalh3IiwicGhvbmVJZCI6IjUwM2M0MGNlLTM2ZGUtNGRjMi04NzM1LWRiODE2ZWFhZDViYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCOHlmcEt3czkvYTlNUk5KL2lYMG5QaE40QVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXdIM1VCdGpHV0p0emNHdUV5Rklic2RXTGtNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjY4SlpEQkxTIiwibWUiOnsiaWQiOiIyNjM3ODM1MjU4MjQ6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJJQ09OSUNTLS1NRC0tQk9UX293bmVyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMMjVpNnNCRUt6S2pMWUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJvNjNQOFI2blByWWx5L1BsSHhlU0FCUmhTTkorY1piS0xRREZUc0lPUEF3PSIsImFjY291bnRTaWduYXR1cmUiOiJhbGNib0ViRnMzTXh4ZGMreHY3NXI1WUh4cTNlUXJMWmxVdXZITytwRytZS0RXc2RScERySmNxSmc5amxHRzVwU2haMWZKUVVxazIyRm0zZm9YNEJEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOTdCTU03RW9mWk1ONHYxMEJXL0VSb2UwaEJmYWM5QTV5VDhXeWxYTytrQTdMck5Vc2cwc0FpeUtjT1B0TE05anU1QzYyeW5zNHd0YjRnUjNySUR3Q0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3ODM1MjU4MjQ6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhT3R6L0VlcHo2Mkpjdno1UjhYa2dBVVlValNmbkdXeWkwQXhVN0NEandNIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0MDY1MDgyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU03UiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
