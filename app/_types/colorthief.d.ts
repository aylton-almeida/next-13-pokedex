declare module 'colorthief' {
  export default abstract class ColorThief {
    static getColor(sourceImage: string, quality?: number): Promise<[number, number, number]>;
  }
}
