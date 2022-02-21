// TODO: write your code here
// eslint-disable-next-line max-classes-per-file
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(player) {
    if (this.members.has(player)) {
      throw new Error('Error');
    } else {
      this.members.add(player);
    }
  }

  addAll(...player) {
    for (const item of player) {
      this.members.add(item);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}

export class Character {
  constructor(name) {
    this.name = name;
  }
}
