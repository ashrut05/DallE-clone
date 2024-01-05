<<<<<<< HEAD
import { surpriseMePrompts } from '../constants';
=======
import FileSaver from 'file-saver';
import{ surpriseMePrompts } from '../constants';
>>>>>>> 36c9e598b5cef7ec6aad7ccb9310427c8621a9aa

export function getRandomPrompt(prompt){
      const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
      const randomPrompt = surpriseMePrompts[randomIndex];

      if(randomPrompt === prompt ) return getRandomPrompt(prompt);

<<<<<<< HEAD
    return randomPrompt;
=======
      return randomPrompt;
}

export async function downloadImage(_id, photo){
      FileSaver.saveAs(photo, `download-${_id}.jpg`);
>>>>>>> 36c9e598b5cef7ec6aad7ccb9310427c8621a9aa
}