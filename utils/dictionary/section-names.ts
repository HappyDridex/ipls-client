const structureMapNames = {
  analytics: 'Анатилика',
  legal: 'Юриспруденция',
  implementation: 'Имплементация',
  art: 'Творчество',
  study: 'Обучение',
  unknown: '_Раздел_',
};

export type TSectionName = keyof typeof structureMapNames;

export const getSectionNameByKey = (key: TSectionName) => {
  return structureMapNames[key] ?? structureMapNames.unknown;
};
