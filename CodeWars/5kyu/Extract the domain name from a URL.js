// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


// First Pass

function domainName(url){
    let urlArr = []
    if ( url.includes("www")){
      urlArr = url.split(".")
	  return urlArr[1]
    }else if (url.includes("https://")){
      urlArr = url.slice(8).split(".")
      return urlArr[0]
    }else if (url.includes("http://")){
        urlArr = url.slice(7).split(".")
        return urlArr[0]
    }else{
          urlArr = url.split(".")
	  return urlArr[0]
    }
  }

  //Code wars recomended refractor

  function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };