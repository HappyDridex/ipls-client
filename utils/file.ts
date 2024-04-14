import * as mimeTypes from '@/utils/dictionary/mime-types';

/**
 * @param {Number} size - Размер в килобайтах.
 * @returns {String} Строка с отформатированным размером файла.
 */
const FACTOR = 1024;
const DECIMALS = 2;
export const UNITS = ['kb', 'mb', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb'];
export const UNITS_RU = ['Кб', 'Мб', 'Гб', 'Тб', 'Пб', 'Эб', 'Зб', 'Йб'];
export const UNITS_WITH_BYTES = ['b', 'kb', 'mb', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb'];
export const UNITS_WITH_BYTES_RU = ['б', 'Кб', 'Мб', 'Гб', 'Тб', 'Пб', 'Эб', 'Зб', 'Йб'];

export function getSizeInBytesByMb(megabytes: number) {
  return megabytes * FACTOR * FACTOR;
}

export function formatSize(size: number, units = UNITS_WITH_BYTES_RU) {
  if (size === 0) {
    return `0 ${units[0]}`;
  }

  const index = Math.floor(Math.log(size) / Math.log(FACTOR));
  const amount = parseFloat((size / Math.pow(FACTOR, index)).toFixed(DECIMALS));
  const unit = units[index];

  return `${amount} ${unit}`;
}
