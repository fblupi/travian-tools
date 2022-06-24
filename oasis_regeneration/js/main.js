const oasisLinearRegression = new OasisLinearRegression(
  new OasisReport(
    DateUtils.stringDateToTimestamp("2022-06-24T11:08:47"),
    32981,
    759
  ),
  new OasisReport(
    DateUtils.stringDateToTimestamp("2022-06-24T12:37:43"),
    34113,
    770
  )
);

console.log(oasisLinearRegression.maxNumberOfAnimals);
console.log(
  DateUtils.timestampToStringDate(
    oasisLinearRegression.fullResourcesAt,
    LanguageUtils.getUserLocale(navigator)
  )
);

document.getElementById("form").addEventListener("submit", function (evt) {
  evt.preventDefault();

  try {
    const oasisLinearRegression = new OasisLinearRegression(
      new OasisReport(
        DateUtils.stringDateToTimestamp(
          document.getElementById("input-report-1-date").value
        ),
        document.getElementById("input-report-1-resources").value,
        document.getElementById("input-report-1-animals").value
      ),
      new OasisReport(
        DateUtils.stringDateToTimestamp(
          document.getElementById("input-report-2-date").value
        ),
        document.getElementById("input-report-2-resources").value,
        document.getElementById("input-report-2-animals").value
      )
    );
    document.getElementById("input-result-date").value =
      DateUtils.timestampToStringDate(
        oasisLinearRegression.fullResourcesAt,
        LanguageUtils.getUserLocale(navigator)
      );
    document.getElementById("input-result-animals").value =
      oasisLinearRegression.maxNumberOfAnimals;
  } catch (err) {
    alert(err);
  }
});
