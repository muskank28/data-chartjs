function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  // Show the selected one
  document.getElementById(pageId).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
  // Default: show summary on page load
  showPage('summaryPage');


  /* ================================PAGE 1 ================================*/

  // Shared Color Palette
  const colorPalette1 = ['#2c3e50', '#4a6fa5', '#a8c0d6', '#dce3ec'];

  const hamburger = document.getElementById('hamburgerBtn');
  const sidebar = document.getElementById('sidebar');
  const body = document.body;

  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    body.classList.toggle('sidebar-open');
  });

  // Optional: Close sidebar on link click
  document.querySelectorAll('.sidebar .nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('active');
      body.classList.remove('sidebar-open');
    });
  });

  // Chart Global Defaults
  Chart.defaults.font.family = 'Segoe UI, Roboto, sans-serif';
  Chart.defaults.font.size = 12;
  Chart.defaults.plugins.tooltip.cornerRadius = 6;
  Chart.defaults.plugins.tooltip.padding = 12;
  Chart.defaults.plugins.tooltip.displayColors = false;



  // 3D Shadow Plugin Simulation with Sleek Effects
  const barOptions = {
    responsive: true,
    animation: {
      duration: 1000,
      easing: 'easeOutQuart'
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        ticks: {
          color: '#ecf0f1',
          maxTicksLimit: 6
        },
        grid: {
          color: '#34495e44',
          borderDash: [4, 4]
        }
      },
      x: {
        ticks: { color: '#ecf0f1' },
        grid: { display: false }
      }
    },
    plugins: {
      legend: {
        labels: { color: '#ffffff', boxWidth: 12 }
      },
      tooltip: {
        backgroundColor: '#2c3e50',
        titleColor: '#ffffff',
        bodyColor: '#ecf0f1',
        borderWidth: 1,
        borderColor: '#ffffff30'
      },
      title: {
        display: true,
        color: '#ffffff',
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    },
    elements: {
      bar: {
        borderRadius: 0,
        borderSkipped: 'bottom',
        borderWidth: 0
      }
    },
    hover: {
      mode: 'nearest',
      animationDuration: 300
    }
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: '#ffffff' }
      },
      tooltip: {
        backgroundColor: '#2c3e50',
        titleColor: '#ffffff',
        bodyColor: '#ecf0f1',
        borderWidth: 1,
        borderColor: '#ffffff30'
      },
      title: {
        display: true,
        color: '#ffffff',
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    },
    hover: {
      mode: 'nearest',
      animationDuration: 400
    }
  };

  const pieOptions = doughnutOptions;

  const lineOptions = {
    responsive: true,
    animation: {
      duration: 1500,
      easing: 'easeOutQuart'
    },
    scales: {
      y: {
        type: 'logarithmic',
        min: 0,
        ticks: {
          color: '#ecf0f1',
          callback: function (value) {
            if (value >= 1000000) return (value / 1000000).toFixed(1) + 'M';
            if (value >= 1000) return (value / 1000).toFixed(1) + 'K';
            return value;
          },
          maxTicksLimit: 6
        },
        grid: {
          color: '#34495e44',
          borderDash: [4, 4]
        }
      },
      x: {
        ticks: { color: '#ecf0f1' },
        grid: { display: false }
      }
    },
    plugins: {
      legend: { labels: { color: '#ffffff' } },
      tooltip: {
        backgroundColor: '#2c3e50',
        titleColor: '#ffffff',
        bodyColor: '#ecf0f1',
        borderWidth: 1,
        borderColor: '#ffffff30'
      },
      title: {
        display: true,
        color: '#ffffff',
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    },
    elements: {
      line: {
        tension: 0.4,
        borderWidth: 3,
        borderJoinStyle: 'round',
        fill: true,
        backgroundColor: 'rgba(255,255,255,0.05)'
      },
      point: {
        radius: 4.5,
        hoverRadius: 8,
        backgroundColor: '#65a6ff',
        borderWidth: 1,
        borderColor: '#ffffff'
      }
    },
    hover: {
      mode: 'nearest',
      animationDuration: 400
    }
  };

  // Reusable tick formatter
  const formatTicks = function (value) {
    if (value >= 1000000) return Math.round(value / 1000000) + 'M';
    if (value >= 1000) return Math.round(value / 1000) + 'K';
    return value;
  };


  // Installation Chart (max ~20K)
  const installationOptions = {
    ...barOptions,
    scales: {
      ...barOptions.scales,
      y: {
        ...barOptions.scales.y,
        min: 0,
        max: 18420,
        ticks: {
          ...barOptions.scales.y.ticks,
          stepSize: 5000,
          callback: formatTicks
        }
      }
    }
  };

  // Outbound Chart (max ~170K)
  const outboundOptions = {
    ...barOptions,
    scales: {
      ...barOptions.scales,
      y: {
        ...barOptions.scales.y,
        min: 180,
        max: 165599,
        ticks: {
          ...barOptions.scales.y.ticks,
          stepSize: 40000,
          callback: formatTicks
        }
      }
    }
  };

  // Inbound Chart (max ~180K)
  const inboundOptions = {
    ...barOptions,
    scales: {
      ...barOptions.scales,
      y: {
        ...barOptions.scales.y,
        min: 140,
        max: 172485,
        ticks: {
          ...barOptions.scales.y.ticks,
          stepSize: 40000,
          callback: formatTicks
        }
      }
    }
  };

  // Self Security Briefing SMS Sent (Max ~15K)
  const smsSentOptions = {
    ...barOptions,
    scales: {
      ...barOptions.scales,
      y: {
        ...barOptions.scales.y,
        min: 0,
        max: 14190,
        ticks: {
          ...barOptions.scales.y.ticks,
          stepSize: 4000,
          callback: formatTicks
        }
      }
    }
  };

  // Self Security Briefing Done (Max ~3.5K)
  const briefingDoneOptions = {
    ...barOptions,
    scales: {
      ...barOptions.scales,
      y: {
        ...barOptions.scales.y,
        min: 0,
        max: 3245,
        ticks: {
          ...barOptions.scales.y.ticks,
          stepSize: 1000,
          callback: formatTicks
        }
      }
    }
  };

  const securityBriefingPendingOptions = {
    ...barOptions,
    scales: {
      ...barOptions.scales,
      y: {
        ...barOptions.scales.y,
        min: 0,
        max: 3000,
        ticks: {
          ...barOptions.scales.y.ticks,
          stepSize: 1000,
          callback: formatTicks
        }
      }
    }
  };

  // Chart 1: Installation Chart
  new Chart(document.getElementById('installationChart').getContext('2d'), {
    type: 'pie',
    data: {
      labels: ['Today', 'MTD', 'YTD'],
      datasets: [{
        label: 'Installation Requests',
        data: [0, 1114, 18417],
        backgroundColor: colorPalette1
      }]
    },
    options: installationOptions
  });

  // Chart 2: Removal Pending
  new Chart(document.getElementById('removalPendingChart').getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Today'],
      datasets: [{
        label: 'Removal Pending',
        data: [19494], backgroundColor: colorPalette1[1]
      }]
    },
    options: barOptions
  });

  // Chart 3: Total Outbound Chart
  new Chart(document.getElementById('totalOutboundChart').getContext('2d'), {
    type: 'pie',
    data: {
      labels: ['Today', 'MTD', 'YTD'],
      datasets: [{
        label: 'Total Outbound Calls',
        data: [185, 7805, 165599],
        backgroundColor: colorPalette1
      }]
    },
    options: outboundOptions
  });

  new Chart(document.getElementById('IOSChart').getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: ['Today', 'MTD', 'YTD'],
      datasets: [{
        label: 'iOS Users',
        data: [681, 6791, 13364],
        backgroundColor: colorPalette1
      }]
    },
    options: doughnutOptions
  });

  new Chart(document.getElementById('securityBreifingsChart').getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Today'],
      datasets: [{
        label: 'Security Briefings Pending',
        data: [2235],
        backgroundColor: colorPalette1[1]
      }]
    },
    options: securityBriefingPendingOptions
  });

  new Chart(document.getElementById('redoCompletedChart').getContext('2d'), {
    type: 'pie',
    data: {
      labels: ['Today', 'MTD', 'YTD'],
      datasets: [{
        label: 'Redo Completed',
        data: [0, 0, 0],
        backgroundColor: colorPalette1
      }]
    },
    options: barOptions
  });

  new Chart(document.getElementById('totalInboundChart').getContext('2d'), {
    type: 'pie',
    data: {
      labels: ['Today', 'MTD', 'YTD'],
      datasets: [{
        label: 'Total Inbound Calls',
        data: [143, 9076, 172481],
        backgroundColor: colorPalette1
      }]
    },
    options: inboundOptions
  });


  new Chart(document.getElementById('androidChart').getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: ['Today', 'MTD', 'YTD'],
      datasets: [{
        label: 'Android Users',
        data: [2388, 17948, 36152],
        backgroundColor: colorPalette1
      }]
    },
    options: doughnutOptions
  });

  new Chart(document.getElementById('removalCompleteChart').getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: ['Today', 'MTD', 'YTD'],
      datasets: [{
        label: 'Removal Completed',
        data: [0, 419, 7380],
        backgroundColor: colorPalette1
      }]
    },
    options: doughnutOptions
  });

  new Chart(document.getElementById('NRChart').getContext('2d'), {
    type: 'pie',
    data: {
      labels: ['NR Today'],
      datasets: [{
        label: 'NR Today',
        data: [0],
        backgroundColor: colorPalette1[2]
      }]
    },
    options: barOptions
  });

  new Chart(document.getElementById('automaticOutboundChart').getContext('2d'), {
    type: 'line',
    data: {
      labels: ['Today', 'MTD', 'YTD'],
      datasets: [{
        label: 'Automatic Outbound Calls',
        data: [14285, 336844, 5946856],
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, 'rgba(48, 113, 211, 0.4)');
          gradient.addColorStop(1, 'rgba(22, 41, 94, 0)');
          return gradient;
        }
      }]
    },
    options: lineOptions
  });

  new Chart(document.getElementById('securityChart').getContext('2d'), {
    type: 'pie',
    data: {
      labels: ['Today', 'MTD', 'YTD'],
      datasets: [{
        label: 'Self Security Briefing SMS Sent',
        data: [0, 1206, 14185],
        backgroundColor: colorPalette1
      }]
    },
    options: smsSentOptions
  });


  new Chart(document.getElementById('removalIntimationChart').getContext('2d'), {
    type: 'pie',
    data: {
      labels: ['Today', 'MTD', 'YTD'],
      datasets: [{
        label: 'Removal Intimation',
        data: [0, 1229, 11944],
        backgroundColor: colorPalette1
      }]
    },
    options: pieOptions
  });

  new Chart(document.getElementById('redoPendingChart').getContext('2d'), {
    type: 'pie',
    data: {
      labels: ['Today'],
      datasets: [{
        label: 'Redo Pending',
        data: [0],
        backgroundColor: colorPalette1[1]
      }]
    },
    options: barOptions
  });

  new Chart(document.getElementById('mobileAppChart').getContext('2d'), {
    type: 'line',
    data: {
      labels: ['Today', 'MTD', 'YTD'],
      datasets: [{
        label: 'Mobile Application Calls',
        data: [422, 10278, 120516],
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, 'rgba(48, 113, 211, 0.4)');
          gradient.addColorStop(1, 'rgba(33, 22, 94, 0)');
          return gradient;
        }
      }]
    },
    options: lineOptions
  });


  new Chart(document.getElementById('briefingDoneChart').getContext('2d'), {
    type: 'pie', data: {
      labels: ['Today', 'MTD', 'YTD'],
      datasets: [{
        label: 'Briefing Done',
        data: [2, 326, 3243],
        backgroundColor: colorPalette1
      }]
    }, options: briefingDoneOptions
  });

  /* ================================PAGE 4 ================================*/

  // document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('outstandingChart').getContext('2d');

  const months = [
    'Feb 2023', 'Mar 2023', 'Apr 2023', 'May 2023', 'Jun 2023',
    'Jul 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023',
    'Dec 2023', 'Jan 2024', 'Mar 2024', 'Apr 2024', 'May 2024',
    'Jun 2024', 'Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024'
  ];

  // Replace with your actual values
  const loggedAmountData = [
    35000000, 40000000, 45000000, 48000000, 50000000,
    10000000, 15000000, 20000000, 25000000, 30000000,
    57000000, 58000000, 59000000, 59500000, 60000000,
    52000000, 53000000, 54000000, 55000000, 56000000
  ];

  const approvedAmountData = [
    8000000, 13000000, 18000000, 23000000, 27000000,
    32000000, 36000000, 40000000, 42000000, 45000000,
    47000000, 48000000, 59000000, 50000000, 51000000,
    52000000, 53000000, 54000000, 55000000, 56000000
  ];

  const rejectedAmountData = [
    2000000, 2000000, 2000000, 2000000, 3000000,
    3000000, 3000000, 4000000, 4000000, 4000000,
    1000000, 4000000, 4000000, 2000000, 4000000,
    5000000, 1000000, 2000000, 3000000, 5000000
  ];


  const outstandingChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: months,
      datasets: [
        {
          label: 'Logged Amount',
          data: loggedAmountData,
          backgroundColor: '#67a9cf',
          borderColor: '#67a9cf',
          borderWidth: 1
        },
        {
          label: 'Approved Amount',
          data: approvedAmountData,
          backgroundColor: '#5aed81',
          borderColor: '#5aed81',
          borderWidth: 1
        },
        {
          label: 'Rejected Amount',
          data: rejectedAmountData,
          backgroundColor: '#f50a0a',
          borderColor: '#f50a0a',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          max: 60000000, // Set maximum to 60 million
          ticks: {
            stepSize: 10000000, // Jump by 10 million
            callback: formatTicks,
            color: '#ecf0f1'
          },
          grid: {
            color: '#34495e44',
            borderDash: [4, 4]
          }
        },
        x: {
          ticks: { color: '#ecf0f1' },
          grid: { display: false }
        }
      },
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: function (tooltipItem) {
              return tooltipItem.dataset.label + ': ' + formatTicks(tooltipItem.raw);
            }
          },
          backgroundColor: '#2c3e50',
          titleColor: '#ffffff',
          bodyColor: '#ecf0f1',
          borderWidth: 1,
          borderColor: '#ffffff30'
        },
        legend: {
          labels: { color: '#ffffff' }
        }
      }
    }
  });

});

