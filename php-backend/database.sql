-- Database Schema for SG Education Admin Panel

CREATE TABLE IF NOT EXISTS `admin_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Insert a default admin user (username: admin, password: password123)
-- In production, the password should be changed immediately!
INSERT INTO `admin_users` (`username`, `password_hash`) VALUES
('admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');

CREATE TABLE IF NOT EXISTS `blogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `excerpt` text NOT NULL,
  `content` longtext NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `category` varchar(100) DEFAULT 'EDUCATION',
  `author` varchar(100) DEFAULT 'Admin',
  `read_time` varchar(50) DEFAULT '5 min read',
  `status` varchar(20) DEFAULT 'LIVE',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `gallery` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `category` varchar(100) DEFAULT 'Events',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `admissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_name` varchar(255) NOT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `dob` varchar(20) DEFAULT NULL,
  `applying_for` varchar(100) DEFAULT NULL,
  `previous_school` varchar(255) DEFAULT NULL,
  `parent_name` varchar(255) NOT NULL,
  `relationship` varchar(100) DEFAULT NULL,
  `mobile_number` varchar(20) NOT NULL,
  `email_address` varchar(255) DEFAULT NULL,
  `occupation` varchar(150) DEFAULT NULL,
  `residential_address` text DEFAULT NULL,
  `is_direct_visit` tinyint(1) DEFAULT 0,
  `preferred_visit_date` varchar(50) DEFAULT NULL,
  `preferred_visit_time` varchar(50) DEFAULT NULL,
  `direct_visit_parent_name` varchar(255) DEFAULT NULL,
  `purpose_of_visit` text DEFAULT NULL,
  `additional_comments` text DEFAULT NULL,
  `submitted_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
