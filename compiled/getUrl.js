"use strict";

function getUrl(BASE_URL, API_KEY, source) {
  var url;

  if (source) {
    url = "".concat(BASE_URL, "sources=").concat(source, "&apiKey=").concat(API_KEY);
  } else {
    url = "".concat(BASE_URL, "country=us&apiKey=").concat(API_KEY);
  }

  return url;
}