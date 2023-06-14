import orderByProps from '../app';

test('Throw error for order by properties of array-object', () => {
  expect(() => {
    const obj = {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const orderArr = ['level', 2];
    orderByProps(obj, orderArr);
  }).toThrow('Некорректно заданы параметры упорядочивающего массива');
});

test('Ordered array-object', () => {
  const obj = {
    health: 10, level: 2, attack: 80,
  };
  const orderArr = ['level'];
  const result = orderByProps(obj, orderArr);
  expect(result).toEqual([
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
  ]);
});

test('Removing properties in array "arrOfPropertys"', () => {
  expect(() => {
    const obj = {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const orderArr = ['level', 'firstname'];
    orderByProps(obj, orderArr);
  }).toThrow('Элементы, указаные в упорядочевающем массиве, отсутствуют массиве свойств');
});
