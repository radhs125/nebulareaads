import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';
import './Dashboard.css';
import AdminNavBar from './AdminNavBar';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Dashboard = () => {
  // Sample data for charts
  const userData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Number of Users',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const bookData = {
    labels: ['Fiction', 'Non-Fiction', 'Self-help', 'Romance', 'Thriller', 'Science'],
    datasets: [
      {
        label: 'Books',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
      },
    ],
  };

  const revenueData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue',
        data: [300, 450, 400, 600, 700, 750],
        borderColor: 'rgba(75, 192, 192, 0.6)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <AdminNavBar/>
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <div className="chart-container">
        <div className="chart">
          <h2>User Growth</h2>
          <Bar data={userData} />
        </div>
        <div className="chart">
          <h2>Book Categories</h2>
          <Pie data={bookData} />
        </div>
        <div className="chart">
          <h2>Revenue Over Time</h2>
          <Line data={revenueData} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
