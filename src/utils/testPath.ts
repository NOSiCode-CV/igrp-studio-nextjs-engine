import os from 'os';
import path from 'path';

const TEST_OUTPUT_ROOT = path.join(os.tmpdir(), 'nextjs-engine-tests');

export const OUTPUT_TEST = path.join(TEST_OUTPUT_ROOT, 'generatedFromZip14');
export const OUTPUT_TEST2 = path.join(TEST_OUTPUT_ROOT, 'generatedFromZip4');
export const OUTPUT_TODO_TEST = path.join(TEST_OUTPUT_ROOT, 'taskManagement');
export const OUTPUT_TAXPAYER_TEST = path.join(TEST_OUTPUT_ROOT, 'taxPayerManagement');
