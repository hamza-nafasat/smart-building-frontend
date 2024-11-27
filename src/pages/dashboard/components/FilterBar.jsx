import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useDebounce from "../../../../hooks/useDebounce";

// Icons (Replace with your SVG imports)
import SearchIcon from "../../../../asset/svgs/SearchIcon";
import Filter from "../../../../asset/svgs/Filter";
import RedHeartIcon from "../../../../asset/svgs/RedHeartIcon";
import AddIcon from "../../../../asset/svgs/AddIcon";
import BackFilter from "../../../../asset/svgs/BackFilter";

const FilterBar = ({ onSearchTermChange, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [range, setRange] = useState("");
  const [constructionYear, setConstructionYear] = useState(null); // Set initial state to null
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Handle date change and extract year
  const handleDateChange = (date) => {
    if (date) {
      const year = date.getFullYear();
      setConstructionYear(year);
    } else {
      setConstructionYear(null); // Reset to null if no date selected
    }
  };

  const handleRangeChange = (event) => {
    setRange(event.target.value);
  };

  const toggleFilterIcon = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setRange("");
    setConstructionYear(null); // Reset to null
  };

  useEffect(() => {
    onSearchTermChange(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearchTermChange]);

  useEffect(() => {
    onFilterChange({ range, constructionYear });
  }, [range, constructionYear, onFilterChange]);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-end gap-4 p-4 bg-white max-w-full rounded-lg">
      {/* Left Section */}
      <div className="flex items-end gap-2 sm:gap-4 w-full sm:w-auto">
        {/* Search Field */}
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full sm:w-64 px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <div className="absolute top-2 right-3 cursor-pointer">
            <SearchIcon />
          </div>
        </div>

        {/* Filter Icon and Red Heart Icon */}
        {!isFilterOpen && (
          <div className="flex items-center gap-2 transition-opacity duration-300 ease-in-out">
            <div className="cursor-pointer" onClick={toggleFilterIcon}>
              <Filter />
            </div>
            <div className="cursor-pointer">
              <RedHeartIcon />
            </div>
          </div>
        )}

        {/* Filters Section */}
        <div
          className={`flex items-center gap-2 transition-opacity duration-500 ease-in-out ${
            isFilterOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-4"
          }`}
        >
          {/* Range Selector */}
          <select
            value={range}
            onChange={handleRangeChange}
            className="w-48 px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="" className="text-gray-500">
              Area
            </option>
            <option value="0-500">0 - 500</option>
            <option value="500-1000">500 - 1000</option>
            <option value="1000-1500">1000 - 1500</option>
            <option value="1500-2000">1500 - 2000</option>
          </select>

          {/* Construction Year Picker */}
          <div className="w-48">
            <DatePicker
              selected={
                constructionYear ? new Date(constructionYear, 0, 1) : null
              }
              onChange={handleDateChange}
              showYearPicker
              dateFormat="yyyy"
              placeholderText="Construction Year"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        </div>

        {/* BackFilter Icon */}
        <div
          className={`flex items-center gap-2 transition-opacity duration-500 ease-in-out ${
            isFilterOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-4"
          }`}
        >
          <div className="cursor-pointer" onClick={toggleFilterIcon}>
            <BackFilter />
          </div>
          <div className="cursor-pointer">
            <RedHeartIcon />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Add Icon */}
        <Link to="/dashboard/addbuilding" className="cursor-pointer">
          <AddIcon />
        </Link>

        {/* Clear Filters Button */}
        <button
          onClick={handleClearFilters}
          className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
