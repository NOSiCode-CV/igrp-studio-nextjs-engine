import path from "path";
import { loadConfig } from "../../utils/helpers";
import { DIRECTORIES } from "../../utils/constants";


export const loadPageMetaConfig = async(basePath: string) =>{
  return await loadConfig(path.join(basePath, DIRECTORIES.IGRPSTUDIO));
}