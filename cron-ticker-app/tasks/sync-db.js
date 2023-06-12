let times = 0;
const syncDB = () => {
	times++;
	console.log("Tick cada 5 segundos.", `Veces que se ha repetido: ${times}`);
	return times;
};


module.exports = {
    syncDB
}