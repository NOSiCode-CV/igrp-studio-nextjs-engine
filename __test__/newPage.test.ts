import { newPage } from '../src/index';
import { PageConfig } from '../src/interfaces/types';
import {OUTPUT_TEST} from '../testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const pageConfig: PageConfig = {
  type: 'page',
  pageName: 'test',
  path: 'test',
  components: [],
};
const pokePage: PageConfig = {
  type: 'page',
  pageName: 'pokemon',
  path: 'pokemon',
  components: [],
};

describe('Page module',() =>{
  it('should save the page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
