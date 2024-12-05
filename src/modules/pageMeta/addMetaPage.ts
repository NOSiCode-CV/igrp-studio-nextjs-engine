import { PageConfig, PageMetaConfig } from '@/interfaces/types'
import { COMMON_FILES, DIRECTORIES } from '../../utils/constants'
import fs from 'fs-extra'
import path from 'path'
import { savePagesMeta } from './savePagesMeta'
import { loadConfig } from '../../utils/helpers'

export const updateMeta = async (basePath: string) => {
  try {
    const dirPath = path.join(basePath, DIRECTORIES.IGRPSTUDIO, COMMON_FILES.PAGES_META)
    const pages: PageConfig[] = await loadConfig(path.join(basePath, DIRECTORIES.IGRPSTUDIO, 'pages'));

    let pageMeta: PageMetaConfig = await fs.readJson(dirPath)

    if(pages && pages.length === 0) {
      pageMeta.resourceItems = [];  
    }

    if (pageMeta && pages && pages.length > 0) {
      pageMeta.resourceItems = pages.map((p: PageConfig) => ({
        name: p.pageName,
        url: `/pages/${p.path}`,
        description: 'description page',
        resourceItemType: 'PAGE',
      }))
    }

    await savePagesMeta(pageMeta, basePath)
  } catch (error) {
    console.error('Error adding meta:', error)
  }
}
