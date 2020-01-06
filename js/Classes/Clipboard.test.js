import { Clipboard } from './Clipboard.class.js';

function onInit() {
  const msg = "Copy Me!";
  Clipboard.copyExec(msg);
}

onInit();
