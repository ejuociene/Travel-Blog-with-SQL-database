-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 08, 2022 at 06:06 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `postId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `comment`, `postId`, `createdAt`, `updatedAt`, `userId`) VALUES
(15, 'Loved this post! Keep on going!', 86, '2022-09-07 10:32:35', '2022-09-07 10:32:35', 19),
(16, 'Awesome story!', 86, '2022-09-07 10:34:25', '2022-09-07 10:34:25', 4),
(34, 'I agree, Scotland is THE best hiking destination!', 74, '2022-09-07 12:20:24', '2022-09-07 12:20:24', 3),
(36, 'I love sea, the best place for vacation.', 71, '2022-09-08 15:54:07', '2022-09-08 15:54:07', 3);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `comment_count` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `content`, `image`, `createdAt`, `updatedAt`, `category`, `comment_count`) VALUES
(19, 'Stay awake', 'Magnis dis parturient montes nascetur ridiculus mus. Egestas erat imperdiet sed euismod nisi porta. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Iaculis eu non diam phasellus vestibulum lorem. Massa eget egestas purus viverra accumsan. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Lacinia quis vel eros donec ac odio tempor orci. Est ultricies integer quis auctor. Porttitor eget dolor morbi non.\r\n\r\nSed id semper risus in hendrerit gravida. Cras tincidunt lobortis feugiat vivamus at augue eget. Eu turpis egestas pretium aenean pharetra magna ac placerat. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Quis auctor elit sed vulputate mi sit amet mauris. Blandit libero volutpat sed cras ornare. Viverra aliquet eget sit amet tellus cras adipiscing enim. Nunc faucibus a pellentesque sit amet porttitor. Sagittis eu volutpat odio facilisis mauris. Netus et malesuada fames ac turpis egestas sed tempus. Leo duis ut diam quam nulla porttitor massa id. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit.\r\n\r\nVitae et leo duis ut. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. A arcu cursus vitae congue mauris rhoncus. Pharetra vel turpis nunc eget. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Aliquam id diam maecenas ultricies mi. Malesuada fames ac turpis egestas integer. Sagittis vitae et leo duis ut diam quam. Varius morbi enim nunc faucibus a. Nec ullamcorper sit amet risus nullam. Consectetur adipiscing elit duis tristique. Blandit massa enim nec dui nunc mattis enim ut tellus. Duis at consectetur lorem donec massa sapien faucibus. Metus vulputate eu scelerisque felis imperdiet proin. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Ridiculus mus mauris vitae ultricies leo integer malesuada. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit.\r\n\r\nOdio aenean sed adipiscing diam donec. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Condimentum mattis pellentesque id nibh. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Arcu non sodales neque sodales ut etiam sit. Lorem donec massa sapien faucibus et molestie ac feugiat. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Tempor commodo ullamcorper a lacus. Nibh tellus molestie nunc non blandit massa enim.\r\n\r\nPhasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Dignissim diam quis enim lobortis scelerisque. Pretium lectus quam id leo in. Interdum posuere lorem ipsum dolor sit amet. Aenean sed adipiscing diam donec. Libero enim sed faucibus turpis in eu. Elit pellentesque habitant morbi tristique. Risus quis varius quam quisque id diam vel quam elementum. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Et pharetra pharetra massa massa. Nisi est sit amet facilisis magna etiam tempor orci eu. Sit amet consectetur adipiscing elit pellentesque habitant morbi.', '/uploads/1661944713767-976857465.jpg', '2022-08-19 06:56:00', '2022-09-06 06:26:38', 'Sport', 0),
(71, 'Vitamin Sea', 'Neque aliquam vestibulum morbi blandit cursus risus. Nulla porttitor massa id neque aliquam. Cursus mattis molestie a iaculis at erat pellentesque. Pretium viverra suspendisse potenti nullam ac. Id interdum velit laoreet id. Nunc faucibus a pellentesque sit. Dolor sit amet consectetur adipiscing elit duis tristique. Scelerisque in dictum non consectetur a erat. Tortor pretium viverra suspendisse potenti nullam ac tortor.\r\n\r\nConvallis a cras semper auctor neque vitae. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. In cursus turpis massa tincidunt. Tempor commodo ullamcorper a lacus. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Aenean et tortor at risus. Amet purus gravida quis blandit turpis. Sem et tortor consequat id porta nibh venenatis cras sed. Blandit turpis cursus in hac habitasse platea. Malesuada fames ac turpis egestas. Orci nulla pellentesque dignissim enim sit. Neque volutpat ac tincidunt vitae semper. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Enim diam vulputate ut pharetra sit amet. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Eu ultrices vitae auctor eu augue ut lectus arcu. Faucibus turpis in eu mi bibendum neque egestas. Tellus rutrum tellus pellentesque eu tincidunt. Praesent elementum facilisis leo vel fringilla. Amet justo donec enim diam vulputate ut pharetra sit.\r\n\r\nVenenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Vel quam elementum pulvinar etiam non. Egestas dui id ornare arcu odio ut sem nulla pharetra. In hac habitasse platea dictumst quisque sagittis. Nunc consequat interdum varius sit amet. Sed turpis tincidunt id aliquet risus feugiat in ante. Suscipit tellus mauris a diam maecenas sed enim ut sem. Et odio pellentesque diam volutpat commodo sed egestas egestas. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Nisl tincidunt eget nullam non nisi. Turpis egestas maecenas pharetra convallis posuere morbi leo. Nisl pretium fusce id velit. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Lectus mauris ultrices eros in cursus turpis massa. Morbi tristique senectus et netus. Libero id faucibus nisl tincidunt eget.\r\n\r\nNibh sit amet commodo nulla facilisi nullam. Lectus sit amet est placerat in egestas. Nibh sit amet commodo nulla facilisi nullam. Augue ut lectus arcu bibendum at varius vel pharetra vel. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Consectetur purus ut faucibus pulvinar elementum integer. Pellentesque habitant morbi tristique senectus et netus et. At tellus at urna condimentum. Scelerisque viverra mauris in aliquam. Non curabitur gravida arcu ac tortor dignissim. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Et pharetra pharetra massa massa. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Magna etiam tempor orci eu lobortis elementum nibh tellus. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Faucibus purus in massa tempor nec.\r\n\r\nId aliquet risus feugiat in. Porttitor leo a diam sollicitudin. Viverra justo nec ultrices dui sapien eget mi. Tempor nec feugiat nisl pretium. Quis varius quam quisque id diam vel quam. Dignissim convallis aenean et tortor at risus. Iaculis nunc sed augue lacus viverra vitae congue. Metus aliquam eleifend mi in. Tincidunt dui ut ornare lectus sit amet est. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Quam id leo in vitae turpis massa sed elementum tempus. Magna eget est lorem ipsum. Pharetra massa massa ultricies mi quis. Quam lacus suspendisse faucibus interdum posuere lorem ipsum.', '/uploads/1661944703644-77412914.jpg', '2022-08-24 06:10:45', '2022-09-08 15:54:07', 'Lifestyle', 1),
(72, 'Can we go to the seaside?', 'Velit sed ullamcorper morbi tincidunt ornare massa eget. Consequat id porta nibh venenatis cras. In mollis nunc sed id semper risus in hendrerit gravida. Et pharetra pharetra massa massa ultricies mi. Et malesuada fames ac turpis egestas integer eget aliquet. Quis viverra nibh cras pulvinar mattis nunc sed blandit. Mi tempus imperdiet nulla malesuada pellentesque elit. Rutrum tellus pellentesque eu tincidunt tortor. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Maecenas sed enim ut sem viverra aliquet eget. Tellus molestie nunc non blandit.\r\n\r\nAugue lacus viverra vitae congue. Tincidunt nunc pulvinar sapien et ligula. Facilisis volutpat est velit egestas dui. Egestas sed tempus urna et pharetra pharetra massa massa. Velit scelerisque in dictum non. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Porttitor leo a diam sollicitudin tempor. Facilisis mauris sit amet massa vitae. Massa vitae tortor condimentum lacinia quis vel eros. Duis at consectetur lorem donec. Vitae auctor eu augue ut lectus arcu bibendum at. Amet porttitor eget dolor morbi non arcu risus quis varius. Mauris cursus mattis molestie a iaculis at. Molestie at elementum eu facilisis sed odio morbi. Aenean et tortor at risus viverra adipiscing at. Purus faucibus ornare suspendisse sed nisi lacus sed. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Enim diam vulputate ut pharetra sit amet aliquam.\r\n\r\nTincidunt eget nullam non nisi. Id donec ultrices tincidunt arcu non sodales neque. Arcu felis bibendum ut tristique et egestas quis. Orci phasellus egestas tellus rutrum. Sem integer vitae justo eget magna fermentum iaculis. Metus aliquam eleifend mi in. Vestibulum lectus mauris ultrices eros in. Nullam ac tortor vitae purus faucibus ornare. Metus aliquam eleifend mi in nulla posuere. Faucibus interdum posuere lorem ipsum dolor. Nec sagittis aliquam malesuada bibendum. Proin sed libero enim sed faucibus. Arcu dictum varius duis at consectetur lorem donec massa.\r\n\r\nNisl condimentum id venenatis a condimentum vitae sapien pellentesque. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Sed risus ultricies tristique nulla aliquet. Eu turpis egestas pretium aenean pharetra magna. Dui accumsan sit amet nulla facilisi morbi tempus. Donec adipiscing tristique risus nec feugiat in fermentum. Ut diam quam nulla porttitor massa. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Sem et tortor consequat id. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Mauris a diam maecenas sed. Senectus et netus et malesuada fames ac turpis. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Proin fermentum leo vel orci porta non. Integer malesuada nunc vel risus commodo.\r\n\r\nHac habitasse platea dictumst quisque. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nunc lobortis mattis aliquam faucibus purus in. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Nunc sed blandit libero volutpat sed. Quis blandit turpis cursus in. Et netus et malesuada fames ac turpis egestas sed tempus. Massa eget egestas purus viverra accumsan in. Vulputate mi sit amet mauris commodo quis imperdiet.', '/uploads/1661944624534-692329300.jpg', '2022-08-24 06:11:19', '2022-08-31 11:17:04', 'Lifestyle', 0),
(73, 'Travel when you can', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec feugiat in. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Id diam maecenas ultricies mi eget. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Ullamcorper sit amet risus nullam eget felis eget nunc. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Pellentesque dignissim enim sit amet venenatis. Vivamus arcu felis bibendum ut tristique et egestas quis. Vulputate eu scelerisque felis imperdiet proin fermentum. Enim ut tellus elementum sagittis vitae et.\r\n\r\nAliquam purus sit amet luctus. Ultricies integer quis auctor elit sed. Ut ornare lectus sit amet. Velit scelerisque in dictum non consectetur a erat. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Faucibus et molestie ac feugiat sed lectus vestibulum. Dolor morbi non arcu risus quis varius quam. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Augue mauris augue neque gravida in fermentum et sollicitudin. Condimentum lacinia quis vel eros donec ac odio. Placerat in egestas erat imperdiet sed euismod nisi porta lorem. Vitae nunc sed velit dignissim.\r\n\r\nLorem donec massa sapien faucibus. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi bibendum neque egestas congue quisque egestas. Vehicula ipsum a arcu cursus vitae congue mauris. Scelerisque viverra mauris in aliquam sem fringilla. Nec ultrices dui sapien eget mi proin. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Auctor elit sed vulputate mi sit amet. Volutpat blandit aliquam etiam erat velit scelerisque in. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Tincidunt id aliquet risus feugiat in ante metus. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Massa sed elementum tempus egestas sed. Fermentum posuere urna nec tincidunt praesent semper feugiat. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Sed faucibus turpis in eu mi bibendum neque. Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris.\r\n\r\nId ornare arcu odio ut sem nulla pharetra. Eu sem integer vitae justo eget magna fermentum iaculis. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Justo laoreet sit amet cursus sit amet dictum sit. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Turpis in eu mi bibendum neque egestas congue. Viverra suspendisse potenti nullam ac tortor vitae. Varius duis at consectetur lorem donec massa sapien faucibus. Imperdiet proin fermentum leo vel orci porta. Enim nec dui nunc mattis enim.\r\n\r\nDictum non consectetur a erat nam at. Ut venenatis tellus in metus. Sem nulla pharetra diam sit amet. Nisl vel pretium lectus quam id leo in. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. At urna condimentum mattis pellentesque. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Nisi lacus sed viverra tellus. Blandit cursus risus at ultrices. Duis at consectetur lorem donec massa sapien faucibus et molestie. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Vel pretium lectus quam id leo in vitae. Urna id volutpat lacus laoreet non. Vel eros donec ac odio tempor orci dapibus ultrices. Molestie nunc non blandit massa enim nec dui nunc. Amet commodo nulla facilisi nullam vehicula ipsum a.', '/uploads/1661944604923-203197021.jpg', '2022-08-24 06:12:04', '2022-09-07 10:58:08', 'Travel', 0),
(74, 'Scotland', 'Volutpat blandit aliquam etiam erat velit. Amet massa vitae tortor condimentum lacinia. Sit amet luctus venenatis lectus magna fringilla. Sit amet est placerat in egestas erat imperdiet. Quam vulputate dignissim suspendisse in est ante in. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Vulputate enim nulla aliquet porttitor. Penatibus et magnis dis parturient montes. Pharetra massa massa ultricies mi quis. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum.\r\n\r\nElementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Sed felis eget velit aliquet sagittis. Dolor sit amet consectetur adipiscing elit ut aliquam. Tortor condimentum lacinia quis vel. Facilisis magna etiam tempor orci. Morbi tempus iaculis urna id volutpat lacus laoreet non. Amet mauris commodo quis imperdiet massa. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Eros donec ac odio tempor. Id interdum velit laoreet id donec ultrices tincidunt arcu.\r\n\r\nId nibh tortor id aliquet lectus proin. Purus semper eget duis at tellus. Integer enim neque volutpat ac. Amet risus nullam eget felis eget nunc. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Donec ac odio tempor orci dapibus. Sociis natoque penatibus et magnis dis parturient montes nascetur. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Vitae congue eu consequat ac felis donec et odio pellentesque. Massa sed elementum tempus egestas sed sed risus pretium quam. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Eu volutpat odio facilisis mauris sit amet massa vitae. Tellus in metus vulputate eu scelerisque felis imperdiet. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt.\r\n\r\nAliquet enim tortor at auctor urna nunc id cursus metus. Elementum facilisis leo vel fringilla. Vestibulum rhoncus est pellentesque elit. Odio morbi quis commodo odio aenean. Purus semper eget duis at tellus. Et tortor at risus viverra adipiscing. Vitae aliquet nec ullamcorper sit. Libero volutpat sed cras ornare arcu dui vivamus. Duis ut diam quam nulla porttitor massa id neque aliquam. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Nisl rhoncus mattis rhoncus urna. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. At lectus urna duis convallis convallis tellus. Nisl pretium fusce id velit. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Nunc sed velit dignissim sodales ut eu sem integer.\r\n\r\nFames ac turpis egestas maecenas pharetra convallis. Semper risus in hendrerit gravida rutrum. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Semper quis lectus nulla at volutpat diam. Sed pulvinar proin gravida hendrerit lectus. Amet nulla facilisi morbi tempus iaculis. Nec ullamcorper sit amet risus nullam eget felis. Sit amet purus gravida quis blandit turpis cursus in. Sed turpis tincidunt id aliquet. Ac auctor augue mauris augue neque gravida in. Vulputate odio ut enim blandit volutpat. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Senectus et netus et malesuada fames ac turpis egestas sed. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Habitasse platea dictumst quisque sagittis purus sit amet. Nunc sed blandit libero volutpat sed cras ornare. Dolor sit amet consectetur adipiscing elit.', '/uploads/1661944594122-622609889.jpg', '2022-08-24 06:12:21', '2022-09-07 12:20:24', 'Travel', 1),
(83, 'The Mountains are calling', 'Ut vitae fuga sed eveniet nihil ab corporis eius ut recusandae voluptatem ex tenetur nihil est doloribus nemo. Id sunt explicabo est distinctio autem hic consequatur molestiae.\r\n\r\nQui earum beatae ex nisi voluptatem sed iste vero non nemo galisum? Sed blanditiis omnis ut nobis voluptates et ipsam similique in repellat eos sint minima? Et culpa inventore At laudantium enim ut fuga quia aut quidem deleniti ut deserunt facilis a dignissimos iste et sapiente saepe.\r\n\r\nUt architecto tempora eum culpa dolor non asperiores distinctio sit adipisci incidunt et quae fuga non quod natus. Est reprehenderit vero et dolorem repellendus et internos cumque sed nisi.\r\n\r\nAt expedita molestias non error pariatur ea inventore quia. Qui ipsa exercitationem aut recusandae numquam ut accusantium veniam quo rerum totam aut internos distinctio. Et consequuntur consectetur qui placeat magnam et sapiente accusamus et iure illo quo exercitationem nemo.\r\n\r\nUt nesciunt suscipit quo esse veniam et dolores quas vel sunt fugit in quas deleniti et consequuntur omnis cum fugit perferendis. Est magnam eligendi est quis laborum ut repellendus omnis! Qui impedit tenetur sed itaque similique ut corrupti dolor non ratione minima qui facilis animi?\r\n\r\nId quia ullam sit nisi ipsa et iure neque sed amet obcaecati. Aut fugit quasi quo quae dolorem non laudantium error. Id magnam error non quidem dolores qui porro internos est asperiores rerum. Ab recusandae ratione aut ipsa consequatur aut cumque corporis sed minus vitae et omnis molestiae a nesciunt voluptas.', '/uploads/1661944582069-553074756.jpg', '2022-08-26 06:12:24', '2022-08-31 11:16:22', 'Sport', 0),
(85, 'We all need vacation', 'Qui officia perspiciatis sit quae reprehenderit et quia voluptas est quisquam modi a quos illum ea laboriosam cupiditate et voluptate quia. Et corrupti temporibus qui quod minima ut aperiam corporis est voluptas quibusdam ea repellendus quaerat. Qui perspiciatis natus rem odio obcaecati eum veritatis ullam ut veniam quibusdam et pariatur distinctio aut fugiat vero rem sapiente laborum.\r\n\r\nSit quasi quidem qui autem obcaecati ut voluptatum tenetur? Sit tempora nulla aut voluptate placeat et nisi dicta! Qui fugiat quisquam in beatae sequi et harum voluptatem. Et possimus quae est voluptas quis eum nihil placeat et voluptate tempora ut adipisci eaque et commodi optio et repellat repudiandae?\r\n\r\nEt suscipit cupiditate et autem facere sed maiores iste sed aperiam porro. Et sunt odio qui eligendi dolor et quos blanditiis non eligendi eius et exercitationem quia eos quia minus. Et consequatur quaerat non galisum nisi eos illo quia ab delectus officia hic nulla quia. Et dolorem laborum ea recusandae dicta est doloribus tenetur nam natus aliquam et quae saepe.\r\n\r\nId nesciunt ratione ea blanditiis ipsam ad porro maiores sed rerum eaque. Sed saepe voluptatum aut culpa fugit ut dolorem dolor eum rerum culpa. Et aspernatur magnam et unde sint eum voluptas neque. Quo quisquam modi aut distinctio voluptate quo provident molestias eos error facilis.', '/uploads/1661944570771-349256163.jpg', '2022-08-26 06:14:01', '2022-09-07 10:57:12', 'Lifestyle', 0),
(86, 'Is Hiking a Sport?', ' Eos magni mollitia ad nesciunt possimus ut soluta doloremque eum recusandae ipsa non dolor Quis eum dolores repudiandae ut reiciendis illum. Et nihil aliquid ut fugit recusandae vel deleniti quia in quia vitae non repudiandae ipsa.\r\n\r\nNon nobis nihil non esse obcaecati sed enim voluptas non dicta corrupti ut officiis sunt. Et consequatur facilis aut saepe doloremque ut sapiente numquam. Non dolor sequi ut architecto sequi 33 voluptate facilis aut quia commodi.\r\n\r\nQui explicabo aliquam vel possimus quasi ab reiciendis recusandae. Vel architecto aliquam sed totam sunt qui ipsum dolore qui laudantium eius et commodi magnam et veniam sint? Ut expedita molestiae est harum ratione qui placeat consequatur a ullam tempora est voluptatum assumenda ea velit voluptatum et eius quas! Ut inventore recusandae eum distinctio minus et alias ut exercitationem fugit.\r\n\r\nEt asperiores distinctio At aperiam eius et placeat incidunt sit ipsum doloremque aut adipisci porro ut impedit doloribus? Ea laboriosam nemo At fugiat nulla ut laboriosam omnis a reprehenderit assumenda.', '/uploads/1662035001684-566689684.jpg', '2022-08-26 06:17:25', '2022-09-01 12:23:21', 'Sport', 2),
(150, 'Explore the world', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quam id leo in vitae turpis massa sed elementum. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Blandit volutpat maecenas volutpat blandit aliquam. Ac ut consequat semper viverra nam. Felis eget velit aliquet sagittis id consectetur. Cursus turpis massa tincidunt dui ut ornare. Tellus molestie nunc non blandit massa enim nec.\r\n\r\nAc tincidunt vitae semper quis. Integer feugiat scelerisque varius morbi enim. Semper viverra nam libero justo laoreet sit amet cursus sit. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. In cursus turpis massa tincidunt dui ut. Enim facilisis gravida neque convallis a cras semper auctor neque. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Dignissim cras tincidunt lobortis feugiat vivamus. Scelerisque in dictum non consectetur a. Purus sit amet volutpat consequat mauris nunc congue. Urna et pharetra pharetra massa.\r\n\r\nId eu nisl nunc mi. Blandit libero volutpat sed cras ornare. Sed cras ornare arcu dui vivamus. Faucibus et molestie ac feugiat sed. Felis donec et odio pellentesque diam. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Dapibus ultrices in iaculis nunc sed augue lacus. Iaculis eu non diam phasellus vestibulum lorem sed risus. Dui sapien eget mi proin sed libero. Semper eget duis at tellus at urna condimentum mattis. Facilisis volutpat est velit egestas dui id. Fusce id velit ut tortor pretium viverra suspendisse potenti. Rutrum quisque non tellus orci ac auctor. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Vestibulum lectus mauris ultrices eros in cursus turpis massa.\r\n\r\nBibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Dolor magna eget est lorem ipsum dolor sit. Tellus mauris a diam maecenas sed enim ut. Tellus rutrum tellus pellentesque eu tincidunt tortor. Pulvinar sapien et ligula ullamcorper malesuada. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vel fringilla est ullamcorper eget nulla facilisi etiam. Id porta nibh venenatis cras sed felis eget velit. Non odio euismod lacinia at quis. Commodo odio aenean sed adipiscing diam donec. Nunc sed augue lacus viverra vitae congue eu. Porta lorem mollis aliquam ut porttitor leo a diam. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Dignissim convallis aenean et tortor at risus viverra adipiscing. Facilisis sed odio morbi quis. Lectus arcu bibendum at varius vel pharetra vel. Dictum at tempor commodo ullamcorper a lacus vestibulum. At elementum eu facilisis sed odio morbi quis commodo odio. Pellentesque id nibh tortor id aliquet.\r\n\r\nSit amet dictum sit amet justo donec. At in tellus integer feugiat scelerisque. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Pulvinar etiam non quam lacus suspendisse. Ultrices dui sapien eget mi proin sed libero. Risus at ultrices mi tempus imperdiet nulla malesuada. Sapien faucibus et molestie ac feugiat sed. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Tortor consequat id porta nibh venenatis. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Vitae suscipit tellus mauris a. Sodales ut etiam sit amet nisl. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Facilisis gravida neque convallis a cras semper auctor. Nibh venenatis cras sed felis eget. In tellus integer feugiat scelerisque varius morbi enim. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Quisque sagittis purus sit amet. Praesent tristique magna sit amet.', '/uploads/1661944723439-929835323.jpg', '2022-08-19 06:34:52', '2022-09-07 12:37:24', 'Lifestyle', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `role` int(11) NOT NULL DEFAULT 0,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `createdAt`, `updatedAt`, `role`, `firstName`, `lastName`) VALUES
(3, 'jonas@jonas.lt', '$2b$10$ohc/4QLFD9R8iQwaIZtvc.ffOKUfLF2DY6HeUokprlB/CVNSPe5ee', '2022-08-24 07:46:06', '2022-09-07 10:58:19', 1, 'Jonas', 'Jonauskas'),
(4, 'petras@petras.lt', '$2b$10$02wQNMQWVNqIZR2bJlsLt.D8YK6aFuilVMFrCh/sxG1CF8hJc.OmS', '2022-08-24 07:46:30', '2022-09-07 10:33:54', 0, 'Petras', 'Petraitis'),
(6, 'linas@linas.lt', '$2b$10$ixD2IgN9iyfoYE44qmLCterODUvyWbOzQ5rgf4dHfuEfw/AHLg8PS', '2022-08-24 07:49:54', '2022-09-07 10:35:12', 0, 'Linas', 'Linkevicius'),
(7, 'juozas@juozas.lt', '$2b$10$gC2hDPyBR5gc3.6bbTyZMuB3o2oW3GitWS73p1Lr2e8tlQAf9TTNO', '2022-08-24 07:50:45', '2022-09-07 10:35:29', 0, 'Juozas', 'Juozaitis'),
(19, 'asta@asta.lt', '$2b$10$VZIP7h8Ux7iJ8UCPIwMoOultVrqauZ8nxSvtCsN75ZqWYGLo9mGee', '2022-09-01 11:07:10', '2022-09-07 10:28:31', 0, 'Asta', 'Astuviene'),
(20, 'petras@petrauskas.lt', '$2b$10$EY2DG6XTWrq7INZU06BIn.SDB8e99guEf5JfPF82DQeXB9Q63oAVK', '2022-09-05 07:34:59', '2022-09-07 10:35:55', 0, 'Petras', 'Petrauskas');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `postId` (`postId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=162;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_209` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_ibfk_210` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
