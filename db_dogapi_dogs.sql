-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: db_dogapi
-- ------------------------------------------------------
-- Server version	8.0.16

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
-- Table structure for table `dogs`
--

DROP TABLE IF EXISTS `dogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `breed` varchar(45) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dogs`
--

LOCK TABLES `dogs` WRITE;
/*!40000 ALTER TABLE `dogs` DISABLE KEYS */;
INSERT INTO `dogs` VALUES (1,'Nana','Golden Retriever','http://localhost:8080/goldenRetriever.jpg'),(2,'Junior','Beagle','http://localhost:8080/beagle.jpg'),(3,'Iggy','Boston Terrier','http://localhost:8080/bostonTerrier.png'),(4,'Diablo','Boxer','http://localhost:8080/boxer.jpg'),(5,'Laika','Eurasier','http://localhost:8080/eurasier.jpg'),(6,'Danny','Great Dane','http://localhost:8080/greatDane.png'),(7,'Becky','Papillon','http://localhost:8080/papillon.jpg'),(8,'Carlos','Pitbull','http://localhost:8080/pitbull.jpg'),(9,'Godo','Pug','http://localhost:8080/pug.jpg'),(10,'Lassie','Rottweiler','http://localhost:8080/rottweiler.jpg'),(11,'Kenai','Saluki','http://localhost:8080/saluki.jpg'),(12,'Ginny','Shiba Inu','http://localhost:8080/shibaInu.jpg'),(13,'Rufo','Greyhound','http://localhost:8080/greyhound.jpg'),(19,'Gordis','Chusky','http://localhost:8080/chusky.jpg');
/*!40000 ALTER TABLE `dogs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-12 20:34:58
