(function(){
  var bocks = [{ id: '1',
              titulo: 'El juego de Ender',
              autor: 'Orson Scott Card',
              editorial:'Ediciones B/Zeta',
              precio:10,
              descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a arcu ut dui aliquam semper. Nullam lobortis leo ut urna volutpat, a ultrices libero fringilla. Aenean porta et nibh egestas imperdiet. Maecenas sed faucibus lacus. Curabitur eu sollicitudin ex. Nulla congue, dolor id porttitor facilisis, dui ex condimentum purus, at aliquet dui sem vitae mauris. Nulla laoreet maximus imperdiet.  ',
              images: 'img/ender.jpg'
               },
            
              { id: '2',
              titulo: 'Juego de tronos',
              autor: 'George R. R. Martin',
              editorial:'Gigamesh',
              precio:150,
              descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a arcu ut dui aliquam semper. Nullam lobortis leo ut urna volutpat, a ultrices libero fringilla. Aenean porta et nibh egestas imperdiet. Maecenas sed faucibus lacus. Curabitur eu sollicitudin ex. Nulla congue, dolor id porttitor facilisis, dui ex condimentum purus, at aliquet dui sem vitae mauris. Nulla laoreet maximus imperdiet.  ',
              images: 'img/tronos.jpg'
              },
             
              { id: '3',
              titulo: 'A robot',
              autor: 'Isac Asimov',
              editorial:'Edhasa',
              precio:100,
              descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a arcu ut dui aliquam semper. Nullam lobortis leo ut urna volutpat, a ultrices libero fringilla. Aenean porta et nibh egestas imperdiet. Maecenas sed faucibus lacus. Curabitur eu sollicitudin ex. Nulla congue, dolor id porttitor facilisis, dui ex condimentum purus, at aliquet dui sem vitae mauris. Nulla laoreet maximus imperdiet.',
              images:'img/irobot.jpg'
              }
    ];
    
    
    var usuario = {
              nombre:'Fernando Aguayo',
              email:'fernando.aguayo@hotmail.com',
              contra:'12345',
              direccion:'Nuez de castilla #5503',
              cp:'31150',
              pais:'Mexico',
              ciudad:'Chihuahua'
    }; 
    
  
    
    var app = angular.module('bockStore', ['ui.router', 'starter.services']);
  
        app.controller('BockStoreController', function(){
            this.products = bocks;
            this.usuario = usuario;
        });
    
        app.controller("detalleController", function($scope, detallesfactory, $stateParams){
            
            $scope.pedidos = detallesfactory.detalles[$stateParams.id];
        })
        
        app.controller("tablaController", function($scope, detallesfactory){
            
            $scope.tablapedidos = detallesfactory.detalles;
        })  
                       
        

        app.config(function($stateProvider, $urlRouterProvider) {
  
            $stateProvider
            .state('index', {
            url: "/index",
            templateUrl: "index.html"
            })
    
            .state('datos', {
            url: "/datos",
            templateUrl: "templates/datos.html"
            })
  
            .state('pedidos', {
            url: "/pedidos",
            templateUrl: "templates/pedidos.html"
            })
  
            .state('dashboard', {
            url: "/dashboard",
            templateUrl: "templates/dashboard.html"
            })
            
            .state('detalle', {
            url: "/pedidos/:id",
            templateUrl: "templates/detalle-pedido.html",
            
            })
            
        });
    
       
   
                 
})();