-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2022 at 02:32 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `credenceapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `emp`
--

CREATE TABLE `emp` (
  `Empid` int(11) NOT NULL,
  `First_name` varchar(50) NOT NULL,
  `Middle_name` varchar(50) NOT NULL,
  `Last_name` varchar(50) NOT NULL,
  `DOB` varchar(255) NOT NULL,
  `Gender` enum('M','F') DEFAULT NULL,
  `Basic` double DEFAULT 0,
  `Allowance` double DEFAULT 0,
  `Deduction` double DEFAULT 0,
  `Net_Salary` double DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `emp`
--

INSERT INTO `emp` (`Empid`, `First_name`, `Middle_name`, `Last_name`, `DOB`, `Gender`, `Basic`, `Allowance`, `Deduction`, `Net_Salary`) VALUES
(1, 'Venkatraman', 'Ragu', 'Chinnappan', '1989-09-24', 'M', 5030, 333, 222, 5141),
(2, 'Virendra', 'Sharma', 'Sehwag', '1986-08-03', 'M', 6547, 345, 333, 6559),
(3, 'Jyoti', 'Kanchan', 'Rajput', '1978-04-18', 'F', 4560, 300, 100, 4760),
(4, 'Jatin', 'Rajesh', 'Agarwal', '1967-01-02', 'M', 2300, 234, 100, 2434),
(5, 'Om', 'jagan', 'nath', '1987-04-23', 'M', 45678, 2345, 122, 47901);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `emp`
--
ALTER TABLE `emp`
  ADD PRIMARY KEY (`Empid`),
  ADD KEY `First_name` (`First_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `emp`
--
ALTER TABLE `emp`
  MODIFY `Empid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
