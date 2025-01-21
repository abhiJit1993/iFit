from Connections import get_db as connect
from dbUtils import DBUtils
import sqlite3



def validateUser(email, pwd):
    try:
        db = connect()
        db.row_factory = sqlite3.Row  # Ensures rows are returned as dictionaries
        
        # Query to find a user by email or phone
        query = """
        SELECT * FROM Users 
        WHERE (Email = ? OR Phone = ?)
        """
        
        # Use parameterized query to prevent SQL injection
        cur = db.execute(query, (email, email))
        user_row = cur.fetchone()  # Fetch a single user
        
        if user_row:
            user = dict(user_row)  # Convert row to dictionary
            # Decode the hex password stored in the database
            print(user)
            stored_password = user['Password']#bytes.fromhex(user['Password']).decode('utf-8')
            print(pwd, stored_password)
            
            # Check if the decoded password matches the provided password
            if stored_password == pwd:
                return {'userDetails': user}
            else:
                return {'error': 'Invalid password'}
        else:
            return {'error': 'User not found'}
    except sqlite3.Error as e:
        print(f"Database error: {e}")
        return {'error': str(e)}
    finally:
        db.close()
