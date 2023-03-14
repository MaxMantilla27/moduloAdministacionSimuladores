import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AvatarDTO } from 'src/app/Models/AvatarDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  public urlBase=environment.url_api+'Avatar';
  constructor(private http: HttpClient) { }

  public ObtenerAvatar():Observable<any>{
    return this.http.get<any>(this.urlBase+'/ObtenerAvatar');
  }

  GetUrlImagenAvatar(avatar:AvatarDTO):string{
    var url='https://avataaars.io/?avatarStyle=Circle&topType=';
    url +=avatar.top+'&accessoriesType=';
    url +=avatar.accessories+'&hairColor=';
    url +=avatar.hairColor+'&facialHairType=';
    url +=avatar.facialHair+'&facialHairColor=';
    url +=avatar.facialHairColor+'&clotheType=';
    url +=avatar.clothes+'&clotheColor=';
    url +=avatar.clothesColor+'&eyeType=';
    url +=avatar.eyes+'&eyebrowType=';
    url +=avatar.eyesbrow+'&mouthType=';
    url +=avatar.mouth+'&skinColor=';
    url +=avatar.skin;
    return url;
  }
}
