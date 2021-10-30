<html>
    <head>
        <title>Szerkesztés</title>
        <meta charset="utf-8" />

        <?php
            include("connection.php");
            $dal = $_REQUEST["dal"];
            $ujdalcim = $_REQUEST["ujdalcim"];
            $ujdalszoveg = $_REQUEST["ujdalszoveg"];
            $torles = $_REQUEST["torles"];

            if ($ujdalcim) {
                $conn->query("update dalok set cim = '$ujdalcim', szoveg = '$ujdalszoveg' where id = $dal;");
                print "<meta http-equiv = 'refresh' content = '0; url = szerkesztes.php?dal=$dal' />";
            }
            elseif ($torles) {
                $conn->query("delete from dalok where id = $dal;");
                print "<meta http-equiv = 'refresh' content = '0; url = szerkesztes.php?dal=$dal' />";
            }
        ?>
    </head>
	<body>
		<?php
			print "<form action='szerkesztes.php' method='post' accept-charset='utf-8'>\n";
				$result = $conn->query("select cim, szoveg from dalok where id = $dal");
				$row = $result->fetch_assoc();
				print "<input type='hidden' name='dal' value=$dal>\n";
				print "Cím: <input type='text' name='ujdalcim' value=".$row["cim"]." maxlength='100' style='vertical-align:middle'><br>\n";
				print "Szöveg:<br><textarea name='ujdalszoveg' rows=20 style='width:500px'>".$row["szoveg"]."</textarea><br>\n";
				print "<input type='submit' value='Mentés!' style='font-size:70%; vertical-align:middle; text-decoration: none'>\n";
				print "<input type='button' value='Törlés' onclick=\"location.href='szerkesztes.php?dal=$dal&torles=1'\" style='font-size:70%; vertical-align:middle; text-decoration: none'>\n"; 
			print "</form>\n";
		?>
	</body>
</html>