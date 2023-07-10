<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../assets/styles/style.css">
</head>

<body>
    <script src="../assets/javascript/mode.js"></script>
    <header>
        <button id="menuToggle" class="menu-toggle">&#9776;</button>
        <h1>Article</h1>
        <nav>
            <ul>
                <li><a class="navmenu" href="index.php" class="admin">Home</a></li>
                <li><a class="navmenu" href="manageArticle.php" class="writeArticle">Write Article</a></li>
                <li class="dropdown">
                    <a href="#" class="account navmenu">Account &#9662;</a>
                    <ul class="dropdown-menu">
                        <li><a class="navmenu" href="account.php">Profile</a></li>
                        <li><a class="navmenu" href="../data/config/logout.php">Logout</a></li>
                    </ul>
                </li>
                <li>
                    <label class="switch" class="navmenu">
                        <input type="checkbox" id="darkModeToggle" class="navmenu">
                        <span class="slider navmenu"></span>
                    </label>
                </li>
            </ul>
        </nav>
    </header>