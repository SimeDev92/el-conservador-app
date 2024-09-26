import { Pipe, PipeTransform } from '@angular/core';
import { New } from '../interfaces/news.interface';

@Pipe({
  name: 'newImage'
})
export class NewImagePipe implements PipeTransform {

  transform(newsItem: New): string {

    // Si no hay imgUrl o está vacía, devuelve la imagen por defecto
    if (!newsItem.imgUrl || newsItem.imgUrl.trim() === '') {
      return 'public/assets/no-image.png'; // Ruta a la imagen por defecto
    }

    // Si existe imgUrl, devuélvela
    return newsItem.imgUrl;
  }

}
