export function getUCTDate() {
  const d = new Date();
  const UTCdate = new Date(
    Date.UTC(
      d.getFullYear(),
      d.getMonth(),
      d.getDate(),
      d.getHours(),
      d.getMinutes(),
      d.getSeconds()
    )
  );

  return UTCdate
}
