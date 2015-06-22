/**
 * Created by Sachidananda on 21-06-2015.
 */
angular.module('ContactsApp')
    .filter('labelCase', function(){
        return function (input){
            input = input.replace(/([A-Z])/g, '$1');
            return input[0].toUpperCase() + input.slice(1);
        }
    })