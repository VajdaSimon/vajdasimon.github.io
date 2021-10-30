<?php
    include("connection.php");
	$id = $_REQUEST["dal"];
	$kereses = $_REQUEST["kereses"];
	
	$dal = array();
	
	if ($id) {
		if ($id == "utolso") {
			$result = $conn->query("select id, cim, replace(szoveg,'\r\n','\n') as szoveg from dalok order by id DESC limit 1");
			if ($result->num_rows > 0) {
				header('Content-type:application/json;charset=utf-8');
				while($row = $result->fetch_assoc()) {
					$dal['id'] = $row["id"];
					$dal['cim'] = $row["cim"];
					$dal['szoveg'] = $row["szoveg"];
				}
				print json_encode($dal,JSON_PRETTY_PRINT);
			}
		}
		else {
			$result = $conn->query("select id, cim, replace(szoveg,'\r\n','\n') as szoveg from dalok where id = $id");
			if ($result->num_rows > 0) {
				header('Content-type:application/json;charset=utf-8');
				while($row = $result->fetch_assoc()) {
					$dal['id'] = $row["id"];
					$dal['cim'] = $row["cim"];
					$dal['szoveg'] = $row["szoveg"];
				}
				print json_encode($dal,JSON_PRETTY_PRINT);
			}
			else {
				print("<span style='color: red'>Hiba</span>");
			}
		}
	}
	elseif ($kereses) {
		$result = $conn->query("select * from dalok where cim like '%$kereses%' or szoveg like '%$kereses%'");
        if ($result->num_rows > 0) {
			$i = 0;
			header('Content-type:application/json;charset=utf-8');
            while($row = $result->fetch_assoc()) {
                $dal['talalat'][$i]['id'] = $row['id'];
				$dal['talalat'][$i]['cim'] = $row['cim'];
				$i++;
			}
			print json_encode($dal,JSON_PRETTY_PRINT);
        }
        else{
            print "<span style='color: red'>Nincs találat.</span>\n";
        }
	}
	else {
		print "Keresés példa: <a href='https://simon.vajda.eu/dalok/v2/api.php?kereses=gondol'>https://simon.vajda.eu/dalok/v2/api.php?kereses=gondol</a><br>";
		print "Dalszöveg példa: <a href='https://simon.vajda.eu/dalok/v2/api.php?dal=443'>https://simon.vajda.eu/dalok/v2/api.php?dal=443</a><br>";
		print "Legutóbb feltöltött dal: <a href='https://simon.vajda.eu/dalok/v2/api.php?dal=utolso'>https://simon.vajda.eu/dalok/v2/api.php?dal=utolso</a><br>";
		print "Használd: <a href='https://simon.vajda.eu/dalok/v2/index.html'>Kivetítés</a>";
	}
?>