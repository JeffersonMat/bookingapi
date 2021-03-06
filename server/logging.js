const getTimeStamp = () => {
    return new Date().toISOString();
}

const info = (namespace, message, object ) => {
  
    if (object) {
        console.log(`[${getTimeStamp()}][INFO][${namespace}] ${message}`, object);
        
    }
    else {
        console.log(`[${getTimeStamp()}][INFO][${namespace}] ${message}`);
    }
    
}
 

const warn = (namespace, message, object ) => {
  
    if (object) {
        console.log(`[${getTimeStamp()}][WARN][${namespace}] ${message}`, object);
        
    }
    else {
        console.log(`[${getTimeStamp()}][WARN][${namespace}] ${message}`);
    }
    
}


const debug = (namespace, message, object ) => {
  
    if (object) {
        console.log(`[${getTimeStamp()}][DEBUG][${namespace}] ${message}`, object);
        
    }
    else {
        console.log(`[${getTimeStamp()}][DEBUG][${namespace}] ${message}`);
    }
    
}

const error = (namespace, message, object) => {
  
    if (object) {
        console.log(`[${getTimeStamp()}][DEBUG][${namespace}] ${message}`, object);
        
    }
    else {
        console.log(`[${getTimeStamp()}][DEBUG][${namespace}] ${message}`);
    }
    
}


module.exports =  {
    info,
    warn,
    error,
    debug
}