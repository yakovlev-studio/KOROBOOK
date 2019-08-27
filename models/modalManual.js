import { v4 } from "uuid";
class ModalManual {
  constructor(title) {
    this.title = title;
    this.id = v4();
  }
}

export default ModalManual;
