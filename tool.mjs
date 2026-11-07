export const metadata = {"slug": "color-converter", "title": "Color Converter", "description": "Convert hexadecimal color values into RGB and luminance."};
export const fields = [{"name": "hex", "label": "Hex color", "value": "#336699"}];
export function compute(input){
  const h=input.hex.replace(/^#/,'');if(!/^[0-9a-fA-F]{6}$/.test(h))throw Error('Use a 6-digit hex color');const rgb=[0,2,4].map(i=>parseInt(h.slice(i,i+2),16));const linear=rgb.map(v=>{v/=255;return v<=0.04045?v/12.92:((v+0.055)/1.055)**2.4});return {rgb,relativeLuminance:Number((linear[0]*0.2126+linear[1]*0.7152+linear[2]*0.0722).toFixed(4))}
}
