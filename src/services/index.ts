import { Application } from '../declarations';
import securityUser from './security/user/user.service';
import securityRole from './security/role/role.service';
import securitySession from './security/session/session.service';
import storageFile from './storage/file/file.service';
import storageSignature from './storage/signature/signature.service';
import contentToDo from './content/to-do/to-do.service';
import contentComment from './content/comment/comment.service';
import contentLike from './content/like/like.service';
import dataTag from './data/tag/tag.service';
import communicationNotification from './communication/notification/notification.service';
import securityFollow from './security/follow/follow.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(securityUser);
  app.configure(securityRole);
  app.configure(securitySession);
  app.configure(storageFile);
  app.configure(storageSignature);
  app.configure(contentToDo);
  app.configure(contentComment);
  app.configure(contentLike);
  app.configure(dataTag);
  app.configure(communicationNotification);
  app.configure(securityFollow);
}
