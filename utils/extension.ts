export const checkExtension = (extension: string): string => {
  if (extension == "abap" || extension == "asddls") {
    return "abap";
  }

  if (extension == "aes") {
    return "aes";
  }

  if (extension == "cls") {
    return "apex";
  }

  if (extension == "azcli") {
    return "azcli";
  }

  if (extension == "bat" || extension == "cmd") {
    return "bat";
  }

  if (extension == "bicep") {
    return "bicep";
  }

  if (
    extension == "c" ||
    extension == "cats" ||
    extension == "h" ||
    extension == "idc"
  ) {
    return "c";
  }

  if (extension == "mligo") {
    return "cameligo";
  }

  // TODO: ".cljs.hl"
  if (
    extension == "clojure" ||
    extension == "clj" ||
    extension == "boot" ||
    extension == "cl2" ||
    extension == "cljc" ||
    extension == "cljscm" ||
    extension == "cljx" ||
    extension == "hic"
  ) {
    return "clojure";
  }

  if (
    extension == "coffee" ||
    extension == "_coffee" ||
    extension == "cake" ||
    extension == "cjsx" ||
    extension == "iced"
  ) {
    return "coffeescript";
  }

  if (
    extension == "cpp" ||
    extension == "c++" ||
    extension == "cc" ||
    extension == "cp" ||
    extension == "cxx" ||
    extension == "h" ||
    extension == "h++" ||
    extension == "hh" ||
    extension == "hpp" ||
    extension == "hxx" ||
    extension == "inc" ||
    extension == "inl" ||
    extension == "ino" ||
    extension == "ipp" ||
    extension == "ipp" ||
    extension == "ixx" ||
    extension == "re" ||
    extension == "tcc" ||
    extension == "tpp"
  ) {
    return "cpp";
  }

  if (
    extension == "cs" ||
    extension == "cake" ||
    extension == "csx" ||
    extension == "linq"
  ) {
    return "csharp";
  }

  if (extension == "csp") {
    return "csp";
  }

  if (
    extension == "css" ||
    extension == "mss" ||
    extension == "less" ||
    extension == "pcss" ||
    extension == "postcss" ||
    extension == "scss" ||
    extension == "sss"
  ) {
    return "css";
  }

  if (extension == "dart") {
    return "dart";
  }

  // For this, it's handling the whole file name
  if (extension == "Dockerfile" || extension == "Containerfile") {
    return "dockerfile";
  }

  if (extension == "ecl" || extension == "eclxml") {
    return "ecl";
  }

  if (extension == "flow") {
    return "flow9";
  }

  if (extension == "fs" || extension == "fsi" || extension == "fsx") {
    return "fsharp";
  }

  if (extension == "go") {
    return "go";
  }

  if (extension == "graphql" || extension == "gql" || extension == "graphqls") {
    return "graphql";
  }

  if (extension == "handlebars" || extension == "hbs") {
    return "handlebars";
  }

  if (
    extension == "hcl" ||
    extension == "nomad" ||
    extension == "tf" ||
    extension == "tfvars" ||
    extension == "workflow"
  ) {
    return "hcl";
  }

  // TODO: ".html.hl"
  if (
    extension == "html" ||
    extension == "htm" ||
    extension == "hta" ||
    extension == "inc" ||
    extension == "xht" ||
    extension == "xhtml"
  ) {
    return "html";
  }

  if (
    extension == "ini" ||
    extension == "cfg" ||
    extension == "dof" ||
    extension == "lektorproject" ||
    extension == "prefs" ||
    extension == "pro" ||
    extension == "properties" ||
    extension == "url"
  ) {
    return "ini";
  }

  if (extension == "java" || extension == "jav") {
    return "java";
  }

  if (
    extension == "js" ||
    extension == "_js" ||
    extension == "bones" ||
    extension == "cjs" ||
    extension == "es" ||
    extension == "es6" ||
    extension == "frag" ||
    extension == "gs" ||
    extension == "jake" ||
    extension == "javascript" ||
    extension == "jsb" ||
    extension == "jscad" ||
    extension == "jsfl" ||
    extension == "jslib" ||
    extension == "jsm" ||
    extension == "jspre" ||
    extension == "jss" ||
    extension == "jsx" ||
    extension == "mjs" ||
    extension == "njs" ||
    extension == "pac" ||
    extension == "sjs" ||
    extension == "ssjs" ||
    extension == "xsjs" ||
    extension == "xsjslib"
  ) {
    return "javascript";
  }

  // TODO: ".tfstate.backup"
  if (
    extension == "json" ||
    extension == "avsc" ||
    extension == "geojson" ||
    extension == "gltf" ||
    extension == "har" ||
    extension == "ice" ||
    extension == "JSON-tmLanguage" ||
    extension == "jsonl" ||
    extension == "mcmeta" ||
    extension == "tfstate" ||
    extension == "topojson" ||
    extension == "webapp" ||
    extension == "webmanifest" ||
    extension == "yy" ||
    extension == "yyp"
  ) {
    return "json";
  }

  if (extension == "ftl") {
    return "freemarker2";
  }

  if (extension == "jl") {
    return "julia";
  }

  if (extension == "kt" || extension == "ktm" || extension == "kts") {
    return "kotlin";
  }

  if (extension == "lex") {
    return "lexon";
  }

  if (extension == "liquid") {
    return "liquid";
  }

  if (
    extension == "lua" ||
    extension == "fcgi" ||
    extension == "nse" ||
    extension == "p8" ||
    extension == "pd_lua" ||
    extension == "rbxs" ||
    extension == "rockspec" ||
    extension == "wlua"
  ) {
    return "lua";
  }

  if (
    extension == "i3" ||
    extension == "ig" ||
    extension == "m3" ||
    extension == "mg"
  ) {
    return "m3";
  }

  if (
    extension == "md" ||
    extension == "livemd" ||
    extension == "markdown" ||
    extension == "mdown" ||
    extension == "mdwn" ||
    extension == "mdx" ||
    extension == "mkd" ||
    extension == "mkdn" ||
    extension == "mkdown" ||
    extension == "ronn" ||
    extension == "scd" ||
    extension == "workbook"
  ) {
    return "markdown";
  }

  if (extension == "mips") {
    return "mips";
  }

  if (extension == "dax") {
    return "msdax";
  }

  // Different with the "sql" or "pgsql" below
  if (extension == "mysql") {
    return "mysql";
  }

  if (extension == "m" || extension == "h") {
    return "objective-c";
  }

  if (
    extension == "pas" ||
    extension == "dfm" ||
    extension == "dpr" ||
    extension == "inc" ||
    extension == "lpr" ||
    extension == "pascal" ||
    extension == "pp"
  ) {
    return "pascal";
  }

  if (extension == "ligo") {
    return "pascaligo";
  }

  if (
    extension == "pl" ||
    extension == "al" ||
    extension == "cgi" ||
    extension == "fcgi" ||
    extension == "perl" ||
    extension == "ph" ||
    extension == "plx" ||
    extension == "pm" ||
    extension == "psgi" ||
    extension == "t"
  ) {
    return "perl";
  }

  // Different with the "mysql" above or "sql" below
  if (extension == "pgsql") {
    return "pgsql";
  }

  if (
    extension == "php" ||
    extension == "aw" ||
    extension == "ctp" ||
    extension == "fcgi" ||
    extension == "inc" ||
    extension == "php3" ||
    extension == "php4" ||
    extension == "php5" ||
    extension == "phps" ||
    extension == "phpt" ||
    extension == "phtml"
  ) {
    return "php";
  }

  if (extension == "pla") {
    return "pla";
  }

  if (
    extension == "txt" ||
    extension == "fr" ||
    extension == "nb" ||
    extension == "ncl" ||
    extension == "no"
  ) {
    return "";
  }

  if (extension == "dats" || extension == "hats" || extension == "sats") {
    return "postiats";
  }

  if (extension == "ps1" || extension == "psd1" || extension == "psm1") {
    return "powershell";
  }

  if (
    extension == "proto" ||
    extension == "textproto" ||
    extension == "pbtxt" ||
    extension == "pbt"
  ) {
    return "proto";
  }

  if (extension == "pug" || extension == "jade") {
    return "pug";
  }

  if (
    extension == "py" ||
    extension == "cgi" ||
    extension == "fcgi" ||
    extension == "gyp" ||
    extension == "gypi" ||
    extension == "lmi" ||
    extension == "py3" ||
    extension == "pyde" ||
    extension == "pyi" ||
    extension == "pyp" ||
    extension == "pyt" ||
    extension == "pyw" ||
    extension == "rpy" ||
    extension == "smk" ||
    extension == "spec" ||
    extension == "tac" ||
    extension == "wsgi" ||
    extension == "xpy"
  ) {
    return "python";
  }

  if (extension == "qs") {
    return "qsharp";
  }

  if (extension == "r" || extension == "rd" || extension == "rsx") {
    return "r";
  }

  if (extension == "razor" || extension == "cshtml") {
    return "razor";
  }

  if (extension == "rst" || extension == "rest") {
    return "restructuredtext";
  }

  if (
    extension == "rb" ||
    extension == "builder" ||
    extension == "eye" ||
    extension == "fcgi" ||
    extension == "gemspec" ||
    extension == "god" ||
    extension == "jbuilder" ||
    extension == "mspec" ||
    extension == "pluginspec" ||
    extension == "podspec" ||
    extension == "prawn" ||
    extension == "rabl" ||
    extension == "rake" ||
    extension == "rbi" ||
    extension == "rbuild" ||
    extension == "rbw" ||
    extension == "rbx" ||
    extension == "ru" ||
    extension == "ruby" ||
    extension == "spec" ||
    extension == "thor" ||
    extension == "watchr"
  ) {
    return "ruby";
  }

  if (extension == "rs") {
    return "rust";
  }

  if (
    extension == "scala" ||
    extension == "kojo" ||
    extension == "sbt" ||
    extension == "sc"
  ) {
    return "scala";
  }

  if (
    extension == "scm" ||
    extension == "sch" ||
    extension == "sld" ||
    extension == "sls" ||
    extension == "sps" ||
    extension == "ss"
  ) {
    return "scheme";
  }

  if (extension == "scss") {
    return "scss";
  }

  // TODO: ".sh.in"
  if (
    extension == "sh" ||
    extension == "bash" ||
    extension == "bats" ||
    extension == "cgi" ||
    extension == "command" ||
    extension == "env" ||
    extension == "fcgi" ||
    extension == "ksh" ||
    extension == "tmux" ||
    extension == "tool" ||
    extension == "zsh" ||
    extension == "zsh-theme"
  ) {
    return "shell";
  }

  if (extension == "sol") {
    return "sol";
  }

  if (extension == "sparql" || extension == "sq") {
    return "sparql";
  }

  if (
    extension == "sql" ||
    extension == "cql" ||
    extension == "ddl" ||
    extension == "inc" ||
    extension == "prc" ||
    extension == "tab" ||
    extension == "udf" ||
    extension == "viw"
  ) {
    return "sql";
  }

  if (extension == "st") {
    return "st";
  }

  if (extension == "swift") {
    return "swift";
  }

  if (extension == "sv" || extension == "svh" || extension == "vh") {
    return "systemverilog";
  }

  // TODO: ".tcl.in"
  if (extension == "tcl" || extension == "adp" || extension == "tm") {
    return "tcl";
  }

  if (extension == "twig") {
    return "twig";
  }

  if (extension == "ts" || extension == "tsx") {
    return "typescript";
  }

  if (
    extension == "vb" ||
    extension == "vbhtml" ||
    extension == "bas" ||
    extension == "cls" ||
    extension == "frm" ||
    extension == "frx" ||
    extension == "vba"
  ) {
    return "vb";
  }

  if (extension == "v" || extension == "veo") {
    return "verilog";
  }

  // TODO: ".xml.dist"
  if (
    extension == "xml" ||
    extension == "adml" ||
    extension == "admx" ||
    extension == "ant" ||
    extension == "axaml" ||
    extension == "axml" ||
    extension == "builds" ||
    extension == "ccproj" ||
    extension == "ccxml" ||
    extension == "clixml" ||
    extension == "cproject" ||
    extension == "cscfg" ||
    extension == "csdef" ||
    extension == "csl" ||
    extension == "csproj" ||
    extension == "ct" ||
    extension == "depproj" ||
    extension == "dita" ||
    extension == "ditamap" ||
    extension == "ditaval" ||
    extension == "dll.config" ||
    extension == "dotsettings" ||
    extension == "filters" ||
    extension == "fsproj" ||
    extension == "fxml" ||
    extension == "glade" ||
    extension == "gml" ||
    extension == "gmx" ||
    extension == "grxml" ||
    extension == "gst" ||
    extension == "hzp" ||
    extension == "hxml" ||
    extension == "iml" ||
    extension == "ivy" ||
    extension == "jelly" ||
    extension == "jsproj" ||
    extension == "kml" ||
    extension == "launch" ||
    extension == "mdpolicy" ||
    extension == "mjml" ||
    extension == "mm" ||
    extension == "mod" ||
    extension == "mxml" ||
    extension == "natvis" ||
    extension == "ncl" ||
    extension == "ndproj" ||
    extension == "nproj" ||
    extension == "nuspec" ||
    extension == "odd" ||
    extension == "osm" ||
    extension == "pkgproj" ||
    extension == "pluginspec" ||
    extension == "proj" ||
    extension == "props" ||
    extension == "ps1xml" ||
    extension == "psc1" ||
    extension == "pt" ||
    extension == "rdf" ||
    extension == "res" ||
    extension == "resx" ||
    extension == "rs" ||
    extension == "rss" ||
    extension == "sch" ||
    extension == "scxml" ||
    extension == "sfproj" ||
    extension == "shproj" ||
    extension == "srdf" ||
    extension == "storyboard" ||
    extension == "sublime-snippet" ||
    extension == "targets" ||
    extension == "tml" ||
    extension == "ts" ||
    extension == "tsx" ||
    extension == "ui" ||
    extension == "urdf" ||
    extension == "ux" ||
    extension == "vbproj" ||
    extension == "vcxproj" ||
    extension == "vsixmanifest" ||
    extension == "vssettings" ||
    extension == "vstemplate" ||
    extension == "vxml" ||
    extension == "wixproj" ||
    extension == "workflow" ||
    extension == "wsdl" ||
    extension == "wsf" ||
    extension == "wxi" ||
    extension == "wxl" ||
    extension == "wxs" ||
    extension == "x3d" ||
    extension == "xacro" ||
    extension == "xaml" ||
    extension == "xib" ||
    extension == "xlf" ||
    extension == "xliff" ||
    extension == "xmi" ||
    extension == "xmp" ||
    extension == "xproj" ||
    extension == "xsd" ||
    extension == "xspec" ||
    extension == "xul" ||
    extension == "zcml"
  ) {
    return "xml";
  }

  // TODO: "yml.mysql", "yaml.sed"
  if (
    extension == "yml" ||
    extension == "mir" ||
    extension == "reek" ||
    extension == "rviz" ||
    extension == "sublime-syntax" ||
    extension == "syntax" ||
    extension == "yaml" ||
    extension == "yaml-tmlanguage"
  ) {
    return "yaml";
  }

  return "";
};
