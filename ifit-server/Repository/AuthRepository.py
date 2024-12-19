from Connections import get_db as connect
from dbUtils import DBUtils
import json ,sqlite3





def validateUser(email, pwd):
    try:
        db = connect()
        db.row_factory = sqlite3.Row  # Ensures rows are returned as dictionaries
        query = """
        SELECT * FROM Users 
        WHERE (Email = ? OR Phone = ?) AND Password = ?
        """
        # Use parameterized queries to avoid SQL injection
        cur = db.execute(query, (email, email, pwd))
        users = [dict(row) for row in cur.fetchall()]  # Convert rows to dictionaries
        
        print('Query:', query)
        print('Users:', users)
        return {'userDetails': users}  # No need to double-serialize
    except sqlite3.Error as e:
        print(f"Database error: {e}")
        return {'error': str(e)}
    finally:
        db.close()