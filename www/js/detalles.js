angular.module('starter.services', [])


.factory('detallesfactory', function(){
    return {
        detalles: [{},{
            id: 1,
            fecha:'18/10/2016',
            resumen: [
				{titulo: 'I Robot'},
				{autor:'Isac Asimov'},
				{editorial:'Edhasa'},
                {img:'img/irobot.jpg'},
                {precio:100}
			],
            cantidad: '(3)',
            estado:'PAGADO',
            total:'300'
            },
            {
            id: 2,
            fecha:'18/23/2016',
            resumen: [
				{titulo: 'Juego de tronos'},
				{autor:'George R. R. Martin'},
				{editorial:'Gigamesh'},
                {img:'img/tronos.jpg'},
                {precio:150}
			],
            cantidad:'(1)',
            estado:'NO PAGADO',
            total:'150'
            }]
    };
});