export default function (date) {
  const dateArr = date.split('T');
  const time = dateArr[1].slice(0, 5);
  return `${dateArr[0]} ${time}`;
}
