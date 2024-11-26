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
    db = SQLiteManager('mydatabase.db')

    create_User_Table_Query = """
    CREATE TABLE Users (
    Id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    Name VARCHAR NOT NULL,
    Email VARCHAR,
    Password VARCHAR(250)
    Phone VARCHAR NOT NULL,
    SignIn_Type VARCHAR,
    IsVerified BOOLEAN,
    IsActive BOOLEAN,
    Onboard_Date DATE,
    Onboard_By INTEGER,
    Address VARCHAR,
    Id_Number VARCHAR,
    Id_Document VARCHAR
);


"""
    create_role_table= """
CREATE TABLE Roles (
    Id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    Name VARCHAR NOT NULL
);

"""
    create_user_role_table = """
CREATE TABLE User_Role (
    RoleId INTEGER NOT NULL,
    UserId INTEGER NOT NULL,
    PRIMARY KEY (RoleId, UserId),
    FOREIGN KEY (RoleId) REFERENCES Roles(Id),
    FOREIGN KEY (UserId) REFERENCES Users(Id)
);

"""
    create_user_stats_table = """
CREATE TABLE User_Stats (
    UserId INTEGER NOT NULL,
    Height_ft VARCHAR,
    Weight_Kg VARCHAR,
    BMI FLOAT
);

"""
    create_plan_table = """
CREATE TABLE Plan (
    Id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    Name VARCHAR,
    Description VARCHAR,
    Duration_Months INTEGER,
    Price FLOAT,
    PriceCurrency VARCHAR,
    PlanTypeId INTEGER,
    SignUpFee FLOAT,
    CancellationPolicy VARCHAR,
    FloorAccess VARCHAR,
    TrainerSupport VARCHAR,
    DiscountId INTEGER,
    CreatedBy INTEGER,
    UpdatedBy INTEGER,
    CreatedAt DATETIME,
    UpdatedAt DATETIME,
    FOREIGN KEY (DiscountId) REFERENCES Discount(Id),
    FOREIGN KEY (CreatedBy) REFERENCES Users(Id),
    FOREIGN KEY (UpdatedBy) REFERENCES Users(Id)
);

"""
    create_plan_type_table ="""
CREATE TABLE PlanType (
    PlanId INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    PlanType VARCHAR
);

"""
    create_discount_table="""CREATE TABLE Discount (
    Id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    Value_Percentage FLOAT
);"""
    create_UserPlan_table="""
CREATE TABLE UserPlan (
    PlanId INTEGER NOT NULL,
    UserId INTEGER NOT NULL,
    PRIMARY KEY (PlanId, UserId),
    FOREIGN KEY (PlanId) REFERENCES Plan(Id),
    FOREIGN KEY (UserId) REFERENCES Users(Id)
);"""
    create_PlanDiscount_table="""
CREATE TABLE PlanDiscount (
    PlanId INTEGER NOT NULL,
    DiscountId INTEGER NOT NULL,
    PRIMARY KEY (PlanId, DiscountId),
    FOREIGN KEY (PlanId) REFERENCES Plan(Id),
    FOREIGN KEY (DiscountId) REFERENCES Discount(Id)
);"""



    allInserts = [
"""INSERT INTO Users (Name, Email, Password, Phone, SignIn_Type, IsVerified, IsActive, Onboard_Date, Onboard_By, Address, Id_Number, Id_Document)
VALUES
('User1', 'user1@example.com', 'password1', '9876543210', 'Email', 1, 1, '2024-01-01', NULL, 'Address1', 'ID123', 'Doc1'),
('User2', 'user2@example.com', 'password2', '9876543211', 'Google', 1, 1, '2024-01-02', NULL, 'Address2', 'ID124', 'Doc2'),
('User3', 'user3@example.com', 'password3', '9876543212', 'Facebook', 0, 1, '2024-01-03', NULL, 'Address3', 'ID125', 'Doc3'),
('User4', 'user4@example.com', 'password4', '9876543213', 'Email', 1, 1, '2024-01-04', NULL, 'Address4', 'ID126', 'Doc4'),
('User5', 'user5@example.com', 'password5', '9876543214', 'Email', 1, 0, '2024-01-05', NULL, 'Address5', 'ID127', 'Doc5'),
('User6', 'user6@example.com', 'password6', '9876543215', 'Google', 1, 1, '2024-01-06', NULL, 'Address6', 'ID128', 'Doc6'),
('User7', 'user7@example.com', 'password7', '9876543216', 'Facebook', 0, 0, '2024-01-07', NULL, 'Address7', 'ID129', 'Doc7'),
('User8', 'user8@example.com', 'password8', '9876543217', 'Email', 1, 1, '2024-01-08', NULL, 'Address8', 'ID130', 'Doc8'),
('User9', 'user9@example.com', 'password9', '9876543218', 'Google', 1, 1, '2024-01-09', NULL, 'Address9', 'ID131', 'Doc9'),
('User10', 'user10@example.com', 'password10', '9876543219', 'Facebook', 1, 0, '2024-01-10', NULL, 'Address10', 'ID132', 'Doc10'),
('User11', 'user11@example.com', 'password11', '9876543220', 'Email', 1, 1, '2024-01-11', NULL, 'Address11', 'ID133', 'Doc11'),
('User12', 'user12@example.com', 'password12', '9876543221', 'Google', 1, 1, '2024-01-12', NULL, 'Address12', 'ID134', 'Doc12'),
('User13', 'user13@example.com', 'password13', '9876543222', 'Facebook', 0, 1, '2024-01-13', NULL, 'Address13', 'ID135', 'Doc13'),
('User14', 'user14@example.com', 'password14', '9876543223', 'Email', 1, 1, '2024-01-14', NULL, 'Address14', 'ID136', 'Doc14'),
('User15', 'user15@example.com', 'password15', '9876543224', 'Google', 1, 0, '2024-01-15', NULL, 'Address15', 'ID137', 'Doc15'),
('User16', 'user16@example.com', 'password16', '9876543225', 'Facebook', 1, 1, '2024-01-16', NULL, 'Address16', 'ID138', 'Doc16'),
('User17', 'user17@example.com', 'password17', '9876543226', 'Email', 0, 1, '2024-01-17', NULL, 'Address17', 'ID139', 'Doc17'),
('User18', 'user18@example.com', 'password18', '9876543227', 'Google', 1, 1, '2024-01-18', NULL, 'Address18', 'ID140', 'Doc18'),
('User19', 'user19@example.com', 'password19', '9876543228', 'Facebook', 1, 1, '2024-01-19', NULL, 'Address19', 'ID141', 'Doc19'),
('User20', 'user20@example.com', 'password20', '9876543229', 'Email', 1, 1, '2024-01-20', NULL, 'Address20', 'ID142', 'Doc20');"""

,

"""INSERT INTO Roles (Name) 
VALUES 
('Member'),
('Admin'),
('SuperAdmin');"""

,

"""INSERT INTO User_Role (RoleId, UserId)
VALUES 
(1, 2),  -- Admin
(1, 3),  -- Admin
(2, 1),  -- SuperAdmin
(0, 4),  -- Member
(0, 5),  -- Member
(0, 6),  -- Member
(0, 7),  -- Member
(0, 8),  -- Member
(0, 9),  -- Member
(0, 10), -- Member
(0, 11), -- Member
(0, 12), -- Member
(0, 13), -- Member
(0, 14), -- Member
(0, 15), -- Member
(0, 16), -- Member
(0, 17), -- Member
(0, 18), -- Member
(0, 19), -- Member
(0, 20); -- Member

"""
,


"""INSERT INTO User_Stats (UserId, Height_ft, Weight_Kg, BMI)
VALUES
(1, '5.8', '70', 22.5),
(2, '6.0', '80', 24.5),
(3, '5.6', '65', 23.2),
(4, '5.7', '68', 22.8),
(5, '5.9', '72', 24.0),
(6, '6.1', '85', 25.3),
(7, '5.5', '60', 22.0),
(8, '5.10', '74', 24.6),
(9, '5.4', '58', 21.5),
(10, '5.8', '69', 23.5),
(11, '5.11', '78', 25.0),
(12, '6.0', '82', 25.8),
(13, '5.3', '57', 21.0),
(14, '5.7', '66', 23.0),
(15, '5.9', '70', 22.8),
(16, '6.2', '88', 25.7),
(17, '5.6', '64', 22.9),
(18, '5.8', '67', 22.6),
(19, '5.10', '73', 24.5),
(20, '6.1', '81', 25.4);"""


,
    

"""INSERT INTO Plan (Name, Description, Duration_Months, Price, PriceCurrency, PlanTypeId, SignUpFee, CancellationPolicy, FloorAccess, TrainerSupport, CreatedBy, UpdatedBy, CreatedAt, UpdatedAt)
VALUES 
('Plan A', 'Basic Plan', 6, 6000, 'INR', 1, 500, 'Refundable', 'Gym', 'No', 1, 2, '2024-01-01', '2024-01-05'),
('Plan B', 'Intermediate Plan', 12, 12000, 'INR', 2, 1000, 'Partially Refundable', 'Gym, Pool', 'Yes', 3, 4, '2024-01-01', '2024-01-06'),
('Plan C', 'Premium Plan', 24, 20000, 'INR', 3, 2000, 'Non-Refundable', 'Gym, Pool', 'Yes', 5, 6, '2024-01-01', '2024-01-07'),
('Plan D', 'Family Plan', 12, 18000, 'INR', 2, 1500, 'Refundable', 'Gym, Pool', 'No', 7, 8, '2024-01-01', '2024-01-08'),
('Plan E', 'Couples Plan', 6, 8000, 'INR', 1, 700, 'Partially Refundable', 'Gym', 'No', 9, 10, '2024-01-01', '2024-01-09'),
('Plan F', 'Corporate Plan', 36, 40000, 'INR', 3, 5000, 'Non-Refundable', 'Gym', 'Yes', 11, 12, '2024-01-01', '2024-01-10'),
('Plan G', 'Student Plan', 12, 5000, 'INR', 1, 300, 'Refundable', 'Gym', 'No', 13, 14, '2024-01-01', '2024-01-11'),
('Plan H', 'Seasonal Plan', 3, 3000, 'INR', 1, 100, 'Refundable', 'Gym', 'No', 15, 16, '2024-01-01', '2024-01-12'),
('Plan I', 'Weekend Plan', 1, 2000, 'INR', 1, 50, 'Non-Refundable', 'Gym', 'No', 17, 18, '2024-01-01', '2024-01-13'),
('Plan J', 'Flex Plan', 12, 15000, 'INR', 2, 1200, 'Partially Refundable', 'Gym, Pool', 'Yes', 19, 20, '2024-01-01', '2024-01-14');"""

,

"""INSERT INTO PlanType (PlanId, PlanType)
VALUES 
(1, 'Bronze'),
(2, 'Silver'),
(3, 'Gold'),
(4, 'Silver'),
(5, 'Bronze'),
(6, 'Gold'),
(7, 'Bronze'),
(8, 'Bronze'),
(9, 'Bronze'),
(10, 'Silver');"""
,


"""INSERT INTO Discount (Value_Percentage)
VALUES 
(10.0),
(15.0),
(20.0),
(25.0),
(30.0);"""

,

"""INSERT INTO UserPlan (PlanId, UserId)
VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(1, 11),
(2, 12),
(3, 13),
(4, 14),
(5, 15),
(6, 16),
(7, 17),
(8, 18),
(9, 19),
(10, 20);"""

,
"""INSERT INTO PlanDiscount (PlanId, DiscountId)
VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 1),
(7, 2),
(8, 3),
(9, 4),
(10, 5);"""
]


