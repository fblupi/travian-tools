class OasisReport {
  /**
   * Constructor
   *
   * @param {Number} timestamp
   * @param {Number} resources
   * @param {Number} animals
   */
  constructor(timestamp, resources, animals) {
    this.timestamp = timestamp;
    this.resources = resources;
    this.animals = animals;
    this.ratio = resources / animals;
  }

  /**
   * Get point considering x is the timestamp and y the ratio between resources and animals
   *
   * @returns {Point}
   */
  getPointForRatio() {
    return new Point(this.timestamp, this.ratio);
  }

  /**
   * Get point considering x is the timestamp and y number of animals
   *
   * @returns {Point}
   */
  getPointForAnimals() {
    return new Point(this.timestamp, this.animals);
  }
}
