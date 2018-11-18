"use strict";

function loadData(url) {
  return fetch(url).then(function (res) {
    return res.json();
  }).catch(function (err) {
    throw new Error(err);
  });
}