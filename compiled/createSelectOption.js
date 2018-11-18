"use strict";

function createSelectOption(source, parentNode) {
  var name = source.name,
      id = source.id;
  var option = document.createElement('option');
  option.value = id;
  option.textContent = name;
  parentNode.appendChild(option);
}