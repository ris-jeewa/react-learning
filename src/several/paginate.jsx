import _ from 'lodash';

export function Paginate(items, pageNumber, pageLen) {
  const firstIndex = (pageNumber - 1) * pageLen;
  return _(items).slice(firstIndex).take(pageLen).value();
}
