import * as Transformers from '@huggingface/transformers';
import wasm from './node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.jsep.wasm';
Transformers.env.allowRemoteModels=false;
Transformers.env.allowLocalModels=true;
Transformers.env.localModelPath=new URL('./models/',import.meta.url).href;
Transformers.env.backends.onnx.wasm.wasmPaths={wasm};
Transformers.env.backends.onnx.wasm.numThreads=1;
export const library=Transformers;
export function mount(){throw Error('Transformers.js is a system library, not a window.');}
