export default function orderByProps(obj, orderArr) {
  try {
    orderArr.forEach((orderItem) => {
      if (typeof orderItem !== 'string' || orderItem === '') {
        throw new Error('Некорректно заданы параметры упорядочивающего массива');
      }
    });

    const arrOfPropertys = [];
    const arrAfterOrder = [];

    for (const property in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, property)) {
        arrOfPropertys.push(property);
      }
    }
    arrOfPropertys.sort();

    orderArr.forEach((orderItem) => {
      if (arrOfPropertys.includes(orderItem)) {
        arrOfPropertys.splice(arrOfPropertys.indexOf(orderItem), 1);
      } else {
        throw new Error('Элементы, указаные в упорядочевающем массиве, отсутствуют массиве свойств');
      }
    });

    const arrAfterConcat = orderArr.concat(arrOfPropertys);

    arrAfterConcat.forEach((item) => {
      arrAfterOrder.push({ key: item, value: obj[item] });
    });
    return arrAfterOrder;
  } catch (err) {
    console.error('Attantion!');
    throw err;
  }
}

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

const orderArr = ['level'];
console.log(orderByProps(obj, orderArr));
