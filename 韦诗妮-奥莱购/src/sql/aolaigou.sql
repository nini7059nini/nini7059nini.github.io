/*
Navicat MySQL Data Transfer

Source Server         : my 1909
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : aolaigou

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2019-10-12 21:59:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for liebiao
-- ----------------------------
DROP TABLE IF EXISTS `liebiao`;
CREATE TABLE `liebiao` (
  `﻿uid` int(11) DEFAULT NULL,
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `titlte` varchar(255) DEFAULT NULL,
  `bigpics` varchar(255) DEFAULT NULL,
  `xiaotu` varchar(255) DEFAULT NULL,
  `price1` float DEFAULT NULL,
  `price2` float DEFAULT NULL,
  `kucun` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of liebiao
-- ----------------------------
INSERT INTO `liebiao` VALUES ('1', '1', '[支持深圳自提] 拉夏贝尔女装  小香风高腰针织女连衣裙', 'http://img4.aolaigo.com//group1/M00/50/48/CggUF12RppaASir7AAXh0-SFXcg610=220x260.jpg', 'http://img4.aolaigo.com//group1/M00/50/48/CggUF12RppaASir7AAXh0-SFXcg610=220x260.jpg', '171.6', '429', '3');
INSERT INTO `liebiao` VALUES ('2', '2', '[支持自提] NEW LOOK  新品女士时尚无袖连衣裙 3837252', 'http://img1.aolaigo.com//group1/M00/2D/3E/CggUFlm48r2AEjohAALrtCx5kg8435=220x260.JPG', 'http://img1.aolaigo.com//group1/M00/2D/3E/CggUFlm48r2AEjohAALrtCx5kg8435=35x35.JPG,http://img4.aolaigo.com//group1/M00/2D/3C/CggUF1m48sOAbyb_AAbkxw_tIbY479=35x35.JPG,http://img2.aolaigo.com//group1/M00/2D/3C/CggUF1m48sOAGRxFAAX-EJwpjHk964=35x35.JPG,http:/', '169', '399', '75');
INSERT INTO `liebiao` VALUES ('3', '3', '[支持自提] NEW LOOK  女士时尚简约无袖格子连衣裙', 'http://img1.aolaigo.com//group1/M00/1F/43/CggUF1j-vBqAbY84AAgvFVWWTqI555=220x260.JPG', 'http://img1.aolaigo.com//group1/M00/1F/44/CggUFlj-vBmAbtE-AARFNneR6qA258=35x35.JPG,http://img3.aolaigo.com//group1/M00/1F/43/CggUF1j-vBqAbY84AAgvFVWWTqI555=35x35.JPG,http://img1.aolaigo.com//group1/M00/1F/44/CggUFlj-vBmAbtE-AARFNneR6qA258=35x35.JPG,http:/', '49', '349', '35');
INSERT INTO `liebiao` VALUES ('4', '4', '[支持深圳自提] LIFE·IDEA/莱芙·艾迪儿  无袖收腰背心裙', 'http://img2.aolaigo.com//group1/M00/4D/E2/CggUF10vzOKAe5ebAALNX4tYSnQ450=220x260.JPG', 'http://img3.aolaigo.com//group1/M00/4D/E2/CggUF10vzOKAe5ebAALNX4tYSnQ450=35x35.JPG,http://img4.aolaigo.com//group1/M00/4D/E3/CggUFl0vzOmAb08KAATR2A0IwYI418=35x35.JPG,http://img4.aolaigo.com//group1/M00/4D/E2/CggUF10vzOqAOOZkAATpwcFlTNg564=35x35.JPG', '650', '1299', '12');
INSERT INTO `liebiao` VALUES ('5', '5', '[支持深圳自提] 拉夏贝尔女装  秋冬季无袖短连衣裙', 'http://img4.aolaigo.com//group1/M00/50/45/CggUF12RnFyALWXaAAQzXrmu82Y653=220x260.jpg', 'http://img3.aolaigo.com//group1/M00/50/45/CggUF12RnFyAbqr4AAS-KmSxGR0238=35x35.jpg,http://img4.aolaigo.com//group1/M00/50/45/CggUF12RnFyALWXaAAQzXrmu82Y653=35x35.jpg,http://img1.aolaigo.com//group1/M00/50/46/CggUFl2RnFyAX93VAAW6bi1DC_0302=35x35.jpg', '159.6', '399', '4');
INSERT INTO `liebiao` VALUES ('6', '6', '[支持深圳自提] 拉夏贝尔女装  冬季收腰显瘦针织女款连衣裙', 'http://img5.aolaigo.com//group1/M00/50/17/CggUFl2LChOAbAjiAANAam6_hiE899=220x260.jpg', 'http://img2.aolaigo.com//group1/M00/50/17/CggUFl2LChOAbAjiAANAam6_hiE899=35x35.jpg,http://img5.aolaigo.com//group1/M00/50/16/CggUF12LChOALjjBAASr0ayq-QM980=35x35.jpg,http://img2.aolaigo.com//group1/M00/50/17/CggUFl2LChOAbAjiAANAam6_hiE899=35x35.jpg', '99.8', '499', '36');
INSERT INTO `liebiao` VALUES ('7', '7', '[支持深圳自提] Five Plus  女士连衣裙针织圆领长裙', 'http://img4.aolaigo.com//group1/M00/42/DD/CggUFluwmSOAKkQ4AArEmk4qN2c392=220x260.JPG', 'http://img1.aolaigo.com//group1/M00/42/DB/CggUF1uwmSGAJjNGAAQDo_S7-G0579=35x35.JPG,http://img1.aolaigo.com//group1/M00/42/DD/CggUFluwmSOAKkQ4AArEmk4qN2c392=35x35.JPG,http://img1.aolaigo.com//group1/M00/42/DD/CggUFluwmSOAMS4RAAnkfRphNUk837=35x35.JPG,http:/', '299', '899', '33');
INSERT INTO `liebiao` VALUES ('8', '8', '[支持深圳自提] 丽莫  女士针织连衣裙无袖中长裙', 'http://img5.aolaigo.com//group1/M00/4F/C1/CggUFl18e5CABbR8AAI1iB3I2ck836=220x260.JPG', 'http://img3.aolaigo.com//group1/M00/4F/C1/CggUFl18e5CABbR8AAI1iB3I2ck836=35x35.JPG,http://img1.aolaigo.com//group1/M00/4F/C1/CggUFl18e5SAGcGtAAXVOQfMI_A142=35x35.JPG', '366.3', '1465', '1');
INSERT INTO `liebiao` VALUES ('9', '9', '[支持深圳自提] 拉夏贝尔女装  系带宽松泡泡袖毛织女连衣裙', 'http://img3.aolaigo.com//group1/M00/50/18/CggUFl2LDgKATTqLAATDviDgXS4995=220x260.jpg', 'http://img4.aolaigo.com//group1/M00/50/18/CggUFl2LDgKATTqLAATDviDgXS4995=35x35.jpg,http://img4.aolaigo.com//group1/M00/50/17/CggUF12LDgGAezukAAQQwaRnY6g859=35x35.jpg', '100', '499', '2');
INSERT INTO `liebiao` VALUES ('10', '10', '[支持自提] NEW LOOK  秋冬时尚修身露肩性感针织连衣裙', 'http://img5.aolaigo.com//group1/M00/44/BF/CggUFlvaYraARVcNAADYhs0AjOI265=220x260.jpg', 'http://img5.aolaigo.com//group1/M00/44/BF/CggUFlvaYraARVcNAADYhs0AjOI265=35x35.jpg,http://img5.aolaigo.com//group1/M00/2C/9D/CggUF1mtBheAQmJPAAOcJ-UND5U928=35x35.jpg,http://img1.aolaigo.com//group1/M00/2C/9F/CggUFlmtBheAezWoAASjX9Rw0Ro894=35x35.jpg', '129', '399', '95');
INSERT INTO `liebiao` VALUES ('11', '11', '[支持深圳自提] 丽莫  女士针织连衣裙无袖中长裙', 'http://img1.aolaigo.com//group1/M00/4F/C0/CggUF118e9-ACZhkAAHFHDmKHoU500=220x260.JPG', 'http://img5.aolaigo.com//group1/M00/4F/C0/CggUF118e9-ACZhkAAHFHDmKHoU500=35x35.JPG,http://img3.aolaigo.com//group1/M00/4F/C0/CggUF118e9-AKCrJAAGTru2njes805=35x35.JPG,http://img4.aolaigo.com//group1/M00/4F/C0/CggUF118e-OAJhkSAAad8EMIlos912=35x35.JPG', '698.8', '2795', '45');
INSERT INTO `liebiao` VALUES ('12', '12', '[支持深圳自提] LIFE·IDEA/莱芙·艾迪儿  女士新品针织两件套连衣裙', 'http://img5.aolaigo.com//group1/M00/36/57/CggUFlppMdWAfucXAAMEc3bNh5M774=220x260.JPG', 'http://img4.aolaigo.com//group1/M00/36/57/CggUFlppMdWAfucXAAMEc3bNh5M774=35x35.JPG,http://img2.aolaigo.com//group1/M00/36/56/CggUF1ppMdWAdtIVAANAYdTGMVs449=35x35.JPG,http://img1.aolaigo.com//group1/M00/36/56/CggUF1ppMdWALoZkAALHleyAFME136=35x35.JPG', '570', '1899', '34');
INSERT INTO `liebiao` VALUES ('13', '13', '[支持深圳自提] 播  新款H型简约高开叉圆领中长款雪纺连衣裙', 'http://img1.aolaigo.com//group1/M00/41/FD/CggUF1upw3-AZYwsAAWIMa_N3NY304=220x260.png', 'http://img2.aolaigo.com//group1/M00/41/FE/CggUFlupw3-Ae10zAAOWXRWPx3s574=35x35.jpg,http://img4.aolaigo.com//group1/M00/41/FD/CggUF1upw3-APIs6AAOMervS0DU540=35x35.jpg,http://img4.aolaigo.com//group1/M00/41/FD/CggUF1upw3-AZYwsAAWIMa_N3NY304=35x35.png,http:/', '690', '1380', '6');
INSERT INTO `liebiao` VALUES ('14', '14', '[支持深圳自提] DILI迪骊  女士复古蕾丝长袖连衣裙', 'http://img5.aolaigo.com//group1/M00/50/4A/CggUF12RqIGAID7WAAVL-CUazsc252=220x260.JPG', 'http://img1.aolaigo.com//group1/M00/50/4A/CggUF12RqIGAID7WAAVL-CUazsc252=35x35.JPG,http://img2.aolaigo.com//group1/M00/50/4A/CggUF12RqIOAPifhAAwB00UdX9Y641=35x35.JPG,http://img1.aolaigo.com//group1/M00/50/4A/CggUF12RqIGAID7WAAVL-CUazsc252=35x35.JPG,http:/', '640', '1280', '8');
INSERT INTO `liebiao` VALUES ('15', '15', '[支持深圳自提] Distin Kidny 迪斯廷·凯  女士时尚连衣裙两件套', 'http://img1.aolaigo.com//group1/M00/32/09/CggUF1oGsIGAbc4EAAEsR_DSGbM993=220x260.JPG', 'http://img3.aolaigo.com//group1/M00/32/09/CggUF1oGsIGAbc4EAAEsR_DSGbM993=35x35.JPG,http://img2.aolaigo.com//group1/M00/32/0A/CggUFloGsIiAfWzIAALn_YSWh70975=35x35.JPG,http://img5.aolaigo.com//group1/M00/32/09/CggUF1oGsImAZ1PFAAI0-54hqeo682=35x35.JPG', '166', '969', '42');
INSERT INTO `liebiao` VALUES ('16', '16', '[支持深圳自提] LAGOGO  雪纺碎花连衣裙', 'http://img5.aolaigo.com//group1/M00/45/1B/CggUFlvf9emAWvQ2AARmnS_aEMs500=220x260.JPG', 'http://img3.aolaigo.com//group1/M00/45/1B/CggUFlvf9emAWvQ2AARmnS_aEMs500=35x35.JPG,http://img1.aolaigo.com//group1/M00/45/19/CggUF1vf9e6AdcMAAAiBS7-Fvho500=35x35.JPG,http://img3.aolaigo.com//group1/M00/45/1B/CggUFlvf9emAWvQ2AARmnS_aEMs500=35x35.JPG,http:/', '207', '459', '68');
INSERT INTO `liebiao` VALUES ('17', '17', '[支持深圳自提] Five Plus  荷叶边雪纺连衣裙短袖高腰拼接气质短裙', 'http://img4.aolaigo.com//group1/M00/42/06/CggUFlup0JuAUlW6AAKm90HHwp8374=220x260.jpg', 'http://img3.aolaigo.com//group1/M00/42/06/CggUFlup0JuAUlW6AAKm90HHwp8374=35x35.jpg,http://img3.aolaigo.com//group1/M00/42/06/CggUFlup0JuAU2ueAAKMt1WynYE304=35x35.jpg,http://img2.aolaigo.com//group1/M00/42/04/CggUF1up0JyAf7Z4AALD2Lugcqc721=35x35.jpg', '199', '799', '33');
INSERT INTO `liebiao` VALUES ('18', '18', '[支持深圳自提] LIFE·IDEA/莱芙·艾迪儿  夏季新品短袖圆领中长刺绣雪纺连衣裙', 'http://img5.aolaigo.com//group1/M00/4C/BA/CggUFl0MRM6AZ4JnAACPk_GfI9k004=220x260.jpg', 'http://img5.aolaigo.com//group1/M00/4C/BA/CggUFl0MRM6AZ4JnAACPk_GfI9k004=35x35.jpg,http://img2.aolaigo.com//group1/M00/4C/B8/CggUF10MRM6AMVR-AAKnOc5GQE4337=35x35.jpg,http://img1.aolaigo.com//group1/M00/4C/BA/CggUFl0MRM6AbmKpAALVGnFvwBQ266=35x35.jpg,http:/', '700', '1399', '58');
INSERT INTO `liebiao` VALUES ('19', '19', '[支持深圳自提] 朵以  圆领不规则碎花连衣裙', 'http://img1.aolaigo.com/group1/M00/44/2C/CggUFlvP7uOAcZ99AAGtOjbRnF4750=220x260.jpg', 'http://img1.aolaigo.com/group1/M00/44/2C/CggUFlvP7uOAcZ99AAGtOjbRnF4750=35x35.jpg,http://img1.aolaigo.com/group1/M00/44/2B/CggUF1vP7waAaiovAAH7TwvZG0c687=35x35.jpg,http://img1.aolaigo.com/group1/M00/44/2B/CggUF1vP7yaAXsA3AAKL6PJtWpM413=35x35.jpg', '144', '379', '97');

-- ----------------------------
-- Table structure for list1
-- ----------------------------
DROP TABLE IF EXISTS `list1`;
CREATE TABLE `list1` (
  `﻿uid` int(11) DEFAULT NULL,
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `titlte` varchar(255) DEFAULT NULL,
  `bigpics` varchar(255) DEFAULT NULL,
  `xiaotu` varchar(255) DEFAULT NULL,
  `price1` float DEFAULT NULL,
  `price2` float DEFAULT NULL,
  `kucun` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list1
-- ----------------------------
INSERT INTO `list1` VALUES ('2', '2', '[支持深圳自提] 拉夏贝尔女装  小香风高腰针织女连衣裙', 'http://img4.aolaigo.com//group1/M00/50/48/CggUF12RppaASir7AAXh0-SFXcg610=220x260.jpg', 'http://img4.aolaigo.com//group1/M00/50/48/CggUF12RppaASir7AAXh0-SFXcg610=220x260.jpg', '171.6', '429', '3');
INSERT INTO `list1` VALUES ('3', '3', '[支持自提] NEW LOOK  新品女士时尚无袖连衣裙 3837252', 'http://img1.aolaigo.com//group1/M00/2D/3E/CggUFlm48r2AEjohAALrtCx5kg8435=220x260.JPG', 'http://img1.aolaigo.com//group1/M00/2D/3E/CggUFlm48r2AEjohAALrtCx5kg8435=35x35.JPG,http://img4.aolaigo.com//group1/M00/2D/3C/CggUF1m48sOAbyb_AAbkxw_tIbY479=35x35.JPG,http://img2.aolaigo.com//group1/M00/2D/3C/CggUF1m48sOAGRxFAAX-EJwpjHk964=35x35.JPG,http:/', '169', '399', '75');
INSERT INTO `list1` VALUES ('4', '4', '[支持自提] NEW LOOK  女士时尚简约无袖格子连衣裙', 'http://img1.aolaigo.com//group1/M00/1F/43/CggUF1j-vBqAbY84AAgvFVWWTqI555=220x260.JPG', 'http://img1.aolaigo.com//group1/M00/1F/44/CggUFlj-vBmAbtE-AARFNneR6qA258=35x35.JPG,http://img3.aolaigo.com//group1/M00/1F/43/CggUF1j-vBqAbY84AAgvFVWWTqI555=35x35.JPG,http://img1.aolaigo.com//group1/M00/1F/44/CggUFlj-vBmAbtE-AARFNneR6qA258=35x35.JPG,http:/', '49', '349', '35');
INSERT INTO `list1` VALUES ('5', '5', '[支持深圳自提] LIFE·IDEA/莱芙·艾迪儿  无袖收腰背心裙', 'http://img2.aolaigo.com//group1/M00/4D/E2/CggUF10vzOKAe5ebAALNX4tYSnQ450=220x260.JPG', 'http://img3.aolaigo.com//group1/M00/4D/E2/CggUF10vzOKAe5ebAALNX4tYSnQ450=35x35.JPG,http://img4.aolaigo.com//group1/M00/4D/E3/CggUFl0vzOmAb08KAATR2A0IwYI418=35x35.JPG,http://img4.aolaigo.com//group1/M00/4D/E2/CggUF10vzOqAOOZkAATpwcFlTNg564=35x35.JPG', '650', '1299', '12');
INSERT INTO `list1` VALUES ('6', '6', '[支持深圳自提] 拉夏贝尔女装  秋冬季无袖短连衣裙', 'http://img4.aolaigo.com//group1/M00/50/45/CggUF12RnFyALWXaAAQzXrmu82Y653=220x260.jpg', 'http://img3.aolaigo.com//group1/M00/50/45/CggUF12RnFyAbqr4AAS-KmSxGR0238=35x35.jpg,http://img4.aolaigo.com//group1/M00/50/45/CggUF12RnFyALWXaAAQzXrmu82Y653=35x35.jpg,http://img1.aolaigo.com//group1/M00/50/46/CggUFl2RnFyAX93VAAW6bi1DC_0302=35x35.jpg', '159.6', '399', '4');

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `﻿id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `list` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`﻿id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES ('1', '时尚女装', '连衣裙&外套&衬衫', '../img/list-1.jpg');
INSERT INTO `menu` VALUES ('2', '品质男装', '衬衫&T恤&裤装', '../img/list-2.jpg');
INSERT INTO `menu` VALUES ('3', '运动户外', '男运动服&女运动服', '../img/list-8.jpg');
INSERT INTO `menu` VALUES ('4', '童装童鞋', '男童装&女童装', '../img/list-3.jpg');
INSERT INTO `menu` VALUES ('5', '内衣/袜子', '文胸&内裤&睡衣', '../img/list-4.jpg');
INSERT INTO `menu` VALUES ('6', '精品箱包', '女包&男包&拉杠箱', '../img/list-5.jpg');
INSERT INTO `menu` VALUES ('7', '品质鞋靴', '女单鞋&男鞋', '../img/list-6.jpg');
INSERT INTO `menu` VALUES ('8', '家居家纺', '套件&被芯&被毯', '../img/list-7.jpg');

-- ----------------------------
-- Table structure for menu1
-- ----------------------------
DROP TABLE IF EXISTS `menu1`;
CREATE TABLE `menu1` (
  `﻿uid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `list` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`﻿uid`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menu1
-- ----------------------------
INSERT INTO `menu1` VALUES ('1', '1', '时尚女装', '连衣裙&外套&衬衫', 'img/list-1.jpg');
INSERT INTO `menu1` VALUES ('2', '2', '品质男装', '衬衫&T恤&裤装', 'img/list-2.jpg');
INSERT INTO `menu1` VALUES ('3', '3', '运动户外', '男运动服&女运动服', 'img/list-3.jpg');
INSERT INTO `menu1` VALUES ('4', '4', '童装童鞋', '男童装&女童装', 'img/list-4.jpg');
INSERT INTO `menu1` VALUES ('5', '5', '内衣/袜子', '文胸&内裤&睡衣', 'img/list-5.jpg');
INSERT INTO `menu1` VALUES ('6', '6', '精品箱包', '女包&男包&拉杠箱', 'img/list-6.jpg');
INSERT INTO `menu1` VALUES ('7', '7', '品质鞋靴', '女单鞋&男鞋', 'img/list-7.jpg');
INSERT INTO `menu1` VALUES ('8', '8', '家居家纺', '套件&被芯&被毯', 'img/list-8.jpg');

-- ----------------------------
-- Table structure for pinpaiimg
-- ----------------------------
DROP TABLE IF EXISTS `pinpaiimg`;
CREATE TABLE `pinpaiimg` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pinpaiimg
-- ----------------------------
INSERT INTO `pinpaiimg` VALUES ('1', '../img/list1.jpg');
INSERT INTO `pinpaiimg` VALUES ('2', '../img/list2.jpg');
INSERT INTO `pinpaiimg` VALUES ('3', '../img/list3.jpg');
INSERT INTO `pinpaiimg` VALUES ('4', '../img/list4.jpg');
INSERT INTO `pinpaiimg` VALUES ('5', '../img/list5.jpg');
INSERT INTO `pinpaiimg` VALUES ('6', '../img/list6.jpg');
INSERT INTO `pinpaiimg` VALUES ('7', '../img/list7.jpg');
INSERT INTO `pinpaiimg` VALUES ('8', '../img/list8.jpg');
INSERT INTO `pinpaiimg` VALUES ('9', '../img/list9.jpg');
INSERT INTO `pinpaiimg` VALUES ('10', '../img/list10.jpg');
INSERT INTO `pinpaiimg` VALUES ('11', '../img/list11.jpg');
INSERT INTO `pinpaiimg` VALUES ('12', '../img/list12.jpg');
INSERT INTO `pinpaiimg` VALUES ('13', '../img/list13.jpg');
INSERT INTO `pinpaiimg` VALUES ('14', '../img/list14.jpg');
INSERT INTO `pinpaiimg` VALUES ('15', '../img/list15.jpg');
INSERT INTO `pinpaiimg` VALUES ('16', '../img/list16.jpg');

-- ----------------------------
-- Table structure for pinpaiimg1
-- ----------------------------
DROP TABLE IF EXISTS `pinpaiimg1`;
CREATE TABLE `pinpaiimg1` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pinpaiimg1
-- ----------------------------
INSERT INTO `pinpaiimg1` VALUES ('1', 'img/list1.jpg');
INSERT INTO `pinpaiimg1` VALUES ('2', 'img/list2.jpg');
INSERT INTO `pinpaiimg1` VALUES ('3', 'img/list3.jpg');
INSERT INTO `pinpaiimg1` VALUES ('4', 'img/list4.jpg');
INSERT INTO `pinpaiimg1` VALUES ('5', 'img/list5.jpg');
INSERT INTO `pinpaiimg1` VALUES ('6', 'img/list6.jpg');
INSERT INTO `pinpaiimg1` VALUES ('7', 'img/list7.jpg');
INSERT INTO `pinpaiimg1` VALUES ('8', 'img/list8.jpg');
INSERT INTO `pinpaiimg1` VALUES ('9', 'img/list9.jpg');
INSERT INTO `pinpaiimg1` VALUES ('10', 'img/list10.jpg');
INSERT INTO `pinpaiimg1` VALUES ('11', 'img/list11.jpg');
INSERT INTO `pinpaiimg1` VALUES ('12', 'img/list12.jpg');
INSERT INTO `pinpaiimg1` VALUES ('13', 'img/list13.jpg');
INSERT INTO `pinpaiimg1` VALUES ('14', 'img/list14.jpg');
INSERT INTO `pinpaiimg1` VALUES ('15', 'img/list15.jpg');
INSERT INTO `pinpaiimg1` VALUES ('16', 'img/list16.jpg');

-- ----------------------------
-- Table structure for userinf
-- ----------------------------
DROP TABLE IF EXISTS `userinf`;
CREATE TABLE `userinf` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `psw` varchar(255) DEFAULT NULL,
  `regtime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `shuju` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinf
-- ----------------------------
INSERT INTO `userinf` VALUES ('1', 'nini123', 'a12345', '2019-10-12 08:35:07', '[1,3]&[11,3]&[15,3]');
INSERT INTO `userinf` VALUES ('20', 'nini0101', 'asdasd', '2019-10-12 01:33:46', '');
INSERT INTO `userinf` VALUES ('5', 'nini11', 'a123456', '2019-10-12 08:54:57', '[5,3]&[6,3]');
INSERT INTO `userinf` VALUES ('21', 'aa111', 'asdasd', '2019-10-12 20:49:37', '');
INSERT INTO `userinf` VALUES ('23', 'nini12345', 'a12345', '2019-10-12 21:08:55', '');
INSERT INTO `userinf` VALUES ('19', 'ni999', 'asdasd', '2019-10-12 01:31:12', '');
INSERT INTO `userinf` VALUES ('18', 'asdasd', 'asdasd', '2019-10-12 01:29:11', '');
SET FOREIGN_KEY_CHECKS=1;
