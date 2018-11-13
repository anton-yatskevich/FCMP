export default function (source, parentNode) {
  const { name, id } = source;
  const option = document.createElement('option');
  option.value = id;
  option.textContent = name;

  parentNode.appendChild(option);
}
