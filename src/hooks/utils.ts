export const getDate = (timestamp: number, type: string) => {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date(timestamp * 1000);
    switch (type) {
      case "month":
        return months[date.getMonth()];
      case "day":
        return date.getDate();
      case "date":
        return `${date.getDate()} ${months[date.getMonth()]}`;
    }
  };