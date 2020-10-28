let calculator = {
  // ваш код
  read(a, b) {
    x = a;
    y = b;
    return x, y;
  },
  sum() {
    return x + y;
  },
  mul() {
    return x * y;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
