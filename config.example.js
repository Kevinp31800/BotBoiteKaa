module.exports = () => {
  // setting your env for local server

  process.env.PORT = Math.floor(Math.random() * 9999);
  process.env.TDPASS = 'YOUDISCORDTOKEN';
  process.env.SELF_ID = 'ID_OF_YOUR_BOT';
  process.env.ADMIN = 'ADMIN_ID';
  process.env.RECAST_AI = 'YOUR_RECAST_AI';
  process.env.UP_GEN = 'YOUR_CHANNEL_ID';
  process.env.WHITE_LIST = '["WHITELISTED_CHANNEL", "WHITELISTED_CHANNEL", "WHITELISTED_CHANNEL"]';
}