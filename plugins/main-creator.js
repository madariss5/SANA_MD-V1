let handler = async (m, { conn, usedPrefix, isOwner }) => {
  let vcard = `BEGIN:VCARD
VERSION:3.0
N:;Tohid;;;
FN:Ms Sana 
ORG:SanaMd
TITLE:Owner
item1.TEL;waid=917849917350:923337468951
item1.X-ABLabel:Owner
X-WA-BIZ-DESCRIPTION:Developer of the Bot
X-WA-BIZ-NAME:Ms Sana 
END:VCARD`;

  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: '*Sana Khan*',
      contacts: [{ vcard }]
    }
  }, { quoted: m });
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['creator', 'creador', 'dueño'];

export default handler;
