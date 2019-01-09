import axios from 'axios';
import { SearchResult } from './types';
import { endpoints } from '../common/config';
import { getOptions } from '../common/axios';

export class SearchService {
  private endpoint: string;
  private readonly namespace: string = 'search';

  constructor() {
    this.endpoint = endpoints[this.namespace];
  }

  public async search(searchTerm: string): Promise<SearchResult[]> {
    return new Promise( (resolve, reject) => {
      axios(getOptions({
        url: `${this.endpoint}?query=${searchTerm}`,
      }))
        .then((res: any) => {
          resolve(res.data);
        })
          .catch((err: any) => {
            reject(err);
          });
    });
  }
}
