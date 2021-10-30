<html>
        <!-- <link rel="shortcut icon" href="icon.png" /> -->
    <head>
        <title>Újdal</title>
        <link rel="stylesheet" href="#" type="text/css">
        <meta charset="utf-8" />

        <?php
            include("connection.php");
            $ujdalcim = $_REQUEST["ujdalcim"];
            $ujdalszoveg = $_REQUEST["ujdalszoveg"];

            if ($ujdalszoveg) {
                if (!$ujdalcim) {
                    $dalszoveg = explode("\n", $ujdalszoveg);
                    $ujdalcim = $dalszoveg[0]; 
                }
                $conn->query("insert into dalok(cim, szoveg) values('$ujdalcim', '$ujdalszoveg');");
                print "<meta http-equiv = 'refresh' content = '0; url = ujdal.php' />";
            }
        ?>
    </head>
	<body>
		<?php
			print "<form action='ujdal.php' method='post' accept-charset='utf-8'>\n";
				print "Cím: <input type='text' name='ujdalcim' maxlength='100' style='vertical-align:middle'><br>\n";
				print "Szöveg:<br><textarea name='ujdalszoveg' rows=20 style='width:500px'></textarea><br>\n";
				print "<input type='submit' value='Hozzáadás!' style='font-size:70%; vertical-align:middle; text-decoration: none'>\n";
			print "</form>\n";
		?>
	</body>
</html>