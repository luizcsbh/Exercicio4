interface IBlock<T> {
  add: (blockType: T) => void;
  remove: (blockType: T) => Block<T>;
}

class Block<T> implements IBlock<T> {
  add(blockType: T) {}

  remove() {
    return new Block();
  }
}