#     alterUsers = """
# ALTER TABLE Users
# ADD Password VARCHAR(250);
# """

    # queryArr = [create_plan_type_table,create_discount_table,create_UserPlan_table,create_PlanDiscount_table]
    # for q in allInserts:
    #     print(q)
    #     db.execute(q)
    db.execute("""INSERT INTO Roles (Id,Name) 
VALUES 
(1,'Member'),
(2,'Admin'),
(3,'SuperAdmin')""")
    db.close()

   
    # Create a table
    # db.create_table('Users', {
    #     'id': 'INTEGER PRIMARY KEY AUTOINCREMENT',
    #     'Name': 'TEXT NOT NULL',
    #     'Email': 'TEXT NOT NULL UNIQUE',
    #      'Email': 'TEXT NOT NULL UNIQUE'
    # })



    # # Insert data
    # db.insert_data('users', {'username': 'john_doe', 'email': 'john@example.com'})
    # db.insert_data('users', {'username': 'jane_doe', 'email': 'jane@example.com'})

    # # View data
    # users = db.view_data('users')
    # print("Users:", users)

    # # Update data
    # db.update_data('users', {'email': 'john_new@example.com'}, {'username': 'john_doe'})

    # # View updated data
    # users = db.view_data('users')
    # print("Updated Users:", users)

    # # Delete data
    # db.delete_data('users', {'username': 'jane_doe'})

    # # View data after deletion
    # users = db.view_data('users')
    # print("Users after deletion:", users)

    # Close the connection
  
