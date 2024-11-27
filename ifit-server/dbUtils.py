class DBUtils:
   

    def execute_query(self, query, params=None):
        """Helper function to execute a query."""
        if params:
            self.cursor.execute(query, params)
        else:
            self.cursor.execute(query)
        self.conn.commit()

    def execute(self, query):
        self.cursor.execute(query)
        print(f"Executed  Successfully.")

   

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



#How to use






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
    # db.close