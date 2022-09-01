/* You can assert the type of an object by using eithe the as operator or pre processing directive with the type between <> brackets
this tells TypeScript that you (the developer) knopw what the type is, it does NOT do a cast or a conversion. You can assert the wrong type
and cause a runtime error.
*/
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvasSame = <HTMLCanvasElement>document.getElementById("main_canvas");

//No Assetions on primitive