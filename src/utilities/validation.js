export function validateEmail(email) {
  const emailPattern = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}");
  return emailPattern.test(email);
}

export function validateLogin(login) {
  const loginPattern = new RegExp("^[A-Za-zА-Яа-яІіЇїЄє'\\s]{3,32}$");

  return loginPattern.test(login);
}

export function validatePassword(password) {
  const passwordPattern = new RegExp(
    "^(?=.*[A-ZА-ЯЁІЄЇ])(?=.*[0-9])(?=.*[a-zа-яёіїє])[A-Za-zА-Яа-яЁёіІїЇєЄ0-9\\s.,!?;:']{8,32}$"
  );

  return passwordPattern.test(password);
}
