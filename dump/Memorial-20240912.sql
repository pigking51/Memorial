-- MariaDB dump 10.19  Distrib 10.11.7-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: memorial
-- ------------------------------------------------------
-- Server version	10.11.7-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authority`
--

DROP TABLE IF EXISTS `authority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `authority` (
  `authority_name` varchar(50) NOT NULL,
  PRIMARY KEY (`authority_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authority`
--

LOCK TABLES `authority` WRITE;
/*!40000 ALTER TABLE `authority` DISABLE KEYS */;
INSERT INTO `authority` VALUES
('ROLE_ADMIN'),
('ROLE_USER');
/*!40000 ALTER TABLE `authority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faq`
--

DROP TABLE IF EXISTS `faq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `faq` (
  `faq_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `answer` varchar(255) NOT NULL,
  `question` varchar(255) NOT NULL,
  PRIMARY KEY (`faq_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faq`
--

LOCK TABLES `faq` WRITE;
/*!40000 ALTER TABLE `faq` DISABLE KEYS */;
INSERT INTO `faq` VALUES
(1,'자신을 포장하는데 집중한 글 보다는, 지원자가 어떻게 살아왔고 어떤 사람인지 깊게 고민하고 솔직하게 드러낸 글을 선호합니다.','자기소개서 분량이 많은데, 팁이 있을까요?'),
(2,'비전공자, 영화 제작 경험이 없는 사람도 지원 가능하며 합격하고 있습니다. 다만 전공에 따라 단편 시나리오, 영상포트폴리오 등 제출이 필수인 경우가 있으니 이는 준비하셔야 합니다.','영화를 만들어보거나 시나리오 써본 적이 없는 사람도 지원 가능하나요?'),
(3,'교육기간은 1년이며 등록금은 총 3,000,000원입니다. 입학 시에 등록금 3,000,000원을 전액 납부하셔야 합니다. 이후 제작 실습비는 MOVIEDIC에서 부담합니다.','교육기간과 학비가 얼마인가요?'),
(4,'우측 상단 마이페이지 버튼을 클릭한 뒤 회원정보 수정을 클릭하시면 회원정보의 수정이 가능합니다.','회원정보를 수정하고 싶어요.'),
(5,'무비딕은 거대한 향유고래 모비딕(Moby Dick)에서 따온 말 입니다. 영화를 뜻하는 Movie와 사전을 뜻하는 Dictionary의 DIC의 합성어로, 향유고래 모비딕처럼 거대한 영화사전을 모두가 함께 만들어 나가며\n영화같은 모두 이야기를 담아내고자 하는 의미가 담겨있습니다. 해당 내용은 홈페이지 팀소개 란에서 다시 한 번 확인하실 수 있습니다.','무비딕이 무슨 뜻인가요?'),
(6,'1995년생으로 키는 174cm입니다. 감성커피의 고소한 아이스 아메리카노를 선물하면 호감도를 올릴 수 있습니다.','무비딕 프로젝트의 최건 팀장님에 대해 알고 싶어요.'),
(7,'1995년생으로 키는 178cm입니다. 대도숙 공도를 수련 중이며 눈빛만으로 상대방을 압도할 수 있습니다. ','프론트엔드를 담당하신 김준회님에 대해 알고 싶어요.'),
(8,'1994년생으로 키는 186cm입니다. 감성커피의 부드러운 아메리카노를 선물하면 호감도를 올릴 수 있습니다. 뜨아와 아아 둘 다 좋아하십니다.','페이지 디자인을 설계하신 이승빈님에 대해 알고 싶어요.'),
(9,'그걸 왜 궁금해하시죠?','재호군에 대해 알고 싶어요.');
/*!40000 ALTER TABLE `faq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `franchise_inquery`
--

DROP TABLE IF EXISTS `franchise_inquery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `franchise_inquery` (
  `fi_num` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `available` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `etc` varchar(255) DEFAULT NULL,
  `mar_agree` varchar(255) DEFAULT NULL,
  `phone_num` varchar(255) DEFAULT NULL,
  `pri_agree` varchar(255) DEFAULT NULL,
  `u_name` varchar(255) DEFAULT NULL,
  `wish` varchar(255) DEFAULT NULL,
  `user_id` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`fi_num`),
  KEY `FKphc33dpevcvqhsmtdjcfw2a9i` (`user_id`),
  CONSTRAINT `FKphc33dpevcvqhsmtdjcfw2a9i` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `franchise_inquery`
--

LOCK TABLES `franchise_inquery` WRITE;
/*!40000 ALTER TABLE `franchise_inquery` DISABLE KEYS */;
/*!40000 ALTER TABLE `franchise_inquery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `furniture`
--

DROP TABLE IF EXISTS `furniture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `furniture` (
  `furniture_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `furniture_object` varchar(255) DEFAULT NULL,
  `site_x` int(11) DEFAULT NULL,
  `site_y` int(11) DEFAULT NULL,
  `game_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`furniture_id`),
  KEY `FKmtvuiwnv4y7wxmddndprcs8i6` (`game_id`),
  CONSTRAINT `FKmtvuiwnv4y7wxmddndprcs8i6` FOREIGN KEY (`game_id`) REFERENCES `game` (`game_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `furniture`
--

LOCK TABLES `furniture` WRITE;
/*!40000 ALTER TABLE `furniture` DISABLE KEYS */;
INSERT INTO `furniture` VALUES
(1,'아들의 첫 출근(Clone)',-7,2,1),
(2,'아버지의 초상화(Clone)',-3,1,2),
(3,'브이(Clone)',1,2,3),
(4,'토트넘 플래그(Clone)',-1,2,3),
(5,'토트넘 플래그(Clone)',-2,2,3),
(6,'토트넘 플래그(Clone)',-3,2,3),
(7,'애프터눈티(Clone)',1,0,4),
(8,'아치(Clone)',1,-3,4),
(9,'아들의 첫 출근(Clone)',-7,2,5),
(10,'아버지의 초상화(Clone)',-5,1,5),
(11,'브이(Clone)',-1,2,5),
(12,'부엉이시계(Clone)',1,2,5),
(13,'벽걸이양초(Clone)',3,2,5),
(14,'고급소파(Clone)',-8,0,5),
(15,'고급소파(Clone)',-6,0,5),
(16,'고급소파(Clone)',-4,0,5),
(17,'애프터눈티(Clone)',-6,-1,5),
(18,'애프터눈티(Clone)',-4,-1,5),
(19,'애프터눈티(Clone)',-8,-1,5),
(20,'아버지의 초상화(Clone)',-8,1,6),
(21,'아버지의 초상화(Clone)',-6,1,6),
(22,'아버지의 초상화(Clone)',-4,1,6),
(23,'아버지의 초상화(Clone)',-2,1,6),
(24,'아버지의 초상화(Clone)',0,1,6);
/*!40000 ALTER TABLE `furniture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game`
--

DROP TABLE IF EXISTS `game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `game` (
  `game_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `tile_object` varchar(255) DEFAULT NULL,
  `wall_object` varchar(255) DEFAULT NULL,
  `user_id` varchar(50) NOT NULL,
  PRIMARY KEY (`game_id`),
  KEY `FKefqw7nsur06wyld1gavn3ic6b` (`user_id`),
  CONSTRAINT `FKefqw7nsur06wyld1gavn3ic6b` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game`
--

LOCK TABLES `game` WRITE;
/*!40000 ALTER TABLE `game` DISABLE KEYS */;
INSERT INTO `game` VALUES
(1,'얕은바다','붉은벽돌','sampleID001'),
(2,'깊은바다','회색벽돌','sampleID002'),
(3,'잔디','구름벽지','sampleID003'),
(4,'진한잔디','미야옹','sampleID004'),
(5,'고급원목','피치퍼즈','sampleID005'),
(6,'참나무바닥','메소','sampleID006');
/*!40000 ALTER TABLE `game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lectures`
--

DROP TABLE IF EXISTS `lectures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lectures` (
  `lecture_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `image` text NOT NULL,
  `lecture_title` varchar(200) NOT NULL,
  `lecture_url` text NOT NULL,
  `major` varchar(100) NOT NULL,
  `description_text` text DEFAULT NULL,
  PRIMARY KEY (`lecture_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lectures`
--

LOCK TABLES `lectures` WRITE;
/*!40000 ALTER TABLE `lectures` DISABLE KEYS */;
INSERT INTO `lectures` VALUES
(1,'https://ifh.cc/g/GBt6xo.jpg','메모리얼에서 라떼를 배우다 (초급반)\n','https://videos.pexels.com/video-files/3296399/3296399-uhd_2732_1440_25fps.mp4','Drink','커피 위의 예술, 라떼 아트를 배워보자.'),
(2,'https://ifh.cc/g/laz5xW.jpg','메모리얼에서 라떼를 배우다 (고급반)\n','https://videos.pexels.com/video-files/3233369/3233369-hd_1920_1080_30fps.mp4','Drink','커피 위의 예술, 라떼 아트를 배워보자.'),
(3,'https://ifh.cc/g/CRjY5W.jpg','메모리얼의 시그니쳐 꽈배기!','https://videos.pexels.com/video-files/855507/855507-hd_1920_1080_25fps.mp4','Dessert','유니콘이 싸놓고 간듯한 환상의 꽈배기를 만들어보자'),
(4,'https://ifh.cc/g/ktPdLx.jpg','디저트 강좌 : 메모리얼 도너츠','https://videos.pexels.com/video-files/4752342/4752342-uhd_2560_1440_30fps.mp4','Dessert','쫄깃한 식감이 아이덴티티인 메모리얼 도너츠 만들기를 배워보자!'),
(5,'https://ifh.cc/g/ST9o9W.jpg','디저트 강좌 : 메모리얼 마들렌','https://videos.pexels.com/video-files/5542020/5542020-hd_1920_1080_24fps.mp4','Dessert','향긋한 레몬향과 부드러운 식감으로 한 번 먹으면 계속계속 먹게되는 마성의 디저트 메모리얼 마들렌 만들기를 배워보자!'),
(6,'https://ifh.cc/g/CqRaxx.jpg','메모리얼 에이드를 만들어보자!','https://videos.pexels.com/video-files/5032185/5032185-hd_1920_1080_25fps.mp4','Drink','여름을 위한 상콤한 에이드! 기억에 남을 에이드 만드는 방법을 배워보자!'),
(7,'https://ifh.cc/g/ktPdLx.jpg','디저트 강좌 : 메모리얼 도너츠','https://videos.pexels.com/video-files/8522954/8522954-hd_1920_1080_30fps.mp4','Dessert','쫄깃한 식감이 아이덴티티인 메모리얼 도너츠 만들기를 배워보자!'),
(8,'https://ifh.cc/g/ST9o9W.jpg','디저트 강좌 : 메모리얼 마들렌','https://videos.pexels.com/video-files/8523251/8523251-hd_1920_1080_30fps.mp4','Dessert','향긋한 레몬향과 부드러운 식감으로 한 번 먹으면 계속계속 먹게되는 마성의 디저트 메모리얼 마들렌 만들기를 배워보자!'),
(9,'https://ifh.cc/g/Q9bdY4.jpg','디저트 강좌 : 베이킹','https://videos.pexels.com/video-files/853744/853744-hd_1920_1080_25fps.mp4','Dessert','베이킹의 기초에 대해 배워보자');
/*!40000 ALTER TABLE `lectures` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `likes` (
  `like_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `like_date` date DEFAULT NULL,
  `liked_user` varchar(255) DEFAULT NULL,
  `user_id` varchar(50) NOT NULL,
  PRIMARY KEY (`like_id`),
  KEY `FKi2wo4dyk4rok7v4kak8sgkwx0` (`user_id`),
  CONSTRAINT `FKi2wo4dyk4rok7v4kak8sgkwx0` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES
(1,'2024-09-12','sampleID002','sampleID001'),
(2,'2024-09-12','sampleID003','sampleID002'),
(3,'2024-09-12','sampleID003','sampleID001'),
(4,'2024-09-12','sampleID004','sampleID001'),
(5,'2024-09-12','sampleID004','sampleID002'),
(6,'2024-09-12','sampleID004','sampleID003'),
(7,'2024-09-12','sampleID004','sampleID002'),
(8,'2024-09-12','sampleID005','sampleID001'),
(9,'2024-09-12','sampleID005','sampleID004'),
(10,'2024-09-12','sampleID005','sampleID003'),
(11,'2024-09-12','sampleID006','sampleID002'),
(12,'2024-09-12','sampleID001','sampleID006');
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu` (
  `menu_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `allergy` varchar(255) DEFAULT NULL,
  `caffeine` bigint(20) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `menu_description` varchar(255) DEFAULT NULL,
  `menu_name` varchar(255) DEFAULT NULL,
  `menu_title` varchar(255) DEFAULT NULL,
  `price` bigint(20) DEFAULT NULL,
  `protein` bigint(20) DEFAULT NULL,
  `saturated_fat` bigint(20) DEFAULT NULL,
  `serving_size` bigint(20) DEFAULT NULL,
  `sodium` bigint(20) DEFAULT NULL,
  `sugar` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`menu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES
(1,'우유',0,'https://ifh.cc/g/4Plb3w.png','제철 과일 멜론과 달콤한 연유가 어우러져 지구를 형상화한 부드럽고 진한 여름시즌 한정 스무디','지구멜론 스무디','8th-New-Menu',4000,7,6,446,275,61),
(2,'-',0,'https://ifh.cc/g/ZMFSav.png','이게 월클이 느끼는 무게의 맛인가.. 자꾸 생각나는 초특급 시원함의 무알콜 하이볼 에이드! 달콤 씁쓸 강렬한 원신 한정판 음료','방랑자! 하이볼 에이드랑 함 날','8th-New-Menu',5000,0,0,228,13,52),
(3,'우유,계란,밀,대두',0,'https://ifh.cc/g/bMqb2L.png','달콤쫀득한 초코젤라또와 바삭한 쿠키크럼블, 초코칩을 쫄깃한 크레이프에 감싸 만든 달달 시원한 여름시즌 한정 디저트','지구별 초코 크레페','8th-New-Menu',2800,5,17,479,403,37),
(4,'-',0,'https://ifh.cc/g/VbFYFk.png','청량한 오이의 향과 상큼한 라임, 애플민트가 어우러진 수분 충전! 대체당을 이용한 저칼로리 여름시즌 한정 메뉴','오이오이 라임 오히또','8th-New-Menu',3200,0,0,55,69,7),
(5,'-',0,'https://ifh.cc/g/wwbX9T.png','상큼달콤한 프리미엄 골드키위에 밀크씨슬을 더해 일상의 활력을 선사하는 건강한 여름시즌 한정 블렌딩 주스','달달 골드키위주스','8th-New-Menu',3200,1,0,20,15,43),
(6,'카페인',140,'https://ifh.cc/g/XCLsph.png','진한 에스프레소에 시원한 정수물과 얼음을 더하여 스타벅스의 깔끔하고 강렬한 에스프레소를 가장 부드럽고 시원하게 즐길 수 있는 커피','아메리카노(Ice)','Coffee',1500,0,0,355,10,0),
(7,'대두,우유',75,'https://ifh.cc/g/tkdhhH.png','향긋한 바닐라 시럽과 시원한 우유와 얼음을 넣고 점을 찍듯이 에스프레소를 부은 후 벌집 모양으로 카라멜 드리즐을 올린 달콤한 커피 음료','카라멜마키아토','Coffee',3500,6,4,355,110,22),
(8,'우유',75,'https://ifh.cc/g/bRaxCW.png','신선한 에스프레소 샷에 풍부한 휘핑크림을 얹은 커피 음료로서, 뜨거운 커피의 맛과 차갑고 달콤한 생크림의 맛을 같이 즐길 수 있는 커피 음료','에스프레소콘파나','Coffee',4800,0,1,22,0,1),
(9,'우유',5,'https://ifh.cc/g/s02xwo.png','상큼&달콤한 딸기와 부드러운 글레이즈드 소스에 바삭한 딸기 토핑을 얹은 프라푸치노.','딸기 글레이즈드 크림 프라푸치노','Coffee',4600,5,9,355,220,44),
(10,'-',415,'https://ifh.cc/g/nvvGCA.png','상쾌한 민트향 시럽과 잘게 갈린 얼음이','민트 콜드브루','Coffee',3800,0,0,473,0,23),
(11,'-',0,'https://ifh.cc/g/XG7t5x.png','스트로베리와 아사이베리의 상큼, 달콤한 맛이 톡톡!','슬래머','Drink',4000,0,0,473,0,55),
(12,'우유',0,'https://ifh.cc/g/V75xVB.png','딸기 풍미 가득한 스타벅스만의 딸기 콜드폼과','콜드 폼 딸기라떼','Drink',5000,6,2,235,110,41),
(13,'우유',0,'https://ifh.cc/g/p4sSxT.png','부드럽고 담백한 신선한 우유.','우유','Drink',2500,12,8,355,200,18),
(14,'우유',0,'https://ifh.cc/g/TsfvTz.png','고소한 헤이즐넛과 진한 초콜릿의 만남,','플러피 판다 아이스 초콜릿','Drink',6000,11,16,473,150,39),
(15,'우유',10,'https://ifh.cc/g/VRloVS.png','리저브 다크 초콜릿을 활용하여 초콜릿 풍미 가득한 디저트 타입의 티라미수 초콜릿','티라미수 초콜릿','Drink',5500,11,14,355,200,41),
(16,'우유,계란,대두',0,'https://ifh.cc/g/Gz8Hsl.png','고온에서 짧게 구워 겉면은 스모키하고 속은 크리미한 특징의 바스크 치즈 케이크에 초코의 달콤한 풍미를 더해 다채로운 맛을 즐길 수 있는 케이크입니다','바스크 초코 치즈케이크','Dessert',3500,8,38,326,290,43),
(17,'우유,계란,대두,밀',0,'https://ifh.cc/g/Hz7lh7.png','달콤한 초콜릿 케이크 시트에 진한 가나슈 생크림을 넣고 측면에 다크 초콜릿을 듬뿍 토핑한 달콤하고 촉촉한 초콜릿 케이크입니다.','초콜릿 생크림 케이크','Dessert',7000,7,32,240,140,23),
(18,'우유,계란,밀,대두,오징어,돼지고기',0,'https://ifh.cc/g/ppfcVO.png','현무암을 연상케 하는 오징어 먹물 케이크 시트 사이에 새콤한 당근 크림치즈 무스를 샌드한 컵 케이크입니다.','당근 현무암 케이크','Dessert',8000,5,21,240,140,27),
(19,'우유,계란,대두,밀',0,'https://ifh.cc/g/rRjktq.png','달콤하고 꾸덕한 브라우니 위에 상큼한 라즈베리 잼을 품은 초콜릿 무스를 더한 귀여운 베어리스타 케이크입니다.','베어리스타 브라우니 케이크','Dessert',12000,5,23,675,180,28),
(20,'우유,계란,대두,밀,이산화황',0,'https://ifh.cc/g/MmdKK1.png','촉촉한 케이크 시트 사이에 치즈 생크림과 한라봉 크림을 층층이 올린 후 한라봉 제스트로 마무리한 상큼한 케이크입니다.','새코롬 한라봉 크림 케이크','Dessert',8000,4,25,220,140,23),
(21,'우유,계란,대두,밀,돼지고기',0,'https://ifh.cc/g/TdoMGr.png','초코칩이 콕콕 박힌 촉촉한 초코 쿠키에 달콤하게 구운 마시멜로우가 만나 더 진한 초코 맛 쿠키.','초코스모어쿠키','Cookie',1200,10,15,133,590,34),
(22,'우유,계란,대두,밀,돼지고기',10,'https://ifh.cc/g/pC7jAz.png','화이트 초코칩이 가득 박힌 말차 쿠키에 달콤하게 구운 마시멜로우를 얹어 달콤쌉싸름한 매력을 간직한 쿠키.','말차스모어쿠키','Cookie',1200,10,15,133,590,35),
(23,'우유,계란,대두,밀,이산화황',0,'https://ifh.cc/g/BooS96.png','고소한 마카다미아를 넣어 만든 메가MGC커피 시그니처 쿠키.','마카다미아 쿠키','Cookie',1200,5,4,70,198,26),
(24,'우유,계란,대두,밀',0,'https://ifh.cc/g/45jgaa.png','진한 초콜릿칩을 넣어 만든 메가MGC커피 시그니처 쿠키.','초콜릿칩 쿠키','Cookie',1200,3,6,70,247,23),
(25,'우유,계란,대두,밀,오징어,땅콩',3,'https://ifh.cc/g/zW9owo.png','메가MGC커피 시그니처 음료 메가초코를 모티브로 만든 초코맛 마카롱.','메가초코 마카롱','Cookie',2000,4,7,50,46,20);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `message` (
  `message_num` int(11) NOT NULL AUTO_INCREMENT,
  `message_status` enum('CHECKED','NEW') DEFAULT NULL,
  `message_text` varchar(255) DEFAULT NULL,
  `send_user` varchar(255) DEFAULT NULL,
  `target_user` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`message_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe`
--

DROP TABLE IF EXISTS `recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recipe` (
  `recipe_name` varchar(255) NOT NULL,
  `recipe_text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`recipe_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe`
--

LOCK TABLES `recipe` WRITE;
/*!40000 ALTER TABLE `recipe` DISABLE KEYS */;
INSERT INTO `recipe` VALUES
('메멜스','메모리얼만의 비법 레시피로 제조한 멜론스무디'),
('민트 콜드브루','민트족을 위한 콜드브루'),
('바닐라 크림폭포 데니쉬','바닐라가 넘쳐흐르는 데니쉬'),
('복숭아 아이스 아메리카노','아샷추 그 이상의 맛'),
('슬래머','딸기와 아사이베리의 절묘한 조합'),
('에스프레소 콘 파나','에스프레소에 달콤한 생크림을 얹은 음료'),
('오이오이 라임 모히또','오이가 들어간 라임모히또'),
('초코 케이크','너무 달아서 당뇨 조심해야 할 초코 케이크'),
('카라멜 메끼아또','냄새부터 너무 달달한 카라멜 메끼아또'),
('콜드퐁 딸기라떼','작게 썰은 딸기가 산뜻하게 씹히는 시원한 라떼');
/*!40000 ALTER TABLE `recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saved_recipe`
--

DROP TABLE IF EXISTS `saved_recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saved_recipe` (
  `save_rec_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `from_user` varchar(255) DEFAULT NULL,
  `recipe_name` varchar(255) DEFAULT NULL,
  `user_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`save_rec_id`),
  KEY `FKr8u5n44he3x6kpahorqumgn9` (`recipe_name`),
  KEY `FKbq9qly3pycp2qb57gqx3iifvv` (`user_name`),
  CONSTRAINT `FKbq9qly3pycp2qb57gqx3iifvv` FOREIGN KEY (`user_name`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKr8u5n44he3x6kpahorqumgn9` FOREIGN KEY (`recipe_name`) REFERENCES `recipe` (`recipe_name`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saved_recipe`
--

LOCK TABLES `saved_recipe` WRITE;
/*!40000 ALTER TABLE `saved_recipe` DISABLE KEYS */;
INSERT INTO `saved_recipe` VALUES
(1,'sampleID001','초코 케이크','sampleID001'),
(2,'sampleID002','초코 케이크','sampleID002'),
(3,'sampleID001','초코 케이크','sampleID002'),
(4,'sampleID003','복숭아 아이스 아메리카노','sampleID003'),
(5,'sampleID002','초코 케이크','sampleID003'),
(6,'sampleID001','초코 케이크','sampleID003'),
(7,'sampleID004','복숭아 아이스 아메리카노','sampleID004'),
(8,'sampleID001','초코 케이크','sampleID004'),
(9,'sampleID002','초코 케이크','sampleID004'),
(10,'sampleID003','초코 케이크','sampleID004'),
(11,'sampleID005','슬래머','sampleID005'),
(12,'sampleID001','초코 케이크','sampleID005'),
(13,'sampleID004','복숭아 아이스 아메리카노','sampleID005'),
(14,'sampleID003','복숭아 아이스 아메리카노','sampleID005'),
(15,'sampleID006','바닐라 크림폭포 데니쉬','sampleID006'),
(16,'sampleID002','초코 케이크','sampleID006'),
(17,'sampleID006','바닐라 크림폭포 데니쉬','sampleID001');
/*!40000 ALTER TABLE `saved_recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscribe`
--

DROP TABLE IF EXISTS `subscribe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subscribe` (
  `subscribe_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `subscribe_time` datetime(6) NOT NULL,
  `lecture_id` bigint(20) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  PRIMARY KEY (`subscribe_id`),
  KEY `FKl4oan6k66r6qyh5owjnqw2fkl` (`lecture_id`),
  KEY `FK31lkjb2x51cw4bljtmswtj6r` (`user_id`),
  CONSTRAINT `FK31lkjb2x51cw4bljtmswtj6r` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKl4oan6k66r6qyh5owjnqw2fkl` FOREIGN KEY (`lecture_id`) REFERENCES `lectures` (`lecture_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscribe`
--

LOCK TABLES `subscribe` WRITE;
/*!40000 ALTER TABLE `subscribe` DISABLE KEYS */;
/*!40000 ALTER TABLE `subscribe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` varchar(50) NOT NULL,
  `birthday` date NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `user_email` varchar(100) DEFAULT NULL,
  `gender` enum('FEMALE','MALE') DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_name` varchar(50) DEFAULT NULL,
  `authority` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UKj09k2v8lxofv2vecxu2hde9so` (`user_email`),
  KEY `FKls987nl36npgqrjqdwbmgwrj1` (`authority`),
  CONSTRAINT `FKls987nl36npgqrjqdwbmgwrj1` FOREIGN KEY (`authority`) REFERENCES `authority` (`authority_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES
('admin','1990-01-01','2024-01-01 12:18:23.888000','admin@mail.com','MALE','$2a$10$sFGdMgj.nURXdSsq/JFqb.dmJzcjd13bM72IGA6cDqGVolU34m34a','관리자','ROLE_ADMIN'),
('pepe','1994-10-07','2024-01-02 16:23:57.573000','dltmdqls15@naver.com','MALE','$2a$10$s2BzsQ34m/TSPLr4LhyRzuqk4TWjJsxZH48bQy236RUUykFoE1nlq','이승빈','ROLE_ADMIN'),
('sampleID001','1995-09-27','2024-01-03 14:41:16.827000','sampleEmail001@naver.com','MALE','$2a$10$qz/vUTzoJDtiOwH9nEJ5B.PkTDW1vWchQg93Yy2sV9WFexV9AtIx6','sample001','ROLE_USER'),
('sampleID002','1996-02-12','2024-01-04 14:41:44.296000','sampleEmail002@naver.com','MALE','$2a$10$V8Z5zMXQkUQ.0pwkr/euneIDdRPVwyrzRbe4rYEZZ.NbH2hK60F.2','sample002','ROLE_USER'),
('sampleID003','1982-06-30','2024-01-05 14:42:54.678000','sampleEmail003@naver.com','FEMALE','$2a$10$eomlKXp3hg7.a2.09R40K.nOmzylyT2AutYllnG/ZV436Bqo3Pmby','sample003','ROLE_USER'),
('sampleID004','1992-05-23','2024-01-06 14:44:01.464000','sampleEmail004@naver.com','MALE','$2a$10$JE4A0Il3BUXR7j8.gOav9eiMgD8Wl5diVCrePXOYdwjeMZAa2RyWi','sample004','ROLE_USER'),
('sampleID005','1999-05-30','2024-01-08 14:44:23.655000','sampleEmail005@naver.com','FEMALE','$2a$10$SCcASM76.aiXAsrjiGT7GOELJCZ7tyH8NsVC.CcVLSKteItsnOrbW','sample005','ROLE_USER'),
('sampleID006','1996-06-30','2024-01-09 14:44:49.597000','sampleEmail006@naver.com','MALE','$2a$10$IKoBk.voxJn9JWxj7kMWUefjV49ZG7/iyf2kHx6CajbcMRWt4CZse','sample006','ROLE_USER'),
('sampleID007','1998-02-22','2024-01-10 14:45:12.010000','sampleEmail007@naver.com','MALE','$2a$10$s2dtUnvmZnlOKjIA43v7De9mPQjqK9Je4PUbqvf5YT7HpQh1jtQW6','sample007','ROLE_USER'),
('sampleID008','2002-08-16','2024-01-11 14:45:38.423000','sampleEmail008@naver.com','FEMALE','$2a$10$FjtwNrox/DXUMcle1KTuNegbYTdgCc984PBvQqAxb2akxt.iU4E7m','sample008','ROLE_USER'),
('sampleID009','1990-12-31','2024-01-12 14:46:07.759000','sampleEmail009@naver.com','FEMALE','$2a$10$rUqRYDOHyMopESyS0cojXuGB11w1K75NCxu8qcVg8uABtmkvlHpwm','sample009','ROLE_USER'),
('sampleID010','1993-07-21','2024-01-13 14:46:39.803000','sampleEmail010@naver.com','MALE','$2a$10$/VnUx8dcHsKBUEotwT7qMush0PuZ3OVwpVy1/z7t7kEmvJRDAlGci','sample010','ROLE_USER'),
('sampleID011','1976-10-12','2024-01-14 14:47:07.822000','sampleEmail011@naver.com','FEMALE','$2a$10$NmJq6feyFWN9GPc9NvzVBeU1ptARym9uafWexq.if0PS/lH4cBY1.','sample011','ROLE_USER'),
('sampleID012','1968-01-15','2024-01-15 14:47:36.022000','sampleEmail012@naver.com','MALE','$2a$10$m9EZLilquAmGdLsjJkC8NOcXLHRnmwjoVXmTHD.gXooVrdsdAtYDe','sample012','ROLE_USER'),
('sampleID013','1985-05-05','2024-01-16 14:47:58.849000','sampleEmail013@naver.com','FEMALE','$2a$10$EK.joNDBLZ53hUhqP5mkX.7tLwRZbLNqGYkRNvt741tYAhF0a5JYC','sample013','ROLE_USER'),
('sampleID014','1989-07-07','2024-01-17 14:48:22.072000','sampleEmail014@naver.com','FEMALE','$2a$10$nNgP7Gj7LIKxZvlcHQWQl.d53mwYDg70fXc4rYJUNZtMikjT1RWFa','sample014','ROLE_USER'),
('sampleID015','1979-08-02','2024-01-18 14:48:51.038000','sampleEmail015@naver.com','MALE','$2a$10$rSv5TkCBsCpW70.mq2Z9UeHhneXe51.evc7BPRXSx9Z6RMWgor/Jy','sample015','ROLE_USER'),
('sampleID016','1997-08-31','2024-01-19 14:49:16.735000','sampleEmail016@naver.com','FEMALE','$2a$10$h1HCufA7qYy6v4hq8C1KguMgOWBUkxZqu2UVoHrTOcfCR7cUafJW6','sample016','ROLE_USER'),
('sampleID017','1982-11-15','2024-01-20 14:50:12.962000','sampleEmail017@naver.com','MALE','$2a$10$.VP5g1DwctTNKDqRqdGWwutgIBhGgCD5FJGjlv6epGTMNEBMP3jaK','sample017','ROLE_USER'),
('sampleID018','2000-01-01','2024-01-21 14:50:44.988000','sampleEmail018@naver.com','MALE','$2a$10$GnWSyD4BFXT9I7chIuVGEOpGk67zr2Jx1Rdg5aiZ9qKgHLrOTDOAu','sample018','ROLE_USER'),
('sampleID019','2005-04-21','2024-01-22 14:51:10.628000','sampleEmail019@naver.com','FEMALE','$2a$10$NpgGFXQDyBQwpXLwiVSxhef8bQmZKvRXCFDkYu9DvH4KppBt7RcxC','sample019','ROLE_USER'),
('sampleID020','2008-05-08','2024-01-23 14:52:28.133000','sampleEmail020@naver.com','FEMALE','$2a$10$0lnT6OMJIIMpsqt33x3vC.WmRUWOsWibKV5NC0D5VJtp.psnuN3dy','sample020','ROLE_USER'),
('sampleID021','1985-01-26','2024-01-24 14:52:56.749000','sampleEmail021@naver.com','MALE','$2a$10$./CgWefwnqOkCpgL1TBoC.7/fhPHqJm6gkL8/a.yldRl6kExby1YS','sample021','ROLE_USER'),
('sampleID022','1985-10-07','2024-01-25 14:53:21.120000','sampleEmail022@naver.com','FEMALE','$2a$10$kO31XMorcp4SuN8rigOZheqJfmNqPoykHE6QB/OIMdW9Kb/l1tOqq','sample022','ROLE_USER'),
('sampleID023','1988-08-08','2024-01-26 14:54:07.150000','sampleEmail023@naver.com','MALE','$2a$10$HsPWVoDTFf/8tbysWYbT7eDfFIO9Pnb7e3GcGwU4RyE3qsCjcQcwq','sample023','ROLE_USER'),
('sampleID024','1982-07-08','2024-01-27 14:54:33.878000','sampleEmail024@naver.com','MALE','$2a$10$VbDkLycUPQDzfIPQMqRH4OfFbl/18.SB6/wA9mvJvbcL/W4MWo1T6','sample024','ROLE_USER'),
('sampleID025','1999-12-01','2024-01-28 14:55:00.783000','sampleEmail025@naver.com','FEMALE','$2a$10$YhwM2XPo.6Y7upG617m3TO0j/UvbzqDxEVlYs7Ep.YVU61Xq2tJFm','sample025','ROLE_USER'),
('sampleID026','1998-02-15','2024-01-29 14:55:24.055000','sampleEmail026@naver.com','MALE','$2a$10$3gGt2rJhAj7Du/2D5YxcPetyyClAOBxzxLuz/LCUbdtdLgS75TTt.','sample026','ROLE_USER'),
('sampleID027','1999-05-20','2024-01-30 14:55:45.622000','sampleEmail027@naver.com','MALE','$2a$10$Gjtm9uDzHGZ.ja.HuPSGSez3MGswhDOU7MbTr0xldv6vWbph5j7Rm','sample027','ROLE_USER'),
('sampleID028','2002-12-09','2024-01-31 14:56:14.398000','sampleEmail028@naver.com','MALE','$2a$10$RqdGQ7duEnEMtRPyuJHh5.fotvog/YYFPhxA9Sz.L397xb77qoJka','sample028','ROLE_USER'),
('sampleID029','1993-06-01','2024-02-01 14:56:47.398000','sampleEmail029@naver.com','MALE','$2a$10$e0fQR5nzcrranQk4ejW9fe9VI4IB/ojU2OpR94bNkq5GmJbie3SJm','sample029','ROLE_USER'),
('sampleID030','1990-01-06','2024-02-02 14:58:11.845000','sampleEmail030@naver.com','FEMALE','$2a$10$SjtAzQFgxL/L9IH8JkAl3O36MDa47gIf/Y/SUkkQMAzX7GUWYOOsK','sample030','ROLE_USER'),
('sampleID031','1997-05-02','2024-02-03 14:58:41.629000','sampleEmail031@naver.com','FEMALE','$2a$10$xX9GDeRMI3EIGiVDHx0myeki8j22emicuYF/OVzRTeSJZHF662j..','sample031','ROLE_USER'),
('sampleID032','1966-02-28','2024-02-04 14:59:22.727000','sampleEmail032@naver.com','FEMALE','$2a$10$od175z8..i5Y9W89eoDho.KUP9NJBbconL1/DpH9Uo8PTj2QOspUa','sample032','ROLE_USER'),
('sampleID033','2005-06-27','2024-02-05 14:59:48.255000','sampleEmail033@naver.com','FEMALE','$2a$10$.63pdpHRxmAi0CDhRSZln.Uj7OrP42cpqjsm/EaZWzLjsWk2suZ/u','sample033','ROLE_USER'),
('sampleID034','1969-07-22','2024-02-06 15:00:11.220000','sampleEmail034@naver.com','MALE','$2a$10$ZJSV0P6jxZFrFV/P/ARSG.lT6jxNuRQqJNoFdUMmFvbVnUqpjhM1C','sample034','ROLE_USER'),
('sampleID035','1982-07-02','2024-02-07 15:00:38.131000','sampleEmail035@naver.com','MALE','$2a$10$oCO82MGQaSPwdt..LJMu7O5wVp.W1w/2lWlQMGPxG.2Va6/rDDhCu','sample035','ROLE_USER'),
('sampleID036','1999-04-30','2024-02-07 15:01:03.533000','sampleEmail036@naver.com','FEMALE','$2a$10$2XdlUi3NWdteUipwExkHDegBXIqI.TeAvxIH7CJ4nb2//A2Ts8vHy','sample036','ROLE_USER'),
('sampleID037','2006-05-01','2024-02-07 15:32:10.133000','sampleEmail037@naver.com','MALE','$2a$10$d5GlZN5MBR7jUn9a5SCbB.NjIUU5BIbmgp45Pw56rW7kGX12FZl2W','sample037','ROLE_USER'),
('sampleID038','2000-12-31','2024-02-07 15:32:33.940000','sampleEmail038@naver.com','FEMALE','$2a$10$V4v36amB6skMUneMMyoyZeVCbod15FbVvaTo1R2xsrP8KP4CLJeoe','sample038','ROLE_USER'),
('sampleID039','1992-08-27','2024-02-07 15:34:10.709000','sampleEmail039@naver.com','FEMALE','$2a$10$.tCuUtxqI4f8s2C.vuBa5OROj0ZI28ZTunmUJhBUQ6l8aV6336FUm','sample039','ROLE_USER'),
('sampleID040','1994-09-26','2024-03-01 15:34:40.203000','sampleEmail040@naver.com','MALE','$2a$10$t1cFqrwBssKwSarGbgzEuO3ZfT4c5h5ZxzPrMYFmMh34YX4AF4JJ.','sample040','ROLE_USER'),
('sampleID041','1992-10-25','2024-03-02 15:35:04.887000','sampleEmail041@naver.com','FEMALE','$2a$10$S1OP/JkduXomnFpNGcIaX.bAEK6QcVVSska19T/HciXNeijL/KC5O','sample041','ROLE_USER'),
('sampleID042','1984-08-02','2024-03-03 15:35:33.166000','sampleEmail042@naver.com','FEMALE','$2a$10$9WA3zXWKlbUbghs.s3rDQeCzj7IlNHYdIR1/1fZwhVJeHekVrhQei','sample042','ROLE_USER'),
('sampleID043','1991-03-16','2024-03-04 15:35:57.533000','sampleEmail043@naver.com','MALE','$2a$10$D5AOJjTSD/DstZZ40h13je/Sw3cydRrJCC2rHR6fSE233BHjQ0WIu','sample043','ROLE_USER'),
('sampleID044','1988-11-15','2024-03-05 15:36:21.281000','sampleEmail044@naver.com','FEMALE','$2a$10$3i844PPhwuY0HmOlN9u.0e..Q8xjTosSLajyyrZL3CTfPhj3LPkWa','sample044','ROLE_USER'),
('sampleID045','1985-10-23','2024-03-06 15:36:47.591000','sampleEmail045@naver.com','MALE','$2a$10$Z8xFF9RXjBi1n//D/nWe.udJGwgF5wQrX05ku5T7F.DJwSJ2iY2xa','sample045','ROLE_USER'),
('sampleID046','1996-11-27','2024-03-06 15:37:13.644000','sampleEmail046@naver.com','MALE','$2a$10$PjugiZnrwoeK8U9e66PdN.aJxp4D7g9yCeooXinoGJemJwNysnNYe','sample046','ROLE_USER'),
('sampleID047','1982-06-10','2024-03-07 15:37:39.780000','sampleEmail047@naver.com','FEMALE','$2a$10$hz3P4YZfVu.2Yt5mTVxmP.YXgfRqhnlqKo9OoGDBfUBUVZQKGfMJm','sample047','ROLE_USER'),
('sampleID048','1989-11-25','2024-03-07 15:38:05.718000','sampleEmail048@naver.com','MALE','$2a$10$DIENoPNzwpRooJ54FE9NgOMQ8iEQ8MABtlMHYwmDel0fsu3wmsD3S','sample048','ROLE_USER'),
('sampleID049','1977-06-25','2024-03-07 15:38:32.501000','sampleEmail049@naver.com','FEMALE','$2a$10$0OFKEdgNbA2GjGxpXHpyWu.K71WO0ytzthYfFBO9p9/jIIxv5Gg5S','sample049','ROLE_USER'),
('sampleID050','1999-02-28','2024-03-07 15:39:00.133000','sampleEmail050@naver.com','MALE','$2a$10$m2bmvdrZG1.o3MyPC.HotOFT0uTAS9zd/IHMRt88iPeAVCpxA.PXy','sample050','ROLE_USER'),
('sampleID051','2004-06-27','2024-03-07 15:39:25.196000','sampleEmail051@naver.com','MALE','$2a$10$wVaDUgRJBpXI2cwtHP5F0.EZUE6IR2HxkZNeDSbYU3RbhZGh.eg8y','sample051','ROLE_USER'),
('sampleID052','1982-11-25','2024-03-07 15:39:46.612000','sampleEmail052@naver.com','MALE','$2a$10$uuM7A5zciXGspC0EVrHe6ukL6cXPy0/krFTpyifwh791iu.vnAUiq','sample052','ROLE_USER'),
('sampleID053','1989-12-25','2024-03-07 15:40:10.131000','sampleEmail053@naver.com','FEMALE','$2a$10$zN.F.CrcABf0slShx//.WORoNe/agr3QDWBNnxf2cFRWlSWBNU0la','sample053','ROLE_USER'),
('sampleID054','2001-02-15','2024-03-07 15:40:54.516000','sampleEmail054@naver.com','FEMALE','$2a$10$2cH.zSmFmWwaFKevJa623OlF.d6HBgWqSouEY2bgK2x0gboqdxRdq','sample054','ROLE_USER'),
('sampleID055','2000-10-13','2024-03-07 15:41:24.164000','sampleEmail055@naver.com','MALE','$2a$10$ACvTISWNDGeUGidT1eumveb1/tfHNZ4gfEOu05W2USyhvIYpzV6Bm','sample055','ROLE_USER'),
('sampleID056','1998-06-16','2024-03-07 15:41:49.636000','sampleEmail056@naver.com','FEMALE','$2a$10$YHXQ/5mYnHilC/Sj37NuQuft0cT5ZUpXFolE3CVlOM7DUbvCZVtke','sample056','ROLE_USER'),
('sampleID057','1978-04-16','2024-03-07 15:42:25.277000','sampleEmail057@naver.com','MALE','$2a$10$0baKduIqtkTUhO6nzW.UOO.ZYOBMcWz4EQkqpuoTKetPzTB0QBLc2','sample057','ROLE_USER'),
('sampleID058','1962-11-01','2024-03-07 15:43:08.932000','sampleEmail058@naver.com','FEMALE','$2a$10$IByibH8eLjMd.2gfBZFKz.0e1HiFjqsqkQd5r1bAUSlVVmtJlRYOm','sample058','ROLE_USER'),
('sampleID059','1989-01-01','2024-03-07 15:43:32.818000','sampleEmail059@naver.com','MALE','$2a$10$8OrRG1CLszvuEk6EN6kqGei7xVConPWwM83QloJo8bcR2u4nZ3xd6','sample059','ROLE_USER'),
('sampleID060','1998-10-26','2024-03-07 15:44:13.218000','sampleEmail060@naver.com','FEMALE','$2a$10$n5TiN9zx.yg3gRGXLdC5keOY4bjowWsQ2bGwKz2QNDanpYHFt56w6','sample060','ROLE_USER'),
('sampleID061','1982-06-19','2024-03-07 15:55:43.600000','sampleEmail061@naver.com','MALE','$2a$10$paNveWVv8Wvam.oPtDXAROHS7wWLbLRrmjmsMWCXNgs1RbkT9w77m','sample061','ROLE_USER'),
('sampleID062','1997-01-29','2024-03-07 15:56:04.302000','sampleEmail062@naver.com','FEMALE','$2a$10$5stJyX1/Vj1iawhvB7S72OzqqhVrQS0okyupj83CEf22/I5IAgLXC','sample062','ROLE_USER'),
('sampleID063','1982-03-28','2024-03-07 15:56:28.258000','sampleEmail063@naver.com','MALE','$2a$10$67ELDiGLu98LeovcEiqademAQxHGJBpp5Q9R7dtnhAL4QL3Dp.ubS','sample063','ROLE_USER'),
('sampleID064','2002-01-31','2024-03-07 15:56:55.252000','sampleEmail064@naver.com','FEMALE','$2a$10$Z7QU/HV3ltVPWQiNBTTNhOuUnRuYnAuQzwTHvJXA319iGBTSIs/qm','sample064','ROLE_USER'),
('sampleID065','1998-09-27','2024-03-07 15:57:19.927000','sampleEmail065@naver.com','MALE','$2a$10$C0jIEI8IXgg2.ZdIhuYIX.CQv97bzxj2xwgsNVPsVqQQi.5c4M5eS','sample065','ROLE_USER'),
('sampleID066','1988-03-31','2024-03-07 15:57:45.948000','sampleEmail066@naver.com','FEMALE','$2a$10$TTJXWfNxfPdaEDiVc6qZDeeThWr1p77h4a0u8gpNp7VmwzhRiocMu','sample066','ROLE_USER'),
('sampleID067','1980-07-31','2024-03-07 15:58:13.020000','sampleEmail067@naver.com','MALE','$2a$10$Z20sTqTZ3GLoJxi0V6ek..Ijiqo.h4RrTPO.t8D9xKky1PhoZupZG','sample067','ROLE_USER'),
('sampleID068','1984-06-11','2024-03-07 15:58:39.141000','sampleEmail068@naver.com','FEMALE','$2a$10$HHecOCKnNfvj2W3ulkijHOda0ILc4KdGMKbSi6EppuAaqyBBuYcse','sample068','ROLE_USER'),
('sampleID069','1999-12-31','2024-03-07 15:58:58.740000','sampleEmail069@naver.com','FEMALE','$2a$10$KwTrObrzGMS0OXCEiO2NiOXGRI/zRJJ.mt7qdv1B3NjLcK5dhBczS','sample069','ROLE_USER'),
('sampleID070','1991-06-01','2024-03-07 15:59:26.393000','sampleEmail070@naver.com','MALE','$2a$10$s2Gwc.6UMbkvF26q9XSIr.SBG0fk.R82YkJ3KuNEZxdCuWsSAsZfG','sample070','ROLE_USER'),
('sampleID071','1996-02-28','2024-03-07 15:59:48.628000','sampleEmail071@naver.com','MALE','$2a$10$Z4K.0MTP.ril2T5qPSnsYusxSo.RCPbrinnGHwJe07Z9Egfd/BEtu','sample071','ROLE_USER'),
('sampleID072','2000-05-09','2024-03-07 16:00:15.061000','sampleEmail072@naver.com','FEMALE','$2a$10$wJED47cDNNqKh/GyJkpcTeMUHevGLmkP0ZM7CC0gWAeb/EGWM5GX6','sample072','ROLE_USER'),
('sampleID073','1975-06-30','2024-03-07 16:00:57.837000','sampleEmail073@naver.com','MALE','$2a$10$EIxTIGgVZKE0seTS1qZXn.91FrbMle15VkmgHw8Po34V6/u0vK27W','sample073','ROLE_USER'),
('sampleID074','1977-08-08','2024-03-07 16:01:21.027000','sampleEmail074@naver.com','MALE','$2a$10$NT44rthOhazAdEXIFKH.cud3rogZUwzQIWzN4f3ZR1ql2YCe7xrPy','sample074','ROLE_USER'),
('sampleID075','1999-01-06','2024-03-07 16:01:45.868000','sampleEmail075@naver.com','MALE','$2a$10$EXYx4vjZzh3bHR4K3XZCIeUUeGooiqr1ATvTjOv9x8/zUz6ta/G7i','sample075','ROLE_USER'),
('sampleID076','1974-10-11','2024-03-07 16:02:16.869000','sampleEmail076@naver.com','FEMALE','$2a$10$ez5WyFKyvCYQd6SQmhHy2.wIHR5KM5y2saYnrtGa/PLcHQjYyVoG2','sample076','ROLE_USER'),
('sampleID077','1970-07-17','2024-03-07 16:02:48.645000','sampleEmail077@naver.com','MALE','$2a$10$af1fIQSdrR6E/6XnkXBSwuRxKbDJsOkrCIrZdl1sUIK8xq5556iSK','sample077','ROLE_USER'),
('sampleID078','1982-12-11','2024-04-07 16:03:12.253000','sampleEmail078@naver.com','FEMALE','$2a$10$qt9kaWDfuUPAU3Ceq4AYL.b04wqnvIFZXa3osa5rd67cE4W5kxbdO','sample078','ROLE_USER'),
('sampleID079','1985-11-11','2024-04-07 16:03:35.229000','sampleEmail079@naver.com','MALE','$2a$10$4c8ZX7UCxq.ojH2NeELOz.xLF6dcv22a4WMNEoLHJ1a8HLJjqxRQW','sample079','ROLE_USER'),
('sampleID080','1970-06-10','2024-04-07 16:04:04.169000','sampleEmail080@naver.com','MALE','$2a$10$UDcGS4LVLBnh2OanBfQaQeGKnwBV6AECGoMbdG7Yrx2Oof0XbOuaS','sample080','ROLE_USER'),
('sampleID081','1977-01-11','2024-04-07 16:04:28.251000','sampleEmail081@naver.com','FEMALE','$2a$10$Dmj0FXQvxYXwlGSK73ayc.x6LTbvL2lp.qaoH/j2rrub.BcWl1G.6','sample081','ROLE_USER'),
('sampleID082','1986-11-20','2024-04-07 16:04:53.885000','sampleEmail082@naver.com','MALE','$2a$10$bHww5PC7F9gUo77jIBJhQO8ONQ2AanIfy2iAe19P7fpltzyVdVIdG','sample082','ROLE_USER'),
('sampleID083','1989-12-16','2024-04-07 16:05:24.629000','sampleEmail083@naver.com','MALE','$2a$10$GzL1XZRx0iTP7LCYScDpUu7vTOQotpzC6hbbc1B.W9GNoyr3ogSCy','sample083','ROLE_USER'),
('sampleID084','1994-10-22','2024-04-07 16:05:58.214000','sampleEmail084@naver.com','FEMALE','$2a$10$gIDfe43/UkNwSaeAdAnCUe4dmzkA9f/FsaqDEGjs26tKreW.kSA2K','sample084','ROLE_USER'),
('sampleID085','1985-06-06','2024-04-07 16:06:28.693000','sampleEmail085@naver.com','MALE','$2a$10$baoJNNl4ZmR6AqS2CMiiJuytV/s7FCkz4ch55TUy4Xp0oc.J45X72','sample085','ROLE_USER'),
('sampleID086','1982-09-01','2024-04-07 16:07:08.549000','sampleEmail086@naver.com','FEMALE','$2a$10$XLi08tsxzCy8qvxMlea9AuwiymGe25MVRNMXaGBgLbSqAN.woL/V6','sample086','ROLE_USER'),
('sampleID087','1988-11-02','2024-04-07 16:07:33.060000','sampleEmail087@naver.com','FEMALE','$2a$10$4I.psO2/lA18wkxDkG7oeuXt6XRN0CCzP72ui4curyJMyGCCv0nei','sample087','ROLE_USER'),
('sampleID088','1999-11-17','2024-04-07 16:07:59.262000','sampleEmail088@naver.com','FEMALE','$2a$10$fOZDfSaXp7U9kgQnE304pOGUswG7lzXZMobVYrECTdUBiZtl49zqe','sample088','ROLE_USER'),
('sampleID089','1988-10-05','2024-04-07 16:08:25.781000','sampleEmail089@naver.com','MALE','$2a$10$a0elGHn9ZZiVeN/xvTMh/.8.RmoVmUljWtqhctcLbQwQqx6m6Qge6','sample089','ROLE_USER'),
('sampleID090','1999-01-01','2024-04-07 16:09:13.981000','sampleEmail090@naver.com','FEMALE','$2a$10$T91DR5bYac.evC7Nqtnq2.xnoC2YWA4hSgdCQpMuq5oZsCLbcgbvi','sample090','ROLE_USER'),
('sampleID091','1982-11-15','2024-04-07 16:09:36.467000','sampleEmail091@naver.com','MALE','$2a$10$I/GE8eHzmwkeeYRQurXJ8OdVA3Fx3MG.DtRxj9KBmCj3WGCQlFVnm','sample091','ROLE_USER'),
('sampleID092','1990-10-10','2024-04-07 16:10:10.607000','sampleEmail092@naver.com','FEMALE','$2a$10$zQBZv00kWE8ef5tiTiTHh.ZQ./T338N3I2frHFew3oGTm5b6I5DEy','sample092','ROLE_USER'),
('sampleID093','1995-06-30','2024-04-07 16:11:06.211000','sampleEmail093@naver.com','FEMALE','$2a$10$tIEYpdd1q0Wq8ui1vUTogu7FwZRR.3z4DrSBW32k.xIooOK2KZHkO','sample093','ROLE_USER'),
('sampleID094','2002-12-12','2024-04-07 16:11:30.316000','sampleEmail094@naver.com','MALE','$2a$10$hMPquIrzgfSD0bKw/PJxKOa/GXYuYCGXT4MA8c96tkkbwr/oWtrue','sample094','ROLE_USER'),
('sampleID095','1988-01-01','2024-04-07 16:11:54.924000','sampleEmail095@naver.com','MALE','$2a$10$KQ4C.cF/NOD93JY.2YHQ8u2LEG95KXIWu1LwYmJxZ4mtMkUS2dYm6','sample095','ROLE_USER'),
('sampleID096','1999-12-31','2024-04-07 16:12:14.372000','sampleEmail096@naver.com','FEMALE','$2a$10$P09iz/ZwRbw8N9Fx8rrhhOVDdEe4X9tPlHi3xKKmgKqnCgSOWbCzS','sample096','ROLE_USER'),
('sampleID097','1986-01-01','2024-04-07 16:12:38.827000','sampleEmail097@naver.com','FEMALE','$2a$10$IFFqmfEIgcAYy8fMs5u4VOxNYaLwJ.aShroIltJaPDNFOBv0CdQue','sample097','ROLE_USER'),
('sampleID098','2001-10-28','2024-04-07 16:13:07.683000','sampleEmail098@naver.com','MALE','$2a$10$8q2cxnDLxaZdYlpIhsDebOTbwTm6cg7zRe5Mu2MWOjDEe4zLXbafi','sample098','ROLE_USER'),
('sampleID099','1984-10-20','2024-04-07 16:13:33.772000','sampleEmail099@naver.com','FEMALE','$2a$10$Ir9CULErNOZoe0LWw0TMs.cyZaJannT4p1l4K8JCpSUuldOMHYZyW','sample099','ROLE_USER'),
('sampleID100','1970-12-15','2024-04-07 16:14:01.461000','sampleEmail100@naver.com','MALE','$2a$10$jCfU2ZZSSdI1wj1iPTRUneVfCdHoIoPcOVeYAa1NrmkSPFWgkIOM2','sample100','ROLE_USER'),
('sampleID101','1985-12-12','2024-04-07 16:14:26.715000','sampleEmail101@naver.com','FEMALE','$2a$10$GN/Nqx5xjyoJmXZgdZNzneDDuJxxel4.oF6XMmWVeLUgQPY58Rc5O','sample101','ROLE_USER'),
('sampleID102','2008-01-25','2024-04-07 16:14:50.581000','sampleEmail102@naver.com','MALE','$2a$10$ZKxn1SKna0qDIvoXECnKQu/Jh9sf/.oj/mQYJ71kLj.nMaljp613S','sample102','ROLE_USER'),
('sampleID103','1985-06-25','2024-04-07 16:15:11.486000','sampleEmail103@naver.com','MALE','$2a$10$vbjisOyTgu.O0pr3rm1yKODO4xOJAskGm31VmiLq/FYJ0TItMsjUS','sample103','ROLE_USER'),
('sampleID104','1999-10-17','2024-04-07 16:15:35.637000','sampleEmail104@naver.com','FEMALE','$2a$10$qk9UD2xjjvXMmXJJZTsp3.vJnu8fCBBSgl.pBzXGQf/MWeRbihK76','sample104','ROLE_USER'),
('sampleID105','2002-11-11','2024-04-07 16:16:00.340000','sampleEmail105@naver.com','MALE','$2a$10$YruzTHokzy3w.dFUl0ox.uwATmNEu/IDSvdPWTXjrzx.G2zv4cQ32','sample105','ROLE_USER'),
('sampleID106','1999-10-10','2024-04-07 16:16:31.835000','sampleEmail106@naver.com','MALE','$2a$10$bTsKWZhyrg.KWiYcpOy0KOpUFP1QrwxP057HVByOuo4i8n9ZC6kWG','sample106','ROLE_USER'),
('sampleID107','1980-01-26','2024-04-07 16:16:55.685000','sampleEmail107@naver.com','MALE','$2a$10$a2iC8VC/Nn4YPy4avgqqzuCkSRiHDZa1vb2ulh35ZLQynGSbBCrSi','sample107','ROLE_USER'),
('sampleID108','1976-09-30','2024-04-07 16:17:23.821000','sampleEmail108@naver.com','MALE','$2a$10$SSYrxhgVP9gHAONWW5Q1uek/e7H0KtPhZWuoXDywiNzB6auct6yJO','sample108','ROLE_USER'),
('sampleID109','2000-09-30','2024-04-07 16:17:46.125000','sampleEmail109@naver.com','FEMALE','$2a$10$WIwepgGsn3M90.qruI4uu.lUiWvc1MGLwPXtNgZ74R2agfA7wXQRW','sample109','ROLE_USER'),
('sampleID110','2001-06-15','2024-04-07 16:18:15.027000','sampleEmail110@naver.com','FEMALE','$2a$10$Hlu.feRH8E7FnVQDGSzbF.SP35vaSjF7SRuz/jpo.mvxcYnh9dtEW','sample110','ROLE_USER'),
('sampleID111','1991-03-03','2024-04-07 16:18:38.819000','sampleEmail111@naver.com','MALE','$2a$10$ygcgoHxxZ1nfFg.rA0NCOuXNtnFukEJH4D4FSOM1dmCX10Xr2/0pO','sample111','ROLE_USER'),
('sampleID112','1990-04-01','2024-04-07 16:19:02.365000','sampleEmail112@naver.com','MALE','$2a$10$xTTbi4qu.7eM2kKf0xnUlOp0k2PF0Jk0hpCCJ/8.daz2RClgeMxkS','sample112','ROLE_USER'),
('sampleID113','1981-04-15','2024-04-07 16:19:26.108000','sampleEmail113@naver.com','FEMALE','$2a$10$KRbEKkTSKLqagcJp1UKeg.HFnP6cN4FztUk6BO9Hj7Io8L6ZS6O8a','sample113','ROLE_USER'),
('sampleID114','2001-11-29','2024-04-07 16:19:50.014000','sampleEmail114@naver.com','FEMALE','$2a$10$UOv78fh2Dy4x6/ayL0VTCOvv7g81XNZVj82caVw00P.hkXO.jYxpO','sample114','ROLE_USER'),
('sampleID115','1989-12-13','2024-04-07 16:20:11.957000','sampleEmail115@naver.com','MALE','$2a$10$dlhO.00QgIivutichQF5N.uwYTtJMyXMOKQWfMHwSFyG334jj1CDO','sample115','ROLE_USER'),
('sampleID116','1970-06-18','2024-04-07 16:20:38.597000','sampleEmail116@naver.com','MALE','$2a$10$tzhaWv2jKdsSPFZjkciXyuLOyFpkur3yFA/5zXpImswvAzOHoBKDa','sample116','ROLE_USER'),
('sampleID117','1988-04-11','2024-04-07 16:21:02.016000','sampleEmail117@naver.com','FEMALE','$2a$10$J5BmwOc8NvCx51PE2td6XuQ23uAHLZ6A2gXd2AUrXrDzbJ.XHR8BW','sample117','ROLE_USER'),
('sampleID118','1965-11-15','2024-04-07 16:21:27.867000','sampleEmail118@naver.com','MALE','$2a$10$p.35XyRL0cCsdUyM.EJGY.y0YxPQB92Z2qWs4Re.kxnVDlvA5F8bW','sample118','ROLE_USER'),
('sampleID119','1999-04-01','2024-04-07 16:21:53.308000','sampleEmail119@naver.com','MALE','$2a$10$ARiX1quL/WaHc49reKx8beeQ2EWkYfkwFaqlFa76f8jm1e2jbB5ZK','sample119','ROLE_USER'),
('sampleID120','1995-03-27','2024-04-07 16:22:22.597000','sampleEmail120@naver.com','FEMALE','$2a$10$OAuuN790ZwbeVlTWA.ubKubmcfjeiYFCw2wUXfXV1SSzsUpIl2pDm','sample120','ROLE_USER'),
('sampleID121','2006-01-03','2024-04-07 16:22:45.131000','sampleEmail121@naver.com','FEMALE','$2a$10$.A1oQjlT3Zk7kM/wA07CAOgm6ctCRjXFopfqvfmzSjjy29fyRYwXe','sample121','ROLE_USER'),
('sampleID122','2004-04-04','2024-04-07 16:23:06.810000','sampleEmail122@naver.com','MALE','$2a$10$A3164MmzlSa2chCmdxdDZ.Fqrn3cRzJn/cKlnSBHLkPB/RrmiGIeC','sample122','ROLE_USER'),
('sampleID123','1980-01-06','2024-04-07 16:23:29.016000','sampleEmail123@naver.com','MALE','$2a$10$bIX1Ob8npgwe9tqgtel2mOkLhkPD4a20E.uNrEv0E59Zc.UbVN9Hq','sample123','ROLE_USER'),
('sampleID124','1977-07-17','2024-04-07 16:23:51.554000','sampleEmail124@naver.com','FEMALE','$2a$10$JZtulDDVSMEeH.4FrPxo6eSsG7QZMiuv1.w.YbCfFMjh35vlKu6DS','sample124','ROLE_USER'),
('sampleID125','1989-06-29','2024-04-07 16:24:18.158000','sampleEmail125@naver.com','FEMALE','$2a$10$fDCIp3FzkcF.1gRRZ4I4vetfvPAbDevp.0pSkA9o7k9q4i0uhBro.','sample125','ROLE_USER'),
('sampleID126','2000-08-31','2024-04-07 16:24:41.741000','sampleEmail126@naver.com','FEMALE','$2a$10$Arp56iO7wqMJ5SVQ26MVp.cqfeO1uo5sCnXpd.7dXM/o47E3A4Xum','sample126','ROLE_USER'),
('sampleID127','2005-01-31','2024-04-07 16:25:04.794000','sampleEmail127@naver.com','MALE','$2a$10$FTHFenjZLbuggU6dI.gydubkJ/l66GBB5pQgNQQKBDk7sJx.QGIB2','sample127','ROLE_USER'),
('sampleID128','1997-06-11','2024-04-07 16:26:12.520000','sampleEmail128@naver.com','MALE','$2a$10$UFIWuW/RoJgyH30dNtP1v.fKZhPOf.uWI9hgZ95wktC1G8jgpd4xK','sample128','ROLE_USER'),
('sampleID129','1988-08-08','2024-04-07 16:26:35.405000','sampleEmail129@naver.com','FEMALE','$2a$10$nzQ73UkqcKvp1algOukBJOrRKL8UbIdlZbSlXtwPOg2BcgkZTBA7K','sample129','ROLE_USER'),
('sampleID130','1989-04-27','2024-04-07 16:26:59.854000','sampleEmail130@naver.com','MALE','$2a$10$crmI4qvEasXaiIAiR34Idudv5RamDCZjV6XI7B5/mm4z.cCFFYmVa','sample130','ROLE_USER'),
('sampleID131','2000-04-04','2024-04-07 16:27:22.956000','sampleEmail131@naver.com','MALE','$2a$10$qwoJGVcUsPhoYQzFvYHqpOtUrERmWPISc6T5ogEN5/AGFPDplsEqi','sample131','ROLE_USER'),
('sampleID132','1999-11-11','2024-04-07 16:27:42.269000','sampleEmail132@naver.com','FEMALE','$2a$10$ByeofPKv27cK4FiZ1JIxVupY.NcqWu75uHGonkQQuFj5mpF6t/LFS','sample132','ROLE_USER'),
('sampleID133','1974-03-03','2024-04-07 16:28:06.011000','sampleEmail133@naver.com','FEMALE','$2a$10$eC3DH/1duvKs3byZTfLO1uDjKPoRuAP0aIQyzCjWCQFeinxsAF6DG','sample133','ROLE_USER'),
('sampleID134','1982-05-30','2024-04-07 16:28:36.212000','sampleEmail134@naver.com','MALE','$2a$10$Io56JDFSII0uzQl2EUz3NeA6lsxf1WxaU7iHTYnaO0dUvSW/jtePu','sample134','ROLE_USER'),
('sampleID135','2005-01-01','2024-04-07 16:28:58.296000','sampleEmail135@naver.com','MALE','$2a$10$rReKTJg2ADONwudlhrc4QeXeryD1/nbm9V.DYDivhhHddxhGbKIAu','sample135','ROLE_USER'),
('sampleID136','1999-11-11','2024-04-07 16:29:19.549000','sampleEmail136@naver.com','FEMALE','$2a$10$olXnbjyCPUQLoRHLkwq9bOtAKz5x2P6yh7EU.sLv9BaWZk08268BG','sample136','ROLE_USER'),
('sampleID137','2000-10-30','2024-04-07 16:29:39.517000','sampleEmail137@naver.com','MALE','$2a$10$GxDW1CP7eB/O8MT4vJJyceXlKDIy3nOO3bSibiZypfg50/YCpjPua','sample137','ROLE_USER'),
('sampleID138','1993-06-15','2024-04-07 16:30:01.791000','sampleEmail138@naver.com','FEMALE','$2a$10$6OEg/7Eo2msHkx9dVIvzy.o5igAIGGryhs1Jj8GhS6WKBkZ.QcRJq','sample138','ROLE_USER'),
('sampleID139','1984-07-07','2024-04-07 16:30:28.630000','sampleEmail139@naver.com','MALE','$2a$10$Ca.7Ney8OejdUcnlzfgBNOe9E8CmwH5WP/9pR.5A0E31HN3tKF9xC','sample139','ROLE_USER'),
('sampleID140','2003-06-06','2024-04-07 16:30:55.547000','sampleEmail140@naver.com','FEMALE','$2a$10$RQ8CqpVzn3j2g/VtkYNsPu2V5aq6yYSUpq3/FJMQYEpiaf8RacNOS','sample140','ROLE_USER'),
('sampleID141','1988-05-05','2024-04-07 16:31:19.075000','sampleEmail141@naver.com','FEMALE','$2a$10$fNX4ykrzzvaKLl8Q.2o2tOpVL0z15.Cjfo3FyTTiIu3tWvpF6iMXy','sample141','ROLE_USER'),
('sampleID142','1999-05-05','2024-04-07 16:31:39.789000','sampleEmail142@naver.com','FEMALE','$2a$10$exdHzU3t4t81g8SlfkiLaewlMrHQgx/rYg/eMOHjrOywJYxkgdcc2','sample142','ROLE_USER'),
('sampleID143','1991-04-11','2024-04-07 16:32:04.220000','sampleEmail143@naver.com','MALE','$2a$10$K0187b3XzOthmgu3E6QwoesRT/n.tvXYz6QgTZjt0ObTGxCsk/YKG','sample143','ROLE_USER'),
('sampleID144','1999-09-09','2024-04-07 16:32:27.115000','sampleEmail144@naver.com','MALE','$2a$10$d1e4ritPZc8oZZ6pBHG5juXeGrvdPe5osXk4qO/a42mJuE.A55DHS','sample144','ROLE_USER'),
('sampleID145','1987-06-04','2024-04-07 16:32:52.795000','sampleEmail145@naver.com','FEMALE','$2a$10$0ZSTl3UDL0KzRTDHdV7l9.oBF28nHjN/2ci8fsjPG15G0QrZDFrqq','sample145','ROLE_USER'),
('sampleID146','1988-04-04','2024-04-07 16:33:11.653000','sampleEmail146@naver.com','FEMALE','$2a$10$1DTdRZPhK8cdJzuXXQdujetWn6rR58VrdEs88NaJnfdRmP.hlZbdO','sample146','ROLE_USER'),
('sampleID147','1999-04-01','2024-04-07 16:33:34.044000','sampleEmail147@naver.com','FEMALE','$2a$10$eepynFB4MDaZjPqlJU6OiOWKi1JPKAkjhhBFDOZAM2deDtRPanqBK','sample147','ROLE_USER'),
('sampleID148','2002-03-07','2024-04-07 16:34:01.629000','sampleEmail148@naver.com','MALE','$2a$10$TGKzBDT/2zQAgYom.yffWeNUAm02ClPhUSVY0RxvRbG9e.ahcjdo.','sample148','ROLE_USER'),
('sampleID149','2000-05-01','2024-04-07 16:34:25.491000','sampleEmail149@naver.com','MALE','$2a$10$nS0z.gZHS4r9z40oiyGx4OcXhJ9CZVgP4h6pIogxW5Vt2JTVFtgx6','sample149','ROLE_USER'),
('sampleID150','1977-01-22','2024-04-07 16:34:49.411000','sampleEmail150@naver.com','MALE','$2a$10$vaJmpfdPyCPTpePDLCB2XexFVtAUTFRYSN0vSwsxBT8XHXs2GSZRy','sample150','ROLE_USER'),
('sampleID151','1988-01-01','2024-04-07 16:35:07.723000','sampleEmail151@naver.com','FEMALE','$2a$10$nr0pPlulue2Xylap.ToGFO.Eq.R3ObDSaK7OeUOT9gnn8QE43s4Wy','sample151','ROLE_USER'),
('sampleID152','2005-04-04','2024-04-07 16:35:30.699000','sampleEmail152@naver.com','FEMALE','$2a$10$omrIJhqu.rzBKg7S.0rvAeKjdQf67UvrZfaxFjRrVsinhmJWsnpkq','sample152','ROLE_USER'),
('sampleID153','2002-02-04','2024-04-07 16:35:49.358000','sampleEmail153@naver.com','FEMALE','$2a$10$xquw/19dQsJCJZKxomKISeJ8T4a9sumyKmsRI8wBEaGSYrUrx/NqC','sample153','ROLE_USER'),
('sampleID154','2000-06-06','2024-04-07 16:36:11.012000','sampleEmail154@naver.com','FEMALE','$2a$10$icO5FZ3ojBLuYtESjrDurOY9b36u5.iBOTPhYvVZoZEHWMtLere86','sample154','ROLE_USER'),
('sampleID155','1999-09-09','2024-04-07 16:36:32.524000','sampleEmail155@naver.com','MALE','$2a$10$85ivhjObqKk8hUemwE1gA.FqpR7xVuoV3eALDeSkQ2VW5CjwXvZ0m','sample155','ROLE_USER'),
('sampleID156','1988-01-01','2024-04-07 16:36:59.997000','sampleEmail156@naver.com','MALE','$2a$10$7K9HSJTwUNJI48TWXnZbxeMIGwxWl8bZX9twCvIbU8PN5IVemGI6S','sample156','ROLE_USER'),
('sampleID157','1978-08-05','2024-04-07 16:37:20.514000','sampleEmail157@naver.com','FEMALE','$2a$10$pH1itWjsXziJL7bnG4a0yuVF0VSFdeTVl9emkF.VDLTXgTEo/zGAi','sample157','ROLE_USER'),
('sampleID158','1999-02-05','2024-04-07 16:37:42.811000','sampleEmail158@naver.com','MALE','$2a$10$p6SW1Wf9JaxD6m/VR2Qbn.xjhofUcOdD9VzGxpSQH/CnPdPhWNtwm','sample158','ROLE_USER'),
('sampleID159','1999-01-04','2024-04-07 16:38:04.044000','sampleEmail159@naver.com','MALE','$2a$10$ssB4e8fCO0B2z77nnHi.5.jg9SFF4h5X42IDumwlkh3n/d0IJ.C2K','sample159','ROLE_USER'),
('sampleID160','1980-09-07','2024-04-07 16:38:26.833000','sampleEmail160@naver.com','MALE','$2a$10$mx40q/W4Xxziw0IO8b3Vu.pVPhe4Bb26L.UNcTSROVXXO8H1p2oGi','sample160','ROLE_USER'),
('sampleID161','1989-06-05','2024-04-07 16:38:52.187000','sampleEmail161@naver.com','MALE','$2a$10$29Z0LlvNaQKmUxHjqyYea.m9D2Qu84jWo0lmgOdznEQi1.H2km/dy','sample161','ROLE_USER'),
('sampleID162','1985-06-04','2024-04-07 16:39:15.318000','sampleEmail162@naver.com','MALE','$2a$10$wT5qiesZU60hdAkZaBcHSOTGFrnW2t.8cRgSupGI.i/zfQ.nqvNI.','sample162','ROLE_USER'),
('sampleID163','1990-01-08','2024-04-07 16:39:32.988000','sampleEmail163@naver.com','MALE','$2a$10$mqyL0lja1GsT8XRWMfPZ5.5C934cQhXrLA6W1cvxGUnM1CARz1zfy','sample163','ROLE_USER'),
('sampleID164','1988-01-01','2024-04-07 16:40:02.404000','sampleEmail164@naver.com','MALE','$2a$10$yO11OUmgjeVMxmchDAa91ORHkjsUEe593gZkT9h319W08TR9MXU3q','sample164','ROLE_USER'),
('sampleID165','2000-12-12','2024-04-07 16:40:39.373000','sampleEmail165@naver.com','MALE','$2a$10$lmwsMHVnsCQBInPIwI/BLePU2KcCxbQjzb5u.z9HoEGTvwfSV5EkK','sample165','ROLE_USER'),
('sampleID166','1997-04-05','2024-04-07 16:40:58.128000','sampleEmail166@naver.com','FEMALE','$2a$10$mJYiR31zFu5.VPxwlzXQZ.ITLN5AKm/OMHxf8fDNw5jdlAe65Mt8W','sample166','ROLE_USER'),
('sampleID167','1995-08-09','2024-04-07 16:41:24.669000','sampleEmail167@naver.com','MALE','$2a$10$rnqRCJnb0gn6jJIGGN86GesesOhBrhp9S.C3nXoaTxqC9t7COqlIe','sample167','ROLE_USER'),
('sampleID168','1985-04-06','2024-04-07 16:41:47.461000','sampleEmail168@naver.com','MALE','$2a$10$dxfbdMV4Q.N0gm5r6mKvzesbNzqfJM3733gTahRJuIGm2OCfHs6eW','sample168','ROLE_USER'),
('sampleID169','1987-12-25','2024-04-07 16:42:13.140000','sampleEmail169@naver.com','MALE','$2a$10$LhWOQTCXszRyfKdTVVUNx.6ckU7SIEsT2YyLZfg9qye0etdCH1TdG','sample169','ROLE_USER'),
('sampleID170','2004-09-27','2024-04-07 16:42:45.533000','sampleEmail170@naver.com','MALE','$2a$10$yAu1dRZM0P38/JZ8pt3GP.yjHq.YecQEof.CcQQhCgl2Iizv7wlwu','sample170','ROLE_USER'),
('sampleID171','1999-07-02','2024-04-07 16:43:04.691000','sampleEmail171@naver.com','MALE','$2a$10$jbIPpIdawgF2SJysQ4Fd2.Nm.aBSevq36uoER146u2RqvJVojV.QW','sample171','ROLE_USER'),
('sampleID172','1989-01-22','2024-04-07 16:43:30.891000','sampleEmail172@naver.com','FEMALE','$2a$10$NcuhIdh1FCW6Uctb0kc5mOeyAFxQ6ZlCRZmL0scqwFZ4SZFZSkE1W','sample172','ROLE_USER'),
('sampleID173','1999-08-08','2024-04-07 16:43:51.132000','sampleEmail173@naver.com','FEMALE','$2a$10$ZYtqMlwauSV7GS6VGUkMludbdyyvkD1dYUOVcQ6wt/2CiE2lgDMvW','sample173','ROLE_USER'),
('sampleID174','2000-09-09','2024-04-07 16:44:15.980000','sampleEmail174@naver.com','MALE','$2a$10$uB1.uwOx6F4xcfmRBIJ4/.3UQupHgvotVA4/m98j8UuwOT8slTa4q','sample174','ROLE_USER'),
('sampleID175','1988-04-19','2024-04-07 16:44:36.426000','sampleEmail175@naver.com','MALE','$2a$10$AU98dRkAUr4aNE5Q6YJfv.7yuigLIgpYmcU7tpDOboexr3T0wmJX6','sample175','ROLE_USER'),
('sampleID176','1988-06-06','2024-04-07 16:45:00.237000','sampleEmail176@naver.com','MALE','$2a$10$xI/L/cRZmpT2btFP.AT/G.5xbcKJA0FrIwbkOnw5SG8SwjAmyQkzm','sample176','ROLE_USER'),
('sampleID177','1988-11-11','2024-04-07 16:45:20.036000','sampleEmail177@naver.com','MALE','$2a$10$AFCzypJNy/T0WJGAaI.Eg.LQrPO2Blha.g/lJUdl4GpiH94zAMyLu','sample177','ROLE_USER'),
('sampleID178','1982-09-08','2024-04-07 16:45:45.997000','sampleEmail178@naver.com','MALE','$2a$10$4YoJh1kyEihXxduQo7M.w.Q13CvTd06ItL0iIUsqyYxQh3lhwbm.q','sample178','ROLE_USER'),
('sampleID179','1999-01-01','2024-04-07 16:46:09.266000','sampleEmail179@naver.com','FEMALE','$2a$10$a0SRPm.g8mY7NezlNDhNM.VZmukSrrkHTY57qfqWNFHuX7TJrgfg.','sample179','ROLE_USER'),
('sampleID180','2003-04-05','2024-04-07 16:46:34.036000','sampleEmail180@naver.com','FEMALE','$2a$10$qRqjOJ7JbtlVWyH36u4ELOibiSJgIGfQOLEYXErnLtHqHSuLBuSnW','sample180','ROLE_USER'),
('sampleID181','2000-06-25','2024-04-07 16:46:57.716000','sampleEmail181@naver.com','MALE','$2a$10$ZDAp8NCUyaccYsnb1ljr0u8OXvpwB1AxzDgFoTgguyztuzQn/LT6C','sample181','ROLE_USER'),
('sampleID182','1977-11-19','2024-04-07 16:47:20.684000','sampleEmail182@naver.com','MALE','$2a$10$CoC6nf7oWCrVaIJBD4iZ5.tyjO/cFylc2I3KumwIBgEppmULipJLy','sample182','ROLE_USER'),
('sampleID183','1990-08-01','2024-04-07 16:47:44.051000','sampleEmail183@naver.com','FEMALE','$2a$10$XvjUmIeziEvKGdHTzCaAP.UUCR2269oNE.W88HLuYF3Qenh/FWi42','sample183','ROLE_USER'),
('sampleID184','1999-10-10','2024-04-07 16:48:07.203000','sampleEmail184@naver.com','FEMALE','$2a$10$h3PPMG63OP4GC5D90Cvo.eN/ueIvA4ByTtd1GpahMMlhha7rfFawq','sample184','ROLE_USER'),
('sampleID185','1980-11-17','2024-04-07 16:48:28.061000','sampleEmail185@naver.com','MALE','$2a$10$BBwMWtwbnZIsNOd/94tpk.c6Bf/ji.xaK5ui3DZWXXa.HAjW5FfUO','sample185','ROLE_USER'),
('sampleID186','1985-04-04','2024-04-07 16:48:50.044000','sampleEmail186@naver.com','MALE','$2a$10$FLeryq4L3cDBvI5NLemUWOt.Mxt.iMILIeAu66GkDPio/y68Rt7iG','sample186','ROLE_USER'),
('sampleID187','1995-11-11','2024-04-07 16:49:16.100000','sampleEmail187@naver.com','MALE','$2a$10$q9VAHc41rNvgwlNy4wdt1.v.Pa3JEplLgK38BHcMgsMil8C5QYn9K','sample187','ROLE_USER'),
('sampleID188','1999-11-30','2024-04-07 16:49:40.218000','sampleEmail188@naver.com','MALE','$2a$10$ZFNhsdZDUPoSZPNqG675E.mHtYRRTGR0sKCf1ZpM7tdugPYSwORaC','sample188','ROLE_USER'),
('sampleID189','1995-12-01','2024-04-07 16:50:02.398000','sampleEmail189@naver.com','MALE','$2a$10$8NoeHjronTOYm5t8Gjzk7uaP6wGdnYXR6mOto5wBhy8SAnI6Kn1iG','sample189','ROLE_USER'),
('sampleID190','1999-01-01','2024-04-07 16:50:23.164000','sampleEmail190@naver.com','FEMALE','$2a$10$SE8PfJYlFgk7tZtBvlcSsOW1ftI6BDZS/gy3EmU36TW29MQEz5Y76','sample190','ROLE_USER'),
('sampleID191','1970-01-01','2024-04-07 16:50:41.672000','sampleEmail191@naver.com','MALE','$2a$10$PiryC2QqRg7E5eAH4lFcu..BfBvO61NoNkTwAGNqJQ7n.ymOi4yaO','sample191','ROLE_USER'),
('sampleID192','2000-10-10','2024-04-07 16:51:06.560000','sampleEmail192@naver.com','MALE','$2a$10$7EzZ2MV/E.lJS1xUFm7Gdu4yZyxmKxnyCca3U.iBmDkJXC6CmB7lm','sample192','ROLE_USER'),
('sampleID193','1985-01-01','2024-04-07 16:51:29.851000','sampleEmail193@naver.com','MALE','$2a$10$5sSqqr8axoGAXI4VwULqB.IkCWrf4COmGAfM6TrTiW1XGx7nAPrVm','sample193','ROLE_USER'),
('sampleID194','1999-12-30','2024-04-07 16:51:51.522000','sampleEmail194@naver.com','MALE','$2a$10$hvgTAIk7VZU6dUlZbAuSZ.mfqf4XzEiCxCtvXrDf9iTOTqbK28i6.','sample194','ROLE_USER'),
('sampleID195','2000-12-31','2024-04-07 16:52:11.877000','sampleEmail195@naver.com','FEMALE','$2a$10$mP0k85GwGexgD/X9gyKX4.Z7tWooRM5S9OgpN.dvA9tWju9gBuQOO','sample195','ROLE_USER'),
('sampleID196','1999-05-05','2024-05-07 16:52:34.684000','sampleEmail196@naver.com','MALE','$2a$10$YJbnQhLt1g4Z8FZ5ChPmTuljs6oY8KqsLezJ.92CXhbNddN6H3rYu','sample196','ROLE_USER'),
('sampleID197','1984-01-01','2024-05-07 16:52:53.072000','sampleEmail197@naver.com','MALE','$2a$10$5n0IdCZdOrwr6gDdtAQHYOz.rW0EykoN1F/26ry0KDMYK8jmuu6FK','sample197','ROLE_USER'),
('sampleID198','1988-01-31','2024-05-07 16:53:12.322000','sampleEmail198@naver.com','FEMALE','$2a$10$5H7aq6eBe/yIIiBMk1Scse2JkSIKpMLDg8iRLzPU7d4aiu4e7BP9G','sample198','ROLE_USER'),
('sampleID199','2004-01-01','2024-05-07 16:53:32.132000','sampleEmail199@naver.com','MALE','$2a$10$BpgUAm5tbF61/HOaOWl.iOBIOLb6OZkae7GYunIKFNcezoPCnv3Qa','sample199','ROLE_USER'),
('sampleID200','2005-12-31','2024-05-07 16:53:57.677000','sampleEmail200@naver.com','FEMALE','$2a$10$xzjG1WUrpebKUatBrDpvAe4o6Z6JvRMdEFtKGcZ5jwtiwUXXdelOm','sample200','ROLE_USER'),
('sampleID201','2006-01-01','2024-05-07 16:54:19.748000','sampleEmail201@naver.com','FEMALE','$2a$10$/d0c2dyancx.75ntyS0uMOk6Jn.EQxUvO5pu11lIts3dcxiHfMT6K','sample201','ROLE_USER'),
('sampleID202','2005-03-31','2024-05-07 16:54:40.530000','sampleEmail202@naver.com','FEMALE','$2a$10$BBok0FkRfAgpNzqL2gro.ezZyLlhtx7tzIMhzC/wJ/la.kq2PmzFa','sample202','ROLE_USER'),
('sampleID203','1995-12-31','2024-05-07 16:55:04.555000','sampleEmail203@naver.com','MALE','$2a$10$JTLNOPh/OlyesLgRNNfMFerWAN0fGlG389.nrPlcmNY4vT9RTKC9C','sample203','ROLE_USER'),
('sampleID204','1990-01-01','2024-05-07 16:55:23.547000','sampleEmail204@naver.com','MALE','$2a$10$hRiQfVNdZSemdSIxy/VjlevwIrHb5jPnKd4LsRoT7HFLk52V9O5bi','sample204','ROLE_USER'),
('sampleID205','1991-01-25','2024-05-07 16:55:47.845000','sampleEmail205@naver.com','MALE','$2a$10$gA9tsLMNynIc1/Ow3tM.h.r6FZD.ICv4ETKRrOmW/zhPBqY6NJz66','sample205','ROLE_USER'),
('sampleID206','1987-01-01','2024-05-07 16:56:14.833000','sampleEmail206@naver.com','MALE','$2a$10$GrKfKjN52LhVhmhDoaL8S.cVPhpfOgNPELLT1kvil.2KlelBneD9i','sample206','ROLE_USER'),
('sampleID207','1982-01-01','2024-05-07 16:56:38.997000','sampleEmail207@naver.com','FEMALE','$2a$10$TFGM6pRRfUsngiq2LuAXW.g5Y.aSueZQ8OTSflIxhNE6jeNQmgrXC','sample207','ROLE_USER'),
('sampleID208','1986-01-31','2024-05-07 16:57:02.630000','sampleEmail208@naver.com','MALE','$2a$10$6Oqv2yq1JLlbEORWCld1GukrKOf1ilUcBL.VgS5/AN287UgVlJYQi','sample208','ROLE_USER'),
('sampleID209','1985-12-31','2024-05-07 16:57:24.202000','sampleEmail209@naver.com','MALE','$2a$10$yYrdYWmK/.jJrOV9r719guY/pHi5erQZ.UdipdVSjyqlIBqt2V/cW','sample209','ROLE_USER'),
('sampleID210','1976-01-31','2024-05-07 16:57:50.939000','sampleEmail210@naver.com','MALE','$2a$10$fCe4Qt5vkzXMCA1TL.H9f.ESmAVs79Aa9N9Xxf0BA/jH/Ad4UT9Zy','sample210','ROLE_USER'),
('sampleID211','1976-12-13','2024-05-07 16:58:12.548000','sampleEmail211@naver.com','FEMALE','$2a$10$XX6dRLB5dWsZ46KWk9PsfeTKF5EQ.KMyjegmDIPuU4eSM6ImhOVt2','sample211','ROLE_USER'),
('sampleID212','2000-04-03','2024-05-07 16:58:38.047000','sampleEmail212@naver.com','MALE','$2a$10$Ov2d.fzuVImNU3y11np8/e.ZKtGvZdrnfpI7FSk56eJY4thxLNbsK','sample212','ROLE_USER'),
('sampleID213','1968-01-01','2024-05-07 16:58:58.938000','sampleEmail213@naver.com','MALE','$2a$10$l70c3ETi6RTpSjwDkAGFzuGNC9IJwxK5gPGAp55mRz6etVvRiRIve','sample213','ROLE_USER'),
('sampleID214','1969-12-31','2024-05-07 16:59:23.458000','sampleEmail214@naver.com','MALE','$2a$10$OOlgctsXrj4JfRPN6lHv/.fCxMyqXz8X6gotQYnPCtIyIVmdhONNC','sample214','ROLE_USER'),
('sampleID215','1999-07-25','2024-05-07 16:59:47.179000','sampleEmail215@naver.com','MALE','$2a$10$.urzbQ5Q9jKvELgKWORwKeduIGjWyTvzYuCzcNg6w3GbNhpgl.UW.','sample215','ROLE_USER'),
('sampleID216','1988-12-15','2024-06-07 17:00:07.858000','sampleEmail216@naver.com','MALE','$2a$10$O0dOuEyfIpjNUV642bI.7uG2y.cCVkby78iBsh0.T3/fUBgq7R/qy','sample216','ROLE_USER'),
('sampleID217','1985-06-22','2024-06-07 17:00:35.621000','sampleEmail217@naver.com','FEMALE','$2a$10$qaSnWEv5YJzFVXtnCzyBbeXjHAPoufeOnT.JfGs/qTmjzAfjR/ESi','sample217','ROLE_USER'),
('sampleID218','1999-07-07','2024-06-07 17:00:55.813000','sampleEmail218@naver.com','FEMALE','$2a$10$XD5ZwZWi5Za5csQ2n1VbM.iI9UbyOhKF3H6o7WKBW1co6iBmpB5NO','sample218','ROLE_USER'),
('sampleID219','1985-04-30','2024-06-07 17:01:16.235000','sampleEmail219@naver.com','MALE','$2a$10$UtJoUx6DBc7BAUsJQ0DHKuH3oxZdcY/C4vdv9yA7OAFXjgp2paYSS','sample219','ROLE_USER'),
('sampleID220','1988-12-31','2024-06-07 17:01:34.516000','sampleEmail220@naver.com','MALE','$2a$10$GZod9HrPXrSvPeVq7FcdBe86sgOazBIpv/J4S/AMnhkbkYHfIQZZS','sample220','ROLE_USER'),
('sampleID221','1999-11-16','2024-06-07 17:01:53.635000','sampleEmail221@naver.com','MALE','$2a$10$eWxhUjAnjcHgJwm3j1cHK.eGy.CVlDkQWElsBbPDiQdRMzDOpg.NW','sample221','ROLE_USER'),
('sampleID222','1985-02-02','2024-06-07 17:02:12.162000','sampleEmail222@naver.com','FEMALE','$2a$10$LL0y7gZbBA0Zom/yU9eRxutB00mnS8CUEnZ8LLFVvsfNfULsO7tPy','sample222','ROLE_USER'),
('sampleID223','2002-01-31','2024-06-07 17:02:30.485000','sampleEmail223@naver.com','MALE','$2a$10$JTv3lifRaYEA/ZjHs9ekX.hXN/h4eV4nO7T0GnusccVSR4uzG.VR.','sample223','ROLE_USER'),
('sampleID224','1997-01-31','2024-06-07 17:02:50.626000','sampleEmail224@naver.com','MALE','$2a$10$kTYKficwwVryeZra22LD0.qL42VAGlx36Ae.XUAlbDa9aP2Eyj0y6','sample224','ROLE_USER'),
('sampleID225','1993-12-31','2024-06-07 17:03:10.245000','sampleEmail225@naver.com','MALE','$2a$10$7soZCLpSsM2HRM.zVtMJkeEO949gp2wWoKr9leD0xl4uDJx/WqKoS','sample225','ROLE_USER'),
('sampleID226','1988-05-22','2024-06-07 17:03:36.587000','sampleEmail226@naver.com','MALE','$2a$10$ET8/SLqDIftXJ0tEYWqjx.GP23okhYtKcj2sEPXjSC8gPHBkuXBkW','sample226','ROLE_USER'),
('sampleID227','2003-11-15','2024-06-07 17:03:57.533000','sampleEmail227@naver.com','MALE','$2a$10$fSTbzTKt7wAkIF8dxxj2ye4C8BCxmV6JjA8a0nXd8UjSuqCdcVlNW','sample227','ROLE_USER'),
('sampleID228','1982-01-31','2024-06-07 17:04:19.139000','sampleEmail228@naver.com','FEMALE','$2a$10$AMUsZZ5coaU3/qOlaQWZ0OODt4ogbODLsaPbj0yEWbtMRutK0aMwC','sample228','ROLE_USER'),
('sampleID229','1970-05-31','2024-06-07 17:04:45.579000','sampleEmail229@naver.com','MALE','$2a$10$J0eoXgOypDC50Zjtlwxaa.a.nXFFfBJaDtoqq4HZXz2t9UBrE/L5e','sample229','ROLE_USER'),
('sampleID230','1960-01-01','2024-06-07 17:05:07.995000','sampleEmail230@naver.com','MALE','$2a$10$UtBVFoQp6YO/Xk0MKgO4lezbA2uMvxvFdbn2ANtiCwCmWvJBZTrdK','sample230','ROLE_USER'),
('sampleID231','1955-12-31','2024-06-07 17:05:28.755000','sampleEmail231@naver.com','FEMALE','$2a$10$noB58k4ehTPkBz1JMRuHh.nhNOVyOKXuigKwhbtA9DQXKIiroMXp6','sample231','ROLE_USER'),
('sampleID232','2005-07-07','2024-06-07 17:05:51.645000','sampleEmail232@naver.com','MALE','$2a$10$3csXzLvHSQtVf8/YZs7O1OIH5xoABYHvWADLW75PmzPV2vdxv3h5G','sample232','ROLE_USER'),
('sampleID233','1988-07-07','2024-06-07 17:06:13.427000','sampleEmail233@naver.com','MALE','$2a$10$cprh1z3mDOCHRhby2FaD/.g506dVKbLy/FH.ImP5531ZPJPKMSNue','sample233','ROLE_USER'),
('sampleID234','1958-08-08','2024-06-07 17:06:37.643000','sampleEmail234@naver.com','MALE','$2a$10$TzTOAEnh10U5Z/cIA3L/JujLB9hdE1kd2n9MTeUvaK/pJCJo6Rh0q','sample234','ROLE_USER'),
('sampleID235','1965-07-08','2024-06-07 17:07:01.887000','sampleEmail235@naver.com','FEMALE','$2a$10$89Qg0AMNnMm8kh5LA7uI2.VqeYpt4hw19JXh3cgzq7pvV0Ge5RpEy','sample235','ROLE_USER'),
('sampleID236','2001-09-09','2024-06-07 17:07:25.579000','sampleEmail236@naver.com','MALE','$2a$10$MtZCTnJpcvzuHGrLOSHkROvH2ujyhVvntjDZcWTE/.PzEkuFfnF2m','sample236','ROLE_USER'),
('sampleID237','1966-07-09','2024-06-07 17:07:47.595000','sampleEmail237@naver.com','MALE','$2a$10$6pVUsfc3S44qtHR.e8uSXu2gUwVdd3V9GPC2X39SDobW26Hdok8Q.','sample237','ROLE_USER'),
('sampleID238','1982-06-30','2024-06-07 17:08:07.333000','sampleEmail238@naver.com','FEMALE','$2a$10$dvI1YtAxSsBGy5wnSqRsruPPE8W4DYSGELaiItaL8lXgbJzWlavP6','sample238','ROLE_USER'),
('sampleID239','1989-11-11','2024-06-07 17:08:28.803000','sampleEmail239@naver.com','MALE','$2a$10$YXD4av7N9McWteQO5K22jeDRqnlpxfnb.0T/LxTLTUb4uopqi/6R6','sample239','ROLE_USER'),
('sampleID240','1994-01-31','2024-06-07 17:08:49.310000','sampleEmail240@naver.com','FEMALE','$2a$10$EVbpxD1UpsiHqPHWLKTh4eTV23RiJmZpUci2q4ar8vZGwf3rTLjr.','sample240','ROLE_USER'),
('sampleID241','1972-01-01','2024-06-07 17:09:06.690000','sampleEmail241@naver.com','MALE','$2a$10$5/GSttU0wC2Xdncf9.1ltOfx1AKgxkWw4kXXK7HkG0jYuAGxwksSW','sample241','ROLE_USER'),
('sampleID242','1999-12-29','2024-06-07 17:09:26.396000','sampleEmail242@naver.com','FEMALE','$2a$10$3mqj8O7n8nahlCJ3BDtz5ex60YEm3KNb.M6kljSXyjmHy0pqZp02a','sample242','ROLE_USER'),
('sampleID243','1979-12-31','2024-06-07 17:09:46.957000','sampleEmail243@naver.com','MALE','$2a$10$hZtoqCOhyhWG2jhaxi0b5ucImTm1VT0H7MXECUYbtI3XyeOW1kh6S','sample243','ROLE_USER'),
('sampleID244','1989-07-07','2024-06-07 17:10:09.169000','sampleEmail244@naver.com','FEMALE','$2a$10$wMZMUB8I.j5gtgKHtgvIJeSoSEpYahvL5hDu24X61Qb5/QCJJLlxi','sample244','ROLE_USER'),
('sampleID245','2003-04-06','2024-06-07 17:10:38.227000','sampleEmail245@naver.com','MALE','$2a$10$0yi1ajzZQUQ0aX0DpGZUe.wJmOXjcVgMNv.e7XuX5OCOS70tKKT/.','sample245','ROLE_USER'),
('sampleID246','1980-02-03','2024-06-07 17:10:57.061000','sampleEmail246@naver.com','MALE','$2a$10$iZgRtX84NJ7TYO2vrY6pNeBxF4g1JqQRNDcxG51JBff14FmAZ9LSG','sample246','ROLE_USER'),
('sampleID247','1998-06-30','2024-06-07 17:11:13.523000','sampleEmail247@naver.com','MALE','$2a$10$Q.GzsnXYuCUbFV9I6XSopeQVqej7xHjW.0iH0EB.t1P7txeRpsfhG','sample247','ROLE_USER'),
('sampleID248','2003-07-09','2024-06-07 17:11:32.805000','sampleEmail248@naver.com','FEMALE','$2a$10$Uc5Rg4TupRoRQ3QOHkYzPuMTcrfqt1NmamXP.kgivuf0L9MrUeiza','sample248','ROLE_USER'),
('sampleID249','1957-04-15','2024-06-07 17:12:02.525000','sampleEmail249@naver.com','FEMALE','$2a$10$wgnmGpW.VnUkmf1/AvIkY./m14BuR1hV2sIevPsqdIBSUO6S4BN8O','sample249','ROLE_USER'),
('sampleID250','1959-10-05','2024-06-07 17:12:26.494000','sampleEmail250@naver.com','MALE','$2a$10$KLrzzmoMoLLkTynYSRYBh.gCA.rYNJNtxLXQdfextQooCJwFvx.ua','sample250','ROLE_USER'),
('sampleID251','2004-03-07','2024-06-07 17:12:43.962000','sampleEmail251@naver.com','FEMALE','$2a$10$lORbpdilyNhAoh3akGO4Le1tWPxKIiA1.bw3FJ0.0rEzUbI/AuvdC','sample251','ROLE_USER'),
('sampleID252','1995-08-16','2024-06-07 17:13:15.612000','sampleEmail252@naver.com','MALE','$2a$10$kWve1mS9tV81D4rpKZw3pOTUxBrGLq0S190Kryd2a.DiA7CoMA8vy','sample252','ROLE_USER'),
('sampleID253','2004-07-14','2024-06-07 17:13:42.541000','sampleEmail253@naver.com','FEMALE','$2a$10$s3.iBimqhlzrMfy1aAwdb.9tTM37gUnFojDqr.7zlLVIdGaMEELfq','sample253','ROLE_USER'),
('sampleID254','1989-09-12','2024-06-07 17:14:02.620000','sampleEmail254@naver.com','MALE','$2a$10$zOZKwKO9AGbuLa2c8J2/x.35lb2j8k5R93f08igJiJprKXWiHCDzq','sample254','ROLE_USER'),
('sampleID255','1973-12-12','2024-06-07 17:14:26.545000','sampleEmail255@naver.com','MALE','$2a$10$k9v9/0Goqn1L9G5Jecel.O/83gHwBrLgmNRN6FAEw6BfK.L4dWCVe','sample255','ROLE_USER'),
('sampleID256','1963-05-31','2024-06-07 17:14:54.259000','sampleEmail256@naver.com','MALE','$2a$10$jRQHrVI/sxJYX.tej2uJLefB3/atzrsQOdJlTjypH0IisQRmIy.O2','sample256','ROLE_USER'),
('sampleID257','1996-03-03','2024-06-07 17:15:18.211000','sampleEmail257@naver.com','FEMALE','$2a$10$HMnzYr4WzJRWFh0ZIMyVAO030bzSedjPcBQBi.lbQf1bf73S1Q5jS','sample257','ROLE_USER'),
('sampleID258','2000-04-11','2024-06-07 17:15:40.301000','sampleEmail258@naver.com','FEMALE','$2a$10$W6hCStTvPpY/UwvfLHSox.Eu3yKNBSJ1zgJJzyXfBLswqRg4tcg.2','sample258','ROLE_USER'),
('sampleID259','1995-09-05','2024-06-07 17:16:04.122000','sampleEmail259@naver.com','FEMALE','$2a$10$HwC5yZ9wRvzeYPk3urjOWO5o5c41YypJ80l49qes4iIux1Ofqfwn6','sample259','ROLE_USER'),
('sampleID260','1999-04-15','2024-06-07 17:16:29.364000','sampleEmail260@naver.com','MALE','$2a$10$iM8SJ1EW9L.V3LtwC/1IW.gL6avLgfxpXnY7rWpI43yCVm8aOWLuC','sample260','ROLE_USER'),
('sampleID261','1988-09-07','2024-06-07 17:16:48.701000','sampleEmail261@naver.com','MALE','$2a$10$yi8.n6Ea2gP896yCI6NK4u1L.nrMyRB9vzIY42XdVrJVOOHQU4SZy','sample261','ROLE_USER'),
('sampleID262','1979-07-07','2024-06-07 17:17:09.262000','sampleEmail262@naver.com','FEMALE','$2a$10$AZmrG3HT5M2jhke2a4Ugq.g0Y173vaa/2Oa1mbYAgqJ0uHOI7yC2.','sample262','ROLE_USER'),
('sampleID263','1999-11-15','2024-06-07 17:17:29.541000','sampleEmail263@naver.com','FEMALE','$2a$10$NGjMeZ0BTd.gyQQld.6zNOZAxl29xNqPVurM7SA5q/9I26Zsp39hK','sample263','ROLE_USER'),
('sampleID264','1988-01-04','2024-06-07 17:17:49.235000','sampleEmail264@naver.com','MALE','$2a$10$st/NOuPwlilA0g3O4URYP.JubKVBh0rCVHYmPjexC35nY0YkfpHD2','sample264','ROLE_USER'),
('sampleID265','1972-05-06','2024-06-07 17:18:08.556000','sampleEmail265@naver.com','MALE','$2a$10$hFYteJiboJhsXctmJeZCMOVckCw3OPa4g4ZmMFmlCe/WBsJc0cvMG','sample265','ROLE_USER'),
('sampleID266','1977-09-15','2024-06-07 17:18:29.251000','sampleEmail266@naver.com','MALE','$2a$10$UKEdiff3CWdOpvJsEYGrZO7xeGdVTydP0/iJVV0ekze52uOK0FqZK','sample266','ROLE_USER'),
('sampleID267','1985-09-17','2024-06-07 17:18:50.665000','sampleEmail267@naver.com','MALE','$2a$10$/W6vVgww5wF7rLfQmvyGbueeIaU6epGNeFHEXss7Y3aw19SN4iXOm','sample267','ROLE_USER'),
('sampleID268','1986-06-18','2024-06-07 17:19:13.787000','sampleEmail268@naver.com','MALE','$2a$10$X7fL.eg7K1XqyLhBLXDYzuHj4hDRtJ.TiX0eVfvZYZMQCQfTST3Om','sample268','ROLE_USER'),
('sampleID269','1972-02-02','2024-06-07 17:19:29.724000','sampleEmail269@naver.com','FEMALE','$2a$10$HLzMd1pBV8HSg/6CyfgsJOEadr6aDi0xr1OroDPvDkhJQgZiuPwkO','sample269','ROLE_USER'),
('sampleID270','1964-12-11','2024-06-07 17:19:50.546000','sampleEmail270@naver.com','MALE','$2a$10$hmzeqqLMVbij6YfEX1WHSu3RpQcbWZX0CpFjyRq5kqEzaQk8sSymO','sample270','ROLE_USER'),
('sampleID271','1988-09-26','2024-06-07 17:20:08.164000','sampleEmail271@naver.com','MALE','$2a$10$H345EQtyVSU4VdN51VnPouWshyq3zxRw7gb7hu29IVL2boyit3flu','sample271','ROLE_USER'),
('sampleID272','1989-04-22','2024-06-07 17:20:28.732000','sampleEmail272@naver.com','MALE','$2a$10$zreeezKznC3Rg7p1Z8tjoOznOpGzyPlB.R.tCs1h/E8tIIKpbzbeq','sample272','ROLE_USER'),
('sampleID273','1996-02-22','2024-06-07 17:20:50.915000','sampleEmail273@naver.com','FEMALE','$2a$10$ofw7JmbBQaMt9t/i/XlSMuNPzPJdRYIFUxGkKDxzhQ.MKxGJKJf1O','sample273','ROLE_USER'),
('sampleID274','1985-09-09','2024-06-07 17:21:09.795000','sampleEmail274@naver.com','MALE','$2a$10$URDabeZmDO6.Y1Kk36GxXuPpzJOwiibJMzlgyyvQdKZhzG6WPzSI.','sample274','ROLE_USER'),
('sampleID275','1981-05-04','2024-06-07 17:21:30.093000','sampleEmail275@naver.com','MALE','$2a$10$GCnjdY7XeR9w7Yos6J5kueC95IsWJ//YFsAgXKKoLuHONXthzkDEu','sample275','ROLE_USER'),
('sampleID276','2004-11-26','2024-06-07 17:21:51.668000','sampleEmail276@naver.com','FEMALE','$2a$10$jyhlzppA/vszh2/XaXiyl.221n23US0ZRwZ2IX1IAKsMWcpHJHR5C','sample276','ROLE_USER'),
('sampleID277','1982-05-31','2024-06-07 17:22:12.787000','sampleEmail277@naver.com','MALE','$2a$10$vl0oR.ONZIUN/2u6W3VTp.ye8NXh9oWRe2Qry8C25WTzCoUG0POM6','sample277','ROLE_USER'),
('sampleID278','1988-04-19','2024-06-07 17:22:33.865000','sampleEmail278@naver.com','MALE','$2a$10$GFY0Cc/KXOM3k.zyZloqKu9sCiN2qKCZLqsqrfPG3iqS6Ux.g.dd6','sample278','ROLE_USER'),
('sampleID279','1966-10-23','2024-06-07 17:23:01.501000','sampleEmail279@naver.com','FEMALE','$2a$10$ZeJ8L5MiWcqqdOCHynjFfOiI5tSnf/7jgCgOIRDsBb3PKkSE1Ogty','sample279','ROLE_USER'),
('sampleID280','1999-07-23','2024-06-07 17:23:23.739000','sampleEmail280@naver.com','MALE','$2a$10$fJ0MHhQYQ1TngDKndVsQ2uvvGdAKTKAX7MErsJHJeLThPylc56cfW','sample280','ROLE_USER'),
('sampleID281','1977-07-02','2024-06-07 17:23:44.891000','sampleEmail281@naver.com','MALE','$2a$10$IwunnOYXuNCNPPK4m2fy4OBDddq7btYNx6rJLA6klWH88QzWNsXR.','sample281','ROLE_USER'),
('sampleID282','1990-08-20','2024-06-07 17:24:06.283000','sampleEmail282@naver.com','FEMALE','$2a$10$3W/fyFGwYa9E0qj9BqgLbe8TenE4PiWHGUS5KzUlrd8UIAL02cvLa','sample282','ROLE_USER'),
('sampleID283','1999-08-01','2024-06-07 17:24:29.729000','sampleEmail283@naver.com','MALE','$2a$10$hxneRtvbJPLbPd.41L1lxOlAJ20P2tRSvbjcQBnd4uwzxmgL4QqS.','sample283','ROLE_USER'),
('sampleID284','1982-08-25','2024-06-07 17:25:04.050000','sampleEmail284@naver.com','MALE','$2a$10$Fh/PyOoAJJfTmKP9MT6vFuhe/RqPh7i0i06Wm1Mlm9sLSd/qj6uqq','sample284','ROLE_USER'),
('sampleID285','1980-07-22','2024-06-07 17:25:24.186000','sampleEmail285@naver.com','MALE','$2a$10$UggFT7X.KUpRiIFBf5N3FOKACSpYslUMMHXL6gFqZxqqi8iGpyv62','sample285','ROLE_USER'),
('sampleID286','1992-08-19','2024-06-07 17:26:01.724000','sampleEmail286@naver.com','MALE','$2a$10$lDdGWh.S2yEBWuIatiV9PevAR3SKf3uIA2pJRmVctPMqADg9ey8Ya','sample286','ROLE_USER'),
('sampleID287','1998-07-05','2024-06-07 17:26:22.964000','sampleEmail287@naver.com','FEMALE','$2a$10$mjqwSOkpblqCDJT.nrgDM.EwF4XDAz0TA9hlqNiGgJl27N5J/oC8m','sample287','ROLE_USER'),
('sampleID288','2005-08-06','2024-06-07 17:26:43.817000','sampleEmail288@naver.com','MALE','$2a$10$uQS//IRD1hA./exd2ziFBeoBYix8qR1obwC1zEI1bGcVAeqofF6n6','sample288','ROLE_USER'),
('sampleID289','1970-08-14','2024-06-07 17:27:04.265000','sampleEmail289@naver.com','MALE','$2a$10$1aJN9WbN.ToNrGNx9M4Zj.8iLxqxXiuyed.vbentHXzgTAGm8tFnK','sample289','ROLE_USER'),
('sampleID290','1980-12-12','2024-06-07 17:27:23.747000','sampleEmail290@naver.com','FEMALE','$2a$10$PMwyWVLBBPpzWOci2IU4MOhwB7./HMOuZNK4Uxt8XAj51LbMnajSS','sample290','ROLE_USER');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'memorial'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-12 12:17:11
