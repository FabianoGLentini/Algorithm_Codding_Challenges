// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

//First Pass

function rgb(r, g, b){
  
    const hexConv = c => {
      if(c<0){ return "00"}
      if(c>255){return "FF"}
      
      const hex = c.toString(16)
      
      return hex.length == 1 ? "0"+hex: hex
    }
    
    return  (hexConv(r) + hexConv(g) + hexConv(b)).toUpperCase()
  }

//Code Wars Alternative

function rgb(r, g, b){
	return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

//Or

function rgb(r, g, b) {
	r = Math.max(0, Math.min(255, r));
	g = Math.max(0, Math.min(255, g));
	b = Math.max(0, Math.min(255, b));

	let color = (r << 16) + (g << 8) + b;

	return ('00000' + color.toString(16).toUpperCase()).slice(-6);
}