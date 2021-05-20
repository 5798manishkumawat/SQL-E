export const queryData = [
	{
		query: "select * from orders;",
		result: [
			{
				orderID: "10248",
				customerId: "VINET",
				employeeId: "5",
				orderedDate: "1996-07-04",
				shippedDate: "1996-07-16",
				freight: "32.38",
				shipName: "Vins et alcools Chevalier",
				shipAddress: "59 rue de l'Abbaye",
			},
			{
				orderID: "10249",
				customerId: "TOMSP",
				employeeId: "6",
				orderedDate: "1996-07-05",
				shippedDate: "1996-07-10",
				freight: "11.61",
				shipName: "Toms Spezialitäten",
				shipAddress: "Luisenstr. 48",
			},
			{
				orderID: "10250",
				customerId: "HANAR",
				employeeId: "4",
				orderedDate: "1996-07-08",
				shippedDate: "1996-07-12",
				freight: "65.83",
				shipName: "Hanari Carnes",
				shipAddress: "Rua do Paço 67",
			},
			{
				orderID: "10251",
				customerId: "VICTE",
				employeeId: "3",
				orderedDate: "1996-07-08",
				shippedDate: "1996-07-15",
				freight: "41.34",
				shipName: "Victuailles en stock",
				shipAddress: "2 rue du Commerce",
			},
			{
				orderID: "10252",
				customerId: "SUPRD",
				employeeId: "4",
				orderedDate: "1996-07-09",
				shippedDate: "1996-07-11",
				freight: "51.30",
				shipName: "Suprêmes délices",
				shipAddress: "Boulevard Tirou 255",
			},
			{
				orderID: "10253",
				customerId: "HANAR",
				employeeId: "3",
				orderedDate: "1996-07-10",
				shippedDate: "1996-07-16",
				freight: "58.17",
				shipName: "Hanari Carnes",
				shipAddress: "Rua do Paço 67",
			},
			{
				orderID: "10254",
				customerId: "CHOPS",
				employeeId: "5",
				orderedDate: "1996-07-11",
				shippedDate: "1996-07-23",
				freight: "22.98",
				shipName: "Chop-suey Chinese",
				shipAddress: "Hauptstr. 31",
			},
			{
				orderID: "10255",
				customerId: "RICSU",
				employeeId: "9",
				orderedDate: "1996-07-09",
				shippedDate: "1996-07-15",
				freight: "148.33",
				shipName: "Richter Supermarkt",
				shipAddress: "Starenweg 5",
			},
		],
	},
	{
		query: "select * from orders where orderID = 10248;",
		result: [
			{
				orderID: "10248",
				customerId: "VINET",
				employeeId: "5",
				orderedDate: "1996-07-04",
				shippedDate: "1996-07-16",
				freight: "32.38",
				shipName: "Vins et alcools Chevalier",
				shipAddress: "59 rue de l'Abbaye",
			},
		],
	},
	{
		query: "select * from orders where employeeId = 5;",
		result: [
			{
				orderID: "10248",
				customerId: "VINET",
				employeeId: "5",
				orderedDate: "1996-07-04",
				shippedDate: "1996-07-16",
				freight: "32.38",
				shipName: "Vins et alcools Chevalier",
				shipAddress: "59 rue de l'Abbaye",
			},
			{
				orderID: "10254",
				customerId: "CHOPS",
				employeeId: "5",
				orderedDate: "1996-07-11",
				shippedDate: "1996-07-23",
				freight: "22.98",
				shipName: "Chop-suey Chinese",
				shipAddress: "Hauptstr. 31",
			},
		],
	},
	{
		query: "select * from orders where orderedDate = '1996-07-08';",
		result: [
			{
				orderID: "10250",
				customerId: "HANAR",
				employeeId: "4",
				orderedDate: "1996-07-08",
				shippedDate: "1996-07-12",
				freight: "65.83",
				shipName: "Hanari Carnes",
				shipAddress: "Rua do Paço 67",
			},
			{
				orderID: "10251",
				customerId: "VICTE",
				employeeId: "3",
				orderedDate: "1996-07-08",
				shippedDate: "1996-07-15",
				freight: "41.34",
				shipName: "Victuailles en stock",
				shipAddress: "2 rue du Commerce",
			},
		],
	},
	{
		query: "select * from orders where shippedDate = '1996-07-15';",
		result: [
			{
				orderID: "10251",
				customerId: "VICTE",
				employeeId: "3",
				orderedDate: "1996-07-08",
				shippedDate: "1996-07-15",
				freight: "41.34",
				shipName: "Victuailles en stock",
				shipAddress: "2 rue du Commerce",
			},
			{
				orderID: "10255",
				customerId: "RICSU",
				employeeId: "9",
				orderedDate: "1996-07-09",
				shippedDate: "1996-07-15",
				freight: "148.33",
				shipName: "Richter Supermarkt",
				shipAddress: "Starenweg 5",
			},
		],
	},
	{
		query: "select * from orders where freight > 40;",
		result: [
			{
				orderID: "10250",
				customerId: "HANAR",
				employeeId: "4",
				orderedDate: "1996-07-08",
				shippedDate: "1996-07-12",
				freight: "65.83",
				shipName: "Hanari Carnes",
				shipAddress: "Rua do Paço 67",
			},
			{
				orderID: "10251",
				customerId: "VICTE",
				employeeId: "3",
				orderedDate: "1996-07-08",
				shippedDate: "1996-07-15",
				freight: "41.34",
				shipName: "Victuailles en stock",
				shipAddress: "2 rue du Commerce",
			},
			{
				orderID: "10252",
				customerId: "SUPRD",
				employeeId: "4",
				orderedDate: "1996-07-09",
				shippedDate: "1996-07-11",
				freight: "51.30",
				shipName: "Suprêmes délices",
				shipAddress: "Boulevard Tirou 255",
			},
			{
				orderID: "10253",
				customerId: "HANAR",
				employeeId: "3",
				orderedDate: "1996-07-10",
				shippedDate: "1996-07-16",
				freight: "58.17",
				shipName: "Hanari Carnes",
				shipAddress: "Rua do Paço 67",
			},
			{
				orderID: "10255",
				customerId: "RICSU",
				employeeId: "9",
				orderedDate: "1996-07-09",
				shippedDate: "1996-07-15",
				freight: "148.33",
				shipName: "Richter Supermarkt",
				shipAddress: "Starenweg 5",
			},
		],
	},
];

export const queries = [
	"select * from orders;",
	"select * from orders where freight > 40;",
	"select * from orders where employeeId = 5;",
	"select * from orders where orderedDate = '1996-07-08';",
	"select * from orders where shippedDate = '1996-07-15';",
	"select * from orders where orderID = 10248;",
	"select * from orders where orderedDate = '1996-07-08';",
	"select * from orders where shippedDate = '1996-07-15';",
	"select * from orders where orderID = 10248;",
	"select * from orders where orderedDate = '1996-07-08';",
	"select * from orders where shippedDate = '1996-07-15';",
	"select * from orders where orderID = 10248;",
];
