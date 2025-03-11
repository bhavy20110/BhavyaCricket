const express = require("express");
const axios = require("axios");

const app = express();

const PORTAL_URL = "http://tatatv.cc/stalker_portal";
const MAC_ADDRESS = "00:1A:79:e0:68:9c";
const SERIAL_NUMBER = "2AB3EAFBD4029";
const DEVICE_ID = "CF53E643CDF8E4FACE18B68F36A204D8A8BBFC2C7C641A25DA6D9C8DA29E368F";

const HEADERS = {
  "User-Agent": "Mozilla/5.0 (QtEmbedded; U; Linux; C) AppleWebKit/533.3 (KHTML, like Gecko) MAG250 Safari/533.3",
  Referer: `${PORTAL_URL}/c/`,
  "X-User-Agent": "Model: MAG250; Link: Ethernet",
};

async function getM3U() {
  try {
    const authResponse = await axios.post(
      `${PORTAL_URL}/server/load.php?type=stb&action=handshake&token=`,
      { mac: MAC_ADDRESS, sn: SERIAL_NUMBER, device_id: DEVICE_ID },
      { headers: HEADERS }
    );

    const sessionToken = authResponse.data.token;

    const bearerResponse = await axios.post(
      `${PORTAL_URL}/server/load.php?type=stb&action=login`,
      { mac: MAC_ADDRESS, sn: SERIAL_NUMBER, device_id: DEVICE_ID },
      { headers: HEADERS }
    );

    const bearerToken = bearerResponse.data.token;

    const channelsResponse = await axios.get(
      `${PORTAL_URL}/server/load.php?type=itv&action=get_all_channels&token=${sessionToken}`,
      { headers: HEADERS }
    );

    const channels = channelsResponse.data.js || [];

    let m3uContent = "#EXTM3U\n";
    channels.forEach((channel) => {
      const stream_url = `${PORTAL_URL}/server/load.php?type=itv&action=create_link&cmd=${channel.cmd}&token=${sessionToken}`;
      const final_url = `${stream_url}&Authorization=Bearer ${bearerToken}`;
      m3uContent += `#EXTINF:-1 tvg-name="${channel.name}",${channel.name}\n${final_url}\n`;
    });

    return m3uContent;
  } catch (error) {
    console.error("Error fetching M3U:", error.message);
    return "#EXTM3U\n#EXTINF:-1,Error fetching channels\n";
  }
}

app.get("/api/stalker-to-m3u", async (req, res) => {
  try {
    const m3u = await getM3U();
    res.setHeader("Content-Type", "audio/mpegurl");
    res.send(m3u);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = app;
module.exports.config = {
  runtime: "nodejs18.x",
};
