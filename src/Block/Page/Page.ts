import { Block } from "./Block";

export class Page<T> extends Block<T> {
  add(blockType: T) {}
  remove() {
    return new Block();
  }
}
