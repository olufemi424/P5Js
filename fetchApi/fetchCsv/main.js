chartIt();

async function chartIt() {
  const { years, temps, southern, northern } = await getData();
  const ctx = document.getElementById("myChart");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: years,
      datasets: [
        {
          label:
            "Combined Land-surface Air and Sea-Surface Water Temperature in C°",
          data: temps,
          fill: false,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1
        },
        {
          label: "Northern Hemisphere Temperature in °C",
          data: northern,
          fill: false,
          borderColor: "rgba(99, 132, 255, 1)",
          backgroundColor: "rgba(99, 132, 255, 0.5)",
          borderWidth: 1
        },
        {
          label: "Souther Hemisphere in °C",
          data: southern,
          fill: false,
          borderColor: "rgba(99, 255, 132, 1)",
          backgroundColor: "rgba(99, 255, 132, 0.5)",
          borderWidth: 1
        }
      ]
    },

    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              callback: function(value, index, values) {
                return value + "°";
              }
            }
          }
        ]
      }
    }
  });
}

//fetch data

getData();

async function getData() {
  const years = [];
  const temps = [];
  const northern = [];
  const southern = [];

  const res = await fetch("ZonAnn.Ts+dSST.csv");
  const csv = await res.text();

  const rows = csv.split("\n").slice(1);

  rows.forEach(row => {
    const cols = row.split(",");
    years.push(cols[0]);
    temps.push(parseFloat(cols[1]) + 14);
    northern.push(parseFloat(cols[2]) + 14);
    southern.push(parseFloat(cols[3]) + 14);
  });

  return { years, temps, northern, southern };
}
