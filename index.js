function recivesAFunction(cb){
    return cb();
}

function returnsANamedFunction(){
    return function x(){};
}

function returnsAnAnonymousFunction(){
    return function(){};
}
