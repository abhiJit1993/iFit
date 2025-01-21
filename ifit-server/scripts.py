import sqlite3

class SQLiteManager:
    def __init__(self, db_name):
        """Initialize SQLiteManager with a specific database."""
        self.db_name = db_name
        self.conn = sqlite3.connect(db_name)
        self.cursor = self.conn.cursor()

    def execute_query(self, query, params=None):
        """Helper function to execute a query."""
        if params:
            self.cursor.execute(query, params)
        else:
            self.cursor.execute(query)
        self.conn.commit()

    def execute(self, query):
        print(query)
        # columns_str = ", ".join([f"{col} {dtype}" for col, dtype in columns.items()])
        # query = f"CREATE TABLE IF NOT EXISTS {table_name} ({columns_str});"
        self.cursor.execute(query)
        print(f"Table  created successfully.")

    def alter_table(self, table_name, action, column_name=None, column_definition=None):
        """Alter an existing table (e.g., add a column)."""
        if action == 'add' and column_name and column_definition:
            query = f"ALTER TABLE {table_name} ADD COLUMN {column_name} {column_definition};"
            self.execute_query(query)
            print(f"Column '{column_name}' added to table '{table_name}'.")
        else:
            print("Invalid alter action or missing parameters.")

    def insert_data(self, table_name, data):
        """Insert data into a table."""
        columns = ", ".join(data.keys())
        placeholders = ", ".join("?" * len(data))
        query = f"INSERT INTO {table_name} ({columns}) VALUES ({placeholders});"
        self.execute_query(query, tuple(data.values()))
        print("Data inserted successfully.")

    def update_data(self, table_name, set_data, where_condition):
        """Update data in a table."""
        set_str = ", ".join([f"{col} = ?" for col in set_data.keys()])
        where_str = " AND ".join([f"{col} = ?" for col in where_condition.keys()])
        query = f"UPDATE {table_name} SET {set_str} WHERE {where_str};"
        self.execute_query(query, tuple(set_data.values()) + tuple(where_condition.values()))
        print("Data updated successfully.")

    def delete_data(self, table_name, where_condition):
        """Delete data from a table."""
        where_str = " AND ".join([f"{col} = ?" for col in where_condition.keys()])
        query = f"DELETE FROM {table_name} WHERE {where_str};"
        self.execute_query(query, tuple(where_condition.values()))
        print("Data deleted successfully.")

    def view_data(self, table_name, columns="*"):
        """View data from a table."""
        query = f"SELECT {columns} FROM {table_name};"
        self.cursor.execute(query)
        rows = self.cursor.fetchall()
        return rows

    def close(self):
        """Close the database connection."""
        self.conn.close()
        print("Connection closed.")

# Example usage
if __name__ == "__main__":
    db = SQLiteManager('iFitManager.db')


    db.execute("""
INSERT INTO ROLE (Id, Name) VALUES
(0, 'SuperAdmin'),
(1, 'Admin'),
(2, 'Vendor'),
(3, 'Member');
""")
    db.close()

   
#    -- Example passwords
# -- 'password123' -> '70617373776f7264313233'
# -- 'welcome2023' -> '77656c636f6d6532303233'
   
   
  
'''


CREATE TABLE USERS (
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    RoleId INTEGER NOT NULL,
    Name TEXT NOT NULL,
    Mobile TEXT UNIQUE NOT NULL,
    Email TEXT UNIQUE NOT NULL,
    Password TEXT NOT NULL,
    VendorId INTEGER,
    Address TEXT,
    IsVerified BOOLEAN DEFAULT 0,
    IsActive BOOLEAN DEFAULT 1,
    SignInType TEXT,
    OnboardDate DATE,
    OnboardBy TEXT,
    IdName TEXT,
    IdNumber TEXT,
    PlanId INTEGER,
    Password_Set BOOLEAN DEFAULT 0,
    First_Time_Login BOOLEAN DEFAULT 1
);

-- ROLE table
CREATE TABLE ROLE (
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL
);

-- USER_STATS table
CREATE TABLE USER_STATS (
    UserId INTEGER NOT NULL,
    Height REAL,
    Weight REAL,
    BMI REAL,
    InsertDate DATE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(UserId) REFERENCES USERS(Id)
);

-- PARTNER table
CREATE TABLE PARTNER (
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    PanCard_Number TEXT UNIQUE NOT NULL,
    Logo TEXT,
    Address TEXT,
    City TEXT,
    Pincode TEXT,
    State TEXT,
    IsActive BOOLEAN DEFAULT 1,
    AddedBy TEXT,
    AddedOn DATE DEFAULT CURRENT_TIMESTAMP
);

-- PLANS table
CREATE TABLE PLANS (
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    Discount REAL,
    Duration INTEGER, -- in days
    Plan_Charges REAL,
    Description TEXT,
    SignUp_Fee REAL,
    Trainer_Support BOOLEAN DEFAULT 0,
    Currency TEXT,
    Created_By TEXT,
    Created_At DATE DEFAULT CURRENT_TIMESTAMP,
    Updated_By TEXT,
    Updated_At DATE DEFAULT CURRENT_TIMESTAMP
);

'''