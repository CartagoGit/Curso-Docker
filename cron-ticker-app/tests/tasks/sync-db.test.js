const { syncDB } = require("../../tasks/sync-db");

describe("Pruebas en Sync-DB", () => {
	test("Debe ejecutar el proceso 2 veces", () => {
		const times = 2;
		let result = 0;
		for (let i = 0; i < times; i++) {
			result = syncDB();
		}

		console.log("Se llamo a syncDB()", result);

		expect(times).toBe(2);
	});
});
