module.exports = function parOuImpar(n){
    if(!Number.isInteger(n)){
        return 'impossivel';
    }

    if(n%2==0) return 'par';

    if(n%2==1) return 'impar';


}