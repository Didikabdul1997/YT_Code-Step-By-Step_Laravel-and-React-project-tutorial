/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MariaDB
 Source Server Version : 100334
 Source Host           : localhost:3306
 Source Schema         : ecomm

 Target Server Type    : MariaDB
 Target Server Version : 100334
 File Encoding         : 65001

 Date: 18/03/2022 13:11:02
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `file_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `price` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (1, 'Produk 1', 'products/JEToNOyVfiAy2ct8lMeS2aFRyMEcXdOFkR3JeyJJ.png', 'dess', '212', '2022-03-17 08:17:30', '2022-03-17 08:17:30');
INSERT INTO `products` VALUES (7, 'Produk 2', 'products/jS1ltdbAF1ufutD2xZ67l0CbZd8758rVPLbYNz9L.jpg', 'deskripsi 2', '45000', '2022-03-18 02:17:58', '2022-03-18 02:17:58');
INSERT INTO `products` VALUES (8, 'Produk 3', 'products/qWnjsWPSRv9DLUN8HssW7uISE77DuCMqpjaTFT1C.png', 'des', '12000', '2022-03-18 03:19:30', '2022-03-18 03:19:30');
INSERT INTO `products` VALUES (9, 'Andromax', 'products/K8OWR3PUCf12R0NYxBH3Yuu0kCVWoFOxM0RxEWWk.jpg', 'deskripsi', '12000', '2022-03-18 06:09:19', '2022-03-18 06:09:19');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'didik mukmin', 'didik@mail.com', '$2y$10$zgyFOUgLgKBfl7AyXj0rGOAS9fxBlGSBPW9ZB7vEAUDmJzkkdCicq');

SET FOREIGN_KEY_CHECKS = 1;
