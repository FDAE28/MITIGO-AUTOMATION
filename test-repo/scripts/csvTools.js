function generateUrl(env, endpoint) {
    // Usa $data para cargar los datos del archivo config.yaml
    var urls = $data("config.yaml");
  
    // Obtén la URL del entorno especificado (dev, stg, uat, prod)
    var baseUrl = urls[`LoginOneApp${env.toUpperCase()}`].url;
  
    // Añade el endpoint si es necesario
    var finalUrl = baseUrl + endpoint;
  
    return finalUrl;
  }
  