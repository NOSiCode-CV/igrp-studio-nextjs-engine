import { deleteElement } from '../src';
import { DeleteConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

describe('Generic page deletion', () => {
    it('should delete a element', async () => {
        const element: DeleteConfig = {
          name: "registros",
          type: 'page'
        };

        await deleteElement(element, OUTPUT_DIR)
    });
});

describe('Generic component deletion', () => {
  it('should delete a element', async () => {
    const element: DeleteConfig = {
      name: "card",
      type: 'component'
    };

    await deleteElement(element, OUTPUT_DIR)
  });
});