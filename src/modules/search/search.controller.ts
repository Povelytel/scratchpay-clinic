const fs = require('fs');
import path from 'path';

import * as localizations from '../../utils/localizations';
import ILocalization from '../..//utils/localizations/localizations.interface';

export class SearchController {
  private localizations: ILocalization;
  constructor() {
    this.localizations = localizations['en'];
  }

  public getSearch = async ({ search }) => {
    let rawdata = fs.readFileSync(path.join(__dirname, '../../', 'db/dental-clinics.json'));
    const dentalClinics = JSON.parse(rawdata);
    rawdata = fs.readFileSync(path.join(__dirname, '../../', 'db/vet-clinics.json'));
    const vetClinics = JSON.parse(rawdata);

    const items = [];

    if (typeof search !== 'string') {
      search = '';
    }

    const regexp = new RegExp(search, 'i');

    for (const el of dentalClinics) {
      if (typeof el?.name !== 'string') {
        continue;
      }
      if (el?.name.match(regexp)) {
        items.push({
          name: el.name,
          state: el.stateName,
          availability: el.availability,
        });
      }
    }

    for (const el of vetClinics) {
      if (typeof el?.clinicName !== 'string') {
        continue;
      }
      if (el?.clinicName.match(regexp)) {
        items.push({
          name: el.clinicName,
          state: el.stateCode || '',
          availability: el.opening || '',
        });
      }
    }

    return { items };
  };
}
