"use strict";

function createSelectNode(data, textValue, parentNode, callback) {
  var sources = data.sources;
  var defaultOption = {
    name: 'All sources',
    id: ''
  };
  var wrapper = document.createDocumentFragment();
  var selectNode = document.createElement('select');
  var label = document.createElement('label');
  label.textContent = textValue;
  callback(defaultOption, selectNode);
  sources.map(function (source) {
    return callback(source, selectNode);
  });
  wrapper.appendChild(label);
  wrapper.appendChild(selectNode);
  parentNode.appendChild(wrapper);
  return selectNode;
}