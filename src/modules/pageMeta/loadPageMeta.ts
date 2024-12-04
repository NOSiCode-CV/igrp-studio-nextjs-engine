import path from "path";
import { loadConfig } from "@/utils/helpers";
import { DIRECTORIES, COMMON_FILES } from "@/utils/constants";


export const loadPageMetaConfig = async(basePath: string) =>{
  return await loadConfig(path.join(basePath, DIRECTORIES.IGRPSTUDIO, COMMON_FILES.PAGES_META));
}