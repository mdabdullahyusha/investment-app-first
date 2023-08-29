const ctx = document.getElementById("investChart");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Total Amount", "Withdraw Amount", "Deposit Amount"],
    datasets: [
      {
        label: "#Amount",
        data: [12000, 1900, 11000],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
