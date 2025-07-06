
import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({ cloud: { cloudName: 'dmxfjy079' } });

// Define all your image configurations in one place
export const cloudinaryImages = {
  heroBg: cld.image('LLCImageRepo/Images/Img/kxmlpsmvyjxpj9p2endu')
    .format('auto')
    .quality('auto'),

  AboutHeroBg: cld.image('LLCImageRepo/Images/Img/jfjrf0ncxzdqkvbkmlhi')
    .format('auto')
    .quality('auto'),

  TestimonyBg: cld.image('LLCImageRepo/Images/Img/testimonyBg_jxh3da ')
    .format('auto')
    .quality('auto'),

  SupportBg: cld.image('LLCImageRepo/Images/Img/suppportBg_qmxun8 ')
    .format('auto')
    .quality('auto'),
 
  dldHeroBg: cld.image('LLCImageRepo/Images/Img/h2bnshfuvb6kzbth8mwk')
    .format('auto')
    .quality('auto'),

  error404: cld.image('LLCImageRepo/Images/Img/r8omzq98wexbrvxzzsvt')
    .format('auto')
    .quality('auto'),

  pj: cld.image('LLCImageRepo/Images/Img/ch3lqwqowwstkplyaqyv')
    .format('auto')
    .quality('auto'),

  churchLogo: cld.image('LLCImageRepo/Images/Img/rm85f7eppzerotioaia2')
    .format('auto')
    .quality('auto'),

  VisionMision: cld.image('LLCImageRepo/Images/Img/kio97tpmn5y0vdiufpcf')
    .format('auto')
    .quality('auto'),

  DLDWide: cld.image('LLCImageRepo/Images/Img/vxtl53hi0fyusphl91wp')
    .format('auto')
    .quality('auto'),
    
  lbi: cld.image('LLCImageRepo/Images/Img/jotdqxwfpqr9cuewosg9')
    .format('auto')
    .quality('auto'),

  relationshipClinic: cld.image('LLCImageRepo/Images/Img/kuzsdp23rkqsspezmpgx')
    .format('auto')
    .quality('auto'),

  wordFeast: cld.image('LLCImageRepo/Images/Img/tn7tsvkpvzl3otacn1tf')
    .format('auto')
    .quality('auto'),

  prayerParty: cld.image('LLCImageRepo/Images/Img/zrp9fwz1xll4wkzo3aj3')
    .format('auto')
    .quality('auto'),

  luyd: cld.image('LLCImageRepo/Images/Img/ve9pfsb0ocx6w8mmlbvp')
    .format('auto')
    .quality('auto'),

  wordOfTheYear: cld.image('LLCImageRepo/Images/Img/pf5mlu4tlgg1ejjcg9tg')
    .format('auto')
    .quality('auto'),

  dldFallBack: cld.image('LLCImageRepo/Images/Img/mxqvbx5cx4apnhhwn63k')
    .format('auto')
    .quality('auto'),
    
};

export type CloudinaryImageKey = keyof typeof cloudinaryImages;