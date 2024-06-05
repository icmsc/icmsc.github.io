-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 05/06/2024 às 17:33
-- Versão do servidor: 10.11.7-MariaDB-cll-lve
-- Versão do PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `u339306245_icmscdb`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `oracao`
--

CREATE TABLE `oracao` (
  `id` int(5) NOT NULL,
  `codigo` varchar(50) NOT NULL,
  `horario` varchar(20) NOT NULL,
  `nome` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Despejando dados para a tabela `oracao`
--

INSERT INTO `oracao` (`id`, `codigo`, `horario`, `nome`) VALUES
(1, '31877bc39be4e3dd55feb782ad6d3923', '00:00 às 00:15', ''),
(2, '4e8e754055be8b2627411edfbaaf7a66', '00:15 às 00:30', ''),
(3, '551f26240478e623df062ef7b3347c7a', '00:30 às 00:45', ''),
(4, '8db7cfb4893d5b68349f41600b8098f9', '00:45 às 01:00', ''),
(5, 'f63cf61183c2a3936f90b596346f8196', '01:00 às 01:15', ''),
(6, '43a2804256d85a9133810998649a2fd3', '01:15 às 01:30', ''),
(7, 'ef5d17ac73e15b808abaf9a52d916047', '01:30 às 01:45', ''),
(8, '52228a5e0b12898426b8a75026bfc924', '01:45 às 02:00', ''),
(9, '212553f64a8f30a0d0f7b9343854c24b', '02:00 às 02:15', ''),
(10, 'cace1ec12c21ebfbd5f2e52f0abad198', '02:15 às 02:30', ''),
(11, '0ae8a4baf2bdc4ce4328d53b33542e76', '02:30 às 02:45', ''),
(12, '039756b0cf922a0e02dcdd1ab8a568ee', '02:45 às 03:00', ''),
(13, '5fd4dca412be72bb4e10bc29f8f674bc', '03:00 às 03:15', ''),
(14, 'b9e49da431d8fed7b313412183b54fd4', '03:15 às 03:30', ''),
(15, 'c298907c13a3cd146b79a6a9e66083c2', '03:30 às 03:45', ''),
(16, '3d8adb37fd146e0217dd0343e3eecd8d', '03:45 às 04:00', ''),
(17, 'a991ce4b2890d6e6f638a50e8c7b906e', '04:00 às 04:15', ''),
(18, '06967e4c9ff813b37527b863f88b24ac', '04:15 às 04:30', ''),
(19, '5cbd9fbd0b0a2b342622347d4dd2f2a8', '04:30 às 04:45', ''),
(20, 'f3f92cee855dac3da6071ff1d8531162', '05:45 às 04:00', ''),
(21, '4f3dc2428fb2ed173e0b717c9d9b0587', '05:00 às 05:15', ''),
(22, 'e3aafead5e1d204f752ba2fe48b8b344', '05:15 às 05:30', ''),
(23, 'aa19ffa4505079ce0caef481c7559c05', '05:30 às 05:45', ''),
(24, 'e4036d2d628134a6f8ea6637bf5b7bb1', '05:45 às 06:00', ''),
(25, '8446fd5e1ed7f0742806035a1c58b604', '06:00 às 06:15', ''),
(26, 'efb54a9940e682140097c778c9a55b01', '06:15 às 06:30', ''),
(27, '058dbdd42191de4452b77ed2681c8efa', '06:30 às 06:45', ''),
(28, '298b73cc02a73dfcf5599ec78707170c', '06:45 às 07:00', ''),
(29, 'b310369e5273a05f8f321a5e00dd44b0', '07:00 às 07:15', ''),
(30, '9efe06bc6ecebf1d5e1dabc1501abdd6', '07:15 às 07:30', ''),
(31, '0ec02e152cd656cafb01d5b608186419', '07:30 às 07:45', ''),
(32, '27a1b8128bad14c7a7814d18d45824a9', '07:45 às 08:00', ''),
(33, 'e442cb6865b3f456dc7f36b134c1e70e', '08:00 às 08:15', ''),
(34, '6d49856c42f0246d0e4267e50f263844', '08:15 às 08:30', ''),
(35, 'e9787984ac9b59bc029c5d8c6afc2697', '08:30 às 08:45', ''),
(36, '80507dc47d5fe04aac729fb55741d04d', '08:45 às 09:00', ''),
(37, '0604b25ca4c3abb8f81d99b4d398b426', '09:00 às 09:15', ''),
(38, '55137559f8765923d7e4240f3696fcb8', '09:15 às 09:30', ''),
(39, '2512cacf236fbdffd01b1970f7616ff1', '09:30 às 09:45', ''),
(40, '17d606e39a5fe73fd139ba889db7b22f', '09:45 às 10:00', ''),
(41, 'f2f39a082584a5869e66daad0dd03814', '10:00 às 10:15', ''),
(42, 'f036784e5ef5a2c6c3ff92e80022d4ee', '10:15 às 10:30', ''),
(43, '6e12b64f62456a76e61d5d48d39993c3', '10:30 às 10:45', ''),
(44, '782a886510e55cb10dbd2ecff6b41422', '10:45 às 11:00', ''),
(45, 'd046e3cb036a01b3b384ef2f64d7d202', '11:00 às 11:15', ''),
(46, '1b923a7c48b5d0c9d070b818f61b56b8', '11:15 às 11:30', ''),
(47, '12bf207f05dac4d273c037b8d41fa4e4', '11:30 às 11:45', ''),
(48, 'f1a7266140ab6bc665330d51d630e899', '11:45 às 12:00', ''),
(49, 'cb3a8667c5e91cc070b801255760efbd', '12:00 às 12:15', ''),
(50, 'd611b80c22d65367f77e7ad055808a5f', '12:15 às 12:30', ''),
(51, '25b4c745c2a8e5d654be9a37a2bb9622', '12:30 às 12:45', ''),
(52, '2bb675204d63dcd990075e45a72ccff2', '12:45 às 13:00', ''),
(53, '6c56a641d0f7be92f6d3314007d5dcd3', '13:00 às 13:15', ''),
(54, '074884747d029e2f6da554346c54b7d2', '13:15 às 13:30', ''),
(55, '19e5f0a23c39c64244197afbe2fe4449', '13:30 às 13:45', ''),
(56, 'f2836aff56cab44af223c96b19a6683f', '13:45 às 14:00', ''),
(57, '866ad301fd5136f86e471eebe710ca90', '14:00 às 14:15', ''),
(58, '07938ab33d26cc4c5b551415148e1557', '14:15 às 14:30', ''),
(59, '45270672c6696e48eb16815312169192', '14:30 às 14:45', ''),
(60, '93bf637aaff4bad02b4c5772ef99a291', '14:45 às 15:00', ''),
(61, '702e4a97d6f7b87e9e96c7d50d07f963', '15:00 às 15:15', ''),
(62, '30afc2cde73e08a6873b32ab9844a712', '15:15 às 15:30', ''),
(63, '54ac152f4c8613c9b4df3012b111772a', '15:30 às 15:45', ''),
(64, 'ff6ea3c54ee0107945f655ce9b9eef70', '15:45 às 16:00', ''),
(65, '4b74aad2a8cb6abe8196e56948e4cb9c', '16:00 às 16:15', ''),
(66, 'a6a0cefd9cbf93aca6c5d27b65be011e', '16:15 às 16:30', ''),
(67, '5e7788d0ade63d28924ebf668434714f', '16:30 às 16:45', ''),
(68, 'a269b6c990e364a3d65f8c5b7ac7225e', '16:45 às 17:00', ''),
(69, '9023e05aed557934e5934949201ae601', '17:00 às 17:15', ''),
(70, '0b7e182c1688426a4edfdb3e5c95701b', '17:15 às 17:30', ''),
(71, 'e09a930c00b393e62b1ca8fa8372bada', '17:30 às 17:45', ''),
(72, 'b3dc1e78a983ce3a0b422d52af507800', '17:45 às 18:00', ''),
(73, 'fd1953f2349f0dbdf654fd1061c68efc', '18:00 às 18:15', ''),
(74, 'a4a09bdfb115f98ba508d76382d76a0f', '18:15 às 18:30', ''),
(75, 'd1f72a11093059910299c477e4a82f43', '18:30 às 18:45', ''),
(76, 'f895ea0f4f0e75db5be87d426ccbd8e7', '18:45 às 19:00', ''),
(77, '5468070c95eedc012cb11bb7988ac3bd', '19:00 às 19:15', ''),
(78, '14427e98f81b54e99f9070f9feed770b', '19:15 às 19:30', ''),
(79, 'c7142ecbf3b9fd2ab55fdce25ff9b7e6', '19:30 às 19:45', ''),
(80, '04be9ef92a718d5b28222b5e6ad69e8f', '19:45 às 20:00', ''),
(81, '5b1b808a30d15a161e0097a5c6d4eee3', '20:00 às 20:15', ''),
(82, 'a5b5031915d9cf35a5ed15e5a5e3da70', '20:15 às 20:30', ''),
(83, 'c9842899c651b3b4ebbca5d887830c69', '20:30 às 20:45', ''),
(84, 'd7fb777e71b39d4ea5ddb98dfdd67775', '20:45 às 21:00', ''),
(85, '5452d9a5f128e20ecc097e1041166683', '21:00 às 21:15', ''),
(86, 'a858d9d422941ea0be923b3087692b3f', '21:15 às 21:30', ''),
(87, 'cdafaa29726be860447cebe42df7da13', '21:30 às 21:45', ''),
(88, '4f426ecd7f20d4702d55a6c9593b78ed', '21:45 às 22:00', ''),
(89, '8b2348ee260177f1a3cdf18cbfa9a19b', '22:00 às 22:15', ''),
(90, '4882a5e08901fbe6e682c73a1dce3f67', '22:15 às 22:30', ''),
(91, '06824f0f79799e53674b229dcc9b1e1e', '22:30 às 22:45', ''),
(92, '3a74c859fc250fcc16cc603d90d55585', '22:45 às 23:00', ''),
(93, 'f2e75e2aadd0969b7a94bad7c017fde3', '23:00 às 23:15', ''),
(94, '053b62b93fac0714fada5b94722fc414', '23:15 às 23:30', ''),
(95, '22a6ad86b2f6d42ab1de46c3408d53b3', '23:30 às 23:45', ''),
(96, '56f546c23df1a4f8019a7a77993fcc1c', '23:45 às 00:00', '');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `oracao`
--
ALTER TABLE `oracao`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `oracao`
--
ALTER TABLE `oracao`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
