-- MySQL dump 10.13  Distrib 8.0.42, for macos15 (x86_64)
--
-- Host: 127.0.0.1    Database: cageflix
-- ------------------------------------------------------
-- Server version	9.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `name_basics`
--

DROP TABLE IF EXISTS `name_basics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `name_basics` (
  `nconst` varchar(255) NOT NULL,
  `PrimaryName` varchar(255) DEFAULT NULL,
  `birthYear` varchar(255) DEFAULT NULL,
  `deathYear` varchar(255) DEFAULT NULL,
  `primaryProfession` varchar(255) DEFAULT NULL,
  `knownForTitles` varchar(255) DEFAULT NULL,
  `birth_year` varchar(255) DEFAULT NULL,
  `death_year` varchar(255) DEFAULT NULL,
  `known_for_titles` varchar(255) DEFAULT NULL,
  `primary_name` varchar(255) DEFAULT NULL,
  `primary_profession` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`nconst`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `name_basics`
--

LOCK TABLES `name_basics` WRITE;
/*!40000 ALTER TABLE `name_basics` DISABLE KEYS */;
INSERT INTO `name_basics` VALUES ('nm0000115','Nicolas Cage','1964',NULL,'actor,producer,director','tt0119094,tt0113627,tt0117500,tt0435705',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `name_basics` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-14  1:36:12
