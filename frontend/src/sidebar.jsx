import React, { useState } from 'react';
import './sidebar.css'; // Import Sidebar CSS
import { MdDashboard } from "react-icons/md";
import { TbFileAnalytics } from "react-icons/tb";
import { IoAnalytics } from "react-icons/io5";
import { MdDynamicForm } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb"; // Import TbReportSearch
import { Link } from 'react-router-dom'; // Import Link from React Router

function Sidebar() {
  const [selected, setSelected] = useState('');

  const handleSelect = (option) => {
    setSelected(option);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        Market Mind
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link
            to="/dashboard"
            className={`sidebar-link ${selected === 'dashboard' ? 'selected' : ''}`}
            onClick={() => handleSelect('dashboard')}
          >
            <MdDashboard className="sidebar-icon" /> Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/sentiment"
            className={`sidebar-link ${selected === 'sentiment' ? 'selected' : ''}`}
            onClick={() => handleSelect('sentiment')}
          >
            <TbFileAnalytics className="sidebar-icon" /> Sentiment Analysis
          </Link>
        </li>
        <li>
          <Link
            to="/trend"
            className={`sidebar-link ${selected === 'trend' ? 'selected' : ''}`}
            onClick={() => handleSelect('trend')}
          >
            <IoAnalytics className="sidebar-icon" /> Market Trend Prediction
          </Link>
        </li>
        <li>
          <Link
            to="/pricing"
            className={`sidebar-link ${selected === 'pricing' ? 'selected' : ''}`}
            onClick={() => handleSelect('pricing')}
          >
            <MdDynamicForm className="sidebar-icon" /> Dynamic Pricing Engine
          </Link>
        </li>
        <li>
          <Link
            to="/report"
            className={`sidebar-link ${selected === 'reporting' ? 'selected' : ''}`}
            onClick={() => handleSelect('reporting')}
          >
            <TbReportSearch className="sidebar-icon" /> Reporting & Insights 
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;