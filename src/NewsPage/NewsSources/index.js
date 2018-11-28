import './index.css';


function createSelectOption(source, parentNode) {
  const { name, id } = source;
  const option = document.createElement('option');
  option.value = id;
  option.textContent = name;

  parentNode.appendChild(option);
}

function createSelectNode(data) {
  const parentNode = document.getElementById('select-wrapper');
  const { sources } = data;
  const defaultOption = {
    name: 'All sources',
    id: '',
  };
  const wrapper = document.createDocumentFragment();
  const selectNode = document.createElement('select');
  const label = document.createElement('label');

  label.textContent = 'Select news source: ';
  createSelectOption(defaultOption, selectNode);
  sources.map(source => createSelectOption(source, selectNode));

  wrapper.appendChild(label);
  wrapper.appendChild(selectNode);
  parentNode.appendChild(wrapper);

  return selectNode;
}

export default createSelectNode;
