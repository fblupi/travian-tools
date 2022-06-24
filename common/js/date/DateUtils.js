class DateUtils {
  /**
   * Converts date to timestamp in seconds
   *
   * @param {Date} date
   * @returns {Number}
   */
  static dateToTimestamp(date) {
    return date.getTime() / 1000;
  }

  /**
   * Converts string with date in format yyyy-MM-dd'T'HH:mm:ss to timestamp in seconds
   *
   * @param {String} stringDate
   * @returns {Number}
   */
  static stringDateToTimestamp(stringDate) {
    if (stringDate === undefined || stringDate === null || stringDate === "") {
      throw "Invalid date";
    }
    return this.dateToTimestamp(new Date(stringDate));
  }

  /**
   * Converts timestamp in seconds to date
   *
   * @param {Number} timestamp
   * @returns {Date}
   */
  static timestampToDate(timestamp) {
    return new Date(timestamp * 1000);
  }

  /**
   * Converts timestamp in seconds to string date
   *
   * @param {Number} timestamp
   * @param {String} locale
   * @returns {String}
   */
  static timestampToStringDate(timestamp, locale = "en-US") {
    return this.timestampToDate(timestamp).toLocaleString(locale);
  }
}
