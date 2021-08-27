/**
 1. Find the costliest product 
 2. Find the product that has the least stock
 3. Group the products by category
    {
        'stationary' : [
            {id : 6, name : 'Pen', cost : 50, units : 20, category : 'stationary'}, 
            {id : 9, name : 'Ten', cost : 70, units : 70, category : 'stationoary'}
        ],
        'grocery' : [
            {id : 3, name : 'Len', cost : 60, units : 60},
            ......
    }
 * 
 */
var products = [
  { id: 6, name: 'Pen', cost: 50, units: 20, category: 'stationary' },
  { id: 9, name: 'Ten', cost: 70, units: 70, category: 'stationary' },
  { id: 3, name: 'Len', cost: 60, units: 60, category: 'grocery' },
  { id: 5, name: 'Zen', cost: 30, units: 30, category: 'grocery' },
  { id: 1, name: 'Ken', cost: 20, units: 80, category: 'utencil' },
];

let initialCost = 0;
let costlyProduct = products.reduce((result, product) => (result.cost > product.cost ? result : product));

let leastStock = products.reduce((result, product) => (result.stock > product.stock ? result : product));

// Group by solution 1
let result = products.reduce((result, product) => {
  result[product.category] = result[product.category] || [];
  result[product.category].push(product);
  return result;
}, {});

// Group by solution 2 - with configurable key
function groupByCategory(list, key) {
  return list.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}
var groupedCategories = groupByCategory(products, 'category');
