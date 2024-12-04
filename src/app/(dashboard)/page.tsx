"use client"

import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

import { Button, Selectbox, Title } from "@/components/atomics"
import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  DownloadSimpleIcon
} from "@/assets/icons"


// Đăng ký các components Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler
);

const DBHome = () => {
  // Line Chart Data (Sales)
  const lineChartData = {
    labels: [
      '00:00', '01:30', '02:30', '03:30', '04:30', '05:30', '06:30'
    ],
    datasets: [
      {
        label: 'Quarter 1',
        data: [31, 40, 28, 51, 42, 109, 100],
        fill: true,
        borderColor: '#5E59FF',
        backgroundColor: 'rgba(94, 89, 255, 0.1)',
        tension: 0.4
      },
      {
        label: 'Quarter 2',
        data: [11, 32, 45, 32, 34, 52, 41],
        fill: true,
        borderColor: 'rgba(94, 89, 255, 0.5)',
        backgroundColor: 'rgba(94, 89, 255, 0.05)',
        tension: 0.4
      }
    ]
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  // Bar Chart Data (Outlet)
  const barChartData = {
    labels: ['New York', 'Los Angeles', 'Chicago', 'Phoenix'],
    datasets: [
      {
        label: 'Total Outlet',
        data: [44, 55, 41, 64],
        backgroundColor: '#5E59FF',
        borderRadius: 3,
      },
      {
        label: 'Percentage of Sales',
        data: [53, 32, 33, 52],
        backgroundColor: '#E5E7EB',
        borderRadius: 3,
      }
    ]
  };

  const barChartOptions = {
    indexAxis: 'y' as const,
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      }
    },
    scales: {
      x: {
        beginAtZero: true
      }
    }
  };

  // Doughnut Chart Data (Products)
  const doughnutChartData = {
    labels: ['Product Sold', 'Product Return'],
    datasets: [{
      data: [86, 48],
      backgroundColor: ['#5E59FF', '#FFAB00'],
      borderWidth: 0,
    }]
  };

  const doughnutChartOptions = {
    responsive: true,
    cutout: '70%',
    plugins: {
      legend: {
        display: false
      }
    }
  };

  // Rest of your data
  const radialDummy = [
    {
      color: "bg-[#5E59FF]",
      label: "Product Sold",
      number: 86
    },
    {
      color: "bg-[#FFAB00]",
      label: "Product Return",
      number: 48
    }
  ];

  // Your JSX remains mostly the same, just replace ReactApexCharts components
  return (
    <div className='relative space-y-5 p-6'>
      {/* Summary section stays the same */}
      <section className='grid grid-cols-3 gap-5'>
        {/* Your existing summary figures */}
      </section>

      <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-8 space-y-5'>
          {/* Sales Chart */}
          <section className='space-y-6 rounded-lg-10 bg-white p-6 2xl:min-h-[576px]'>
            <nav className='flex items-center justify-between'>
              <Title size='lg' variant='default'>Sales</Title>
              <Button size='md' variant='primary-outline'>
                <DownloadSimpleIcon className='h-5 w-5' />
                Download
              </Button>
            </nav>
            <div className='w-full !font-jakarta'>
              <Line data={lineChartData} options={lineChartOptions} />
            </div>
          </section>

          {/* Outlet Chart */}
          <section className='space-y-6 rounded-lg-10 bg-white p-6 2xl:min-h-[600px]'>
            <nav className='flex items-center justify-between'>
              <Title size='lg' variant='default'>Outlet</Title>
              <div className='flex flex-row items-center gap-2'>
                <div className='w-32 2xl:w-40'>
                  <Selectbox
                    className='!border-transparent'
                    datas={[
                      { name: "Filter" },
                      { name: "This Week" },
                      { name: "This Month" },
                      { name: "This Year" }
                    ]}
                  />
                </div>
                <Button size='md' variant='primary-outline'>
                  <DownloadSimpleIcon className='h-5 w-5' />
                  Download
                </Button>
              </div>
            </nav>
            <div className='w-full !font-jakarta'>
              <Bar data={barChartData} options={barChartOptions} height={480} />
            </div>
          </section>
        </div>

        <div className='col-span-4 space-y-5'>
          {/* Product Chart */}
          <section className='space-y-6 rounded-lg-10 bg-white p-6'>
            <nav className='flex items-center justify-between'>
              <Title size='lg' variant='default'>Product</Title>
              <div className='w-32 2xl:w-40'>
                <Selectbox
                  className='!border-transparent'
                  datas={[
                    { name: "Filter" },
                    { name: "This Week" },
                    { name: "This Month" },
                    { name: "This Year" }
                  ]}
                />
              </div>
            </nav>
            <div className='flex flex-col flex-wrap items-center gap-0 2xl:flex-row 2xl:gap-2'>
              <div className='h-72 !font-jakarta 2xl:h-80'>
                <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
              </div>
              <div className='flex flex-row items-start gap-4 2xl:flex-col'>
                {radialDummy.map((item, index) => (
                  <div
                    key={index}
                    className='flex flex-col-reverse items-center gap-1 2xl:flex-col 2xl:items-start'
                  >
                    <div className='flex items-center gap-2'>
                      <div className={`h-2 w-2 ${item.color} flex-shrink-0 rounded-full`} />
                      <h5 className='whitespace-nowrap text-body-base font-medium text-netral-60'>
                        {item.label}
                      </h5>
                    </div>
                    <div className='text-body-xl font-bold'>{item.number}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Top Product section stays the same */}
          {/* Your existing Top Product table */}
        </div>
      </div>
    </div>
  )
}

export default DBHome