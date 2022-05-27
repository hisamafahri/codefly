export default function checkLanguage(extension: string) {
  if (extension == "js") {
    return "javascript";
  }

  if (extension == "abap") {
      return "abap"
  }

  return "";
}
