export const findById = (data = [], id) => {
  for (let i = 0; i < data.length; i += 1) {
    const el = data[i];
    if (el.id === id) return el;

    const child = findById(el.data, id);
    if (child) return child;
  }
  return null;
};

export const findLeaf = item => (item.data ? findLeaf(item.data[0]) : item);

export const findFirstChildByParentId = (data = [], id) => {
  const parent = findById(data, id);
  return (parent && parent.data && findLeaf(parent.data[0]).id) || id;
};

export const navigationDepth = arr =>
  Array.isArray(arr)
    ? 1 + Math.max(...arr.map(el => navigationDepth(el.data)))
    : 0;
