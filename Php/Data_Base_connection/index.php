<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>File handling</title> 
  </head>
  <body>
    
    <form method="POST"  action="practiceDB.php">
      <!-- Id -->
      <div>  
        <label for="id">Id :</label>  
        <input type="text" name="id" id="id"  required/>
      </div>

      <!-- Name  -->
      <div>
        <label for="name">Name :</label>
        <input type="text" name="name" id="name" required />
      </div>

      <!-- email  -->
      <div>
        <label for="email">Email :</label>
        <input type="email" name="email" id="email"  required/>
      </div>

      <!-- Gender  -->
      <div>
        <label for="male">Male :</label>
        <input type="radio" id="male" name="gender" value="male"  required/>

        <!-- Name  -->
        <label for="female">Female :</label>
        <input type="radio" id="female" name="gender" value="female" required />
      </div>
 
      <!-- Address-->
      <div>
        <label for="address">Address</label>
        <textarea name="address" id="address" required> </textarea>
      </div>
      <!-- Button-->
      <div>
        <button type="submit" name="submit">Submit</button>

      </div>
    </form>
  </body>
</html>
