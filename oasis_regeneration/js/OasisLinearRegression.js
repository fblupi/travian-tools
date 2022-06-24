class OasisLinearRegression {
  MAX_RESOURCES_BY_ANIMAL = 50;

  /**
   * Constructor
   *
   * @param {OasisReport} r1
   * @param {OasisReport} r2
   */
  constructor(r1, r2) {
    this.r1 = r1;
    this.r2 = r2;

    if (r1.timestamp >= r2.timestamp) {
      throw "The second report must be newer than the first one";
    }

    if (r1.resources >= r2.resources) {
      throw "The second report must have more resources than the first one";
    }

    if (r1.animals >= r2.animals) {
      throw "The second report must have more animals than the first one";
    }

    this.calculateFullResourcesAt();
    this.calculateMaxNumberOfAnimals();
  }

  /**
   * Calculate when the resources will be full
   */
  calculateFullResourcesAt() {
    const linearRegressionForRatio = new LinearRegression(
      this.r1.getPointForRatio(),
      this.r2.getPointForRatio()
    );
    this.fullResourcesAt = linearRegressionForRatio.getX(
      this.MAX_RESOURCES_BY_ANIMAL
    );
  }

  /**
   * Calculate the number of animals when the resources are full
   */
  calculateMaxNumberOfAnimals() {
    const linearRegressionForAnimals = new LinearRegression(
      this.r1.getPointForAnimals(),
      this.r2.getPointForAnimals()
    );
    this.maxNumberOfAnimals = parseInt(
      linearRegressionForAnimals.getY(this.fullResourcesAt)
    );
  }
}
