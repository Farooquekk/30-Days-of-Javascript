/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return{
       toBe: function (expected) {
       if (val === expected) {
         return true;
       } else {
         throw new Error("Not Equal");
       }
    },      
     
   notToBe : function (expected) {
       if (val !== expected) {
         return true;
       } else {
         throw new Error("Equal");
       }
     }
   }
 
 
};
  
 
