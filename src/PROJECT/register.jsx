export function Registration(){
    return(
        <>
        
        <form method="post" action=" ">
        <label >First Name</label>
        <input type="text" name="FirstName" />
        <br /><br />

        <label >Second Name</label>
        <input type="text" name="SecondName" />
        <br /><br />

        <label >Sur Name</label>
        <input type="text" name="SurName" />
        <br /><br />

        <label >Email_Id</label>
        <input type="text" name="EmailId" />
        <br /><br />

        <label >Phone_Number</label>
        <input type="text" name="PhoneNumber" />
        <br /><br />

        <label >UserName</label>
        <input type="text" name="UserName" />
        <br /><br />

        <label >Password</label>
        <input type="password" name="Password" />
        <br /><br />

        <label >Conform Password</label>
        <input type="password" name="ConformPassword" />
        <br /><br />
          
          <input type="submit" value="save" />
        </form>
        
        </>
    )
}