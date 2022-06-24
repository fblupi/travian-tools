class LanguageUtils {
  /**
   * Get user locale
   *
   * @param {Navigator} navigator
   * @returns {String}
   */
  static getUserLocale(navigator) {
    return navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language;
  }
}
