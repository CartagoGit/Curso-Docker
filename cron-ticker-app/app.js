const cron = require("node-cron");
const { syncDB } = require("./tasks/sync-db");
let times = 0;

console.log("Inicio pa subirlo");


// cron.schedule("*/5 * * * * *", () => {
// 	times++;
// 	console.log("Tick cada 5 segundos.", `Veces que se ha repetido: ${times}`);
// });
cron.schedule("*/5 * * * * *", syncDB);

