export class Util {

  static toNumber = (val, casas = 2) =>  {
        const v = val === undefined ? 0 : val === null ? 0 : typeof val === 'number' ? Number(val.toFixed(casas)) : Number(Number.parseFloat(val.toString().replace(',', '.')).toFixed(casas))
        return isNaN(v) || !isFinite(v) ? 0 : v
    }
}
