import test from 'node:test';
import assert from 'node:assert/strict';
import {compute} from './tool.mjs';
test('sample behavior',()=>{const result=compute({"hex": "#336699"});for(const [key,value] of Object.entries({"rgb": [51, 102, 153], "relativeLuminance": 0.1251}))assert.deepStrictEqual(result[key],value,key)});
