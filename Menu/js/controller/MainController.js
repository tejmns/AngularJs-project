app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name:'Bruschetta',
      description:'Grilled bread garlic, tomatoes, olive oil.',
      price:4.95
    }
  ];
  
 $scope.mains=[
   {
     name:'Carbohydrates',
     description:'This group contains starchy foods such as pasta, rice, oats, potatoes, noodles, yam, green bananas',
     price:10.95
   },
   {
     name:'Protein',
     description:' This helps the body to grow and repair itself. They are like building blocks for the body. Meat is a good source of iron. We should eat 2-3 servings of these every day',
     price:20.95
   },
   {
     name:'Milk and dairy products',
     description:'This way you get the whole range of all the important nutrients these foods give. You should eat at least five portions of fruit and vegetables a day.',
     price:15.65
   }
 ];
  
$scope.extras=[
  {
    name:'Nachos',
    description:'Chips',
    price:1.99
  },
  {
    name:'Single Taco',
    description:'Taco',
    price:0.99
  },
  {
    name:'Taco Salad',
    description:'Its salad with a taco what did you expect',
    price:0.99
  }
];

}]);