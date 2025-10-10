
// Age calc basic
const AgeCalculator = {
  calculate: function (birthYear, birthMonth, birthDay) {

    const now = new Date();
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
    let hours = now.getHours() - birthDate.getHours();
    if (hours < 0) {
      days--;
      const prevMonth = new Date(now.getMonth(), now.getDate(), 0);
      days += prevMonth.getHours();



    }
    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }
    

    return {
      years: years,
      months: months,
      days: days,
      hours: hours,
    };
  },

  showResult: function (birthYear, birthMonth, birthDay) {
    const result = this.calculate(birthYear, birthMonth, birthDay);
    console.log(" yor Age :");
    console.log(` ${result.years} years`);
    console.log(` ${result.months} months`);
    console.log(` ${result.days} days`);
    console.log(` ${result.hours} hours`);
  },
};
AgeCalculator.showResult(2006, 11, 10);
//this is the end !