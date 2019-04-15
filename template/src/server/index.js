import modules from "@/modules";
export default modules(require.context('./modules', true, /.+\.js$/));
