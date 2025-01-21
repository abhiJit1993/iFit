
# iFit
To use the terminal to run these SQL queries with SQLite, follow these steps:

### 1. **Install SQLite** (if not already installed):
   - **Linux**: Use the package manager.
     ```bash
     sudo apt update
     sudo apt install sqlite3
     ```
   - **Mac**: Use Homebrew.
     ```bash
     brew install sqlite3
     ```
   - **Windows**: Download the SQLite command-line tool from the [SQLite website](https://www.sqlite.org/download.html) and add it to your system's PATH.

### 2. **Create a Database**:
   Open a terminal and create a new SQLite database (or open an existing one):
   ```bash
   sqlite3 gym_app.db
   ```

### 3. **Create Tables**:
   - Save your SQL `CREATE TABLE` queries in a file, e.g., `schema.sql`.
   - Load the file into SQLite:
     ```bash
     .read schema.sql
     ```

### 4. **Insert Data**:
   - Save your `INSERT` statements in a file, e.g., `data.sql`.
   - Load the data into SQLite:
     ```bash
     .read data.sql
     ```

### 5. **Verify Data**:
   - You can verify that the data was inserted correctly by running simple `SELECT` queries.
   ```sql
   SELECT * FROM USERS;
   SELECT * FROM PARTNER;
   SELECT * FROM PLANS;
   ```

### 6. **Exit SQLite**:
   - To exit the SQLite shell, type `.exit` or `CTRL+D`.

### Full Example:
1. **Create a Schema File (`schema.sql`)**:
   ```sql
   CREATE TABLE USERS (
     Id INTEGER PRIMARY KEY,
     RoleId INTEGER,
     Name TEXT,
     Mobile TEXT,
     Email TEXT,
     Password TEXT,
     VendorId INTEGER,
     Address TEXT,
     IsVerified INTEGER DEFAULT 1,
     IsActive INTEGER DEFAULT 1,
     SignInType TEXT,
     OnboardDate TEXT,
     OnboardBy TEXT,
     IdName TEXT,
     IdNumber TEXT,
     PlanId INTEGER,
     Password_Set INTEGER DEFAULT 0,
     First_Time_Login INTEGER DEFAULT 1
   );

   CREATE TABLE PARTNER (
     Id INTEGER PRIMARY KEY,
     Name TEXT,
     PanCard_Number TEXT,
     Logo TEXT,
     Address TEXT,
     City TEXT,
     Pincode TEXT,
     State TEXT,
     IsActive INTEGER DEFAULT 1,
     AddedBy TEXT
   );

   CREATE TABLE PLANS (
     Id INTEGER PRIMARY KEY,
     Name TEXT,
     Discount REAL,
     Duration INTEGER,
     Plan_Charges REAL,
     Description TEXT,
     SignUp_Fee REAL,
     Trainer_Support INTEGER,
     Currency TEXT,
     Created_By TEXT
   );
   ```

2. **Create an Insert Data File (`data.sql`)**:
   Use the earlier `INSERT` statements and save them in `data.sql`.

3. **Run in Terminal**:
   ```bash
   sqlite3 gym_app.db
   .read schema.sql
   .read data.sql
   ```

This will create your tables and populate them with the provided data in the SQLite database.
