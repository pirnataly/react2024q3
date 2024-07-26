import axios from 'axios';
import { SuccessFetchAnswer } from '../interfaces/types';

export default class PhotoService {
  static async fetchResults(
    inputText: string | null,
    limit = 20,
    page = 1,
  ): Promise<SuccessFetchAnswer | 'bad' | undefined> {
    if (inputText) {
      const result = await axios.get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d50b74cc2abc8ca99a668840bd5db3e4&tags=${inputText}&extras=url_l&format=json&nojsoncallback=1&content_types=0&privacy_filter=1`,
        {
          params: {
            per_page: limit,
            page,
          },
        },
      );
      if (result.status === 200) {
        return result.data;
      }
    }
    return 'bad';
  }
}
