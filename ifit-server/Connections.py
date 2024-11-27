import sqlite3 
from flask import g


DATABASE ='iFit.db'


def get_db():
    if not hasattr(g, 'sqlite_db'):
        g.sqlite_db = sqlite3.connect(DATABASE)
        g.sqlite_db.row_factory = sqlite3.Row  # To access columns by name
    return g.sqlite_db