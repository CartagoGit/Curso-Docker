const cron = require("node-cron");
let times = 0;

cron.schedule("*/5 * * * * *", () => {
	times++;
	console.log("Tick cada 5 segundos", `Veces que se ha repetido: ${times}`);
});

console.log("Inicio");
