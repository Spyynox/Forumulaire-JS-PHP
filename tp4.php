<?php



if (isset($_POST["submit"])) {
$testemail=filter_var($_POST["mail"], FILTER_VALIDATE_EMAIL);
$taberreur=[];
 
$liste=["Prenom","Nom","mail","adress","password","repassword", "bachelor", "promotion"];
	             foreach ($liste as $key => $value) {
	             	if ($_POST[$value]==NULL) {
	             		array_push($taberreur,$value." n'est pas rempli");
	                  	# code...
	                  }
	             }
	                  
					if (!ctype_alpha($_POST["Prenom"])){
						array_push($taberreur," le Prenom doit contenir que des caractères alphabétique");
	                  
					} 
						elseif (strlen($_POST["Prenom"])<2) {
							# code
							array_push($taberreur," le Prenom doit contenir au moin 2 caractères");}

						 
						 else{ $Prenom=$_POST["Prenom"];}
				     
						
					if (!ctype_alpha($_POST["Nom"])){
                        array_push($taberreur," le nom doit contenir que des caractères alphabétique");
	                  

					}


					 elseif (strlen($_POST["Nom"]) <2) {
					  	# code...
					  	array_push($taberreur,"le Prenom doit contenir au moin 2 caractères");
	                  
                         } 
					    else {
					    	$Nom=$_POST["Nom"]; 
					    }
		 
                          if ($testemail== TRUE) {
		                 
		                 $email=$_POST["mail"];}

		                   
		                  elseif ($testemail== FALSE) {
		                  	# code...
		                  	array_push($taberreur,"votre eamil n'est pas valide...");
	                         
		                  }
		                  	
		               

                       
                        
                       if ($_POST["bachelor"]!="dev" && $_POST["bachelor"]!="business" && $_POST["bachelor"]!="design") {
                       	# code...
                       	 array_push($taberreur,"bachelor doit contenir  dev ou business ou design");
	                 
                       } 
                       else{
                       	$bachelor=$_POST["bachelor"];
                       }
                       
                       	     
                     if (strlen($_POST["password"])>=12) {
                     	$pwd=$_POST["password"];
                     }
                     elseif (strlen($_POST["password"])<12) {
                     	# code...
                     	array_push($taberreur,"le mot de passe contenir au moins 12 caractères");
	                 
                     }
                     if ( $_POST["repassword"]!=$_POST["password"]) {
                     	
                     	# code...
                     	array_push($taberreur,"retapez password doit être égal au champ Mot de passe");
	                 
                     }
                      elseif (strlen($_POST["repassword"])<12) {
                      	# code...
                      	array_push($taberreur,"le mot de passe contenir au moins 12 caractères");
	                 
                      }
                      else{
                      	$retape=$_POST["repassword"];
                      }
                      
                     
                   
                     	
                     }
                     	
                     if (isset($_POST["tomes"])) {
                     	foreach ($_POST["tomes"] as $key => $value) {
                     		# code...
                     		$tome=$value;
                     	}
                     	
                     }
                     elseif (!isset($_POST["tomes"])) {
                     	# code...
                     	array_push($taberreur,"tome doit contenir au moins 1 tome séléctionné");
	                 
                     }

	
       
                           		?>
<!DOCTYPE html>
<html>
<head>
	<title >forme</title>
	<style type="text/css">
		.erreurs{
			margin: auto;
			background-color: red;
			width: 600px;
			border-radius: 10px;
		}
		body{
			background-image: url("https://srv.latostadora.com/designall.dll/incorporeo_transparente_negro--i:14138551754214138520;x:20;w:520;m:1.jpg");
;
		}
	</style>
</head>
<body>
						<div class="erreurs">  
					    

					    		<?php  if (sizeof($taberreur)>1) {
		                   ?> 
						    	<h2 style="text-align: center;"><?php echo "Les erreurs...<br>";?> 
						    	</h2><?php
		                   ?> <ul>
					    	<?php
					        	foreach ($taberreur as $key => $value) {
					        		# code...?> 
								    	<li><?php
					                      echo $value."<br>";?>
								    	 </li>
								     <?php
								 }?>
					    </ul> <br><img style="margin: auto; margin-left: 150px; border-radius: 15px;" src="https://risibank.fr/cache/stickers/d311/31114-full.jpg"></div> <?php
			}
			    else{?>
			    	<div style="margin: auto;background-color: green; margin-top:15%;">
						<table style="margin: auto;" border="1">
							<tr>
								<td><?php echo "Premon : ";?></td>
								<td><?php echo $Prenom;?></td>
							</tr>
							<tr>
								<td><?php echo "Mon : ";?></td>
								<td><?php echo $Nom;?></td>
							</tr>
							
							<tr>
								<td><?php echo "email : ";?></td>
								<td><?php echo $email;?></td>
							</tr>
							<tr>
								<td><?php echo "bachelor : ";?></td>
								<td><?php echo $bachelor;?></td>
							</tr>
							<tr>
								<td><?php echo "password : ";?></td>
								<td><?php echo $pwd;?></td>
							</tr>
							<tr>
								<td><?php echo "verifie password : ";?></td>
								<td><?php echo $retape;?></td>
							</tr>
							<tr>
								<td><?php echo "sexe: ";?></td>
								<td><?php echo $_POST["sexe"];?></td>
							</tr>
							
								
								<td><?php echo "Tome(s) favoris de H2G2: ";?></td>
								<td><?php foreach ($_POST["tomes"] as $key => $value) {
									echo $value;
									if ($key!=sizeof($_POST["tomes"])-1) {
										# code...
										echo ", <br>";
									}
								}
							?></td>
							</tr>
							<tr>
								<td>Commentaire</td>
								<td><?php echo  "< b > si c'est text s'affiche en gras, u lost the game </ b >";?></td>
							</tr>
						</table>
						</div>
                     
                   <?php  }?><a href="http://localhost/tp4%20js/tp4.html">Retour</a>




        

</body>
</html>