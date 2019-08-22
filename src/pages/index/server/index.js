import {
    modules
} from "@/common/index.js";
export default modules(require.context('./modules', true, /.+\.js$/));