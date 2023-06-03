/*
SQLyog Ultimate v13.1.1 (64 bit)
MySQL - 10.4.27-MariaDB : Database - pmsa
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`pmsa` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `pmsa`;

/*Table structure for table `cardboard` */

DROP TABLE IF EXISTS `cardboard`;

CREATE TABLE `cardboard` (
  `id` int(11) NOT NULL,
  `cardboard_no` int(11) DEFAULT NULL,
  `cardboard_type` varchar(255) DEFAULT NULL,
  `company_size` varchar(255) DEFAULT NULL,
  `dimensional_weight` float DEFAULT NULL,
  `height_outer` int(11) DEFAULT NULL,
  `length_outer` int(11) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `shipping_size` int(11) DEFAULT NULL,
  `width_outer` int(11) DEFAULT NULL,
  `weight` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `cardboard` */

insert  into `cardboard`(`id`,`cardboard_no`,`cardboard_type`,`company_size`,`dimensional_weight`,`height_outer`,`length_outer`,`remark`,`shipping_size`,`width_outer`,`weight`) values 
(1852,40,'ケータイ','1',0.5,61,200,'',60,130,26),
(1853,40,'ケータイ','1',0.5,61,130,'',60,200,26),
(1854,26,'カメラ（小）','1',1.5,152,250,'',60,201,26),
(1855,26,'カメラ（小）','1',1.5,152,201,'',60,250,26),
(1856,25,'カメラ（大）','2',3.5,153,400,'',80,249,26),
(1857,25,'カメラ（大）','2',3.5,153,249,'',80,400,26),
(1858,11,'14A','3',6,200,378,'',100,373,26),
(1859,11,'14A','3',6,200,373,'',100,378,26),
(1860,6,'ノートパソコン','3',4.5,101,487,'',100,410,26),
(1861,6,'ノートパソコン','3',4.5,101,410,'',100,487,26),
(1862,10,'14B - 2段加工','4',8,260,375,'',120,375,26),
(1863,20,'デッキ（小） - 1段加工','4',6,140,487,'',120,408,26),
(1864,20,'デッキ（小） - 1段加工','4',6,140,408,'',120,487,26),
(1865,10,'14B - 1段加工','4',9,310,375,'',120,375,26),
(1866,19,'デッキ（中） - 2段加工','4',5,110,500,'',120,450,26),
(1867,19,'デッキ（中） - 2段加工','4',5,110,450,'',120,500,26),
(1868,21,'デッキ（小B） - 1段加工','4',7,170,550,'',120,350,26),
(1869,21,'デッキ（小B） - 1段加工','4',7,170,350,'',120,550,26),
(1870,20,'デッキ（小）','4',7.5,180,487,'',120,408,26),
(1871,20,'デッキ（小）','4',7.5,180,408,'',120,487,26),
(1872,21,'デッキ（小B）','4',7.5,185,550,'',120,350,26),
(1873,21,'デッキ（小B）','4',7.5,185,350,'',120,550,26),
(1874,19,'デッキ（中） - 1段加工','4',8,170,500,'',120,450,26),
(1875,19,'デッキ（中） - 1段加工','4',8,170,450,'',120,500,26),
(1876,10,'14B','4',11,377,375,'',120,375,26),
(1877,19,'デッキ（中）','4',10,212,500,'',120,450,26),
(1878,19,'デッキ（中）','4',10,212,450,'',120,500,26),
(1879,18,'デッキ（大） - 2段加工','4',10,180,534,'',120,485,26),
(1880,18,'デッキ（大） - 2段加工','4',10,180,485,'',120,534,26),
(1881,24,'ラジカセ用 - 2段加工','5',13,360,552,'',140,319,26),
(1882,24,'ラジカセ用 - 2段加工','5',13,360,319,'',140,552,26),
(1883,24,'ラジカセ用 - 2段加工','5',13,360,552,'',140,319,26),
(1884,24,'ラジカセ用 - 1段加工','5',15,410,552,'',140,319,26),
(1885,24,'ラジカセ用 - 1段加工','5',15,410,319,'',140,552,26),
(1886,18,'デッキ（大） - 1段加工','5',15,270,534,'',140,485,26),
(1887,18,'デッキ（大） - 1段加工','5',15,270,485,'',140,534,26),
(1888,18,'デッキ（大）','5',17,313,534,'',140,485,26),
(1889,18,'デッキ（大）','5',17,313,485,'',140,534,26),
(1890,24,'ラジカセ用 ','5',18,473,552,'',140,319,26),
(1891,24,'ラジカセ用 ','5',18,473,319,'',140,552,26),
(1892,17,'デッキ（特）','5',17,266,563,'',140,550,26),
(1893,17,'デッキ（特）','5',17,266,550,'',140,563,26),
(1894,46,'バイオリン','5',12,210,840,'',140,330,26),
(1895,46,'バイオリン','5',12,210,330,'',140,840,26),
(1896,15,'SP（小） - 1段加工','5',19,520,560,'',140,318,26),
(1897,15,'SP（小） - 1段加工','5',19,520,318,'',140,560,26),
(1898,42,'トールボーイ','6',20,730,321,'',160,400,26),
(1899,42,'トールボーイ','6',20,730,400,'',160,321,26),
(1900,47,'ギターアンプ - 2段加工','6',18,310,800,'',160,360,26),
(1901,47,'ギターアンプ - 2段加工','6',18,310,360,'',160,800,26),
(1902,15,'SP（小）','6',22,602,560,'',160,318,26),
(1903,15,'SP（小）','6',22,602,318,'',160,560,26),
(1904,37,'一体型 - 1段加工','6',25,410,600,'',160,500,26),
(1905,37,'一体型 - 1段加工','6',25,410,500,'',160,600,26),
(1906,44,'17用(大) ','6',24,316,613,'',160,598,26),
(1907,44,'17用(大) ','6',24,316,598,'',160,613,26),
(1908,16,'SP（中）','6',25,736,435,'',160,380,26),
(1909,16,'SP（中）','6',25,736,380,'',160,435,26),
(1910,23,'エレキギター','6',8,1110,390,'',160,90,26),
(1911,23,'エレキギター','6',8,1110,90,'',160,390,26),
(1912,45,'新ラジカセ用','6',26,476,800,'',160,325,26),
(1913,45,'新ラジカセ用','6',26,476,325,'',160,800,26),
(1914,37,'一体型','6',31,502,600,'',160,500,26),
(1915,37,'一体型','6',31,502,500,'',160,600,26),
(1916,47,'ギターアンプ - 1段加工','7',30,510,800,'',180,360,26),
(1917,47,'ギターアンプ - 1段加工','7',30,510,360,'',180,800,26),
(1918,47,'ギターアンプ - 1段加工','ラージ便 170',30,510,800,'',170,360,40),
(1919,47,'ギターアンプ - 1段加工','ラージ便 170',30,510,360,'',170,800,40),
(1920,41,'ベース','7',9,1230,390,'',180,90,26),
(1921,41,'ベース','7',9,1230,90,'',180,390,26),
(1922,41,'ベース','ラージ便 180',9,1230,390,'',180,90,40),
(1923,41,'ベース','ラージ便 180',9,1230,90,'',180,390,40),
(1924,14,'スピーカー（大）','7',35,782,495,'',180,434,26),
(1925,14,'スピーカー（大）','7',35,782,434,'',180,495,26),
(1926,14,'スピーカー（大）','ラージ便 180',35,782,495,'',180,434,40),
(1927,14,'スピーカー（大）','ラージ便 180',35,782,434,'',180,495,40),
(1928,47,'ギターアンプ','7',38,642,800,'',180,360,26),
(1929,47,'ギターアンプ','7',38,642,360,'',180,800,26),
(1930,47,'ギターアンプ','ラージ便 180',38,642,800,'',180,360,40),
(1931,47,'ギターアンプ','ラージ便 180',38,642,360,'',180,800,40),
(1932,22,'アコギ - 1段加工','7',23,1110,495,'',180,200,26),
(1933,22,'アコギ - 1段加工','7',23,1110,200,'',180,495,26),
(1934,22,'アコギ - 1段加工','ラージ便 180',23,1110,495,'',180,200,40),
(1935,22,'アコギ - 1段加工','ラージ便 180',23,1110,200,'',180,495,40),
(1936,22,'アコギ','8',24,1190,495,'',200,200,26),
(1937,22,'アコギ','8',24,1190,200,'',200,495,26),
(1938,22,'アコギ','ラージ便 200',24,1190,495,'',200,200,40),
(1939,22,'アコギ','ラージ便 200',24,1190,200,'',200,495,40),
(1940,48,'シンセサイザー用','8',18,1450,150,'',200,400,26),
(1941,48,'シンセサイザー用','8',18,1450,400,'',200,150,26),
(1942,48,'シンセサイザー用','ラージ便 200',18,1450,150,'',200,400,40),
(1943,48,'シンセサイザー用','ラージ便 200',18,1450,400,'',200,150,40),
(1944,13,'スピーカー（特大）','ラージ便 240',74,1108,590,'',240,560,40),
(1945,13,'スピーカー（特大）','ラージ便 240',74,1108,560,'',240,590,40),
(1946,NULL,'ハコベル 300 (引き取り可)','50',NULL,NULL,NULL,'',NULL,NULL,110),
(1947,NULL,'ハコベル 350 (引き取り可)','51',NULL,NULL,NULL,'',NULL,NULL,110),
(1948,NULL,'ハコベル 400 (引き取り可)','52',NULL,NULL,NULL,'',NULL,NULL,110),
(1949,NULL,'ハコベル 450 (引き取り可)','53',NULL,NULL,NULL,'',NULL,NULL,110),
(1950,NULL,'ハコベル 500 (引き取り可)','54',NULL,NULL,NULL,'',NULL,NULL,110),
(1951,NULL,'ハコベル 550 (引き取り可)','55',NULL,NULL,NULL,'',NULL,NULL,110);

/*Table structure for table `cardboard_seq` */

DROP TABLE IF EXISTS `cardboard_seq`;

CREATE TABLE `cardboard_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `cardboard_seq` */

insert  into `cardboard_seq`(`next_val`) values 
(2101);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
