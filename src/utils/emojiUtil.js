import * as emojione from 'emojione';

const defaultImageSrc = 'https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/2753.png';

export function convertUnicodeOrShortNameToShortName(unicodeOrShortName) {
  // per the emojione api: this will convert unicode to a shortName
  // if the input is already a shortName, it will leave it alone
  return emojione.toShort(unicodeOrShortName);
}

export function isValidUnicodeOrShortName(unicodeOrShortName) {
  const shortName = convertUnicodeOrShortNameToShortName(unicodeOrShortName);

  // must start with a colon
  if (shortName[0] !== ':') { return false; }

  // must end with a colon
  const indexOfLastChar = shortName.length - 1;
  if (shortName[indexOfLastChar] !== ':') { return false; }

  // must have exactly 2 colons
  if (shortName.slice(1, indexOfLastChar).includes(':')) { return false; }

  // try to fetch the image from emojione
  const emojioneImageResult = emojione.shortnameToImage(shortName);

  // per the emojione api: if the search didn't work, result will just contain the string that we searched for
  if (emojioneImageResult === shortName) { return false; }

  return true;
}

function parseSrcFromImageHTMLString(imageHTMLString) {
  const srcRegex = new RegExp(/src="(.*)"/);
  const match = srcRegex.exec(imageHTMLString);

  if (match !== null && match.length >= 2) {
    return match[1];
  }

  return defaultImageSrc;
}

function convertTo128px(imageSrc) {
  return imageSrc.replace('/32/', '/128/');
}

export function getImageSrcByUnicodeOrShortName(unicodeOrShortName) {
  if (isValidUnicodeOrShortName(unicodeOrShortName)) {
    const shortName = convertUnicodeOrShortNameToShortName(unicodeOrShortName);
    const imageHTMLString = emojione.shortnameToImage(shortName);
    const imageSrc = parseSrcFromImageHTMLString(imageHTMLString);
    return convertTo128px(imageSrc);
  }

  // if the shortName is invalid (hopefully we didn't let it get this far) return the '?' emoji
  return defaultImageSrc;
}
